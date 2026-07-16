import { motion } from "framer-motion";
export default function AboutPoints({ title, text, idx }) {
  return (
    <motion.div
      className="flex gap-4.5 mb-7 last:mb-0 items-start"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="w-7.5 h-7.5 shrink-0 border border-dashed border-purple-400 text-[0.72rem] font-extrabold text-purple-300 flex items-center justify-center  tracking-wider mt-0.75">
        {(idx + 1).toString().padStart(2, "0")}
      </div>

      <div className="flex flex-col">
        <h4 className=" text-[1rem] font-bold tracking-[0.04em] text-white uppercase mb-1 leading-[1.1]">
          {title}
        </h4>
        <p className="font-semi text-[0.9rem] text-gray-400 leading-[1.65]">
          {text}
        </p>
      </div>
    </motion.div>
  );
}
