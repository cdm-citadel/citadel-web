"use client";

/**
 * HowItWorks – 3-step onboarding explainer.
 * "Up and running in minutes."
 */

import { motion } from "framer-motion";
import { Monitor, Palette, Send } from "lucide-react";

const STEPS = [
  {
    number: "1",
    icon: Monitor,
    title: "Plug In",
    description:
      "Connect the Citadel Player to any HDMI display and power it on. It auto-connects to your dashboard in seconds — no IT team required.",
  },
  {
    number: "2",
    icon: Palette,
    title: "Design",
    description:
      "Connect Canva or upload your own media. Drag and drop images, videos, live feeds, and widgets — no design skills needed.",
  },
  {
    number: "3",
    icon: Send,
    title: "Publish",
    description:
      "Push content to one screen or one thousand with a single click. Schedule, update, and monitor everything in real time.",
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
    <section className="py-24 bg-slate-50">
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
            className="hidden md:block absolute top-9 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)]
                       h-px bg-gradient-to-r from-blue-200 via-sky-200 to-blue-200"
          />

          {STEPS.map(({ number, icon: Icon, title, description }) => (
            <motion.div
              key={number}
              variants={item}
              className="relative flex flex-col items-center text-center"
            >
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
