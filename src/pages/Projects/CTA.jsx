import { ArrowUpRight } from "lucide-react";

export default function CTA({ website, id }) {
  return (
    <div className="py-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mx-auto max-w-4xl w-[95%]">
      <span className=" text-[12px] tracking-[0.4em] uppercase text-gsa-gray-4">
        GSA Platform — Projecto {id}
      </span>

      {website && (
        <a
          href={website}
          target="_blank"
          rel="noopener noreferrer"
          className="group/btn relative inline-flex items-center gap-4  uppercase tracking-[0.2em] text-[11px] text-gsa-white border border-gsa-gray-4/50 px-8 py-4 hover:border-gsa-purple-soft hover:text-gsa-purple-soft transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10">Visite a Plataforma</span>
          <ArrowUpRight
            size={14}
            className="relative z-10 text-gsa-white group-hover/btn:text-gsa-purple-soft transition-all duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />
          <span className="absolute inset-0 bg-gsa-purple/0 group-hover/btn:bg-gsa-purple/10 transition-colors duration-500" />
        </a>
      )}
    </div>
  );
}
