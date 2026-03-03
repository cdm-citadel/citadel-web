"use client";

/**
 * Testimonials – Social proof cards from real business use cases.
 * 3-column grid; stacks to 1 col on mobile.
 */

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "We replaced 6 manual bulletin boards across our clinic network with Citadel. Patient satisfaction scores improved 22% in the first quarter — screens that inform patients actually work.",
    name: "Dr. Sarah O.",
    role: "Operations Director",
    initials: "SO",
    avatarBg: "bg-teal-500",
  },
  {
    quote:
      "Our in-store promotions used to take 3 days to roll out across 40 locations. With Citadel it takes 4 minutes. Revenue from promoted items is up 18% since launch.",
    name: "Marcus T.",
    role: "Head of Marketing",
    initials: "MT",
    avatarBg: "bg-blue-500",
  },
  {
    quote:
      "We manage 200 screens across our corporate campus from one dashboard. The scheduling engine alone saves our AV team 10+ hours every single week.",
    name: "Priya S.",
    role: "AV & Workplace Tech Lead",
    initials: "PS",
    avatarBg: "bg-sky-500",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Loved by teams who{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              live on their screens.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-500 text-lg max-w-xl mx-auto"
          >
            Real results from businesses across healthcare, retail, and corporate.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map(({ quote, name, role, initials, avatarBg }) => (
            <motion.div
              key={name}
              variants={item}
              className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm
                         hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{quote}&rdquo;
              </blockquote>

              {/* Footer */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${avatarBg} flex items-center justify-center
                                 text-white text-sm font-bold shrink-0`}>
                  {initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{name}</p>
                  <p className="text-xs text-slate-500">{role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
