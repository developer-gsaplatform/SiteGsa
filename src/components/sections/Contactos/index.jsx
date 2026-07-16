import { motion } from "framer-motion";
import { contactData } from "./../../../config/contact";
import ScrollReveal from "./../../common/ScrollReveal";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import HeadSection from "./../../ui/HeadSection";
import ContactMap from "./ContactMap";

export default function Contactos() {
  return (
    <section
      id="contactos"
      className="w-full py-25 px-[5%] border-b border-dashed border-[rgba(155,123,196,0.3)] bg-transparent"
    >
      <div className="w-full max-w-7xl mx-auto">
        <ScrollReveal variant="fadeUp">
          <HeadSection
            label={contactData.label}
            title={contactData.title}
            desc={contactData.desc}
            center={true}
          />
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[48px] items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
          <ContactInfo />
        </motion.div>

        <ContactMap />
      </div>
    </section>
  );
}
