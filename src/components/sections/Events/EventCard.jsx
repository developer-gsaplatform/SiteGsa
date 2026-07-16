import React from "react";
import { motion } from "framer-motion";
export default function EventCard({ event, itemVariants }) {
  return (
    <motion.div
      key={event.id}
      className="bg-[#0a0a0a] transition-all duration-250 hover:bg-[rgba(94,45,145,0.08)] flex flex-col justify-between group cursor-pointer"
      variants={itemVariants}
      whileHover={{ y: -8 }}
    >
      <div className="p-[22px_26px_18px] border-b border-dashed border-gsa-gray-2 flex justify-between items-start gap-[10px]">
        <div className=" text-[0.72rem] font-extrabold tracking-[0.15em] uppercase text-[#9B7BC4] border border-dashed border-[#9B7BC4] p-[5px_10px] whitespace-nowrap bg-[rgba(94,45,145,0.08)]">
          {event.date}
        </div>
        <h3 className="text-[1.05rem] font-extrabold  uppercase tracking-[0.04em] text-[#f5f5f0] text-right leading-tight group-hover:text-[#9B7BC4] transition-colors">
          {event.title}
        </h3>
      </div>

      <div className="p-[22px_26px] flex-grow flex flex-col justify-between">
        <p className="text-[0.88rem] text-[#a8a2b8] leading-[1.65] mb-4 text-justify">
          {event.desc}
        </p>

        <div className="flex gap-2.5 text-[0.76rem] text-[#8a8499] flex-wrap items-center font-medium">
          {event.meta.map((metaItem, mIdx) => (
            <React.Fragment key={mIdx}>
              <span className="uppercase tracking-wider">{metaItem}</span>
              {mIdx < event.meta.length - 1 && (
                <span className="text-[#3d3858] font-bold">&#124;</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
