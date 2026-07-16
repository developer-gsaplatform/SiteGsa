import { useState, useEffect } from "react";
import { platformsData } from "../../../config/platforms";
import { useCoverflowCarousel } from "../../../hooks/useCoverflowCarousel";
import HeadSection from "../../ui/HeadSection";
import CoverflowCard from "./CoverflowCard";
import CarouselNav from "./CarouselNav";
import InfoPanel from "./InfoPanel";
import {
  computeCardLayout,
  getCardDimensions,
  checkReducedMotion,
} from "./../../../utils/responsiveCoverflow";

export default function PlatformsCarousel() {
  const items = platformsData.items;
  const total = items.length;

  const { current, animating, goTo, prev, next, onTouchStart, onTouchEnd } =
    useCoverflowCarousel({ total });

  const [cardDims, setCardDims] = useState(() => getCardDimensions());
  const [reducedMotion, setReducedMotion] = useState(() =>
    checkReducedMotion(),
  );
  const [autoScroll, setAutoScroll] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  /* Autoplay scroll infinito */
  useEffect(() => {
    if (!autoScroll || isHovered) return;
    const interval = setInterval(() => {
      if (!animating) {
        next();
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [autoScroll, isHovered, animating, next]);

  /* Responsivo: recalcular dimensoes do card */
  useEffect(() => {
    const onResize = () => setCardDims(getCardDimensions());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Acessibilidade: respeitar preferencia de movimentacao reduzida */
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const active = items[current];
  const trackHeight = cardDims.height * 1.35 + 32;

  return (
    <section className="relative max-w-7xl w-[95%] mx-auto select-none" id="plataformas">
      {/* ── Header ── */}
      <HeadSection title={platformsData.title} label={platformsData.label} />

      {/* ══════════════════════════════════════════════════
          STAGE — coverflow track + setas
      ══════════════════════════════════════════════════ */}
      <div
        className="relative flex items-center overflow-hidden py-6 sm:py-8 md:py-10"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CarouselNav direction="prev" onClick={prev} disabled={animating} />
        <CarouselNav direction="next" onClick={next} disabled={animating} />

        {/* Track */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{ height: trackHeight }}
        >
          {items.map((item, i) => {
            const rel = (i - current + total) % total;
            const signed = rel <= total / 2 ? rel : rel - total;
            const layout = computeCardLayout(signed, total, cardDims.width);

            return (
              <CoverflowCard
                key={item.id}
                item={item}
                layout={layout}
                cardWidth={cardDims.width}
                cardHeight={cardDims.height}
                reducedMotion={reducedMotion}
                onClick={() => !layout.isActive && goTo(i)}
              />
            );
          })}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          INFO PANEL
      ══════════════════════════════════════════════════ */}
      <InfoPanel
        active={active}
        items={items}
        current={current}
        goTo={goTo}
        reducedMotion={reducedMotion}
        autoScroll={autoScroll}
        setAutoScroll={setAutoScroll}
      />
    </section>
  );
}
