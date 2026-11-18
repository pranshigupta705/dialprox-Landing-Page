import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { setTheme, toggleTheme as toggleThemeAction } from '@/store/slices/uiSlice';

export function useTheme() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.ui.theme);

  useEffect(() => {
    const saved = localStorage.getItem('dialprox-theme') as 'light' | 'dark' | null;
    if (saved) {
      dispatch(setTheme(saved));
    }
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('dialprox-theme', 'dark');
    } else if (theme === 'light') {
      root.classList.remove('dark');
      localStorage.setItem('dialprox-theme', 'light');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
    }
  }, [theme]);

  function toggleTheme() {
    dispatch(toggleThemeAction());
  }

  return {
    theme,
    toggleTheme,
    setTheme: (t: 'light' | 'dark' | 'system') => dispatch(setTheme(t)),
  };
}
