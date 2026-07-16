import { motion } from "framer-motion";
export default function Mission({ title, text }) {
  return (
    <motion.div
      className="p-[24px_26px] border-b border-dashed border-gsa-gray-2 last:border-none flex flex-col hover:bg-[rgba(94,45,145,0.08)] transition-colors"
      whileHover={{ x: 5 }}
      transition={{ duration: 0.2 }}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
    >
      <h3 className=" text-[0.7rem] font-extrabold tracking-[0.14em] text-purple-300 uppercase mb-2.5 flex items-center gap-2 w-full">
        {title}
        <span className="flex-1 h-px bg-gsa-gray-2" />
      </h3>

      <p className="font-semi text-[0.9rem] text-gray-400 leading-[1.7]">
        {text}
      </p>
    </motion.div>
  );
}
