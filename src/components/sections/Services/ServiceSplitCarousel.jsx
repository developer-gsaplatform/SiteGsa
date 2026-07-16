import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceSplitCarousel({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isHovered) return;
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, 6000);
    return () => clearInterval(intervalRef.current);
  }, [isHovered, items.length]);

  const activeItem = items[activeIndex];

  if (!items.length) return null;

  return (
    <div
      className="w-full relative mt-12 min-h-[480px] flex items-center p-6 sm:p-12 border border-[rgba(155,123,196,0.15)] bg-gsa-black overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ borderRadius: "0px" }}
    >
      {/* Background Image (Full Cover) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.52, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${activeItem.image})` }}
          />
        </AnimatePresence>
      </div>

      {/* Gradients to fade to dark on left (desktop) or top/bottom (mobile) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[65%] bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/92 to-transparent z-10 pointer-events-none hidden lg:block" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/88 to-[#0a0a0a]/45 z-10 pointer-events-none lg:hidden" />
      
      {/* Ambient glow details */}
      <div className="absolute -top-32 -left-32 w-80 h-80 bg-gsa-purple/8 rounded-full blur-[90px] pointer-events-none z-10" />

      {/* Content Wrapper */}
      <div className="w-full lg:w-[50%] relative z-20 flex flex-col justify-between min-h-[340px] py-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="flex flex-col gap-4"
          >
            {/* Service Number */}
            <span className="text-[11px] font-bold tracking-[0.3em] text-gsa-purple-soft uppercase">
              {activeItem.num}
            </span>

            {/* Service Title */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-gsa-white leading-none">
              {activeItem.title}
            </h3>

            {/* Service Tags */}
            <div className="flex flex-wrap gap-2 mt-1">
              {activeItem.tags?.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 text-[10px] font-semibold tracking-wider bg-gsa-purple/15 border border-gsa-purple/35 text-gsa-purple-soft rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Service Description */}
            <p className="text-gsa-gray-6 text-sm sm:text-base leading-relaxed max-w-lg mt-3 font-light">
              {activeItem.desc}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Controls: Dots */}
        <div className="flex items-center gap-2 mt-8 lg:mt-12">
          {items.map((_, idx) => {
            const isDotActive = idx === activeIndex;
            return (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className="p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-gsa-purple-soft/30 rounded-full"
                aria-label={`Ir para a solução ${idx + 1}`}
              >
                <span
                  className="block rounded-full"
                  style={{
                    width: isDotActive ? 24 : 6,
                    height: 6,
                    background: isDotActive
                      ? "var(--color-gsa-purple-soft, #9b7bc4)"
                      : "rgba(90, 84, 112, 0.4)",
                    transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1), background 0.3s ease",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
