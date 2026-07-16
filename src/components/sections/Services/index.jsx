import { servicesData } from "./../../../config/services";
import HeadSection from "./../../ui/HeadSection";
import ServiceSplitCarousel from "./ServiceSplitCarousel";

export default function Services() {
  return (
    <section
      id="servicos"
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.3)] bg-[rgba(22,17,34,0.4)]"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <HeadSection
          label={servicesData.label}
          title={servicesData.title}
          sub={servicesData.sub}
          contactButtonText={"Saiba mais"}
        />

        <ServiceSplitCarousel items={servicesData.items} />
      </div>
    </section>
  );
}
