import { aboutData } from "./../../../config/about";
import ScrollReveal from "./../../common/ScrollReveal";
import AboutHead from "./AboutHead";
import Mission from "./Mission";
import AboutPoints from "./AboutPoints";

export default function About() {
  return (
    <section
      id="sobre"
      className="w-full py-25 px-[5%] border-b border-dashed border-purple-900/30 bg-transparent relative z-10"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-2 max-[860px]:grid-cols-1 gap-[80px] max-[860px]:gap-10 items-start">
        <ScrollReveal variant="fadeUp">
          <div className="flex flex-col items-start w-full">
            <AboutHead
              title={aboutData.title}
              description={aboutData.description}
            />
            <div className="w-full flex flex-col mb-7">
              {aboutData.features.map((item, idx) => (
                <AboutPoints
                  key={idx}
                  title={item.title}
                  text={item.text}
                  idx={idx}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <div className="w-full border border-dashed border-purple-400 bg-purple-950/20 flex flex-col">
            {aboutData.pillars.map((pillar, index) => (
              <Mission key={index} title={pillar.title} text={pillar.text} />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
