export default function AboutHead({ title, description }) {
  return (
    <>
      <div className="inline-flex items-center gap-2.5 text-[0.72rem] font-bold tracking-[0.14em] text-purple-300 uppercase mb-4.5 ">
        <span className="w-6 h-px bg-purple-300 inline-block" />
        SOBRE A GSAPLATFORM //
      </div>

      <h2 className=" text-[clamp(2.2rem,4.5vw,3.4rem)] font-black tracking-[0.01em] text-white uppercase mb-4 leading-[1.1]">
        {title}
      </h2>

      <p className="font-semi text-[1rem] text-gray-400 max-w-155 leading-[1.75] mb-7 text-justify">
        {description}
      </p>
    </>
  );
}
