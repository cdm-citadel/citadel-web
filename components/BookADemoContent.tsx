"use client";

/**
 * BookADemoContent – Calendly embed placeholder page.
 * Replace the placeholder div with an inline Calendly widget when ready:
 *
 *   1. Add Calendly script to app/layout.tsx:
 *        <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
 *
 *   2. Replace the placeholder div below with:
 *        <div
 *          className="calendly-inline-widget"
 *          data-url="https://calendly.com/YOUR_USERNAME/30min"
 *          style={{ minWidth: "320px", height: "700px" }}
 *        />
 */

import { motion } from "framer-motion";
import { CalendarDays, Clock, Users, CheckCircle2 } from "lucide-react";

const PERKS = [
  { icon: Clock,        text: "30-minute live walkthrough" },
  { icon: Users,        text: "1-on-1 with a product specialist" },
  { icon: CheckCircle2, text: "No commitment required" },
  { icon: CalendarDays, text: "Pick any time that works for you" },
];

export default function BookADemoContent() {
  return (
    <section className="pt-28 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                             text-xs font-semibold uppercase tracking-widest mb-6">
              Book a Demo
            </span>

            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight
                           leading-tight mb-6">
              See Citadel in action.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Live.
              </span>
            </h1>

            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-md">
              Schedule a free 30-minute demo with one of our product specialists. We'll walk
              you through the platform, answer your questions, and show you exactly how
              Citadel fits your business.
            </p>

            <ul className="flex flex-col gap-4">
              {PERKS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: Calendly embed ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/*
              ─────────────────────────────────────────────────────────────────
              CALENDLY EMBED PLACEHOLDER
              Replace this div with your Calendly inline widget:

              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/YOUR_USERNAME/30min"
                style={{ minWidth: "320px", height: "700px" }}
              />

              And add to app/layout.tsx <head>:
              <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
              ─────────────────────────────────────────────────────────────────
            */}
            <div className="relative rounded-3xl border-2 border-dashed border-blue-200
                            bg-blue-50 flex flex-col items-center justify-center
                            text-center p-12 min-h-[560px]">

              {/* Subtle dot-grid overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-3xl opacity-30"
                style={{
                  backgroundImage: "radial-gradient(circle, #93c5fd 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <div className="relative w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-200 mb-6">
                <CalendarDays className="w-8 h-8 text-white" />
              </div>

              <p className="text-base font-bold text-slate-800 mb-2">
                Calendly Widget Goes Here
              </p>
              <p className="text-sm text-slate-500 max-w-xs leading-relaxed mb-6">
                Replace this placeholder with your Calendly inline embed. See the
                comments in{" "}
                <code className="text-blue-600 font-mono text-xs bg-blue-100 px-1.5 py-0.5 rounded">
                  BookADemoContent.tsx
                </code>{" "}
                for setup instructions.
              </p>

              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white
                           text-sm font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-lg shadow-blue-200"
              >
                <CalendarDays className="w-4 h-4" />
                Set up Calendly
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
