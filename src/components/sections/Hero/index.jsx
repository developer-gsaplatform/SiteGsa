import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "./../../common/ScrollReveal";
import ContentLeft from "./ContentLeft";
import AnimatedWrapper from "./AnimatedWrapper";
import ParticleField from "./ParticleField";
import ParticlesInit from "./ParticlesInit";

const HERO_BG = "/bg-hero.jpg";

export default function Hero() {
  const { t } = useTranslation();

  const heroData = useMemo(
    () => ({
      badge: t("hero.badge"),
      titleStart: t("hero.titleStart"),
      titleItalic: t("hero.titleItalic"),
      titleEnd: t("hero.titleEnd"),
      description: t("hero.description"),
      ctaPrimary: { text: t("hero.ctaPrimary"), href: "#plataformas" },
      ctaGhost: { text: t("hero.ctaGhost"), href: "#contactos" },
      trustItems: t("hero.trustItems", { returnObjects: true }),
    }),
    [t],
  );

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden z-10 border-b border-dashed border-gsa-purple-soft/20 justify-center md:p-0 py-20"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gsa-black/80"
      />

      <ParticlesInit>
        <ParticleField />
      </ParticlesInit>

      <div
        aria-hidden="true"
        className="absolute left-[6%] top-[15%] bottom-[15%] w-px pointer-events-none hidden md:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(155,123,196,0.07) 30%, rgba(155,123,196,0.07) 70%, transparent)",
        }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-[5%] flex items-center">
        <div className="grid md:grid-cols-12  gap-10 items-center">
          <div className="md:col-span-7 ">
            <ScrollReveal variant="fadeUp">
              <ContentLeft heroData={heroData} />
            </ScrollReveal>
          </div>

          <div className="md:col-span-5  flex items-center justify-center">
            <AnimatedWrapper variant="fadeUp" delay={0.15}>
              
                <img
                  src="/icon.png"
                  alt="GSA"
                  className=  " relative z-10 object-contain drop-shadow-[0_0_50px_rgba(155,123,196,0.2)]"
                />
            </AnimatedWrapper>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroOrbit {
          to { transform: rotate(360deg); }
        }
        @keyframes heroHintSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
