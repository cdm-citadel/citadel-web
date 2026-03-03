"use client";

/**
 * IndustryHero – Two-column hero for industry landing pages.
 * Left:  breadcrumb, eyebrow, H1, sub, CTAs, 3-step how-it-works strip, stats.
 * Right: monitor frame with vivid industry-gradient slide + floating CMS control panel.
 */

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Clock } from "lucide-react";
import { ICON_MAP } from "./icon-map";
import { getScreenGradient } from "@/lib/screen-gradient-map";
import type { IndustryData } from "@/lib/industries-data";

export default function IndustryHero({ data }: { data: IndustryData }) {
  const MainIcon = ICON_MAP[data.lucideIcon] ?? ICON_MAP.Monitor;
  const screenGradient = getScreenGradient(data.slug);

  return (
    <section className="pt-28 pb-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-slate-400">
            <li>
              <Link href="/" className="hover:text-indigo-600 transition-colors">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#industries" className="hover:text-indigo-600 transition-colors">Industries</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-slate-700 font-medium">{data.name}</li>
          </ol>
        </nav>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: text ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Eyebrow */}
            <span className={`inline-block px-4 py-1.5 rounded-full ${data.accent.badge}
                              text-xs font-semibold uppercase tracking-widest mb-6`}>
              {data.hero.eyebrow}
            </span>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight
                           leading-tight mb-6">
              {data.hero.headline}
            </h1>

            {/* Sub */}
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg">
              {data.hero.sub}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="https://app.citadeldigitalsignage.com/tenant-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-indigo-600
                           text-white font-bold text-sm hover:bg-indigo-700 hover:scale-105
                           active:scale-95 transition-all shadow-lg shadow-indigo-200"
              >
                Start Free Trial <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/book-a-demo"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2
                           border-slate-200 text-slate-700 font-semibold text-sm
                           hover:border-indigo-300 hover:text-indigo-600 transition-all"
              >
                <PlayCircle className="w-4 h-4" /> Book a Demo
              </a>
            </div>

            {/* 3-step "How it works" strip */}
            <div className="flex items-center gap-2 flex-wrap mb-10">
              {([
                { n: "1", label: "Design" },
                { n: "2", label: "Schedule" },
                { n: "3", label: "Publish" },
              ] as const).map((step, i, arr) => (
                <React.Fragment key={step.n}>
                  <div className="flex items-center gap-1.5">
                    <span className={`w-5 h-5 rounded-full ${data.accent.iconBg} text-white
                                      text-[10px] font-bold flex items-center justify-center shrink-0`}>
                      {step.n}
                    </span>
                    <span className="text-xs text-slate-600 font-medium">{step.label}</span>
                  </div>
                  {i < arr.length - 1 && (
                    <ArrowRight className="w-3 h-3 text-slate-300 shrink-0" />
                  )}
                </React.Fragment>
              ))}
              <span className="ml-2 text-[10px] text-slate-400 italic">No design experience needed</span>
            </div>

            {/* Stats strip */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              {data.hero.stats.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-2xl sm:text-3xl font-extrabold ${data.accent.text}`}>
                    {stat.value}
                  </p>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: monitor mockup ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Backdrop accent blob */}
            <div
              aria-hidden="true"
              className={`absolute inset-6 ${data.accent.bg} rounded-3xl -rotate-3 scale-105 -z-10`}
            />

            {/* Monitor bezel */}
            <div className="bg-slate-800 rounded-2xl p-3 shadow-2xl border border-slate-700">

              {/* Screen interior — vivid industry gradient */}
              <div className={`relative rounded-xl overflow-hidden aspect-video
                               bg-gradient-to-br ${screenGradient} p-5 flex flex-col justify-between`}>

                {/* Top bar: icon + header + Live badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center">
                      <MainIcon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-white/90 text-xs font-semibold">
                      {data.hero.mockScreen.header}
                    </span>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] font-semibold
                                   bg-white/20 text-white px-2 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    {data.hero.mockScreen.badge}
                  </span>
                </div>

                {/* Content rows */}
                <div className="space-y-2">
                  {data.hero.mockScreen.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg px-3 py-2
                                 bg-white/10 backdrop-blur-sm border border-white/10"
                    >
                      <span className="text-white/70 text-xs">{item.label}</span>
                      <span className={`text-sm font-bold ${item.accent ? "text-white" : "text-white/90"}`}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom ticker */}
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <span className="text-white/50 text-[10px] font-mono uppercase tracking-widest">
                    Powered by CitadelDS
                  </span>
                  <span className="text-white/30 text-[10px]">citadeldigitalsignage.com</span>
                </div>
              </div>

              {/* Monitor stand */}
              <div className="flex flex-col items-center mt-3">
                <div className="w-1 h-4 bg-slate-700 rounded" />
                <div className="w-20 h-2.5 bg-slate-700 rounded-full" />
              </div>
            </div>

            {/* Floating CMS control panel */}
            <motion.div
              initial={{ opacity: 0, y: 16, x: -16 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-8 bg-white shadow-xl rounded-2xl p-4 w-56
                         z-20 border border-slate-100"
            >
              {/* Header row */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-800 tracking-tight">CitadelDS</span>
                <span className="flex items-center gap-1 text-[10px] font-semibold text-green-600
                                 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  Live
                </span>
              </div>

              {/* 3 slide thumbnails */}
              <div className="flex gap-1.5 mb-3">
                {/* Active slide */}
                <div className={`flex-1 aspect-video rounded-md ${data.accent.iconBg}
                                 ring-2 ring-offset-1 ring-indigo-400
                                 flex items-center justify-center`}>
                  <MainIcon className="w-3 h-3 text-white" />
                </div>
                {/* Next slide */}
                <div className="flex-1 aspect-video rounded-md bg-slate-200 flex items-center justify-center">
                  <span className="text-[8px] text-slate-400 font-semibold">Next</span>
                </div>
                {/* Scheduled */}
                <div className="flex-1 aspect-video rounded-md bg-slate-100 flex items-center justify-center">
                  <Clock className="w-2.5 h-2.5 text-slate-300" />
                </div>
              </div>

              <p className="text-[10px] text-slate-400 leading-snug text-center">
                Update from anywhere, deploy instantly
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
