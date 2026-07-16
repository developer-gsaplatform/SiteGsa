import { useState, useEffect, useRef, useCallback } from "react";
import { useResponsive } from "./useResponsive";

export function useCarousel(
  itemsLength,
  visibleCountByBreakpoint = {},
  autoplayInterval = 0,
) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);
  const isHovering = useRef(false);
  const { width } = useResponsive();

  const defaultVisibleCount = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
    ...visibleCountByBreakpoint,
  };

  useEffect(() => {
    if (!width) return;

    if (width < 560) {
      setVisibleCount(defaultVisibleCount.mobile);
    } else if (width < 860) {
      setVisibleCount(defaultVisibleCount.tablet);
    } else {
      setVisibleCount(defaultVisibleCount.desktop);
    }
  }, [width]);

  const maxIndex = Math.max(0, itemsLength - visibleCount);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [maxIndex, currentIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  }, [maxIndex]);

  const goTo = useCallback(
    (index) => {
      setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
    },
    [maxIndex],
  );

  // Autoplay — só activo se autoplayInterval > 0
  useEffect(() => {
    if (!autoplayInterval) return;

    intervalRef.current = setInterval(() => {
      if (isHovering.current) return;
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, autoplayInterval);

    return () => clearInterval(intervalRef.current);
  }, [autoplayInterval, maxIndex]);

  const pauseAutoplay = useCallback(() => {
    isHovering.current = true;
  }, []);
  const resumeAutoplay = useCallback(() => {
    isHovering.current = false;
  }, []);

  const slidePercentage = 100 / visibleCount;
  const translateX = currentIndex * slidePercentage;

  return {
    currentIndex,
    visibleCount,
    maxIndex,
    containerRef,
    handlePrev,
    handleNext,
    goTo,
    translateX,
    isAtStart: currentIndex === 0,
    isAtEnd: currentIndex >= maxIndex,
    slidePercentage,
    // Autoplay
    pauseAutoplay,
    resumeAutoplay,
  };
}
