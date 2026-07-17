import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import ScrollReveal from "./../../common/ScrollReveal";
import HeadSection from "./../../ui/HeadSection";

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonialsData = useMemo(
    () => ({
      label: t("testimonials.label"),
      title: t("testimonials.title"),
      items: t("testimonials.items", { returnObjects: true }),
    }),
    [t],
  );

  const items = testimonialsData.items.slice(0, 3);

  return (
    <section
      id="testemunhos"
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.3)] bg-linear-to-b from-[rgba(22,17,34,0.4)] via-[rgba(30,22,50,0.25)] to-[#0a0a0a] relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <ScrollReveal variant="fadeUp">
          <HeadSection
            label={testimonialsData.label}
            title={testimonialsData.title}
            center={true}
          />
        </ScrollReveal>

        {/* Grid Editorial de 3 Colunas */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 relative z-10">
          {items.map((item, idx) => {
            // A coluna do meio ganha destaque sutil (assimetria editorial)
            const isFeatured = idx === 1;

            return (
              <ScrollReveal key={item.id} variant="fadeUp" delay={idx * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className={`group relative h-full flex flex-col justify-between overflow-hidden transition-colors duration-300 p-8 sm:p-9 ${
                    isFeatured ? "md:-translate-y-6 md:pb-12" : ""
                  }`}
                >
                  {/* Aspa gigante decorativa */}
                  <span
                    className="absolute -top-6 -left-2 font-black text-gsa-purple/30 leading-none select-none pointer-events-none"
                    style={{ fontSize: "9rem" }}
                    aria-hidden="true"
                  >
                    "
                  </span>

                  {/* Barra de destaque no topo (aparece no hover) */}
                  <div className="absolute top-0 left-0 h-[2px] w-0 bg-linear-to-r from-gsa-purple to-[#9B7BC4] group-hover:w-full transition-all duration-500 ease-out" />

                  {/* Micro-label numerado */}
                  <div className="relative z-10 flex items-center gap-3 mb-6">
                    <span className="h-px flex-1 bg-dashed border-t border-dashed border-gsa-gray-4/20" />
                  </div>

                  {/* Citação */}
                  <blockquote className="relative z-10 text-gsa-white/90 text-sm sm:text-[15px] italic font-light leading-relaxed grow">
                    {item.text}
                  </blockquote>

                  {/* Rodapé: avatar, nome, empresa */}
                  <div className="relative z-10 flex items-center gap-4 mt-8 pt-5 border-t border-dashed border-gsa-gray-4/20">
                    <div className="w-11 h-11 border border-[#9B7BC4]/30 bg-gsa-black shrink-0 overflow-hidden flex items-center justify-center">
                      {item.initials}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-extrabold uppercase text-gsa-white tracking-wider truncate">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-[#9B7BC4] uppercase tracking-wide truncate">
                        {item.role}
                      </span>
                    </div>
                    <span className="ml-auto shrink-0 inline-flex bg-gsa-black p-2.5 border-dashed border border-gsa-purple-soft">
                      <span className="text-[12px] font-light tracking-[0.2em] text-gsa-purple-soft uppercase">
                        {item.logoText}
                      </span>
                    </span>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
