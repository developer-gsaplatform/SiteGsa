'use client';

import { motion } from 'framer-motion';

const ICON_ANIMATIONS = {
  rotate: {
    whileHover: { rotate: 360 },
    transition: { duration: 0.6 },
  },
  bounce: {
    whileHover: { y: -5 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  scale: {
    whileHover: { scale: 1.2 },
    transition: { duration: 0.2 },
  },
  pulse: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 2, repeat: Infinity },
  },
  shake: {
    whileHover: { x: [-2, 2, -2, 2, 0] },
    transition: { duration: 0.3 },
  },
  float: {
    animate: { y: [-5, 5, -5] },
    transition: { duration: 3, repeat: Infinity },
  },
  glow: {
    whileHover: {
      textShadow: '0 0 8px rgba(155, 123, 196, 0.8)',
      filter: 'brightness(1.2)',
    },
    transition: { duration: 0.2 },
  },
};

export default function AnimatedIcon({
  icon: Icon,
  animation = 'scale',
  size = 24,
  className = '',
  strokeWidth = 1.6,
  color = 'currentColor',
  animated = true,
  onClick = null,
}) {
  const animationConfig = ICON_ANIMATIONS[animation] || ICON_ANIMATIONS.scale;

  if (!animated) {
    return (
      <Icon
        size={size}
        strokeWidth={strokeWidth}
        color={color}
        className={className}
        onClick={onClick}
      />
    );
  }

  return (
    <motion.div
      className="inline-flex items-center justify-center cursor-pointer"
      {...animationConfig}
      onClick={onClick}
    >
      <Icon
        size={size}
        strokeWidth={strokeWidth}
        color={color}
        className={className}
      />
    </motion.div>
  );
}
