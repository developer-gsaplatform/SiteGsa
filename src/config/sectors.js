export const sectors = {
  title: "Onde já trabalhámos.",
  label: "Projetos em sectores críticos",
  desc: "Implementações em instituições onde disponibilidade, segurança e conformidade não são opcionais",
  items: [
    { id: 1, title: "Banca e Instituições Financeiras" },
    { id: 2, title: "Sector Mineiro" },
    { id: 3, title: "Agências Reguladoras" },
    { id: 4, title: "Sector Mineiro" },
    { id: 5, title: "Logística e Património" },
    { id: 6, title: "Operações Portuárias" },
    { id: 7, title: "Segurança Pública" },
    { id: 8, title: "Previdência e Fundos de Pensões" },
  ],
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
};
export { containerVariants, itemVariants };
