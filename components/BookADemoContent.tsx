"use client";

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
              Schedule a free 30-minute demo with one of our product specialists. We&apos;ll walk
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
            <div
              className="calendly-inline-widget rounded-3xl overflow-hidden shadow-lg border border-slate-200"
              data-url="https://calendly.com/citadelcenter-info/30min"
              style={{ minWidth: "320px", height: "700px" }}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
