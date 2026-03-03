"use client";

/**
 * Monetization – CitadelAds callout section.
 * Bold split layout with gradient accent and revenue-focused copy.
 */

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Users, Megaphone, ArrowRight } from "lucide-react";

const BENEFITS = [
  { icon: Users,      label: "Direct advertiser network access" },
  { icon: DollarSign, label: "Automated CPM & CPC billing" },
  { icon: TrendingUp, label: "Revenue analytics dashboard" },
];

export default function Monetization() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700
                        rounded-3xl overflow-hidden p-10 md:p-16">

          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">

            {/* ── Left: copy ── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold
                              px-3 py-1.5 rounded-full mb-5">
                <Megaphone className="w-3.5 h-3.5" />
                CitadelAds — Monetize your network
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
                Turn your screens into{" "}
                <span className="text-yellow-300">revenue generators.</span>
              </h2>

              <p className="text-indigo-100 text-base leading-relaxed mb-8 max-w-lg">
                With CitadelAds, bring advertisers directly to your network with a few simple
                clicks. Set your rates, approve campaigns, and watch the revenue roll in — all
                without leaving the Citadel dashboard.
              </p>

              <ul className="flex flex-col gap-3 mb-8">
                {BENEFITS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm font-medium text-white">{label}</span>
                  </li>
                ))}
              </ul>

              <a href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-indigo-700
                           font-semibold text-sm hover:bg-indigo-50 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-lg">
                Explore CitadelAds
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            {/* ── Right: earnings card mockup ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hidden md:flex flex-col gap-4"
            >
              {/* Earnings card */}
              <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 border border-white/20">
                <p className="text-indigo-200 text-xs font-semibold uppercase tracking-widest mb-1">
                  This Month
                </p>
                <p className="text-4xl font-extrabold text-white mb-1">$3,240</p>
                <p className="flex items-center gap-1 text-sm text-green-300 font-medium">
                  <TrendingUp className="w-4 h-4" /> +18% vs last month
                </p>
              </div>

              {/* Campaign cards */}
              {[
                { name: "Acme Corp Summer Sale",    cpm: "$4.20", status: "Active",  dot: "bg-green-400" },
                { name: "Metro Coffee – Breakfast", cpm: "$3.80", status: "Active",  dot: "bg-green-400" },
                { name: "Rapid Insurance Q3",       cpm: "$5.10", status: "Pending", dot: "bg-yellow-400" },
              ].map(({ name, cpm, status, dot }) => (
                <div key={name}
                  className="flex items-center justify-between bg-white/10 backdrop-blur-sm
                             rounded-xl px-4 py-3 border border-white/15">
                  <div className="flex items-center gap-2.5">
                    <span className={`w-2 h-2 rounded-full shrink-0 ${dot}`} />
                    <span className="text-xs font-medium text-white">{name}</span>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-white">{cpm}</p>
                    <p className="text-[10px] text-indigo-200">{status}</p>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
