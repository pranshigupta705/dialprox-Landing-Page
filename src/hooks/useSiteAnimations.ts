import { useLayoutEffect } from 'react';

const CARD_SELECTOR = 'article, figure, details, form, #workflow [class*="grid-cols"] > li';

export function useSiteAnimations() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const main = document.querySelector('main');
    if (!main) return;

    const targets: HTMLElement[] = [];
    const add = (el: Element | null | undefined, delay = 0) => {
      if (!(el instanceof HTMLElement) || el.classList.contains('rv')) return;
      el.classList.add('rv');
      el.style.setProperty('--rv-d', `${delay}ms`);
      targets.push(el);
    };

    // Hero: cascade the text column.
    const h1 = main.querySelector('h1');
    if (h1?.parentElement) {
      Array.from(h1.parentElement.children).forEach((el, i) => add(el, i * 110));
    }

    // Other sections: heading, then cards staggered by position.
    main.querySelectorAll('section').forEach((section, index) => {
      if (index === 0) return;

      const h2 = section.querySelector('h2');
      const wrap = h2?.parentElement;
      if (h2) add(wrap && wrap !== section && !wrap.querySelector(CARD_SELECTOR) ? wrap : h2);

      const seen = new Map<Element, number>();
      section.querySelectorAll<HTMLElement>(CARD_SELECTOR).forEach((card) => {
        const parent = card.parentElement;
        if (!parent) return;
        const i = seen.get(parent) ?? 0;
        seen.set(parent, i + 1);
        add(card, Math.min(i, 5) * 90);
      });
    });

    const cleanups: Array<() => void> = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          io.unobserve(el);
          const done = (ev: AnimationEvent) => {
            if (ev.target !== el) return;
            el.removeEventListener('animationend', done);
            el.classList.remove('rv', 'rv-in');
            el.style.removeProperty('--rv-d');
          };
          el.addEventListener('animationend', done);
          el.classList.add('rv-in');
          window.setTimeout(() => {
            el.classList.remove('rv', 'rv-in');
            el.style.removeProperty('--rv-d');
          }, 2200);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    targets.forEach((t) => io.observe(t));

    // Scroll progress bar.
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    bar.setAttribute('aria-hidden', 'true');
    document.body.appendChild(bar);

    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(window.scrollY / max, 1) : 0})`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();

    cleanups.push(() => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) window.cancelAnimationFrame(frame);
      bar.remove();
    });

    return () => {
      io.disconnect();
      cleanups.forEach((fn) => fn());
      targets.forEach((el) => {
        el.classList.remove('rv', 'rv-in');
        el.style.removeProperty('--rv-d');
      });
    };
  }, []);
}



