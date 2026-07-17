export default function AbsoluteUI({ id }) {
  return (
    <>
      <div
        aria-hidden="true"
        className="absolute bottom-4 -right-4 md:-right-8 pointer-events-none select-none z-10"
      >
        <span
          className="font-black leading-none text-gsa-purple/30 block absolute bottom-10 right-10"
          style={{ fontSize: "clamp(120px, 22vw, 280px)" }}
        >
          {id}
        </span>
      </div>
    </>
  );
}
