import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export default function ContentHero({ id, project, tag }) {
  const { t } = useTranslation();
  return (
    <>
      <div className="relative z-20 max-w-7xl mx-auto w-full px-6 md:px-16 pb-14 md:pb-16">
        <nav className="flex items-center gap-2  text-[10px] tracking-[0.4em] uppercase text-gsa-gray mb-10">
          <Link
            to="/#portfolio"
            className="hover:text-gsa-purple-soft transition-colors"
          >
            {t("projects.breadcrumbPortfolio")}
          </Link>
          <span className="text-gsa-gray mx-0.5">·</span>
          <span className="text-gsa-gray">{project.title}</span>
        </nav>

        <div className="flex items-center gap-4 mb-5">
          <div className="w-8 h-px bg-gsa-purple-soft" />
          <span className=" text-[11px] tracking-[0.45em] uppercase text-gsa-purple-soft">
            {tag
              ? t("projects.platformOf", { tag })
              : t("projects.aboutPlatform")}
          </span>
        </div>

        <h1
          className=" font-black leading-[0.85] tracking-tight uppercase mb-8"
          style={{ fontSize: "clamp(52px, 9vw, 96px)" }}
        >
          {project.title.split(" ").map((word, i, arr) =>
            i === arr.length - 1 && arr.length > 1 ? (
              <span
                key={i}
                className="text-transparent"
                style={{ WebkitTextStroke: "1px rgba(169,143,208,0.4)" }}
              >
                {" "}
                {word}
              </span>
            ) : (
              <span key={i}>
                {i > 0 ? " " : ""}
                {word}
              </span>
            ),
          )}
        </h1>

        <div className="flex items-center gap-8 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className=" text-[9px] tracking-[0.4em] uppercase text-gsa-gray">
              {t("projects.type")}
            </span>
            <span className="text-gsa-gray text-sm">
              {tag || t("projects.platform")}
            </span>
          </div>
          <div className="w-px h-7 bg-gsa-gray-4" />
          <div className="flex flex-col gap-1">
            <span className=" text-[9px] tracking-[0.4em] uppercase text-gsa-gray">
              {t("projects.status")}
            </span>
            <span className="text-gsa-gray text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-gsa-blink" />
              {t("projects.active")}
            </span>
          </div>
          <div className="w-px h-7 bg-gsa-gray-4" />
          <div className="flex flex-col gap-1">
            <span className=" text-[9px] tracking-[0.4em] uppercase text-gsa-gray">
              {t("projects.project")}
            </span>
            <span className="text-gsa-gray text-sm">GSA — {id}</span>
          </div>
        </div>
      </div>
    </>
  );
}
