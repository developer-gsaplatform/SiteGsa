import { motion } from "framer-motion";

export default function ContactMap() {
  return (
    <motion.div
      className="w-full mt-12 border border-dashed border-gsa-gray-2 hover:border-[#9B7BC4]/30 transition-all p-2 bg-[#0a0a0a] relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
    >
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#9B7BC4]" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#9B7BC4]" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#9B7BC4]" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#9B7BC4]" />

      <div className="w-full h-[320px] md:h-[420px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.7303217932736!2d13.185853728226526!3d-8.904644568267667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f4d93692454d%3A0xd6782f57e043264f!2sRoyal%20Park!5e0!3m2!1spt-PT!2sao!4v1780675153434!5m2!1spt-PT!2sao"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização GSAPLATFORM"
        />
      </div>
    </motion.div>
  );
}
