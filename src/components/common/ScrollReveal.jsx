'use client';

import { motion } from 'framer-motion';
import { ANIMATION_VARIANTS, SCROLL_REVEAL_CONFIG } from './../../constants/animations';

export default function ScrollReveal({
  children,
  variant = 'fadeUp',
  duration = 0.5,
  delay = 0,
  stagger = false,
  className = '',
}) {
  const animationVariant = ANIMATION_VARIANTS[variant] || ANIMATION_VARIANTS.fadeUp;

  const transitionConfig = {
    duration,
    delay,
    ease: [0.4, 0, 0.2, 1],
  };

  if (stagger && Array.isArray(children)) {
    return (
      <motion.div
        className={className}
        variants={ANIMATION_VARIANTS.staggerContainer}
        {...SCROLL_REVEAL_CONFIG}
      >
        {children.map((child, index) => (
          <motion.div
            key={index}
            variants={ANIMATION_VARIANTS.staggerItem}
            transition={{ ...transitionConfig, delay: delay + index * 0.1 }}
          >
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      variants={animationVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={transitionConfig}
    >
      {children}
    </motion.div>
  );
}
