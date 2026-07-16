import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { EASE } from "../../../utils/responsiveCoverflow";
import { useNavigate } from "react-router-dom";

const CoverflowCard = memo(function CoverflowCard({
  item,
  layout,
  cardWidth,
  cardHeight,
  reducedMotion,
  onClick,
}) {
  const {
    translateX: tx,
    scale,
    zIndex,
    opacity,
    staggerDelay: delay,
    imageSaturate,
    imageOpacity,
    labelY,
    isActive,
  } = layout;
  const navigate= useNavigate();
  const dur = reducedMotion ? "0ms" : "550ms";
  const fadeDur = reducedMotion ? "0ms" : "480ms";

  return (
    <div
      onClick={onClick}
      role={isActive ? "group" : "button"}
      aria-label={isActive ? undefined : `Navegar para ${item.title}`}
      tabIndex={isActive ? -1 : 0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className="select-none outline-none group"
      style={{
        position: "absolute",
        width: cardWidth,
        willChange: "transform, opacity",
        transform: `translateX(${tx}px) scale(${scale})`,
        opacity,
        zIndex,
        cursor: isActive ? "default" : "pointer",
        transition: [
          `transform ${dur} ${EASE} ${delay}ms`,
          `opacity ${fadeDur} ease ${delay}ms`,
        ].join(", "),
      }}
    >
      {/* ── Imagem ── */}
      <div
        className="relative overflow-hidden border-4 border-white"
        style={{
          height: cardHeight,
          border: isActive
            ? "1px solid rgba(169,143,208,0.18)"
            : "1px solid rgba(45,42,58,0.45)",
          boxShadow: isActive
            ? "0 0 0 1px rgba(169,143,208,0.06), 0 8px 40px -12px rgba(0,0,0,0.6), 0 0 60px -20px rgba(169,143,208,0.07)"
            : "0 4px 24px -8px rgba(0,0,0,0.35)",
          transition: `box-shadow ${dur} ease`,
        }}
      >
        {/* Linha de acento no ativo */}
        <div
          className="absolute top-0 left-4 right-4 h-[2px] z-10"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(169,143,208,0.5), transparent)",
            opacity: isActive ? 1 : 0,
            transition: `opacity ${fadeDur} ease ${delay}ms`,
          }}
        />

        {/* Background */}
        {item.background && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.background})`,
              filter: `saturate(${imageSaturate})`,
              opacity: imageOpacity,
              transition: `filter ${fadeDur} ease ${delay}ms, opacity ${fadeDur} ease ${delay}ms`,
            }}
          />
        )}

        {/* Hover sutil em cards laterais */}
        {!isActive && (
          <div className="absolute inset-0 rounded-[6px] bg-gsa-purple/0 hover:bg-gsa-purple/[0.04] transition-colors duration-300" />
        )}

        {/* Purple Overlay on Hover (only for active card) */}
        {isActive && (
          <div
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/project/${item.slug}`)
          }}
            className="absolute inset-0 cursor-pointer bg-gradient-to-t from-[#3e1d63]/90 to-[#5e2d91]/75 backdrop-blur-xs flex items-center justify-center 
                       translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 
                       transition-all duration-500 ease-linear"
          >
            <Link
              to={`/project/${item.slug}`}
              className="group/btn relative inline-flex items-center gap-3
                         uppercase tracking-[0.2em] text-[10px] text-gsa-white font-medium
                         border border-gsa-white/35 px-5 py-2.5
                         hover:text-gsa-purple-soft hover:border-gsa-purple-soft/35
                         transition-all duration-500 ease-out overflow-hidden
                         focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gsa-purple-soft/40"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <span className="relative z-10">Ver Plataforma</span>
              <ArrowUpRight
                size={13}
                strokeWidth={1.5}
                className="relative z-10 group-hover/btn:text-gsa-purple-soft transition-all duration-300 ease-out group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
              />
              <span className="absolute inset-0 bg-gsa-white/5 group-hover/btn:bg-gsa-white/[0.07] transition-colors duration-500" />
            </Link>
          </div>
        )}
      </div>

      {/* ── Label ── */}
      <div
        className="pt-2.5 px-0.5"
        style={{
          transform: `translateY(${labelY}px)`,
          transition: `opacity ${fadeDur} ease ${delay}ms, transform ${dur} ${EASE} ${delay}ms`,
        }}
      >
        <span className="block text-xs tracking-[0.4em] uppercase text-gsa-purple-soft font-light mb-0.5">
          {item.tag}
        </span>
        <span className="block font-black text-[26px] leading-none tracking-tight uppercase text-gsa-white">
          {item.title}
        </span>
      </div>
    </div>
  );
});

export default CoverflowCard;
