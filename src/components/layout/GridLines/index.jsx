import { useMemo } from "react";
const CONFIG = {
  verticalCount: 7,
  horizontalCount: 5,
  seed: 42,
  minOpacity: 0.18,
  maxOpacity: 0.45,
  minDuration: 6,
  maxDuration: 18,
  accentColor: "94,45,145",
  softColor: "155,123,196",
};

function seededRng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function buildLines(seed) {
  const rng = seededRng(seed);
  const lines = [];

  for (let i = 0; i < CONFIG.verticalCount; i++) {
    const x = 4 + rng() * 92;
    lines.push({
      id: `v-${i}`,
      type: "vertical",
      pos: x,
      opacity:
        CONFIG.minOpacity + rng() * (CONFIG.maxOpacity - CONFIG.minOpacity),
      duration:
        CONFIG.minDuration + rng() * (CONFIG.maxDuration - CONFIG.minDuration),
      delay: -(rng() * 20),
      color: rng() > 0.5 ? CONFIG.accentColor : CONFIG.softColor,
    });
  }

  for (let i = 0; i < CONFIG.horizontalCount; i++) {
    const y = 5 + rng() * 90;
    lines.push({
      id: `h-${i}`,
      type: "horizontal",
      pos: y,
      opacity:
        CONFIG.minOpacity + rng() * (CONFIG.maxOpacity - CONFIG.minOpacity),
      duration:
        CONFIG.minDuration + rng() * (CONFIG.maxDuration - CONFIG.minDuration),
      delay: -(rng() * 20),
      color: rng() > 0.5 ? CONFIG.accentColor : CONFIG.softColor,
    });
  }

  return lines;
}

export default function GridLines() {
  const lines = useMemo(() => buildLines(CONFIG.seed), []);

  return (
    <>
      <style>{`
        @keyframes glLineBreath {
          0%   { opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .gl-line { animation: none !important; opacity: 0.04 !important; }
        }
      `}</style>

      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: -1,
          overflow: "hidden",
        }}
      >
        {lines.map((line) => {
          const isVertical = line.type === "vertical";

          const gradient = isVertical
            ? `linear-gradient(
                to bottom,
                transparent 0%,
                rgba(${line.color}, ${line.opacity * 0.3}) 8%,
                rgba(${line.color}, ${line.opacity}) 30%,
                rgba(${line.color}, ${line.opacity}) 70%,
                rgba(${line.color}, ${line.opacity * 0.3}) 92%,
                transparent 100%
              )`
            : `linear-gradient(
                to right,
                transparent 0%,
                rgba(${line.color}, ${line.opacity * 0.3}) 6%,
                rgba(${line.color}, ${line.opacity}) 25%,
                rgba(${line.color}, ${line.opacity}) 75%,
                rgba(${line.color}, ${line.opacity * 0.3}) 94%,
                transparent 100%
              )`;

          const thickness = line.opacity > 0.3 ? "1.5px" : "1px";

          const style = isVertical
            ? {
                position: "absolute",
                left: `${line.pos}%`,
                top: 0,
                width: thickness,
                height: "100%",
                background: gradient,
                animation: `glLineBreath ${line.duration.toFixed(1)}s ${line.delay.toFixed(1)}s ease-in-out infinite`,
              }
            : {
                position: "absolute",
                top: `${line.pos}%`,
                left: 0,
                width: "100%",
                height: thickness,
                background: gradient,
                animation: `glLineBreath ${line.duration.toFixed(1)}s ${line.delay.toFixed(1)}s ease-in-out infinite`,
              };

          return <div key={line.id} className="gl-line" style={style} />;
        })}
      </div>
    </>
  );
}
