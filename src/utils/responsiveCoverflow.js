/* ═══════════════════════════════════════════════════════════
   utils — layout do coverflow + helpers responsivos
   ═══════════════════════════════════════════════════════════ */

export const EASE = "cubic-bezier(0.22, 0.8, 0.36, 1)";

const PRESETS = {
  0: {
    scale: 1.18,
    zIndex: 10,
    opacity: 1,
    staggerDelay: 0,
    imageSaturate: 0.55,
    imageOpacity: 1,
    overlayOpacity: 0.42,
    labelOpacity: 1,
    labelY: 0,
  },
  1: {
    scale: 0.82,
    zIndex: 5,
    opacity: 1,
    staggerDelay: 65,
    imageSaturate: 0.12,
    imageOpacity: 0.5,
    overlayOpacity: 0.88,
    labelOpacity: 0.35,
    labelY: 4,
  },
  2: {
    scale: 0.65,
    zIndex: 1,
    opacity: 0.45,
    staggerDelay: 130,
    imageSaturate: 0.08,
    imageOpacity: 0.3,
    overlayOpacity: 0.92,
    labelOpacity: 0.18,
    labelY: 6,
  },
};

const HIDDEN = {
  scale: 0.5,
  zIndex: 0,
  opacity: 0,
  staggerDelay: 200,
  imageSaturate: 0,
  imageOpacity: 0,
  overlayOpacity: 1,
  labelOpacity: 0,
  labelY: 8,
};

export function computeCardLayout(signedDist, total, cardWidth) {
  const abs = Math.abs(signedDist);
  const dir = signedDist === 0 ? 1 : Math.sign(signedDist);

  if (abs === 0) {
    return { ...PRESETS[0], translateX: 0, isActive: true, isAdjacent: false };
  }

  if (abs === 1) {
    const gapActive = cardWidth * 1.18 * 0.5 + 22;
    const gapSide = cardWidth * 0.82 * 0.5 + 16;
    return {
      ...PRESETS[1],
      translateX: dir * (gapActive + gapSide),
      isActive: false,
      isAdjacent: true,
    };
  }

  if (abs === 2) {
    const gapActive = cardWidth * 1.18 * 0.5 + 22;
    const gapSide = cardWidth * 0.82 * 0.5 + 16;
    const gapFar = cardWidth * 0.82 * 0.5 + cardWidth * 0.65 * 0.5 + 14;
    return {
      ...PRESETS[2],
      translateX: dir * (gapActive + gapSide + gapFar),
      isActive: false,
      isAdjacent: false,
    };
  }

  return {
    ...HIDDEN,
    translateX: dir * 1200,
    isActive: false,
    isAdjacent: false,
  };
}

export function getCardDimensions() {
  const w = window.innerWidth;
  if (w < 400) return { width: 220, height: 158 };
  if (w < 640) return { width: 260, height: 185 };
  if (w < 1024) return { width: 400, height: 268 };
  return { width: 500, height: 320 };
}

export function checkReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}