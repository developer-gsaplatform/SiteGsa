import { motion } from "framer-motion";
import ScrollReveal from "./../common/ScrollReveal";
import Button from "./Button";

export default function HeadSection({
  label,
  title,
  sub,
  desc,
  contactButtonText,
  buttonHref = "#contactos",
  center = false,
}) {
  return (
    <div
      className={`w-full flex flex-col ${
        center
          ? "items-center text-center max-w-[680px] mx-auto mb-10"
          : "items-start"
      }`}
    >
      <ScrollReveal variant="fadeUp">
        <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.14em] text-[#9B7BC4] uppercase mb-[12px] md:mb-4.5 ">
          <motion.span
            className="w-6 h-px bg-[#9B7BC4] inline-block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          />
          {label} <span className="text-[#3d3858] ml-0.5">{"//"}</span>
        </div>
      </ScrollReveal>

      <ScrollReveal variant="fadeUp" delay={0.1} className="w-full">
        <div
          className={`flex flex-col w-full gap-6 md:gap-4 ${
            center
              ? "items-center"
              : "md:flex-row md:justify-between md:items-center items-start"
          }`}
        >
          <div className={center ? "w-full" : "max-w-[75%] md:max-w-[65%]"}>
            <h2 className=" text-[clamp(2rem,8vw,3.4rem)] font-black tracking-[0.01em] text-[#f5f5f0] uppercase leading-[1.1]">
              {title}
              {sub && (
                <>
                  <br />
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {sub}
                  </motion.span>
                </>
              )}
            </h2>

            {desc && (
              <p className="text-base text-[#a8a2b8] max-w-155 leading-[1.75] mt-4">
                {desc}
              </p>
            )}
          </div>

          {contactButtonText && (
            <motion.div
              className={center ? "mt-4" : "flex-shrink-0"}
              initial={center ? { opacity: 0, y: 10 } : { opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button href={buttonHref} variant="ghost">
                {contactButtonText}
              </Button>
            </motion.div>
          )}
        </div>
      </ScrollReveal>
    </div>
  );
}
