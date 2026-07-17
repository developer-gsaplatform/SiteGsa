export const metrics = {
  platforms: {
    total: 9,
    label: "Plataformas Próprias",
  },

  sectors: {
    total: 8,
    label: "Sectores Servidos",
  },

  uptime: {
    percentage: 99.9,
    label: "Uptime Garantido",
  },

  support: {
    availability: "24/7",
    label: "Suporte Humano + Bots",
  },
};

export const metricsData = Object.values(metrics);

export const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
