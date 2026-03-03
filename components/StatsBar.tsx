"use client";

/**
 * StatsBar – Tight horizontal proof-metrics band.
 * Inserted after TrustedBy to establish immediate credibility.
 */

import { motion } from "framer-motion";

const STATS = [
  { value: "3,000+", label: "Screens Managed" },
  { value: "< 5 min", label: "Average Setup Time" },
  { value: "99.9%",   label: "Platform Uptime" },
  { value: "100+",    label: "Content Apps Included" },
];

export default function StatsBar() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {value}
              </span>
              <span className="mt-1 text-sm text-slate-500 font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
