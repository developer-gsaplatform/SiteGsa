import Button from "./../../ui/Button";
import { motion } from "framer-motion";
export default function ContentLeft({ heroData }) {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left w-full">
      <motion.div
        className="inline-flex items-center gap-2 border border-dashed border-gsa-purple-soft px-3.5 py-1.5 text-[0.75rem] font-bold tracking-widest text-gsa-purple-soft uppercase mb-7 select-none"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{ transformOrigin: "center" }}
      >
        <span className="w-1.5 h-1.5 bg-gsa-purple-soft inline-block animate-[blink_1.4s_infinite]" />
        {heroData.badge}
      </motion.div>

      <h1 className=" text-[clamp(2.5rem,5.5vw,4.5rem)] font-black tracking-tight leading-[0.95] text-gsa-white uppercase mb-6 w-full">
        {heroData.titleStart}
        <br />

        <motion.em
          className="text-[clamp(2.5rem,6.5vw,4.7rem)] font-black leading-[0.95] tracking-[-0.01em] uppercase not-italic inline-block bg-[linear-gradient(135deg,#9B7BC4,#5E2D91,#C6A4FF,#9B7BC4)] bg-clip-text text-transparent"
          initial={{ filter: "blur(4px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {heroData.titleItalic}
        </motion.em>

        <br />
        {heroData.titleEnd}
      </h1>

      <p className="text-[1rem] md:text-[1.1rem] leading-relaxed max-w-130 mb-10">
        {heroData.description}
      </p>

      <motion.div
        className="flex flex-wrap justify-center md:justify-start gap-3.5 mb-14"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Button
          href={heroData.ctaPrimary.href}
          variant="primary"
          className="btn-lg"
        >
          {heroData.ctaPrimary.text}
        </Button>

        <Button
          href={heroData.ctaGhost.href}
          variant="ghost"
          className="btn-lg"
        >
          {heroData.ctaGhost.text}
        </Button>
      </motion.div>

      <motion.div
        className="w-16 h-px bg-gsa-purple-soft mb-6"
        initial={{ width: 0 }}
        animate={{ width: 64 }}
        transition={{ duration: 0.6 }}
      />

      <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3">
        {heroData.trustItems.map((item, index) => (
          <motion.span
            key={index}
            className="text-[0.82rem] font-semibold tracking-wide flex items-center gap-2 select-none"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
          >
            <span className="font-bold text-[0.9rem]">+</span>
            {item}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
