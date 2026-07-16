export const ANIMATION_VARIANTS = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  blurReveal: {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)' },
  },

  // Container for staggered children
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },

  // Individual items in staggered container
  staggerItem: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },

  // Hover and Tap Effects
  hoverScale: {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
  },
  hoverElevate: {
    whileHover: { y: -5 },
    whileTap: { y: 0 },
  },
  tapScale: {
    whileTap: { scale: 0.95 },
  },
  pulseGlow: {
    animate: {
      boxShadow: [
        '0 0 0 0 rgba(94, 45, 145, 0.7)',
        '0 0 0 10px rgba(94, 45, 145, 0)',
      ],
    },
  },
};

export const TRANSITION = {
  fast: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
  normal: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  slow: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  verySlow: { duration: 0.8, ease: [0.4, 0, 0.2, 1] },
};

export const SCROLL_REVEAL_CONFIG = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.2 },
  transition: TRANSITION.normal,
};
