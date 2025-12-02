import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const prevPathnameRef = useRef<string>(pathname);

  useEffect(() => {
    // Only scroll if pathname actually changed
    if (prevPathnameRef.current !== pathname) {
      prevPathnameRef.current = pathname;

      // Small delay to ensure page starts rendering, then smooth scroll
      const timer = setTimeout(() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
