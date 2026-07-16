export const testimonialsData = {
  label: "O que dizem de nós",
  title: "Confiança ganha em projecto real",
  items: [
    {
      id: 1,
      text: "«A plataforma de Procurement reduziu em 60% o tempo do nosso ciclo de compras. Equipa técnica de primeira, sempre disponível.»",
      initials: "JM",
      name: "J. Manuel",
      role: "Director de Operações · Sector Mineiro",
      logoText: "MINING CORP",
    },
    {
      id: 2,
      text: "«A Plataforma Documental transformou completamente a nossa governança. O suporte humanizado faz toda a diferença.»",
      initials: "MS",
      name: "M. Silva",
      role: "CIO · Instituição Bancária",
      logoText: "SILVA BANK",
    },
    {
      id: 3,
      text: "«Engenharia angolana ao nível dos melhores. Integraram com o nosso sistema legado em tempo recorde.»",
      initials: "AC",
      name: "A. Cabral",
      role: "Coordenador TI · Agência Reguladora",
      logoText: "TI REGULATOR",
    },
  ],
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export { containerVariants, itemVariants };
