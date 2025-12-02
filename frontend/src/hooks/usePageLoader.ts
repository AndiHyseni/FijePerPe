import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export const usePageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const prevPathnameRef = useRef<string>(location.pathname);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only show loader if pathname actually changed
    if (prevPathnameRef.current !== location.pathname) {
      setIsLoading(true);
      prevPathnameRef.current = location.pathname;

      // Clear any existing timer
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      // Minimum display time for smooth transition
      timerRef.current = setTimeout(() => {
        setIsLoading(false);
        timerRef.current = null;
      }, 400);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [location.pathname]);

  return isLoading;
};
