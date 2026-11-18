import { Outlet } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';

export default function MainLayout() {
  useTheme(); // applies the dark class to <html>
  return (
    <div className="min-h-screen bg-background text-[var(--color-text)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <header className="border-b border-[var(--color-border)] px-4 py-4">
        <a href="/" className="font-semibold text-[var(--color-text)]">
          DialProx
        </a>
      </header>
      <main id="main">
        <Outlet />
      </main>
      {/* TODO: real footer in Phase 6 */}
      <footer className="border-t border-[var(--color-border)] py-8 text-center text-sm text-[var(--color-text-muted)]">
        © 2026 DialProx
      </footer>
    </div>
  );
}