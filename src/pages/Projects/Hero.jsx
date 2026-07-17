import ContentHero from "./ContentHero";

export default function Hero({ background, id, project, tag }) {
  return (
    <section className="relative h-125 md:h-140 overflow-hidden flex flex-col justify-end">
      <div className="absolute inset-0 bg-linear-to-t from-gsa-black via-gsa-black/80 to-gsa-black/5 z-1" />
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
      <ContentHero id={id} project={project} tag={tag} />
    </section>
  );
}
