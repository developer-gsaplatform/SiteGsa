export default function Slogan({ sloganBgWord, slogan }) {
  return (
    <div className="py-10 border-b border-gsa-white/30 relative overflow-hidden max-w-4xl mx-auto px-3 w-[95%]">
      {sloganBgWord && (
        <span
          aria-hidden="true"
          className="absolute left-0 top-1/2 -translate-y-1/2  font-black uppercase tracking-tight text-gsa-purple pointer-events-none select-none whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 14vw, 160px)" }}
        >
          {sloganBgWord}
        </span>
      )}
      <div className="relative z-10">
        <span
          className="font-black text-7xl leading-none text-gsa-purple-soft block"
          aria-hidden="true"
        >
          "
        </span>
        <p className="font-bold text-xl md:text-2xl leading-snug tracking-tight uppercase text-gsa-white max-w-xl">
          {slogan}
        </p>
      </div>
    </div>
  );
}
