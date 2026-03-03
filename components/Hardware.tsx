"use client";

/**
 * Hardware – Citadel Player spotlight section.
 * Single focused layout: left copy + specs, right device visual mockup.
 */

import { motion } from "framer-motion";
import {
  CheckCircle2, Zap, ShieldCheck,
  Wifi, Tv2, Cpu, Package, ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const SPECS = [
  { icon: Tv2,      label: "4K-ready HDMI output" },
  { icon: Wifi,     label: "Dual-band Wi-Fi & Gigabit Ethernet" },
  { icon: Cpu,      label: "Quad-core ARM processor" },
  { icon: Package,  label: "Pre-formatted & ready to plug in" },
];

export default function Hardware() {
  return (
    <section id="hardware" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Hardware
          </span>
          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            One device.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Endless possibilities.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.1} viewport={{ once: true }}
            className="text-lg text-slate-500 max-w-xl mx-auto"
          >
            The Citadel Player ships pre-configured and ready to go. Plug it in, power it on, and your screens are live in minutes.
          </motion.p>
        </div>

        {/* Main content: two-column layout */}
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center max-w-6xl mx-auto">

          {/* ── Left: copy & specs ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }}
          >
            {/* Price badge */}
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white
                            px-4 py-1.5 rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-200">
              <Zap className="w-3.5 h-3.5" />
              Only $60 — no subscription required to purchase
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-4 leading-snug">
              The Citadel Player
            </h3>
            <p className="text-slate-500 leading-relaxed mb-8">
              A purpose-built media player designed specifically for digital signage.
              Compact, silent, and powerful enough to run stunning 4K content on any commercial display.
            </p>

            {/* Spec list */}
            <ul className="flex flex-col gap-3 mb-8">
              {SPECS.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600
                                  flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{label}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <a href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white
                           font-semibold text-sm hover:bg-blue-700 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-lg shadow-blue-200">
                <Zap className="w-4 h-4" />
                Order the Citadel Player
              </a>
              <a href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200
                           text-slate-700 font-semibold text-sm hover:border-blue-300 hover:text-blue-700
                           hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-150">
                Learn more
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Warranty note */}
            <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-5">
              <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
              12-month hardware warranty included with every unit
            </p>

            {/* Powered by Android */}
            <p className="flex items-center gap-1.5 text-xs text-slate-400 mt-2">
              <svg className="w-3.5 h-3.5 text-[#3ddc84]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48A5.84 5.84 0 0012 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31A5.983 5.983 0 006 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z" />
              </svg>
              Powered by Android
            </p>
          </motion.div>

          {/* ── Right: device visual ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-sky-100 to-transparent
                            rounded-3xl blur-3xl opacity-60 scale-90 -z-10" />

            {/* Device card */}
            <div className="relative bg-gradient-to-br from-blue-600 to-blue-800
                            rounded-3xl overflow-hidden shadow-2xl shadow-blue-300/40 w-full max-w-sm mx-auto">

              {/* Device image */}
              <div className="flex items-center justify-center p-6 pb-0">
                <img
                  src="/hardware/citadel-player.webp"
                  alt="Citadel Player"
                  className="w-40 object-contain rounded-2xl border-2 border-blue-400/30 bg-white p-3"
                />
              </div>

              {/* Card content */}
              <div className="relative p-8">
                {/* Decorative circles */}
                <div aria-hidden="true" className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full
                                -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div aria-hidden="true" className="absolute bottom-0 left-0 w-36 h-36 bg-black/10 rounded-full
                                translate-y-1/2 -translate-x-1/4 pointer-events-none" />

                {/* Name & price */}
                <div className="relative z-10 text-center mb-6">
                  <p className="text-white font-extrabold text-xl mb-1">Citadel Player</p>
                  <p className="text-blue-200 text-sm">Compact media player for digital signage</p>
                  <p className="text-3xl font-extrabold text-white mt-3">$60</p>
                  <p className="text-blue-300 text-xs mt-0.5">one-time purchase</p>
                </div>

                {/* Mini spec pills */}
                <div className="relative z-10 flex flex-wrap justify-center gap-2">
                  {["4K Ready", "Wi-Fi", "Ethernet", "Pre-formatted"].map((tag) => (
                    <span key={tag}
                      className="px-3 py-1 rounded-full bg-white/15 border border-white/20
                                 text-white text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status indicator */}
                <div className="relative z-10 flex items-center justify-center gap-2 mt-6
                                bg-white/10 rounded-2xl py-2.5 px-4 border border-white/20">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="text-white text-xs font-semibold">In stock — ships within 2 business days</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
