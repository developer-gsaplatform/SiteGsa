export const eventsData = {
  label: "Agenda",
  title: "Eventos e encontros técnicos",
  items: [
    {
      id: 1,
      date: "15 JUL",
      title: "GSA Tech Day Luanda",
      desc: "Dia inteiro de demonstrações ao vivo das 9 plataformas, com casos reais de clientes nos sectores bancário e mineiro.",
      meta: ["Luanda", "Presencial", "Gratuito"],
    },
    {
      id: 2,
      date: "22 AGO",
      title: "Workshop Compliance & Contratos",
      desc: "Sessão técnica sobre o ciclo de vida de contratos digitais e automação de compliance regulatório em Angola.",
      meta: ["Online", "2h", "Inscrição"],
    },
    {
      id: 3,
      date: "10 SET",
      title: "Estágios-Pro · Open Day",
      desc: "Apresentação do programa Estágios-Pro a estudantes de Engenharia Informática e áreas afins.",
      meta: ["Luanda", "Presencial", "Gratuito"],
    },
  ],
};
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};
