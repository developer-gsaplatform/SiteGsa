export const STYLES = {
  navLinkBase:
    "font-semibold text-[0.82rem] px-3 py-2 block uppercase tracking-[0.08em]  transition-all relative duration-200 hover:scale-105",
  navLinkStandard:
    "text-gsa-gray-6 border border-transparent hover:text-gsa-white hover:border-dashed hover:border-gsa-purple-soft",
  navLinkCTA:
    "text-gsa-white border border-dashed border-gsa-purple-soft hover:bg-gsa-purple hover:border-solid hover:border-gsa-purple",
  hamburgerLine:
    "w-[22px] h-[1.5px] bg-gsa-white transition-all duration-200 block",
};

export const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
};
