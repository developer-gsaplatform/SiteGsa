import ScrollReveal from "./../components/common/ScrollReveal";
export default function TestimonialHead({ headData }) {
  return (
    <>
      <div className="text-center max-w-170 mx-auto mb-12 flex flex-col items-center">
        <span className="inline-flex items-center gap-2.5  text-[0.72rem] font-bold tracking-[0.14em] text-[#9B7BC4] uppercase mb-4">
          <span className="w-6 h-px bg-[#9B7BC4] inline-block" />
          {headData.label}
          <span className="text-gsa-gray-3 ml-0.5">{"//"}</span>
        </span>

        <h2 className=" text-[clamp(2.2rem,4.5vw,3.4rem)] font-extrabold text-gsa-white uppercase leading-[1.1] tracking-[0.01em]">
          {headData.title}
        </h2>
      </div>
    </>
  );
}
