import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Fires a visit notification on every client-side route change.
 * Errors are swallowed so tracking never affects the UI.
 */
export default function VisitTracker() {
  const location = useLocation();

  useEffect(() => {
    const path = `${location.pathname}${location.search || ''}` || '/';
    const payload = {
      path,
      referrer: typeof document !== 'undefined' ? document.referrer || '' : '',
      language: typeof navigator !== 'undefined' ? navigator.language || '' : '',
      screen:
        typeof window !== 'undefined'
          ? `${window.screen?.width || 0}x${window.screen?.height || 0}`
          : '',
    };

    const controller = new AbortController();
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
      keepalive: true,
    }).catch(() => {});

    return () => controller.abort();
  }, [location.pathname, location.search]);

  return null;
}
