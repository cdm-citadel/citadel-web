"use client";

/**
 * HowItWorks – 3-step onboarding explainer.
 * "Up and running in minutes."
 */

import { motion } from "framer-motion";
import { Upload, LayoutGrid, Link } from "lucide-react";

const STEPS = [
  {
    number: "1",
    icon: Upload,
    title: "Upload",
    description:
      "Add your images, videos, and Canva designs directly to your media library. Everything in one place, ready to use.",
  },
  {
    number: "2",
    icon: LayoutGrid,
    title: "Organize",
    description:
      "Build playlists, set schedules, and arrange your content with drag and drop. No design skills required.",
  },
  {
    number: "3",
    icon: Link,
    title: "Pair",
    description:
      "Connect the Citadel Player to any HDMI display and pair it to your dashboard in seconds — no IT team required.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                       text-xs font-semibold uppercase tracking-widest mb-4"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
          >
            Up and running{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              in minutes.
            </span>
          </motion.h2>
        </div>

        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid md:grid-cols-3 gap-8 relative"
        >
          {/* Connector line (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[252px] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)]
                       h-px bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200"
          />

          {STEPS.map(({ number, icon: Icon, title, description }) => (
            <motion.div
              key={number}
              variants={item}
              className="relative flex flex-col items-center text-center"
            >
              {/* Image placeholder */}
              <div className="w-full rounded-2xl bg-slate-100 border-2 border-dashed border-slate-200
                              h-48 mb-6 flex items-center justify-center">
                <span className="text-slate-400 text-sm font-medium">Step {number} image</span>
              </div>

              {/* Step circle */}
              <div className="relative mb-6">
                <div className="w-[72px] h-[72px] rounded-full bg-white border-2 border-blue-200
                                flex items-center justify-center shadow-md shadow-blue-100 z-10 relative">
                  <Icon className="w-7 h-7 text-blue-600" strokeWidth={1.75} />
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600
                                 text-white text-xs font-bold flex items-center justify-center z-20">
                  {number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{description}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
