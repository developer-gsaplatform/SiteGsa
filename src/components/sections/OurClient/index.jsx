import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useCarousel } from "./../../../hooks/useCarousel";
import ScrollReveal from "../../common/ScrollReveal";
import HeadSection from "../../ui/HeadSection";

// ============================================================
// DADOS (4 clientes – não mexer)
// ============================================================
const CLIENTS = [
  {
    id: 1,
    name: "Polícia Nacional",
    img: "/policia-nacional.png",
    tag: "Segurança Pública",
  },
  {
    id: 2,
    name: "Super Seguros",
    img: "/super-seguros.png",
    tag: "Seguros",
  },
  {
    id: 3,
    name: "Banco Sol",
    img: "/banco.png",
    tag: "Banca",
  },
  {
    id: 4,
    name: "Atlantic Medical Center",
    img: "/antlatic.png",
    tag: "Saúde",
  },
  {
    id: 5,
    name: "UHAYELE WETO",
    img: "/ong.png",
    tag: "Sáude Pública",
  },
  {
    id: 6,
    name: "Hilário Solano Advogados",
    img: "hilario.png",
    tag: "Jurísdição e apoio Técnico Legal",
  },
  {
    id: 7,
    name: "CGC - Copia Group of Companies",
    img: "naosei.png",
  },
  {
    id: 8,
    name: "Lucas Energies, Oil e Gás",
    img: "lucas.png",
    tag: "energias",
  },
  {
    id: 9,
    name: "+1 salo",
    img: "1salo.png",
  },
];

// ============================================================
// CÉLULA DE CLIENTE (com mais padding e logo maior)
// ============================================================

const ClientCell = ({ client }) => {
  const { name, img, tag } = client;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group flex h-full flex-col items-center justify-center gap-3 border-r border-gsa-gray-2 bg-[#0a0a0a] p-[42px_28px] text-center transition-colors duration-300 hover:bg-[rgba(94,45,145,0.06)]"
    >
      <img
        src={img}
        alt={`Logo ${name}`}
        width={85}
        height={85}
        loading="lazy"
        className="transition-all duration-300"
      />
      <span className="text-sm font-bold uppercase tracking-wide text-gsa-white/80 transition-colors duration-300 group-hover:text-gsa-white">
        {name}
      </span>
      <span className="text-[0.74rem] font-semibold uppercase tracking-[0.12em] text-[#9B7BC4]/70 transition-colors duration-300 group-hover:text-[#9B7BC4]">
        {tag}
      </span>
    </motion.div>
  );
};

// ============================================================
// CARROSSEL (agora ocupa 100% da largura disponível)
// ============================================================
const ClientCarousel = ({ items = [] }) => {
  const carousel = useCarousel(
    items.length,
    { mobile: 1, tablet: 2, desktop: 3 },
    2000,
  );

  return (
    <div className="relative w-full overflow-hidden mt-7">
      {/* Fade escuro nas extremidades (mais suave) */}
      <div className="absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />

      <div
        className="w-full overflow-hidden gap-px bg-gsa-gray-1 border-gsa-gray-2 relative"
        onMouseEnter={carousel.pauseAutoplay}
        onMouseLeave={carousel.resumeAutoplay}
      >
        <motion.div
          className="flex items-stretch"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: `-${carousel.translateX}%`,
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: { type: "spring", stiffness: 180, damping: 24 },
          }}
        >
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              className="shrink-0"
              style={{
                width: `${carousel.slidePercentage}%`,
                flex: `0 0 ${carousel.slidePercentage}%`,
              }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px rgba(94, 45, 145, 0.12)",
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <ClientCell client={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

// ============================================================
// COMPONENTE PRINCIPAL (section já com largura definida)
// ============================================================
export default function OurClients() {
  const { t } = useTranslation();

  const clientsData = useMemo(
    () => ({
      label: t("clients.label"),
      title: t("clients.title"),
      desc: t("clients.desc"),
      img: t("clients.img"),
      items: t("clients.items", { returnObjects: true }),
    }),
    [t],
  );

  return (
    <section
      id="clientes"
      className="py-20 max-w-7xl w-[95%] mx-auto flex flex-col items-center border-dashed border-gsa-gray-7 relative z-10"
      aria-label={clientsData.title}
    >
      <HeadSection
        label={clientsData.label}
        title={clientsData.title}
        desc={clientsData.desc}
        center
      />

      <ScrollReveal variant="fadeUp" delay={0.1} className="w-full">
        {console.log("items dos clientes", clientsData.items)}
        <ClientCarousel items={clientsData.items} />
      </ScrollReveal>
    </section>
  );
}
