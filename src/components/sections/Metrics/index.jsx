import { motion } from "framer-motion";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { containerVariants, itemVariants } from "./../../../config/metrics";
import MetricCard from "./MetricCard";
export default function Metrics() {
  const { t } = useTranslation();
  const metricsData = useMemo(() => {
    return t("metrics", { returnObjects: true }) || [];
  }, [t]);

  console.log("metrics tranalated", metricsData);
  return (
    <section
      id="numeros"
      className="relative z-10 w-full bg-transparent border-b border-dashed border-purple-900/30"
    >
      <motion.div
        className="w-full mx-auto grid md:grid-cols-4 sm:grid-cols-2 max-sm:grid-cols-1 border-l border-dashed border-purple-900/30"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
      >
        {metricsData.map((metric, idx) => (
          <MetricCard key={idx} metric={metric} variants={itemVariants} />
        ))}
      </motion.div>
    </section>
  );
}
