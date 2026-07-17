import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import HeadSection from "./../../../ui/HeadSection";
import ScrollReveal from "./../../../common/ScrollReveal";
import PartnersCarousel from "./PartnersCarousel";

export default function Partners() {
  const { t } = useTranslation();

  const partnersData = useMemo(
    () => ({
      label: t("partners.label"),
      title: t("partners.title"),
      desc: t("partners.desc"),
      list: t("partners.list", { returnObjects: true }),
    }),
    [t],
  );

  return (
    <section
      id="parceiros"
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.30)] bg-[#0a0a0a] relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <ScrollReveal variant="fadeUp">
          <div className="w-full flex justify-between items-end flex-wrap gap-5 mb-[48px]">
            <HeadSection
              label={partnersData.label}
              title={partnersData.title}
              center={true}
            />
          </div>
        </ScrollReveal>
        <div className="w-full overflow-hidden">
          <PartnersCarousel items={partnersData.list} />
        </div>
      </div>
    </section>
  );
}
