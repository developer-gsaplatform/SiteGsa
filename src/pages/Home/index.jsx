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
  useSeo({
    title: "Soluções Empresariais Angolanas",
    description:
      "GSAPLATFORM entrega plataformas tecnológicas angolanas para compliance, logística, hospitalar, procurement e agro, otimizando processos e operações empresariais.",
    url: "/",
  });

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
