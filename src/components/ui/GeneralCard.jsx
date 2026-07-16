import { motion } from "framer-motion";
import { Database, ArrowRight } from "lucide-react";
import ScrollReveal from "./../common/ScrollReveal";
import { Link } from "react-router-dom";
export default function GeneralCard({
  data,
  animated = true,
  footerText = "Detalhes",
  withScrollReveal = false,
}) {
  const IconComponent = data.icon || Database;
  const hoverAnimation = animated
    ? { y: -5, boxShadow: "0 20px 40px rgba(94, 45, 145, 0.15)" }
    : {};
  const tapAnimation = animated ? { scale: 0.98 } : {};
  const CardContent = (
    <motion.article
      className="w-full h-full flex flex-col bg-gsa-black p-[36px_32px] min-h-[280px] border border-gsa-gray-2 hover:border-[#9B7BC4]/30 hover:bg-[rgba(94,45,145,0.08)] transition-all group cursor-pointer"
      whileHover={hoverAnimation}
      whileTap={tapAnimation}
    >
      <div className="w-12 h-12 border border-dashed border-[#9B7BC4]/40 flex items-center justify-center mb-[22px] bg-[rgba(94,45,145,0.10)] text-[#f5f5f0]">
        <IconComponent size={24} strokeWidth={1.6} />
      </div>
      {data.num && (
        <div className=" text-[0.7rem] font-bold text-[#9B7BC4] mb-3 tracking-[0.12em]">
          {data.num}
        </div>
      )}

      <h3 className=" text-[1.1rem] font-bold tracking-[0.04em] text-[#f5f5f0] uppercase mb-3">
        {data.title || data.name}
      </h3>

      <p className="text-[0.9rem] text-[#8a8499] leading-[1.7] mb-6 flex-1 text-justify">
        {data.desc}
      </p>

      {data.tags && data.tags.length > 0 ? (
        <div className="flex flex-wrap gap-1.5 pt-[18px] border-t border-dashed border-gsa-gray-2 mt-auto">
          {data.tags.map((tag, idx) => (
            <motion.span
              key={idx}
              className="text-[0.68rem] uppercase text-[#8a8499] border border-dashed border-[#3d3858] px-2 py-0.5 cursor-pointer hover:border-[#9B7BC4] hover:text-[#9B7BC4] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
      ) : footerText === "Detalhes" ? (
        <Link
          to={data.slug ? `/project/${data.slug}` : `/project/${data.title}`}
          className="w-full pt-3.5 border-t border-dashed border-gsa-gray-2 inline-flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.12em] text-[#9B7BC4] uppercase  select-none mt-auto"
        >
          <span>{footerText}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight size={12} />
          </span>
        </Link>
      ) : (
        <motion.div
          className="w-full pt-3.5 border-t border-dashed border-gsa-gray-2 inline-flex items-center gap-1.5 text-[0.72rem] font-bold tracking-[0.12em] text-[#9B7BC4] uppercase  select-none mt-auto"
          whileHover={animated ? { x: 5 } : {}}
          transition={{ duration: 0.2 }}
        >
          <span>{footerText}</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            <ArrowRight size={12} />
          </span>
        </motion.div>
      )}
    </motion.article>
  );

  if (withScrollReveal) {
    return <ScrollReveal variant="fadeUp">{CardContent}</ScrollReveal>;
  }

  return CardContent;
}
