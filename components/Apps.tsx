"use client";

/**
 * Apps – "Powerful apps. All included." dark bento-grid section.
 * Bento layout: featured Canva card (row-span-2 left) + 6 app cards in 3-col grid.
 * Dark navy background with dot-grid and radial glow for depth.
 */

import { motion } from "framer-motion";
import {
  Palette, Cloud, Star, Newspaper,
  HardDrive, Youtube,
  ArrowRight, Camera,
} from "lucide-react";

/* ── App definitions ─────────────────────────────────────────────── */
const FEATURED_APP = {
  name: "Canva",
  description:
    "Design gorgeous slides directly in Canva and push them live to your screens in one click.",
  iconBg: "bg-teal-500",
  iconColor: "text-white",
  icon: Palette,
};

const APPS = [
  {
    name: "Live Weather",
    description: "Real-time forecasts, auto-location.",
    icon: Cloud,
    iconBg: "bg-amber-500",
    iconShadow: "shadow-amber-900/50",
    hoverBorder: "hover:border-amber-500/40",
  },
  {
    name: "Instagram",
    description: "Display your feed and stories live.",
    icon: Camera,
    iconBg: "bg-gradient-to-br from-pink-500 to-purple-600",
    iconShadow: "shadow-pink-900/50",
    hoverBorder: "hover:border-pink-500/40",
  },
  {
    name: "Google Reviews",
    description: "Auto-show your 5-star reviews.",
    icon: Star,
    iconBg: "bg-blue-500",
    iconShadow: "shadow-blue-900/50",
    hoverBorder: "hover:border-blue-500/40",
  },
  {
    name: "News Ticker",
    description: "Scroll live headlines from RSS.",
    icon: Newspaper,
    iconBg: "bg-sky-600",
    iconShadow: "shadow-sky-900/50",
    hoverBorder: "hover:border-sky-500/40",
  },
  {
    name: "Google Drive",
    description: "Slides, Docs, and Sheets — live.",
    icon: HardDrive,
    iconBg: "bg-green-500",
    iconShadow: "shadow-green-900/50",
    hoverBorder: "hover:border-green-500/40",
  },
  {
    name: "YouTube",
    description: "Stream video content seamlessly.",
    icon: Youtube,
    iconBg: "bg-red-500",
    iconShadow: "shadow-red-900/50",
    hoverBorder: "hover:border-red-500/40",
  },
];

/* ── Animation ───────────────────────────────────────────────────── */
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

/* ── Small app card ──────────────────────────────────────────────── */
function AppCard({ app }: { app: (typeof APPS)[0] }) {
  const Icon = app.icon;
  return (
    <motion.div
      variants={item}
      className={`group bg-[#0d1526] border border-[#1e2d45] rounded-2xl p-5
                 ${app.hoverBorder} hover:bg-[#111e34]
                 transition-all duration-200 cursor-default`}
    >
      <div className={`w-10 h-10 rounded-xl ${app.iconBg} flex items-center justify-center mb-4 shadow-lg ${app.iconShadow}`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="font-semibold text-white text-sm mb-1">{app.name}</p>
      <p className="text-slate-400 text-xs leading-relaxed">{app.description}</p>
    </motion.div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function Apps() {
  const FeaturedIcon = FEATURED_APP.icon;

  return (
    <section className="relative py-24 bg-[#07091a] overflow-hidden">

      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Central radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[700px] h-[500px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 text-blue-300
                       border border-blue-700/40 text-xs font-semibold uppercase tracking-widest mb-4"
          >
            App Gallery
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4"
          >
Powerful apps. All included.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed"
          >
            No extra fees. No plugins to install. Activate any app and watch your
            screens come alive with live, dynamic content.
          </motion.p>
        </div>

        {/* ── Bento grid ── */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >

          {/* Featured card – Canva (row-span-2 on large screens) */}
          <motion.div
            variants={item}
            className="group lg:row-span-2 bg-[#0d1526] border border-[#1e2d45] rounded-2xl p-7
                       flex flex-col hover:border-teal-500/50 hover:bg-[#0e1e2e]
                       transition-all duration-200 cursor-default"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center mb-auto shadow-lg shadow-teal-900/60">
              <FeaturedIcon className="w-7 h-7 text-white" strokeWidth={2} />
            </div>

            {/* Spacer so text sits lower on large screens */}
            <div className="flex-1 min-h-[60px]" />

            <p className="text-xl font-bold text-white mb-2">{FEATURED_APP.name}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              {FEATURED_APP.description}
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-teal-400 text-sm font-semibold
                         hover:text-teal-300 group transition-colors"
            >
              Connect now
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* App cards */}
          {APPS.map((app) => (
            <AppCard key={app.name} app={app} />
          ))}

        </motion.div>
      </div>
    </section>
  );
}
