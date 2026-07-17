import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Hero from "./../../components/sections/Hero";
import Metrics from "./../../components/sections/Metrics";
import About from "./../../components/sections/About";
import Platform from "./../../components/sections/Platform";
import Services from "./../../components/sections/Services";
import Sectors from "./../../components/sections/Sectors";
import Testimonials from "./../../components/sections/Testimonials";
import Events from "./../../components/sections/Events";
import Estagios from "./../../components/sections/Estagios";
import Partners from "./../../components/sections/Platform/Partners";
import Contactos from "./../../components/sections/Contactos";
import OurClients from "../../components/sections/OurClient";
import useSeo from "./../../hooks/useSeo";

export default function Home() {
  const { t } = useTranslation();

  const seoData = useMemo(
    () => ({
      title: t("seo.home.title"),
      description: t("seo.home.description"),
      url: "/",
    }),
    [t],
  );

  useSeo(seoData);

  return (
    <>
      <Hero />
      <Metrics />
      <About />
      <Platform />
      <Services />
      <Sectors />
      <Testimonials />
      <Events />
      <Estagios />
      <Partners />
      <OurClients />
      <Contactos />
    </>
  );
}
