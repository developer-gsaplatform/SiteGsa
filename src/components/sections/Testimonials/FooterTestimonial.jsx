export default function FooterTestimonial({ item }) {
  return (
    <div>
      <div className="h-px bg-gsa-gray-2 mb-5" />
      <div className="flex items-center gap-3">
        <div className="w-9.5 h-9.5 border border-dashed border-[#9B7BC4] flex items-center justify-center  font-extrabold text-[0.8rem] text-[#9B7BC4] shrink-0 bg-[rgba(94,45,145,0.1)]">
          {item.initials}
        </div>

        <div>
          <div className="text-[0.9rem] font-bold  uppercase tracking-[0.04em] text-gsa-white">
            {item.name}
          </div>
          <div className="text-[0.78rem] text-gsa-gray-5 mt-0.5">
            {item.role}
          </div>
        </div>
      </div>
    </div>
  );
}
