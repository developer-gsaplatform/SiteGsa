import { motion } from "framer-motion";
import { Database } from "lucide-react";

export default function ServiceCard({
  service,
  visibleCount,
  animated = true,
}) {
  return (
    <motion.article
      className="w-full h-full flex flex-col bg-[#0a0a0a] p-[36px_32px] min-h-[340px] border border-gsa-gray-2 hover:border-[#9B7BC4]/30 transition-all hover:bg-[rgba(94,45,145,0.08)]"
      whileHover={
        animated
          ? { y: -5, boxShadow: "0 20px 40px rgba(94, 45, 145, 0.15)" }
          : {}
      }
      whileTap={animated ? { scale: 0.98 } : {}}
    >
      {/* Contentor do Ícone */}
      <div className="w-[48px] h-[48px] border border-dashed border-[#9B7BC4] flex items-center justify-center mb-[22px] bg-[rgba(94,45,145,0.10)] text-[#f5f5f0]">
        <Database size={24} strokeWidth={1.6} />
      </div>

      {/* Indicador Numérico */}
      <div className=" text-[0.7rem] font-bold text-[#9B7BC4] mb-3 tracking-[0.12em]">
        {service.num}
      </div>

      {/* Título do Serviço */}
      <h3 className=" text-[1.2rem] font-bold text-[#f5f5f0] uppercase mb-3">
        {service.title}
      </h3>

      {/* Descrição Textual (flex-1 garante que empurra o rodapé do cartão para a base) */}
      <p className="text-[0.92rem] text-[#8a8499] leading-[1.7] mb-6 flex-1">
        {service.desc}
      </p>

      {/* Etiquetas / Tags do Serviço */}
      <div className="flex flex-wrap gap-1.5 pt-4.5 border-t border-dashed border-gsa-gray-2 mt-auto">
        {service.tags.map((tag, idx) => (
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
    </motion.article>
  );
}
