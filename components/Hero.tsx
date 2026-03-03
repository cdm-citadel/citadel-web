"use client";

/**
 * Hero – full-width hero section with headline, subheadline, dual CTAs,
 * and a floating animated dashboard mockup on the right.
 */

import { motion } from "framer-motion";
import {
  ArrowRight, Play, Monitor, BarChart3, Layers,
  Clock, CheckCircle2, Wifi,
} from "lucide-react";

/* ── Animation variants ──────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── Dashboard mockup ────────────────────────────────────────────── */
function DashboardMockup() {
  const stats = [
    { icon: Monitor,  label: "Active Screens", value: "12",    bg: "bg-blue-50",    fg: "text-blue-600"    },
    { icon: BarChart3, label: "Plays Today",   value: "1,429", bg: "bg-sky-50",     fg: "text-sky-600"     },
    { icon: Layers,   label: "Templates",      value: "48",    bg: "bg-emerald-50", fg: "text-emerald-600" },
  ];

  return (
    <div className="relative w-full max-w-[580px] mx-auto select-none">
      {/* Ambient glow behind the card */}
      <div className="absolute inset-0 -z-10 blur-3xl opacity-25 rounded-3xl
                      bg-gradient-to-br from-blue-400 via-sky-400 to-blue-600 scale-90" />

      {/* Main floating card */}
      <div className="float-anim rounded-2xl bg-white border border-slate-200
                      shadow-2xl shadow-slate-300/40 overflow-hidden">

        {/* Window chrome bar */}
        <div className="bg-slate-900 px-4 py-3 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-400" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-400" />
          <span className="ml-4 text-xs text-slate-400 font-mono tracking-wide">
            Citadel Dashboard
          </span>
          <div className="ml-auto flex items-center gap-1.5">
            <Wifi className="w-3.5 h-3.5 text-green-400" />
            <span className="text-xs text-green-400 font-medium">12 / 12 Online</span>
          </div>
        </div>

        {/* Dashboard body */}
        <div className="p-5 bg-slate-50 grid grid-cols-3 gap-3">

          {/* Stat cards */}
          {stats.map(({ icon: Icon, label, value, bg, fg }) => (
            <div key={label} className="bg-white rounded-xl p-3 border border-slate-100 shadow-sm">
              <div className={`w-7 h-7 rounded-lg ${bg} ${fg} flex items-center justify-center mb-2`}>
                <Icon className="w-3.5 h-3.5" />
              </div>
              <p className="text-lg font-bold text-slate-900 leading-none">{value}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{label}</p>
            </div>
          ))}

          {/* Live screens grid */}
          <div className="col-span-3 bg-white rounded-xl border border-slate-100 shadow-sm p-3">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-700">Live Screens</span>
              <span className="text-[10px] text-blue-600 font-medium cursor-pointer hover:underline">
                View all →
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className={`aspect-video rounded-lg flex items-center justify-center ${
                    i < 7
                      ? "bg-gradient-to-br from-blue-500 to-sky-500 text-white"
                      : "bg-slate-100 text-slate-400 border-2 border-dashed border-slate-200 text-[8px] font-semibold"
                  }`}
                >
                  {i < 7
                    ? <CheckCircle2 className="w-3 h-3 opacity-80" />
                    : "+ Add"
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Schedule row */}
          <div className="col-span-3 bg-white rounded-xl border border-slate-100 shadow-sm p-3">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-3.5 h-3.5 text-blue-500" />
              <span className="text-xs font-semibold text-slate-700">Active Schedule</span>
            </div>
            <div className="flex gap-1">
              {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((d, i) => (
                <div
                  key={d}
                  className={`flex-1 h-5 rounded text-[8px] flex items-center justify-center font-medium ${
                    i < 5 ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-400"
                  }`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating badge – top right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
        className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100
                   px-3.5 py-2 flex items-center gap-2 z-10"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">All screens live</span>
      </motion.div>

      {/* Floating badge – bottom left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
        className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-100
                   px-3.5 py-2 flex items-center gap-2 z-10"
      >
        <BarChart3 className="w-4 h-4 text-blue-600" />
        <span className="text-xs font-semibold text-slate-700 whitespace-nowrap">+24% engagement</span>
      </motion.div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">

      {/* Background gradient mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow pill */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-blue-100 text-blue-700 text-sm font-semibold mb-6
                         border border-blue-200"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Trusted by 3,000+ screens worldwide
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900
                         leading-[1.1] tracking-tight mb-6"
            >
              Master Your Brand{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                on Any Screen.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={0.2}
              className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed"
            >
              The easiest, most powerful digital signage software to manage your
              screens, engage your customers, and drive revenue. Built for businesses
              of all sizes.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0.3}
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="https://app.citadeldigitalsignage.com/tenant-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           bg-blue-600 text-white font-semibold text-sm
                           hover:bg-blue-700 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-lg shadow-blue-200"
              >
                Get Started for Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/book-a-demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           border-2 border-slate-200 text-slate-700 font-semibold text-sm
                           hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50
                           hover:scale-105 active:scale-95 transition-all duration-150"
              >
                <Play className="w-4 h-4 fill-current" />
                View Demo
              </a>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0.4}
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"
            >
              {["No credit card required", "Free 14-day trial", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  {t}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ── Right: mockup ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block"
          >
            <DashboardMockup />
          </motion.div>

          {/* Mobile mockup (smaller, no absolute badges) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:hidden mt-4"
          >
            <DashboardMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
