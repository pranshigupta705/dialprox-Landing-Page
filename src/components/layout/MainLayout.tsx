import { Outlet } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import Navbar from './Navbar';

export default function MainLayout() {
  useTheme(); 
  return (
    <div id="top" className="min-h-screen bg-background text-[var(--color-text)]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-[var(--color-primary)] focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
    </div>
  );
}