import { useState, useEffect, useRef, useCallback } from "react";

export function useCoverflowCarousel({ total, lockMs = 640 }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const touchX = useRef(null);
  const touchY = useRef(null);
  const lockRef = useRef(false);

  const goTo = useCallback(
    (idx) => {
      if (lockRef.current) return;
      const next = ((idx % total) + total) % total;
      if (next === current) return;
      lockRef.current = true;
      setAnimating(true);
      setCurrent(next);
      setTimeout(() => {
        lockRef.current = false;
        setAnimating(false);
      }, lockMs);
    },
    [current, total, lockMs],
  );

  const prev = useCallback(() => goTo(current - 1), [goTo, current]);
  const next = useCallback(() => goTo(current + 1), [goTo, current]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  const onTouchStart = useCallback((e) => {
    touchX.current = e.touches[0].clientX;
    touchY.current = e.touches[0].clientY;
  }, []);

  const onTouchEnd = useCallback(
    (e) => {
      if (touchX.current === null || touchY.current === null) return;
      const dx = touchX.current - e.changedTouches[0].clientX;
      const dy = Math.abs(touchY.current - e.changedTouches[0].clientY);
      touchX.current = null;
      touchY.current = null;
      if (Math.abs(dx) < 40 || dy > Math.abs(dx)) return;
      dx > 0 ? next() : prev();
    },
    [next, prev],
  );

  return { current, animating, goTo, prev, next, onTouchStart, onTouchEnd };
}
