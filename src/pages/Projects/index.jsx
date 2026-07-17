import { useMemo } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocalizedPlatforms } from "./../../utils/platformContent";
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
  const { t } = useTranslation();
  const projects = useLocalizedPlatforms();
  const project = projects.find(
    (item) => item.slug.toLowerCase() === slug.toLowerCase(),
  );

  const seoData = useMemo(
    () =>
      project
        ? {
            title: `${project.title} — ${project.tag ?? t("projects.defaultTag")}`,
            description:
              project.desc ||
              t("projects.defaultDescription", {
                title: project.title,
                tag:
                  project.tag?.toLowerCase() ?? t("projects.defaultTagLower"),
              }),
            url: `/project/${slug}`,
            image: project.image,
            type: "article",
          }
        : {
            title: t("notFound.title"),
            description: t("notFound.description"),
            url: "/404",
            type: "website",
          },
    [project, slug, t],
  );

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
    {
      label: tag
        ? t("projects.platformOf", { tag })
        : t("projects.gsaPlatform"),
      highlight: true,
    },
    { label: t("projects.country"), highlight: true },
    { label: t("projects.businessSoftware"), highlight: false },
    { label: t("projects.statusActive"), highlight: false },
  ];

  const sloganBgWord = slogan ? slogan.split(" ")[0] : "";

  return (
    <article className="relative bg-gsa-black text-gsa-white">
      <Hero id={id} background={background} project={project} tag={tag} />
      <Ticker items={tickerItems} />
      <main className="max-w-5xl mx-auto w-[90%] md:px-16">
        <MainContent id={id} whatDo={whatDo} tag={tag} desc={desc} />

        {features?.length > 0 && (
          <div className="py-14 border-b border-gsa-white/30">
            <div className="flex items-baseline justify-between mb-6 md:p-0 px-3">
              <span className=" text-[12px] tracking-[0.2em] uppercase text-gsa-gray">
                {t("projects.capabilities")}
              </span>
              <span className="text-[12px] tracking-[0.2em] text-gsa-gray">
                {String(features.length).padStart(2, "0")}{" "}
                {t("projects.modules")}
              </span>
            </div>
            <FeaturesGrid features={features} />
          </div>
        )}

        {whyNeed?.length > 0 && <WhyNeed whyNeed={whyNeed} />}
        {slogan && <Slogan slogan={slogan} sloganBgWord={sloganBgWord} />}
        <CTA website={website} id={id} />
      </main>
    </article>
  );
}
