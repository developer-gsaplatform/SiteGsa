import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HeadSection from "./../../ui/HeadSection";
import LeftSide from "./leftSide";
import RightSideCard from "./RightSideCard";
export default function Estagios() {
  const { t } = useTranslation();

  const internshipsData = useMemo(
    () => ({
      label: t("estagios.label"),
      title: t("estagios.title"),
      desc: t("estagios.desc"),
      banner: t("estagios.banner", { returnObjects: true }),
      perks: t("estagios.perks", { returnObjects: true }),
    }),
    [t],
  );

  return (
    <motion.section
      id="estagios-pro"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.3)] bg-transparent"
    >
      <div className="w-full max-w-7xl mx-auto">
        <HeadSection
          label={internshipsData.label}
          title={internshipsData.title}
          center={true}
          desc={internshipsData.desc}
        />
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="border border-dashed border-[#9B7BC4] grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden bg-[rgba(22,17,34,0.5)]"
        >
          <LeftSide bannerData={internshipsData.banner} />
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-[32px_36px] flex flex-col justify-center"
          >
            {internshipsData.perks.map((perk, pIdx) => (
              <RightSideCard key={perk.id} perk={perk} pIdx={pIdx} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
