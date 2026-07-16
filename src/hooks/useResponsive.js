'use client';

import { useState, useEffect } from 'react';
import { BREAKPOINTS } from './../constants/spacing';

export function useResponsive() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: windowSize.width ? windowSize.width < BREAKPOINTS.md : false,
    isTablet: windowSize.width
      ? windowSize.width >= BREAKPOINTS.md && windowSize.width < BREAKPOINTS.lg
      : false,
    isDesktop: windowSize.width ? windowSize.width >= BREAKPOINTS.lg : false,
    isNavMobile: windowSize.width ? windowSize.width < BREAKPOINTS.nav : false,
    width: windowSize.width,
    height: windowSize.height,
  };
}
