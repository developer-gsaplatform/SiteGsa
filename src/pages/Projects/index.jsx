import { useParams } from "react-router-dom";
import { platformsData } from "./../../config/platforms";
import useSeo from "./../../hooks/useSeo";
import Ticker from "./Ticker";
import FeaturesGrid from "./FeaturesGrid";
import Hero from "./Hero";
import MainContent from "./MainContent";
import WhyNeed from "./WhyNeed";
import Slogan from "./Slogan";
import CTA from "./CTA";
import NotFound from "../../components/layout/NotFound";

export default function Project() {
  const { slug } = useParams();
  const project = platformsData.items.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase(),
  );

  const seoData = project
    ? {
        title: `${project.title} — ${project.tag ?? "Plataforma Empresarial"}`,
        description:
          project.desc ||
          `Conheça ${project.title}, a solução GSA para ${project.tag?.toLowerCase() ?? "transformação digital"} em Angola.`,
        url: `/project/${slug}`,
        image: project.image,
        type: "article",
      }
    : {
        title: "Página Não Encontrada",
        description:
          "A página do projeto solicitado não foi encontrada. Retorne à página inicial do GSAPLATFORM para explorar outras soluções.",
        url: "/404",
        type: "website",
      };

  useSeo(seoData);

  if (!project) return <NotFound />;

  const {
    id,
    title,
    tag,
    desc,
    whatDo,
    whyNeed,
    features,
    slogan,
    website,
    background,
  } = project;

  const tickerItems = [
    { label: title, highlight: false },
    { label: tag ? `Plataforma de ${tag}` : "Plataforma GSA", highlight: true },
    { label: "Angola", highlight: true },
    { label: "Software Empresarial", highlight: false },
    { label: "Status: Activo", highlight: false },
  ];

  const sloganBgWord = slogan ? slogan.split(" ")[0] : "";

  return (
    <article className="relative bg-gsa-black text-gsa-white">
      <Hero id={id} background={background} project={project} tag={tag} />
      <Ticker items={tickerItems} />
      <MainContent id={id} whatDo={whatDo} tag={tag} desc={desc} />

      {features?.length > 0 && (
        <div className="py-14 border-b border-gsa-white/30 max-w-4xl mx-auto w-[95%]">
          <div className="flex items-baseline justify-between mb-6 md:p-0 px-3">
            <span className=" text-[12px] tracking-[0.2em] uppercase text-gsa-gray">
              Capacidades Principais
            </span>
            <span className="text-[12px] tracking-[0.2em] text-gsa-gray">
              {String(features.length).padStart(2, "0")} Módulos
            </span>
          </div>
          <FeaturesGrid features={features} />
        </div>
      )}

      {whyNeed?.length > 0 && <WhyNeed whyNeed={whyNeed} />}
      {slogan && <Slogan slogan={slogan} sloganBgWord={sloganBgWord} />}
      <CTA website={website} id={id} />
    </article>
  );
}
