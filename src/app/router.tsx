import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const DesignSystem = lazy(() => import('@/pages/DesignSystem'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="p-8 text-[var(--color-text)]">DialProx — Phase 3 coming soon</div>,
  },
  {
    // TODO: Remove or gate this route in production (Phase 7)
    path: '/design-system',
    element: (
      <Suspense
        fallback={
          <div className="flex items-center justify-center min-h-screen text-[var(--color-text-muted)]">
            Loading…
          </div>
        }
      >
        <DesignSystem />
      </Suspense>
    ),
  },
]);
