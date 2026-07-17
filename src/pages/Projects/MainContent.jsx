import { useTranslation } from "react-i18next";

export default function MainContent({ id, tag, whatDo, desc }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 md:px-16 w-[95%]">
        <div className="grid grid-cols-3 border-b border-gsa-white/30 py-10">
          {[
            {
              label: t("projects.sector"),
              value: tag || t("projects.platform"),
            },
            { label: t("projects.project"), value: `GSA ${id}` },
            { label: t("projects.scope"), value: t("projects.national") },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col gap-2 ${i > 0 ? "pl-8 border-l border-gsa-white/30" : "pr-8"}`}
            >
              <span className=" text-[10px] uppercase text-gsa-gray">
                {item.label}
              </span>
              <span className=" text-base uppercase text-gsa-gray-7">
                {item.value}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[40px_1fr] gap-x-8 py-14 border-b border-gsa-white/30">
          <span
            aria-hidden="true"
            className="font-black text-7xl leading-none text-gsa-purple/30 tracking-tight select-none pt-1"
          >
            01
          </span>
          <div>
            <span className=" text-[10px] tracking-[0.5em] uppercase text-gsa-purple-soft block mb-2">
              {t("projects.overview")}
            </span>
            <p className="text-gsa-gray text-[15px] leading-[1.9] font-light text-justify">
              {desc}
            </p>

            {whatDo && (
              <div className="mt-8 pt-8 border-t border-gsa-white/10">
                <span className="text-[10px] tracking-[0.5em] uppercase text-gsa-purple-soft block mb-3">
                  {t("projects.whatItDoes")}
                </span>
                <p className="text-gsa-gray text-[14px] leading-[1.85] text-justify">
                  {whatDo}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
