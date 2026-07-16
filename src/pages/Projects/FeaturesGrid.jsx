export default function FeaturesGrid({ features }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-gsa-white/10 gap-[1px]">
      {features.map((feat, i) => (
        <div
          key={i}
          className="group bg-gsa-black p-5 hover:bg-gsa-purple/7 transition-colors duration-300 cursor-default"
        >
          <span className="text-[10px] tracking-[0.3em] text-gsa-gray-5 block mb-2">
            F·{String(i + 1).padStart(2, "0")}
          </span>
          <span className="text-[11px] tracking-[0.15em] uppercase text-gsa-gray group-hover:text-gsa-purple-soft transition-colors duration-300 leading-snug">
            {feat}
          </span>
        </div>
      ))}
    </div>
  );
}
