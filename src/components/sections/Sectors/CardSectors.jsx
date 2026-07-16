import { motion } from "framer-motion";
export default function HeadSection({ index, item, itemVariants }) {
  return (
    <motion.div
      key={item.id}
      className="border border-dashed border-[#3d3858] p-[18px_22px] flex items-center gap-[14px] transition-all duration-200 hover:border-[#9B7BC4] hover:bg-[rgba(94,45,145,0.06)] cursor-pointer group"
      variants={itemVariants}
      whileHover={{ scale: 1.02 }}
    >
      <span className=" text-[0.72rem] font-extrabold text-[#9B7BC4] tracking-[0.08em] shrink-0">
        {String(index + 1).padStart(2, "0")}
      </span>

      <motion.span
        className="text-[0.92rem] text-[#c8c2d8] transition-colors group-hover:text-white font-medium"
        whileHover={{ color: "#ffffff" }}
      >
        {item.title}
      </motion.span>
    </motion.div>
  );
}
