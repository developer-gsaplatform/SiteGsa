export default function Ticker({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative border-y border-gsa-white/5 overflow-hidden py-2.5">
      <div className="absolute inset-y-0 left-0 w-16 z-10 bg-linear-to-r from-gsa-black to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 z-10 bg-linear-to-l from-gsa-black to-transparent pointer-events-none" />

      <div className="flex animate-gsa-ticker whitespace-nowrap w-max">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-6 px-8  text-[10px] tracking-[0.35em] uppercase ${
              item.highlight ? "text-gsa-purple-soft" : "text-gsa-gray"
            }`}
          >
            {item.label}
            <span className="w-1 h-1 rounded-full bg-gsa-purple-soft inline-block" />
          </span>
        ))}
      </div>
    </div>
  );
}
