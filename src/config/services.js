import {
  CloudCog,
  Database,
  Headset,
  ShieldCheck,
  RefreshCw,
  Code,
} from "lucide-react";
export const servicesData = {
  label: "O QUE FAZEMOS",
  title: "Soluções que ",
  sub: "transformam o seu negócio",
  items: [
    {
      id: "srv-1",
      num: "SRV — 01",
      title: "Arquitectura & Engenharia de Software",
      desc: "Construímos sistemas pensados para crescer e não parar: arquitetura em nuvem, microsserviços e aplicações web rápidas e estáveis.",
      tags: ["CLOUD", "MICROSSERVIÇOS", "PWA"],
      icon: CloudCog,
      image: "/engenharia.jpg",
      alt: "Em prol do turismo: fendas da tundavala",
    },
    {
      id: "srv-2",
      num: "SRV — 02",
      title: "Gestão & Engenharia de Dados",
      desc: "Os seus dados estão espalhados e pouco usados. Organizamos, ligamos e tratamos essa informação para apoiar decisões — data lakes, pipelines ETL e governança.",
      tags: ["DATA", "GOVERNANÇA"],
      icon: Database,
      image: "/kedas-de-kalanfula.jpg",
      alt: "Em prol do turismo: quedas de kalandula",
    },
    {
      id: "srv-3",
      num: "SRV — 03",
      title: "Suporte, Manutenção & SLAs Críticos",
      desc: "Vigiamos os sistemas em tempo real e resolvemos incidentes 24/7/365, com níveis de serviço (SLA) acordados e cumpridos.",
      tags: ["24/7", "SLA", "MANUTENÇÃO"],
      icon: Headset,
      image: "/maravilha2.jpg",
    },
    {
      id: "srv-4",
      num: "SRV — 04",
      title: "Cibersegurança",
      desc: "Protegemos infraestruturas críticas com camadas de segurança, testes de intrusão e monitorização contínua de ameaças. Com suporte à AI temos recursos inovadores para a sua segurança contínua.",
      tags: ["SECURITY", "PEN-TEST", "DEFESA"],
      icon: ShieldCheck,
      image:
        "/serra.jpg",
    },
    {
      id: "srv-5",
      num: "SRV — 05",
      title: "Transformação Digital",
      desc: "Modernizamos processos antigos passo a passo, sem parar a operação, para ganhar eficiência e reduzir custos.",
      tags: ["STRATEGY", "LEGA-MOD", "DIGITAL"],
      icon: RefreshCw,
      image:
        "/luanda.jpg",
    },
  ],

  engineeringServices: [
    {
      id: "eng-1",
      title: "Engenharia de Dados",
      desc: "Data lakes, pipelines, governança e modelagem avançada. Transformamos os seus dados brutos em ativos estratégicos de alto valor comercial.",
      icon: Database,
    },
    {
      id: "eng-2",
      title: "Engenharia de Software",
      desc: "Sistemas nativos na nuvem, microsserviços de alta disponibilidade, auditorias de segurança de código e aplicações web progressivas de alto rendimento.",
      icon: Code,
    },
    {
      id: "eng-3",
      title: "Cibersegurança",
      desc: "Implementação de camadas de segurança robustas, testes de penetração e monitorização constante contra ameaças cibernéticas em infraestruturas críticas.",
      icon: ShieldCheck,
    },
  ],
};
