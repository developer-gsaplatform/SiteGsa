import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactInfo() {
  const { t } = useTranslation();

  const CONTACT_INFO = useMemo(
    () => [
      {
        title: t("contact.info.emailTitle"),
        value: t("contact.info.emailValue"),
        icon: Mail,
      },
      {
        title: t("contact.info.phoneTitle"),
        value: t("contact.info.phoneValue"),
        icon: Phone,
      },
      {
        title: t("contact.info.addressTitle"),
        value: t("contact.info.addressValue"),
        icon: MapPin,
      },
      {
        title: t("contact.info.hoursTitle"),
        value: t("contact.info.hoursValue"),
        icon: Clock,
      },
    ],
    [t],
  );

  return (
    <motion.div
      className="border border-dashed border-[#9B7BC4] bg-[rgba(22,17,34,0.5)] w-full h-full"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-[28px_32px] border-b border-dashed border-gsa-gray-2">
        <h3 className="text-[1.5rem] font-extrabold  uppercase tracking-[0.04em] text-[#f5f5f0] mb-1.5">
          {t("contact.info.heading")}
        </h3>
        <p className="text-[0.9rem] text-[#8a8499]">
          {t("contact.info.subheading")}
        </p>
      </div>

      {CONTACT_INFO.map((item, index) => {
        const Icon = item.icon;
        return (
          <motion.div
            key={index}
            className="flex items-start gap-4.5 p-[22px_32px] border-b border-dashed border-gsa-gray-2 last:border-b-0 hover:bg-[rgba(94,45,145,0.05)] transition-colors"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-[36px] h-[36px] border border-dashed border-[#9B7BC4] flex items-center justify-center shrink-0 bg-[rgba(94,45,145,0.1)]">
              <Icon size={18} className="text-[#f5f5f0]" strokeWidth={1.6} />
            </div>
            <div>
              <h5 className="text-[0.7rem] font-bold text-[#9B7BC4] uppercase tracking-[0.12em]  mb-1">
                {item.title}
              </h5>
              <p className="text-[0.9rem] text-[#c8c2d8]">{item.value}</p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
