'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function AnimatedCounter({ value, duration = 2, prefix = '', suffix = '' }) {
  console.log('AnimatedCounter rendered with value:', value);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTime;
    let animationId;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setDisplayValue(Math.floor(parseInt(value) * progress));
        animationId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(parseInt(value));
      }
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [value, duration]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  );
}
