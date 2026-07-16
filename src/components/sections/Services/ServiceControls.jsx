import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ServiceControls({
  carousel,
  maxIndex,
  indexation = true,
  arrowButtons = true,
}) {
  return (
    <div className="w-full flex items-center justify-between gap-3 mt-7">
      {arrowButtons && (
        <div className="hidden md:flex gap-2 items-center p-1">
          <motion.button
            onClick={carousel.handlePrev}
            disabled={carousel.isAtStart}
            className="w-10 h-10 border border-dashed border-[#9B7BC4] text-[#9B7BC4] hover:bg-[#5E2D91] transition disabled:opacity-30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            onClick={carousel.handleNext}
            disabled={carousel.isAtEnd}
            className="w-10 h-10 border border-dashed border-[#9B7BC4] text-[#9B7BC4] hover:bg-[#5E2D91] transition disabled:opacity-30 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight size={20} />
          </motion.button>
        </div>
      )}
      <div className="flex gap-2 items-center mx-auto">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => carousel.goTo(index)}
            className={`h-2 rounded-full transition-all ${
              index === carousel.currentIndex
                ? "w-6 bg-[#9B7BC4]"
                : "w-2 bg-[#3d3858]"
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {indexation && (
        <div className="hidden md:block text-[0.72rem] font-bold tracking-[0.12em] text-[#5a5470]">
          {String(carousel.currentIndex + 1).padStart(2, "0")} /{" "}
          {String(maxIndex + 1).padStart(2, "0")}
        </div>
      )}
    </div>
  );
}
