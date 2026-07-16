import { motion } from "framer-motion";
import { useCarousel } from "./../../../hooks/useCarousel";
import GeneralCard from "./../../ui/GeneralCard";
import ServiceControls from "./ServiceControls";

export default function ServiceCarousel({
  items = [],
  mobile = 1,
  tablet = 1,
  desktop = 1,
}) {
  const carousel = useCarousel(items.length, {
    mobile: mobile,
    tablet: tablet,
    desktop: desktop,
  });

  return (
    <>
      <div className="w-full relative overflow-hidden mt-7">
        <motion.div
          className="flex items-stretch"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            x: `-${carousel.translateX}%`,
          }}
          transition={{
            opacity: { duration: 0.5 },
            x: { type: "spring", stiffness: 180, damping: 24 },
          }}
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              className="shrink-0 w-full px-0"
              style={{
                width: `${carousel.slidePercentage}%`,
                flex: `0 0 ${carousel.slidePercentage}%`,
              }}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
            >
              <GeneralCard data={item} animated={true} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <ServiceControls carousel={carousel} maxIndex={carousel.maxIndex} />
    </>
  );
}
