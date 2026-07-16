'use client';

import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, {
    once: true,
    amount: options.amount || 0.2,
  });

  return { ref, inView };
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progress = scrollHeight > 0 ? (scrolled / scrollHeight) * 100 : 0;
      setProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return progress;
}
