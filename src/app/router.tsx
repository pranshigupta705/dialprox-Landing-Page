/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import HomePage from '../features/home/HomePage';

const DesignSystem = lazy(() => import('@/pages/DesignSystem'));

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
  {
    path: '/design-system',
    element: (
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center text-[var(--color-text-muted)]">
            Loading…
          </div>
        }
      >
        <DesignSystem />
      </Suspense>
    ),
  },
]);
