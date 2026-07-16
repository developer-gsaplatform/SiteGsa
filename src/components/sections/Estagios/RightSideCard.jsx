import { motion } from "framer-motion";
export default function RightSideCard({ perk, pIdx }) {
  return (
    <motion.div
      key={perk.id}
      initial={{ opacity: 0, y: 25, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: pIdx * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ x: 6 }}
      className="flex gap-3.5 py-4.5 border-b border-dashed border-gsa-gray-2 items-start last:border-b-0"
    >
      <span className=" text-[0.72rem] font-extrabold text-[#9B7BC4] w-6 shrink-0 mt-0.5 tracking-[0.08em]">
        {String(pIdx + 1).padStart(2, "0")}
      </span>

      <div>
        <h5 className="text-[0.92rem] font-extrabold mb-0.75  uppercase tracking-[0.04em] text-[#f5f5f0]">
          {perk.title}
        </h5>

        <p className="text-[0.84rem] text-[#a8a2b8] font-sans-semi leading-normal">
          {perk.desc}
        </p>
      </div>
    </motion.div>
  );
}
