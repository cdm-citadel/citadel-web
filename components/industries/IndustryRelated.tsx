"use client";

/**
 * IndustryRelated – "Also built for…" cross-link section.
 * Shows related industry cards in the same illustration-style as the home page Industries grid.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ICON_MAP } from "./icon-map";
import { getScreenGradient } from "@/lib/screen-gradient-map";
import type { IndustryData } from "@/lib/industries-data";

type Props = {
  currentName: string;
  related: IndustryData[];
};

export default function IndustryRelated({ currentName, related }: Props) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-slate-500 text-base mb-2">
            Citadel isn&apos;t just for {currentName}.
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Also built for…
          </h2>
        </div>

        {/* Related industry cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {related.map((industry, i) => {
            const Icon = ICON_MAP[industry.lucideIcon] ?? ICON_MAP.Monitor;
            const gradient = getScreenGradient(industry.slug);
            return (
              <motion.div
                key={industry.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/industries/${industry.slug}`}
                  className={`group bg-white rounded-2xl overflow-hidden border
                              ${industry.accent.border} shadow-sm hover:shadow-xl
                              hover:-translate-y-1.5 transition-all duration-300 block`}
                >
                  {/* Illustration area */}
                  <div className={`relative h-36 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                    <div className="absolute w-32 h-32 rounded-full bg-white/5 -top-6 -right-6" />
                    <div className="absolute w-20 h-20 rounded-full bg-white/5 -bottom-4 -left-4" />
                    <div className="absolute inset-0 opacity-10"
                      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                    />
                    <div className="relative w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm
                                    flex items-center justify-center border border-white/30
                                    group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  {/* Text area */}
                  <div className="p-5">
                    <p className="font-bold text-slate-900 mb-1 group-hover:text-indigo-600 transition-colors">
                      {industry.name}
                    </p>
                    <p className="text-sm text-slate-500 leading-relaxed mb-3">
                      {industry.hero.sub.split(" ").slice(0, 10).join(" ")}…
                    </p>
                    <span className={`inline-flex items-center gap-1.5 text-xs font-semibold
                                      ${industry.accent.text} group-hover:gap-2.5 transition-all duration-200`}>
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600
                       hover:text-indigo-700 transition-colors"
          >
            View all 6 industries <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
