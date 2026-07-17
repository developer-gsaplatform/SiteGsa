import { useTranslation } from "react-i18next";

export default function LineServiceStyle() {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-295 border-t mx-auto border-gsa-gray-2 mt-12 py-3 flex items-center gap-5">
      <span className="text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-gsa-gray-4">
        {t("services.engineeringServicesTitle")}
      </span>
      <span className="w-full h-px bg-gsa-gray-2 flex-1"></span>
    </div>
  );
}
