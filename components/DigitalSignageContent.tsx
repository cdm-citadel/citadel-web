"use client";

/**
 * DigitalSignageContent – Full digital-signage product page.
 * Sections:
 *   1. Hero
 *   2. Stats bar
 *   3. Three core pillars
 *   4. Feature deep-dives (4 alternating sections)
 *   5. Capabilities grid (16 items)
 *   6. Industries quick links
 *   7. FAQ
 *   8. Final CTA
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ChevronDown, Play,
  Monitor, BarChart2, Layers, Clock, Zap,
  Lock, Users, Calendar, Wifi, Cloud,
  RefreshCcw, Tv, Layout, ShieldCheck,
  Sparkles, MousePointer2, Puzzle, Plus, Info,
} from "lucide-react";
import IndustriesGrid from "@/components/IndustriesGrid";

/* ─── Animation helpers ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ─── 1. HERO ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left: copy */}
          <div>
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={0}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              #1 Cloud Digital Signage Platform
            </motion.div>

            <motion.h1
              variants={fadeUp} initial="hidden" animate="show" custom={0.1}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900
                         leading-[1.1] tracking-tight mb-6"
            >
              Digital Signage That{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                Brings Every Screen to Life
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp} initial="hidden" animate="show" custom={0.2}
              className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed"
            >
              Create, schedule, and publish content across all your screens from
              one cloud dashboard — no IT team, no complexity, no downtime.
              Trusted by 3,000+ screens worldwide.
            </motion.p>

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
                Start Free Trial
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
                Watch Demo
              </a>
            </motion.div>

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

          {/* Right: actual platform UI mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 rounded-3xl
                            bg-gradient-to-br from-blue-400 via-sky-400 to-blue-600 scale-90" />

            {/* Browser chrome */}
            <div className="rounded-2xl bg-white border border-slate-200 shadow-2xl shadow-slate-300/40 overflow-hidden">
              <div className="bg-slate-800 px-4 py-2.5 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                <div className="ml-3 flex-1 bg-slate-700 rounded px-3 py-1 text-[10px] text-slate-400 font-mono">
                  app.citadelds.io/screens
                </div>
              </div>

              {/* App shell — sidebar + main, modal overlaid */}
              <div className="relative flex h-[365px] overflow-hidden">

                {/* ── Sidebar ── */}
                <div className="w-[132px] shrink-0 bg-slate-900 flex flex-col">
                  {/* Logo row */}
                  <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-slate-700/60">
                    <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center shrink-0">
                      <Monitor className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white text-[11px] font-bold">Citadel</span>
                    <span className="ml-auto text-[7px] bg-blue-600 text-white px-1.5 py-0.5 rounded font-semibold">
                      Manage Plan
                    </span>
                  </div>

                  {/* Nav items */}
                  <div className="flex-1 px-2 py-2 overflow-hidden">
                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest px-1.5 mt-1 mb-1">
                      Streaming
                    </p>
                    {[
                      { label: "Screens",     active: true  },
                      { label: "Channels",    active: false },
                      { label: "Playlists",   active: false },
                      { label: "Files/Assets",active: false },
                    ].map(({ label, active }) => (
                      <div
                        key={label}
                        className={`px-2 py-1.5 rounded text-[10px] font-medium mb-0.5 ${
                          active ? "bg-blue-600 text-white" : "text-slate-400"
                        }`}
                      >
                        {label}
                      </div>
                    ))}

                    <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest px-1.5 mt-3 mb-1">
                      Administration
                    </p>
                    {["Tags", "Bulk Actions", "Analytics", "Exports"].map((label) => (
                      <div key={label} className="px-2 py-1.5 rounded text-[10px] text-slate-400 mb-0.5">
                        {label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Main content ── */}
                <div className="flex-1 flex flex-col bg-slate-50 min-w-0 overflow-hidden">
                  {/* Toolbar */}
                  <div className="bg-white border-b border-slate-100 px-3 py-2 flex items-center gap-2 shrink-0">
                    <span className="text-[12px] font-bold text-slate-800 shrink-0">Screens</span>
                    <div className="flex-1 min-w-0 bg-slate-100 rounded px-2 py-1 text-[9px] text-slate-400 truncate">
                      Search screens by name or pin...
                    </div>
                    <div className="w-5 h-5 bg-slate-100 rounded-full flex items-center justify-center shrink-0">
                      <Info className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="flex items-center gap-1 bg-blue-600 text-white text-[8px] font-semibold px-2 py-1.5 rounded shrink-0">
                      <Plus className="w-2.5 h-2.5" />
                      Create New Screen
                    </div>
                  </div>

                  {/* Table header */}
                  <div className="flex items-center px-3 py-1.5 bg-white border-b border-slate-100 shrink-0">
                    <div className="w-3 h-3 rounded border border-slate-300 shrink-0 mr-3" />
                    <span className="flex-1 text-[9px] font-semibold text-slate-500 uppercase tracking-wide">Name</span>
                    <span className="text-[9px] font-semibold text-slate-500 uppercase tracking-wide w-14 text-right">PIN</span>
                    <div className="w-5" />
                  </div>

                  {/* Rows */}
                  {[
                    { name: "My Screen 1",  pin: "000000" },
                    { name: "My Screen 2",  pin: "000000" },
                    { name: "My Screen 3",  pin: "000000" },
                    { name: "My Screen 4",  pin: "000000", highlight: true },
                    { name: "My Screen 5",  pin: "000000" },
                    { name: "My Screen 6",  pin: "000000" },
                    { name: "My Screen 7",  pin: "000000" },
                  ].map(({ name, pin, highlight }) => (
                    <div
                      key={name}
                      className={`flex items-center px-3 py-2 border-b border-slate-50 shrink-0 ${
                        highlight ? "bg-blue-50/70" : "bg-white"
                      }`}
                    >
                      <div className="w-3 h-3 rounded border border-slate-200 shrink-0 mr-3" />
                      <span className={`flex-1 text-[10px] truncate ${
                        highlight ? "text-blue-700 font-semibold" : "text-slate-700"
                      }`}>
                        {name}
                      </span>
                      <span className={`text-[10px] font-mono w-14 text-right shrink-0 ${
                        highlight ? "text-blue-600 font-bold" : "text-blue-500"
                      }`}>
                        {pin}
                      </span>
                      <div className="w-5 shrink-0 text-center text-slate-200 text-[10px]">×</div>
                    </div>
                  ))}

                  {/* Pagination */}
                  <div className="mt-auto bg-white border-t border-slate-100 px-3 py-1.5 flex items-center justify-between shrink-0">
                    <span className="text-[9px] text-slate-400">25 per page</span>
                    <span className="text-[9px] text-slate-400">Page 1 of 12 (282 total rows)</span>
                  </div>
                </div>

                {/* ── Modal overlay ── */}
                <div className="absolute inset-0 bg-black/25 flex items-center justify-center z-20">
                  <div className="bg-white rounded-xl shadow-2xl w-[260px] overflow-hidden border border-slate-200">

                    {/* Modal header */}
                    <div className="px-4 pt-3.5 pb-2.5 border-b border-slate-100">
                      <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                        <span className="text-[11px] font-bold text-slate-900 leading-tight">
                          Screen – My Screen 4
                        </span>
                        <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[8px] font-bold rounded-full shrink-0">
                          Online
                        </span>
                      </div>
                      <p className="text-[9px] text-slate-400">View and manage screen information.</p>
                    </div>

                    {/* Tabs */}
                    <div className="flex border-b border-slate-100 overflow-x-hidden">
                      {["Screen Info", "Playback", "Scheduling", "Location"].map((tab, i) => (
                        <button
                          key={tab}
                          className={`px-2.5 py-1.5 text-[8px] font-semibold whitespace-nowrap ${
                            i === 0
                              ? "border-b-2 border-blue-600 text-blue-600"
                              : "text-slate-400"
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>

                    {/* Modal body */}
                    <div className="px-4 py-3 space-y-2.5">
                      <div>
                        <p className="text-[9px] font-semibold text-slate-600 mb-1">Screen Name *</p>
                        <div className="border border-slate-200 rounded-lg px-3 py-1.5 text-[10px] text-slate-700">
                          My Screen 4
                        </div>
                      </div>
                      <div className="flex gap-4 flex-wrap">
                        <div>
                          <span className="text-[9px] text-slate-500">PIN: </span>
                          <span className="text-[10px] text-blue-600 font-mono font-bold">000000</span>
                          <RefreshCcw className="w-2.5 h-2.5 text-slate-400 inline ml-1" />
                        </div>
                        <div>
                          <span className="text-[9px] text-slate-500">Device: </span>
                          <span className="text-[10px] text-slate-700">Desktop App</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-500">Last Online: </span>
                        <span className="text-[10px] text-slate-600">Feb 21, 2026, 12:04 AM</span>
                      </div>
                      <div>
                        <p className="text-[9px] font-semibold text-slate-600 mb-1">Notes</p>
                        <div className="border border-slate-200 rounded-lg px-3 py-2 text-[9px] text-slate-500 bg-slate-50 h-11 overflow-hidden leading-relaxed">
                          These are my notes...
                        </div>
                      </div>
                    </div>

                    {/* Modal footer */}
                    <div className="px-4 py-2.5 border-t border-slate-100 flex justify-end gap-2">
                      <button className="px-3 py-1.5 text-[9px] font-semibold text-slate-600 border border-slate-200 rounded-lg">
                        Cancel
                      </button>
                      <button className="px-3 py-1.5 text-[9px] font-semibold text-slate-400 bg-slate-100 rounded-lg">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.4, ease: "backOut" }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100
                         px-3.5 py-2 flex items-center gap-2 z-10"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-semibold text-slate-700">282 screens online</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.4, ease: "backOut" }}
              className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-100
                         px-3.5 py-2 flex items-center gap-2 z-10"
            >
              <BarChart2 className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-slate-700">+31% engagement</span>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── 2. STATS BAR ──────────────────────────────────────────────── */
const STATS = [
  { value: "99.9%",  label: "Platform uptime SLA" },
  { value: "< 5 min", label: "Average setup time" },
  { value: "6", label: "Built-in apps included" },
  { value: "3,000+", label: "Screens managed" },
];

function StatsBar() {
  return (
    <section className="py-12 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {STATS.map(({ value, label }, i) => (
            <motion.div
              key={label}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.08}
              viewport={{ once: true }}
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-sm text-slate-400">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 3. CORE PILLARS ───────────────────────────────────────────── */
const PILLARS = [
  {
    icon: ShieldCheck,
    color: "bg-blue-100 text-blue-600",
    title: "Reliability You Can Count On",
    description:
      "99.9% uptime SLA backed by enterprise-grade cloud infrastructure. Screens keep playing even without internet — offline playback built in.",
  },
  {
    icon: Puzzle,
    color: "bg-sky-100 text-sky-600",
    title: "Powerful Apps, All Included",
    description:
      "Canva, YouTube, Instagram, Google Drive, Google Reviews, Live Weather, and News Ticker — all built in at no extra cost. Connect your content and go live in minutes.",
  },
  {
    icon: MousePointer2,
    color: "bg-emerald-100 text-emerald-600",
    title: "Up and Running in Minutes",
    description:
      "Plug in, connect to Wi-Fi, sign in. Publish your first screen in under 5 minutes. No IT team, no training required — the dashboard is that intuitive.",
  },
];

function CorePillars() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Why Citadel
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything you need.{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Nothing you don't.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Built from the ground up for businesses that need real digital signage
            — not a glorified slideshow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {PILLARS.map(({ icon: Icon, color, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.1}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center mb-6`}>
                <Icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. FEATURE DEEP-DIVES ─────────────────────────────────────── */
const FEATURE_SECTIONS = [
  {
    eyebrow: "Content Creation",
    title: "Design in Canva. Go live in one click.",
    description:
      "Citadel connects directly to Canva — the world's most popular design tool. Create stunning slides, menus, promotions, and announcements in Canva, then push them live to any screen instantly. No exporting, no uploading, no hassle.",
    bullets: [
      "Connect your Canva account in seconds",
      "Push any Canva design live to your screens",
      "Access thousands of Canva templates for any industry",
      "Portrait and landscape layouts supported",
    ],
    icon: Layout,
    color: "bg-blue-600",
    bgColor: "bg-blue-50",
    accentText: "text-blue-600",
    reverse: false,
  },
  {
    eyebrow: "Scheduling & Playlists",
    title: "The right content, on the right screen, at the right time",
    description:
      "Combine images, videos, apps, and web pages into rotating playlists. Schedule content by day, time range, or date — set it once and let Citadel handle the rest automatically.",
    bullets: [
      "Day-parting: different content morning, afternoon, evening",
      "Date-range scheduling for seasonal promotions",
      "Playlist looping with adjustable durations",
      "Priority override for urgent announcements",
    ],
    icon: Calendar,
    color: "bg-sky-600",
    bgColor: "bg-sky-50",
    accentText: "text-sky-600",
    reverse: true,
  },
  {
    eyebrow: "Apps & Integrations",
    title: "Powerful apps built in — your content, live on screen",
    description:
      "Every Citadel plan includes a full suite of built-in apps at no extra cost. Display your Canva designs, YouTube videos, Instagram feed, Google Drive files, and more — all without writing a single line of code.",
    bullets: [
      "Canva: design and publish slides in one click",
      "Instagram: display your live feed and stories",
      "Google Drive: Slides, Docs, and Sheets live on screen",
      "YouTube, Live Weather, Google Reviews, News Ticker",
    ],
    icon: Puzzle,
    color: "bg-violet-600",
    bgColor: "bg-violet-50",
    accentText: "text-violet-600",
    reverse: false,
  },
  {
    eyebrow: "Teams & Permissions",
    title: "Give your whole team the right level of access",
    description:
      "Set up your team with role-based permissions. Let regional managers publish to their own screens, give department heads a locked template to fill in, and keep your IT team in control of the master account.",
    bullets: [
      "3 team members on Business, unlimited on Enterprise",
      "Role-based access: Admin, Editor, Viewer",
      "Content approval workflows",
      "Zone-level permissions by location or department",
    ],
    icon: Users,
    color: "bg-emerald-600",
    bgColor: "bg-emerald-50",
    accentText: "text-emerald-600",
    reverse: true,
  },
];

function FeatureSections() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
        {FEATURE_SECTIONS.map(({
          eyebrow, title, description, bullets, icon: Icon, color, bgColor, accentText, reverse,
        }) => (
          <div
            key={title}
            className={`grid lg:grid-cols-2 gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Text side */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            >
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold
                               uppercase tracking-widest mb-5 ${bgColor} ${accentText}`}>
                {eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
                {title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-8">{description}</p>
              <ul className="space-y-3">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className={`w-5 h-5 shrink-0 mt-0.5 ${accentText}`} />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Visual side */}
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" custom={0.1}
              viewport={{ once: true }}
              className={`h-80 rounded-3xl ${bgColor} border-2 border-dashed border-current
                          ${accentText} opacity-60 flex items-center justify-center`}
            >
              <div className={`w-20 h-20 rounded-2xl ${color} flex items-center justify-center shadow-xl`}>
                <Icon className="w-10 h-10 text-white" />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─── 5. CAPABILITIES GRID ──────────────────────────────────────── */
const CAPABILITIES = [
  { icon: Layers,      title: "Images & Videos",      desc: "JPEG, PNG, MP4, GIF — display any file type on any screen." },
  { icon: Puzzle,      title: "App Integrations",     desc: "Built-in apps: Canva, YouTube, Instagram, Google Drive, Google Reviews, Live Weather & News Ticker." },
  { icon: RefreshCcw,  title: "Playlist Looping",     desc: "Build rotating playlists that cycle through content 24/7." },
  { icon: Calendar,    title: "Content Scheduling",   desc: "Schedule by day, time, date range, or recurring pattern." },
  { icon: Tv,          title: "Portrait & Landscape", desc: "Support any screen orientation — vertical or horizontal." },
  { icon: Cloud,       title: "Offline Playback",     desc: "Content keeps playing even when internet goes down." },
  { icon: Zap,         title: "Auto-Restart",         desc: "Player automatically recovers from power cuts or reboots." },
  { icon: Users,       title: "Multi-User Access",    desc: "3 team members on Business, unlimited on Enterprise — all with role-based permissions." },
  { icon: BarChart2,   title: "Analytics & Reports",  desc: "Track screen uptime, content plays, and engagement metrics." },
  { icon: Lock,        title: "Kiosk Mode",           desc: "Lock screens to a single app or webpage — perfect for lobbies." },
  { icon: Layers,      title: "Canva Integration",    desc: "Design in Canva and publish to any screen in one click — no exporting or uploading." },
  { icon: Monitor,     title: "Any Display",          desc: "Works with any commercial display — no proprietary hardware needed." },
];

function CapabilitiesGrid() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Full Platform
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Every capability you need,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              included as standard
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No bolt-ons, no hidden fees. Everything below ships with every Citadel plan.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CAPABILITIES.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.04}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-5 border border-slate-100 hover:shadow-md
                         hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1.5">{title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 6. INDUSTRIES QUICK LINKS – rendered via shared IndustriesGrid component ── */

/* ─── 7. FAQ ────────────────────────────────────────────────────── */
const FAQ_ITEMS = [
  {
    q: "What is digital signage and how does it work?",
    a: "Digital signage is the use of networked electronic displays — TVs, monitors, kiosks — to show dynamic content like video, images, data feeds, and live information. Citadel lets you manage all your screens from a cloud dashboard: you create content, schedule it, and it plays automatically on connected screens — no USB sticks or manual updates required.",
  },
  {
    q: "What hardware do I need to get started?",
    a: "You need a display (any commercial TV or monitor) and a Citadel Player device (from $60). Plug the Player into your screen's HDMI port, connect it to Wi-Fi, and sign in to the Citadel dashboard. That's it — you can be up and running in under 5 minutes. Citadel is also compatible with existing Android media players and Amazon Fire Stick.",
  },
  {
    q: "Can I manage screens in multiple locations?",
    a: "Yes. Citadel is built for multi-site businesses. Group screens by location, floor, or department and manage them all from one login. Push content to a single screen or every screen in your network simultaneously — with no limit on the number of locations.",
  },
  {
    q: "Does Citadel work if the internet goes down?",
    a: "Yes. Citadel's offline playback mode caches your scheduled content locally on the Player device. If internet connectivity is lost, your screens continue playing the last synced playlist without interruption. Screens re-sync automatically once connectivity is restored.",
  },
  {
    q: "What integrations are available?",
    a: "Every Citadel plan includes built-in integrations with Canva, YouTube, Instagram, Google Drive, Google Reviews, Live Weather, and News Ticker — all at no extra charge and ready to use from day one.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. Citadel offers a free 14-day trial with access to all Business plan features — no credit card required. You can connect up to 3 screens during the trial and publish unlimited content.",
  },
];

function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Common questions about digital signage
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map(({ q, a }, i) => (
            <motion.div
              key={q}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.05}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-slate-900 pr-4">{q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200
                             ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 8. FINAL CTA ──────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-sky-800
                     rounded-3xl px-8 py-20 text-center overflow-hidden"
        >
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold
                            px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Free 14-day trial. No credit card required.
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white
                           leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Ready to level up your digital signage?
            </h2>
            <p className="text-lg text-blue-100 max-w-xl mx-auto mb-10">
              Join thousands of businesses using Citadel to engage customers,
              inform teams, and grow revenue — one screen at a time.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.citadeldigitalsignage.com/tenant-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700
                           font-bold text-base hover:bg-blue-50 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-xl shadow-blue-900/20">
                Start your free trial
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/book-a-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30
                           text-white font-semibold text-base hover:border-white hover:bg-white/10
                           hover:scale-105 active:scale-95 transition-all duration-150">
                Schedule a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── ROOT EXPORT ───────────────────────────────────────────────── */
export default function DigitalSignageContent() {
  return (
    <>
      <Hero />
      <StatsBar />
      <CorePillars />
      <FeatureSections />
      <CapabilitiesGrid />
      <IndustriesGrid />
      <FaqSection />
      <CtaSection />
    </>
  );
}
