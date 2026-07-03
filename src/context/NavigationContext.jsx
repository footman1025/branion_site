import { createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationContext = createContext({
  navigateTo: () => {},
  isNewPage:  false,
  progress:   0,
  visible:    false,
});

export function NavigationProvider({ children }) {
  const nav      = useNavigate();
  const location = useLocation();

  const [progress,  setProgress]  = useState(0);
  const [visible,   setVisible]   = useState(false);
  const [isNewPage, setIsNewPage] = useState(false);

  const fillTimer = useRef(null);
  const navTimer  = useRef(null);
  const doneTimer = useRef(null);
  const prevPath  = useRef(location.pathname);

  const clearAll = () => {
    clearTimeout(fillTimer.current);
    clearTimeout(navTimer.current);
    clearTimeout(doneTimer.current);
  };

  const navigateTo = useCallback((to) => {
    if (to === location.pathname) return;
    clearAll();

    setProgress(0);
    setVisible(true);
    setIsNewPage(false);

    let w = 0;

    const tick = () => {
      if      (w < 20) w += 12;
      else if (w < 50) w += 7;
      else if (w < 78) w += 3;
      else if (w < 92) w += 1.2;
      else if (w < 98) w += 0.4;

      setProgress(Math.min(w, 98));

      if (w < 98) {
        fillTimer.current = setTimeout(tick, 22);
      } else {
        // Bar at 98% — NOW navigate. Old page still on screen until React re-renders.
        // Snap bar to 100% at the same tick so the user sees a complete bar instantly.
        setProgress(100);
        navTimer.current = setTimeout(() => nav(to), 16);
      }
    };

    fillTimer.current = setTimeout(tick, 10);
  }, [nav, location.pathname]);

  /* Route changed = new page mounted → fade it in */
  useEffect(() => {
    if (location.pathname !== prevPath.current) {
      prevPath.current = location.pathname;
      clearAll();

      // Trigger new page fade-in animation
      setIsNewPage(true);

      // Hide bar after fade-in completes
      doneTimer.current = setTimeout(() => {
        setVisible(false);
        setProgress(0);
        setIsNewPage(false);
      }, 450);
    }
  }, [location.pathname]);

  return (
    <NavigationContext.Provider value={{ navigateTo, isNewPage, progress, visible }}>
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
