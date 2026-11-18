import { useEffect, useRef, useState } from 'react';
import { Menu, Moon, Sun, X, Phone } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { toggleMenu, closeMenu, setTheme } from '@/store/slices/uiSlice';

const links = [
  { label: 'Features', href: '#calling' },
  { label: 'How it works', href: '#workflow' },
  { label: 'Analytics', href: '#analytics' },
  { label: 'Integrations', href: '#integrations' },
  { label: 'FAQ', href: '#faq' },
] as const;

const ids = links.map((l) => l.href.slice(1));

function useScrollSpy(sectionIds: string[]): string {
  const [active, setActive] = useState('');
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [sectionIds]);
  return active;
}

export default function Navbar() {
  const dispatch = useAppDispatch();
  const menuOpen = useAppSelector((s) => s.ui.menuOpen);
  const theme = useAppSelector((s) => s.ui.theme);
  const [scrolled, setScrolled] = useState(false);
  const burger = useRef<HTMLButtonElement>(null);
  const active = useScrollSpy(ids);
  const isDark =
    theme === 'dark' ||
    (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        dispatch(closeMenu());
        burger.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) dispatch(closeMenu());
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [menuOpen, dispatch]);

  const linkCls = (href: string) =>
    `rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:text-[var(--color-text)] ${
      active === href.slice(1) ? 'text-[var(--color-primary)]' : 'text-[var(--color-text-muted)]'
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-background/85 backdrop-blur transition-colors ${
        scrolled ? 'border-[var(--color-border)]' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between gap-4 px-4 md:px-6 lg:px-8">
        <a href="/" aria-label="DialProx home" className="flex items-center gap-2 text-xl font-bold">
          <span className="grid h-8 w-8 place-items-center rounded-[10px] bg-[var(--color-primary)] text-white">
            <Phone size={18} aria-hidden="true" />
          </span>
          DialProx
        </a>

        <nav aria-label="Main" className="hidden items-center gap-4 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={linkCls(l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => dispatch(setTheme(isDark ? 'light' : 'dark'))}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]"
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 text-sm font-semibold lg:inline-flex"
          >
            Log in
          </a>
          <a
            href="#contact"
            className="hidden h-11 items-center rounded-xl bg-[var(--color-primary)] px-5 text-sm font-semibold text-white hover:opacity-90 sm:inline-flex"
          >
            Book a demo
          </a>
          <button
            ref={burger}
            type="button"
            onClick={() => dispatch(toggleMenu())}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--color-border)] lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-t border-[var(--color-border)] bg-background px-4 pb-6 pt-2 lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => dispatch(closeMenu())}
              className="block rounded-lg px-3 py-3 font-medium text-[var(--color-text)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => dispatch(closeMenu())}
            className="mt-2 flex h-12 items-center justify-center rounded-xl bg-[var(--color-primary)] font-semibold text-white"
          >
            Book a demo
          </a>
        </nav>
      )}
    </header>
  );
}