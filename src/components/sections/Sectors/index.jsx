import { motion } from "framer-motion";
import {
  sectors,
  itemVariants,
  containerVariants,
} from "./../../../config/sectors";
import ScrollReveal from "./../../common/ScrollReveal";
import HeadSection from "./../../ui/HeadSection";
import CardSectors from "./CardSectors";
export default function Sectors() {
  return (
    <section
      id="sectores"
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.3)] bg-[rgba(22,17,34,0.4)]"
    >
      <div className="w-full max-w-7xl mx-auto">
        <ScrollReveal variant="fadeUp">
          <HeadSection
            label={sectors.label}
            title={sectors.title}
            sub={sectors.sub}
            center={true}
            desc={sectors.desc}
          />
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[14px] mt-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {sectors.items.map((item, index) => (
            <CardSectors
              key={item.id}
              item={item}
              index={index}
              itemVariants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
