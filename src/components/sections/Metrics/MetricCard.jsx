import { motion } from "framer-motion";
import MetricValue from "./MetricValue";

export default function MetricCard({ metric, variants }) {
  return (
    <motion.article
      variants={variants}
      whileHover={{
        scale: 1.02,
        backgroundColor: "rgba(94,45,145,.15)",
      }}
      className="group relative flex flex-col justify-center border-r border-b border-dashed border-purple-900/30 px-8 py-12 transition-all duration-300 hover:bg-purple-900/10"
    >
      <div className="mb-3 text-5xl md:text-6xl font-black text-white tracking-tight leading-none">
        <MetricValue metric={metric} />
      </div>

      <div className="text-xs uppercase tracking-widest font-semibold text-gray-400 transition-colors duration-300 group-hover:text-purple-400">
        {metric.label}
      </div>
    </motion.article>
  );
}
