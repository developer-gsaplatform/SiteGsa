import { useRef, useCallback } from "react";

const MIN_DISTANCE = 45;

export default function useSwipe({
  onLeft,
  onRight,
}) {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const onTouchStart = useCallback((event) => {
    const touch = event.touches[0];

    touchStartX.current = touch.clientX;
    touchStartY.current = touch.clientY;
  }, []);

  const onTouchEnd = useCallback(
    (event) => {
      if (
        touchStartX.current === null ||
        touchStartY.current === null
      ) {
        return;
      }

      const touch = event.changedTouches[0];

      const deltaX = touchStartX.current - touch.clientX;
      const deltaY = touchStartY.current - touch.clientY;

      const absX = Math.abs(deltaX);
      const absY = Math.abs(deltaY);

      touchStartX.current = null;
      touchStartY.current = null;

      if (absX < MIN_DISTANCE) return;

      if (absY > absX) return;

      if (deltaX > 0) {
        onLeft?.();
      } else {
        onRight?.();
      }
    },
    [onLeft, onRight]
  );

  return {
    onTouchStart,
    onTouchEnd,
  };
}