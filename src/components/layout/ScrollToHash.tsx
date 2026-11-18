import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Scrolls to the #section in the URL after the page has rendered. */
export default function ScrollToHash() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.slice(1));
    const frame = requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView();
    });
    return () => cancelAnimationFrame(frame);
  }, [hash]);

  return null;
}
