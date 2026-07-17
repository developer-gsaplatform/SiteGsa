import { ArrowUpLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import useSeo from "../../../hooks/useSeo";

export default function NotFound() {
  const { t } = useTranslation();

  useSeo({
    title: t("notFound.title"),
    description: t("notFound.description"),
    url: window.location.pathname,
    type: "website",
  });
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <span className=" uppercase tracking-[0.5em] text-gsa-purple-soft text-xs block mb-8">
          // erro_404
        </span>
        <p className="text-6xl md:text-9xl font-black leading-none tracking-tight">
          N/A
        </p>
        <div className="w-12 h-px bg-gsa-purple-soft mx-auto my-10" />
        <p className="text-gsa-gray-5 text-sm max-w-xs mx-auto mb-12">
          {t("notFound.message")}
        </p>
        <Link
          to="/"
          className="group inline-flex items-center gap-3  uppercase tracking-[0.2em] text-xs border border-gsa-gray-4 px-6 py-3 hover:border-gsa-purple-soft hover:text-gsa-purple-soft transition-all duration-500"
        >
          <ArrowUpLeft size={18} /> {t("notFound.back")}
        </Link>
      </div>
    </section>
  );
}
