import { motion } from "framer-motion";
export default function ContentTestimonial({ text }) {
  return (
    <div>
      <div className="flex gap-0.75 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.span
            key={i}
            className="w-2 h-2 bg-[#9B7BC4] inline-block"
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
      <p className="text-[0.92rem] text-gsa-gray-7 leading-[1.75] mb-6 italic text-justify">
        {text}
      </p>
    </div>
  );
}
