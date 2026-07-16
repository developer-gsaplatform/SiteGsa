import { motion } from "framer-motion";
import { useCarousel } from "./../../../../hooks/useCarousel";
import ServiceControls from "./../../Services/ServiceControls";

function ClientLogo({ name }) {
  let icon = null;
  const lower = name.toLowerCase();
  
  if (lower.includes("akimoney")) {
    icon = (
      <svg className="w-10 h-10 text-[#9B7BC4] group-hover:text-gsa-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    );
  } else if (lower.includes("multitel")) {
    icon = (
      <svg className="w-10 h-10 text-[#9B7BC4] group-hover:text-gsa-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 14a5 5 0 018 0M5 10a9 9 0 0114 0M2 6a13 13 0 0120 0" />
      </svg>
    );
  } else if (lower.includes("royal")) {
    icon = (
      <svg className="w-10 h-10 text-[#9B7BC4] group-hover:text-gsa-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16l-1.5 10H5.5L4 6zm4 0l1-3h6l1 3M12 6v10" />
      </svg>
    );
  } else if (lower.includes("pipe")) {
    icon = (
      <svg className="w-10 h-10 text-[#9B7BC4] group-hover:text-gsa-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    );
  } else {
    // Kombange
    icon = (
      <svg className="w-10 h-10 text-[#9B7BC4] group-hover:text-gsa-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="p-3 bg-[#5E2D91]/5 border border-[#5E2D91]/15 rounded-xl group-hover:bg-[#5E2D91]/10 group-hover:border-[#9B7BC4]/30 transition-all duration-300">
        {icon}
      </div>
      <div className="text-[1.1rem] font-extrabold text-[#f5f5f0] uppercase tracking-[0.06em] group-hover:text-[#9B7BC4] transition-colors duration-300">
        {name}
      </div>
    </div>
  );
}

export default function PartnersCarousel({ items = [] }) {
  const carousel = useCarousel(
    items.length,
    { mobile: 1, tablet: 2, desktop: 3 },
    4000,
  );

  return (
    <>
      <div className="relative w-full overflow-hidden mt-7">
        {/* Extremidades escuras (Fade out to dark edges) */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />

        <div
          className="w-full overflow-hidden gap-px bg-gsa-gray-1 border border-gsa-gray-2 relative"
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
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                className="bg-[#0a0a0a] p-[42px_28px] flex flex-col items-center justify-center text-center border-r border-gsa-gray-2 hover:bg-[rgba(94,45,145,0.06)] transition-all cursor-pointer group"
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
                transition={{ duration: 0.35, delay: i * 0.05 }}
                viewport={{ once: true }}
              >
                <ClientLogo name={item.name} />
                <div className="text-[0.74rem] text-[#9B7BC4]/70 tracking-[0.12em] uppercase font-semibold mt-1 group-hover:text-[#9B7BC4] transition-colors duration-300">
                  {item.tag}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {carousel.maxIndex > 0 && (
        <ServiceControls carousel={carousel} maxIndex={carousel.maxIndex} />
      )}
    </>
  );
}
