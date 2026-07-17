import { useTranslation } from "react-i18next";

export default function WhyNeed({ whyNeed }) {
  const { t } = useTranslation();
  return (
    <div className="py-14">
      <div className="flex items-center gap-3 mb-4">
        <div
          className="w-2 h-2 border border-gsa-purple-soft"
          style={{ transform: "rotate(45deg)" }}
        />
        <span className="text-[12px] tracking-[0.2em] uppercase text-gsa-gray">
          {t("projects.whyNeedTitle")}
        </span>
      </div>

      <div className="grid md:grid-cols-2 bg-gsa-white/30 border-gsa-white/30 gap-px">
        {whyNeed.map((item, idx) => (
          <div
            key={idx}
            className={`group bg-gsa-black py-6 transition-all duration-300 ${
              idx % 2 === 1 ? "md:pl-8" : "md:pr-8"
            }`}
          >
            <h4 className="text-sm font-bold tracking-wider uppercase text-gsa-white mb-2 group-hover:text-gsa-purple-soft/90 transition-colors duration-300">
              {item.title}
            </h4>
            <p className="text-gsa-gray-6 text-[13px] leading-[1.4] font-light group-hover:text-gsa-gray-6 transition-colors duration-300">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
