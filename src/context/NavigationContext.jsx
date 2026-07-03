import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationContext = createContext({
  navigateTo: () => {},
  isRunning: false,
  progress: 0,
  visible: false,
});

export function NavigationProvider({ children }) {
  const nav      = useNavigate();
  const location = useLocation();

  const [progress,  setProgress]  = useState(0);
  const [visible,   setVisible]   = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  const fillTimer = useRef(null);
  const doneTimer = useRef(null);
  const prevPath  = useRef(location.pathname);

  const clearAll = () => {
    clearTimeout(fillTimer.current);
    clearTimeout(doneTimer.current);
  };

  /* ── Start: show bar, fill to ~90%, hold, keep page hidden ── */
  const startBar = useCallback(() => {
    clearAll();
    setProgress(0);
    setVisible(true);
    setIsRunning(true);   // page content hidden

    let w = 0;
    const tick = () => {
      if      (w < 20) w += 10;
      else if (w < 50) w += 6;
      else if (w < 75) w += 2.5;
      else if (w < 88) w += 1;
      else if (w < 92) w += 0.3;
      // stops at ~92 — waits for finishBar
      if (w < 92) {
        setProgress(w);
        fillTimer.current = setTimeout(tick, 22);
      } else {
        setProgress(92);
      }
    };
    fillTimer.current = setTimeout(tick, 10);
  }, []);

  /* ── Finish: snap to 100%, reveal page, then hide bar ── */
  const finishBar = useCallback(() => {
    clearAll();
    setProgress(100);     // bar snaps to full

    // After bar visually reaches 100% → reveal page content
    doneTimer.current = setTimeout(() => {
      setIsRunning(false); // page fades in
      // Hide bar a bit after page is visible
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }, 180);              // 180ms = time for bar CSS transition to finish
  }, []);

  /* ── Route changed → finish bar ── */
  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      finishBar();
    }
  }, [location.pathname, finishBar]);

  /* ── navigateTo: start bar, then navigate after tiny delay ── */
  const navigateTo = useCallback((to) => {
    if (to === location.pathname) return;
    startBar();
    // Navigate almost immediately — bar fills while new page loads
    doneTimer.current = setTimeout(() => nav(to), 30);
  }, [nav, location.pathname, startBar]);

  return (
    <NavigationContext.Provider value={{ navigateTo, isRunning, progress, visible }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
