import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-7 left-7 z-[1999] w-[58px] h-[58px] bg-[#0a0a0a] border border-dashed border-[#9B7BC4] text-[#9B7BC4] hover:text-white hover:bg-[#5E2D91] hover:border-solid cursor-pointer flex items-center justify-center transition-all duration-200 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:-translate-y-[2px]"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          title="Voltar ao topo"
          aria-label="Voltar ao topo da página"
        >
          <ChevronUp size={22} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
