import { useTranslation } from "react-i18next";
import { ArrowLeft, ArrowRight } from "lucide-react";

const base =
  "absolute top-1/2 -translate-y-1/2 z-20 " +
  "p-3 sm:p-3.5 md:p-4 " +
  "border border-gsa-gray-4/50 bg-gsa-black" +
  "flex items-center justify-center " +
  "text-gsa-gray-6 backdrop-blur-md " +
  "transition-all duration-300 ease-out " +
  "disabled:opacity-15 disabled:cursor-not-allowed " +
  "hover:border-gsa-purple-soft/35 " +
  "hover:bg-gsa-purple/[0.08] " +
  "hover:text-gsa-purple-soft " +
  "hover:shadow-[0_0_24px_-6px_rgba(169,143,208,0.12)] " +
  "active:scale-[0.93] " +
  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gsa-purple-soft/40 " +
  "border-dashed";

export default function CarouselNav({ direction, onClick, disabled }) {
  const { t } = useTranslation();
  const pos =
    direction === "prev"
      ? "left-0 sm:left-3 md:left-5"
      : "right-0 sm:right-3 md:right-5";
  const Icon = direction === "prev" ? ArrowLeft : ArrowRight;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={
        direction === "prev"
          ? t("platforms.carousel.prev")
          : t("platforms.carousel.next")
      }
      className={`${base} ${pos}`}
    >
      <Icon size={15} strokeWidth={1.5} className="text-white" />
    </button>
  );
}
