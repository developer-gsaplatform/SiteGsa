import { Play, Pause } from "lucide-react";

export default function InfoPanel({
  active,
  items,
  current,
  goTo,
  reducedMotion,
  autoScroll,
  setAutoScroll,
}) {
  const dur = reducedMotion ? "0ms" : "400ms";

  return (
    <div className="border-t border-dashed border-gsa-purple-soft py-5 md:py-6 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 md:gap-8 items-end md:p-0 p-5">
      <div key={current} className="flex flex-col gap-1.5">
        {active.headline && (
          <p
            className="text-[12px] md:text-[14px] font-bold uppercase tracking-wider text-gsa-purple-soft"
            style={{
              animation: reducedMotion
                ? "none"
                : `fadeSlideUp ${dur} ease both`,
            }}
          >
            {active.headline}
          </p>
        )}
        <p
          className="text-[12px] md:text-[14px] leading-[1.85] font-light max-w-lg"
          style={{
            animation: reducedMotion
              ? "none"
              : `fadeSlideUp ${dur} ease 90ms both`,
          }}
        >
          {active.desc}
        </p>
      </div>

      <div className="flex flex-col items-start md:items-end gap-3">
        <div
          className="flex items-center gap-2"
          role="tablist"
          aria-label="Navegação por plataforma"
        >
          {items.map((_, i) => {
            const dot = i === current;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={dot}
                aria-label={`Plataforma ${i + 1}`}
                className="p-0.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-gsa-purple-soft/30 rounded-full"
              >
                <span
                  className="block rounded-full"
                  style={{
                    width: dot ? 20 : 6,
                    height: 6,
                    background: dot
                      ? "var(--gsa-purple-soft, #A98FD0)"
                      : "rgba(45,42,58,0.85)",
                    transition: reducedMotion
                      ? "none"
                      : "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease",
                  }}
                />
              </button>
            );
          })}

          <button
            onClick={() => setAutoScroll(!autoScroll)}
            className="p-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-gsa-purple-soft/30 rounded-full text-gsa-purple-soft hover:text-gsa-white transition-colors duration-300 ml-2"
            aria-label={autoScroll ? "Pausar scroll automático" : "Iniciar scroll automático"}
          >
            {autoScroll ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
      </div>

      {/* Keyframe local */}
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
