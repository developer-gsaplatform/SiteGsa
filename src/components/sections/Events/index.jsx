import { useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { containerVariants } from "./../../../config/events";
import ScrollReveal from "./../../common/ScrollReveal";
import HeadSection from "./../../ui/HeadSection";
import EventCard from "./EventCard";

export default function Events() {
  const { t } = useTranslation();

  const eventsData = useMemo(
    () => ({
      label: t("events.label"),
      title: t("events.title"),
      items: t("events.items", { returnObjects: true }),
    }),
    [t],
  );

  return (
    <section
      id="eventos"
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.3)] bg-[rgba(22,17,34,0.4)]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <ScrollReveal variant="fadeUp">
          <HeadSection label={eventsData.label} title={eventsData.title} />
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gsa-gray-2 mt-[48px] border border-gsa-gray-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {eventsData.items.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
