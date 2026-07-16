import { motion } from "framer-motion";
export default function LeftSide({ bannerData }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="p-12 border-b md:border-b-0 md:border-r border-dashed border-gsa-gray-2 flex flex-col items-start justify-start"
    >
      <h3 className="text-[1.6rem] font-extrabold  uppercase tracking-[0.04em] text-[#f5f5f0] mb-3">
        {bannerData.title}
      </h3>

      <p className="text-[#a8a2b8] text-[0.95rem] leading-[1.6] mb-6 font-sans-semi">
        {bannerData.desc}
      </p>

      <motion.a
        href={bannerData.buttonLink}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="inline-flex items-center gap-2 px-[26px] py-[13px]  font-bold text-base cursor-pointer border border-[#5E2D91] bg-[#5E2D91] text-[#f5f5f0] transition-all duration-220 ease-out whitespace-nowrap tracking-[0.12em] uppercase hover:bg-[#3E1D63] hover:border-[#9B7BC4]"
      >
        {bannerData.buttonText}
      </motion.a>
    </motion.div>
  );
}
