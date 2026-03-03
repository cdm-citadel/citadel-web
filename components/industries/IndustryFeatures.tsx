"use client";

/**
 * IndustryFeatures – "Everything you need for [industry] digital signage"
 * 2×2 card grid (white bg) + full-width integrations CTA card with badge pills.
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ICON_MAP } from "./icon-map";
import type { IndustryData } from "@/lib/industries-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function IndustryFeatures({ data }: { data: IndustryData }) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 rounded-full ${data.accent.badge}
                            text-xs font-semibold uppercase tracking-widest mb-4`}>
            Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything you need for{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              {data.name.toLowerCase()} digital signage
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Purpose-built tools for {data.nameLong} — not a generic solution bolted together.
          </p>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 gap-6 mb-6"
        >
          {data.features.map(({ icon, title, description }) => {
            const Icon = ICON_MAP[icon] ?? ICON_MAP.Monitor;
            return (
              <motion.div
                key={title}
                variants={item}
                className="group relative rounded-2xl p-8 border border-slate-200 bg-white
                           shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Accent line on hover */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${data.accent.iconBg} rounded-t-2xl
                                 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`w-11 h-11 rounded-2xl ${data.accent.bg} flex items-center justify-center mb-5
                                 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className={`w-5 h-5 ${data.accent.text}`} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Full-width integrations CTA with badge pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`rounded-2xl ${data.accent.bg} border ${data.accent.border} p-8`}
        >
          <p className="font-bold text-slate-900 mb-1">Integrations available</p>
          <p className="text-sm text-slate-500 mb-5">
            Connect Citadel to the tools your {data.name.toLowerCase()} team already uses.
          </p>

          {/* Integration name badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {data.integrations.map(({ name }) => (
              <span
                key={name}
                className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold
                            bg-white border ${data.accent.border} ${data.accent.text} shadow-sm`}
              >
                {name}
              </span>
            ))}
          </div>

          <a
            href="#footer"
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${data.accent.iconBg}
                        text-white font-semibold text-sm hover:opacity-90 hover:scale-105
                        active:scale-95 transition-all shrink-0`}
          >
            See all integrations <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
