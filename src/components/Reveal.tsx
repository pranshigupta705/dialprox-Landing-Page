import { useEffect, useRef, useState, type ReactNode } from 'react';

const supportsObserver = typeof IntersectionObserver !== 'undefined';

export default function Reveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!supportsObserver);

  useEffect(() => {
    const el = ref.current;
    if (!el || !supportsObserver) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`reveal${visible ? ' reveal-visible' : ''}`}>
      {children}
    </div>
  );
}
