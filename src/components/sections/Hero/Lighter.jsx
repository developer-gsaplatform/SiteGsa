export default function Lighter() {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none z-0 border"
        style={{
          background:
            "radial-gradient(circle at 50% 70%, rgba(140,90,255,0.25) 0%, rgba(90,40,180,0.10) 50%, transparent 80%)",
          filter: "blur(80px)",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 w-[240%] md:w-[190%] h-237 md:h-187 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 65% 100% at 50% 85%, rgba(170,110,255,0.90) 0%, rgba(120,60,220,0.55) 35%, rgba(60,20,120,0.15) 70%, transparent 90%)",
          animation: "breatheGlowStrong 4.5s ease-in-out infinite",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 w-[160%] md:w-[120%] h-137 md:h-105 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 100% at 50% 90%, rgba(255,255,255,1) 0%, rgba(243,225,255,0.95) 15%, rgba(195,145,255,0.75) 35%, rgba(140,70,255,0.30) 60%, transparent 85%)",
          filter: "blur(20px)",
          animation: "breatheGlowStrong 4.5s ease-in-out infinite reverse",
        }}
      />

      <div
        className="absolute bottom-0 left-1/2 w-full border md:w-[70%] h-125 md:h-125 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 120% at 50% 90%, rgba(235,210,255,0.70) 0%, rgba(170,110,255,0.30) 45%, transparent 85%)",
          filter: "blur(45px)",
          animation: "verticalPulseStrong 5s ease-in-out infinite",
        }}
      />
    </>
  );
}
