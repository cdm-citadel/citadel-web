"use client";

/**
 * IndustryUseCases – "Why [industry] teams choose Citadel"
 * 2×2 card grid with a mini screen thumbnail at the top of each card.
 */

import { motion } from "framer-motion";
import { ICON_MAP } from "./icon-map";
import { getScreenGradient } from "@/lib/screen-gradient-map";
import type { IndustryData } from "@/lib/industries-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function IndustryUseCases({ data }: { data: IndustryData }) {
  const screenGradient = getScreenGradient(data.slug);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full ${data.accent.badge}
                            text-xs font-semibold uppercase tracking-widest mb-4`}>
            Use Cases
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              {data.name.toLowerCase()}
            </span>{" "}
            teams choose Citadel
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            From a single location to a nationwide network — Citadel adapts to every scenario in{" "}
            <span className="font-medium text-slate-700">{data.nameLong}</span>.
          </p>
        </div>

        {/* 2×2 card grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6"
        >
          {data.useCases.map(({ icon, title, description }) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.Monitor;
            return (
              <motion.div
                key={title}
                variants={card}
                className={`bg-white rounded-2xl border ${data.accent.border}
                             shadow-sm hover:shadow-md hover:-translate-y-1
                             transition-all duration-300 overflow-hidden`}
              >
                {/* Mini screen thumbnail — flush to card top */}
                <div className={`relative h-28 bg-gradient-to-br ${screenGradient}
                                 p-3 flex flex-col justify-between`}>
                  <div className="flex items-center justify-between">
                    <div className="w-5 h-5 rounded bg-white/20 flex items-center justify-center">
                      <Icon className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-white/70 text-[9px] font-semibold
                                     bg-white/10 px-1.5 py-0.5 rounded-full">
                      Live
                    </span>
                  </div>
                  <div className="text-white/90 text-xs font-bold leading-tight">{title}</div>
                  <div className="h-px bg-white/20" />
                </div>

                {/* Card body */}
                <div className="p-8 pt-6">
                  <div className={`w-12 h-12 rounded-2xl ${data.accent.bg}
                                   flex items-center justify-center mb-5`}>
                    <Icon className={`w-5 h-5 ${data.accent.text}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
                  <p className="text-slate-500 leading-relaxed">{description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
