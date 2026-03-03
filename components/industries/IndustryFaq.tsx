"use client";

/**
 * IndustryFaq – Industry-specific accordion FAQ.
 * Same pattern as components/Faq.tsx (useState + AnimatePresence height animation).
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import type { IndustryData } from "@/lib/industries-data";

export default function IndustryFaq({ data }: { data: IndustryData }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className={`inline-block px-4 py-1.5 rounded-full ${data.accent.badge}
                            text-xs font-semibold uppercase tracking-widest mb-4`}>
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Common questions about{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              {data.name.toLowerCase()} signage
            </span>
          </h2>
          <p className="text-slate-500 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion items */}
        <div className="divide-y divide-slate-100 border-y border-slate-100">
          {data.faq.map(({ q, a }, idx) => (
            <div key={idx}>
              <button
                className="w-full flex items-center justify-between gap-6 py-5 text-left
                           text-slate-800 hover:text-indigo-600 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
                aria-expanded={open === idx}
              >
                <h3 className="font-semibold text-base leading-snug">{q}</h3>
                <span className={`shrink-0 w-7 h-7 rounded-full ${data.accent.bg} flex items-center justify-center`}>
                  {open === idx
                    ? <Minus className={`w-3.5 h-3.5 ${data.accent.text}`} />
                    : <Plus className={`w-3.5 h-3.5 ${data.accent.text}`} />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === idx && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="pb-5 text-slate-500 leading-relaxed text-sm">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer nudge */}
        <p className="text-center text-sm text-slate-400 mt-10">
          Still have questions?{" "}
          <a href="#" className="text-indigo-600 hover:underline font-medium">
            Talk to our team →
          </a>
        </p>

      </div>
    </section>
  );
}
