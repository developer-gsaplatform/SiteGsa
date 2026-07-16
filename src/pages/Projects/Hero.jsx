import AbsoluteUI from "./AbsoluteUI";
import ContentHero from "./ContentHero";

export default function Hero({ background, id, project, tag }) {
  return (
    <section className="relative h-125 md:h-140 overflow-hidden flex flex-col justify-end">
      {background && (
        <div
          className="absolute inset-0 scale-105"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
      <AbsoluteUI id={id} />
      <ContentHero id={id} project={project} tag={tag} />
    </section>
  );
}
