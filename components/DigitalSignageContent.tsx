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

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, ChevronDown, Play,
  Monitor, BarChart2, Layers, Clock, Zap,
  Lock, Users, Calendar, Wifi, Cloud,
  RefreshCcw, Tv, Layout, ShieldCheck,
  Sparkles, MousePointer2, Puzzle, Plus, Info,
  Palette, Camera, Star, Newspaper, HardDrive, Youtube,
} from "lucide-react";
import IndustriesGrid from "@/components/IndustriesGrid";
import HomeSectionNav from "@/components/HomeSectionNav";

/* ─── Tool cycler (Content Creation headline) ──────────────────── */
const CREATION_TOOLS = ["Canva", "Adobe", "PowerPoint", "Google Slides", "Figma"];

function ToolCycler() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % CREATION_TOOLS.length), 2500);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="relative inline-flex overflow-hidden align-baseline h-[1.35em]">
      <span className="invisible whitespace-nowrap">{CREATION_TOOLS[index]}</span>
      <AnimatePresence mode="wait">
        <motion.span
          key={CREATION_TOOLS[index]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap text-blue-600"
        >
          {CREATION_TOOLS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

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
    <section id="hero" className="relative min-h-[88vh] flex items-center overflow-hidden">
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
                Book a Demo
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

          {/* Right: content-drop illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
            className="relative hidden lg:block h-[460px]"
          >
            {/* Ambient glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-20 rounded-3xl
                            bg-gradient-to-br from-blue-400 via-sky-400 to-blue-600 scale-90" />

            {/* ── Horizontal screen (landscape) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-0 bottom-4 w-[340px]"
            >
              {/* Bezel */}
              <div className="bg-slate-900 rounded-xl p-1.5 shadow-2xl shadow-slate-400/30">
                {/* Screen content — coffee shop menu */}
                <div className="bg-white rounded-lg overflow-hidden h-[200px] flex flex-col">
                  {/* Menu header */}
                  <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-3 py-2 flex items-center justify-between">
                    <span className="text-white text-[11px] font-bold tracking-wide">DAILY SPECIALS</span>
                    <span className="text-amber-200 text-[8px]">Downtown Cafe</span>
                  </div>
                  {/* Menu items */}
                  <div className="flex-1 px-3 py-2 space-y-1.5">
                    {[
                      { item: "Cappuccino", price: "$4.50", hot: true },
                      { item: "Iced Matcha Latte", price: "$5.25", hot: false },
                      { item: "Avocado Toast", price: "$8.00", hot: true },
                      { item: "Acai Bowl", price: "$9.50", hot: false },
                    ].map(({ item, price, hot }) => (
                      <div key={item} className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] text-slate-700 font-medium">{item}</span>
                          {hot && <span className="text-[7px] bg-red-100 text-red-600 px-1 rounded font-bold">HOT</span>}
                        </div>
                        <span className="text-[10px] text-slate-900 font-bold">{price}</span>
                      </div>
                    ))}
                  </div>
                  {/* Promo strip */}
                  <div className="bg-amber-50 border-t border-amber-100 px-3 py-1.5 flex items-center gap-2">
                    <Sparkles className="w-3 h-3 text-amber-500 shrink-0" />
                    <span className="text-[9px] text-amber-700 font-semibold">Happy Hour 3–5 PM — 20% off all drinks!</span>
                  </div>
                </div>
              </div>
              {/* Stand */}
              <div className="mx-auto w-12 h-2 bg-slate-800 rounded-b" />
              <div className="mx-auto w-20 h-1.5 bg-slate-700 rounded-b-lg" />
            </motion.div>

            {/* ── Vertical screen (portrait) ── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute right-4 top-4 w-[180px]"
            >
              {/* Bezel */}
              <div className="bg-slate-900 rounded-xl p-1.5 shadow-2xl shadow-slate-400/30">
                {/* Screen content — news / social feed */}
                <div className="bg-white rounded-lg overflow-hidden h-[290px] flex flex-col">
                  {/* Weather strip */}
                  <div className="bg-gradient-to-r from-sky-500 to-blue-500 px-2.5 py-1.5 flex items-center gap-1.5">
                    <Cloud className="w-3 h-3 text-white" />
                    <span className="text-white text-[9px] font-semibold">72°F Sunny</span>
                    <span className="ml-auto text-sky-100 text-[8px]">New York</span>
                  </div>
                  {/* Image card */}
                  <div className="p-2">
                    <div className="bg-gradient-to-br from-blue-100 to-sky-50 rounded-lg h-[80px] flex items-center justify-center">
                      <div className="text-center">
                        <Monitor className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                        <span className="text-[8px] text-blue-600 font-bold">WELCOME</span>
                      </div>
                    </div>
                  </div>
                  {/* News headlines */}
                  <div className="px-2.5 space-y-2 flex-1">
                    <div>
                      <p className="text-[9px] font-bold text-slate-800 leading-tight">Company Q1 results exceed expectations</p>
                      <p className="text-[8px] text-slate-500 mt-0.5">5 min ago</p>
                    </div>
                    <div className="border-t border-slate-100 pt-2">
                      <p className="text-[9px] font-bold text-slate-800 leading-tight">New office lobby display installed</p>
                      <p className="text-[8px] text-slate-500 mt-0.5">12 min ago</p>
                    </div>
                    <div className="border-t border-slate-100 pt-2">
                      <p className="text-[9px] font-bold text-slate-800 leading-tight">Team event this Friday at 4 PM</p>
                      <p className="text-[8px] text-slate-500 mt-0.5">1 hr ago</p>
                    </div>
                  </div>
                  {/* Ticker */}
                  <div className="bg-slate-900 px-2 py-1">
                    <p className="text-[8px] text-blue-400 font-mono truncate">BREAKING: Digital signage adoption up 34% year-over-year...</p>
                  </div>
                </div>
              </div>
              {/* Stand */}
              <div className="mx-auto w-8 h-2 bg-slate-800 rounded-b" />
              <div className="mx-auto w-14 h-1.5 bg-slate-700 rounded-b-lg" />
            </motion.div>

            {/* ── Floating content tiles ── */}
            {[
              { Icon: Youtube,   label: "Video",    bg: "bg-red-50",     text: "text-red-500",     x: "left-[38%]", y: "top-0",       delay: 0.9,  dur: "6s" },
              { Icon: Cloud,     label: "Weather",  bg: "bg-sky-50",     text: "text-sky-500",     x: "left-[18%]", y: "top-0",       delay: 1.0,  dur: "7s" },
              { Icon: Star,      label: "Social",   bg: "bg-purple-50",  text: "text-purple-500",  x: "right-0",    y: "top-[42%]",   delay: 1.1,  dur: "5.5s" },
              { Icon: Camera,    label: "Images",   bg: "bg-amber-50",   text: "text-amber-500",   x: "left-[2%]",  y: "top-[38%]",   delay: 1.2,  dur: "6.5s" },
              { Icon: Newspaper, label: "News",     bg: "bg-emerald-50", text: "text-emerald-500", x: "left-[48%]", y: "bottom-0",    delay: 1.3,  dur: "7.5s" },
              { Icon: Calendar,  label: "Schedule", bg: "bg-blue-50",    text: "text-blue-500",    x: "right-[8%]", y: "bottom-[10%]", delay: 1.4, dur: "5s" },
            ].map(({ Icon, label, bg, text, x, y, delay, dur }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, scale: 0.6, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay, duration: 0.45, ease: "backOut" }}
                className={`absolute ${x} ${y} z-30`}
              >
                <div
                  className={`${bg} backdrop-blur-sm border border-white/60 rounded-xl p-2 shadow-lg
                              flex flex-col items-center gap-1 w-[56px] cursor-default`}
                  style={{ animation: `float ${dur} ease-in-out infinite`, animationDelay: `${delay}s` }}
                >
                  <Icon className={`w-5 h-5 ${text}`} />
                  <span className={`text-[8px] font-bold ${text}`}>{label}</span>
                </div>
              </motion.div>
            ))}

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.4, ease: "backOut" }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100
                         px-3.5 py-2 flex items-center gap-2 z-40"
            >
              <Tv className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-slate-700">Any screen, any orientation</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.8, duration: 0.4, ease: "backOut" }}
              className="absolute -bottom-8 left-0 bg-white rounded-2xl shadow-xl border border-slate-100
                         px-3.5 py-2 flex items-center gap-2 z-40"
            >
              <Layers className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-semibold text-slate-700">Drag & drop any content</span>
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
    <section id="stats" className="py-12 bg-slate-900">
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
    <section id="pillars" className="py-24 bg-white">
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
    title: "TOOL_CYCLER",
    description:
      "Design content with the tools you already use — Canva, Adobe, PowerPoint, Google Slides, and more. Create stunning slides, menus, promotions, and announcements, then push them live to any screen instantly. No exporting, no uploading, no hassle.",
    bullets: [
      "Canva integration for branded content",
      "Works with Adobe, PowerPoint, Google Slides & more",
      "Push designs live to your screens in one click",
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

/* ─── Canva → Citadel animated visual ─────────────────────────── */
const CANVA_DESIGNS = [
  { title: "Summer Promo", gradient: "from-orange-400 to-pink-500", shapes: "circles" as const },
  { title: "Menu Board", gradient: "from-emerald-400 to-teal-500", shapes: "bars" as const },
  { title: "Welcome Slide", gradient: "from-blue-400 to-violet-500", shapes: "grid" as const },
];

function CanvaToScreen() {
  const [phase, setPhase] = useState<"idle" | "flying" | "landed">("idle");
  const [activeDesign, setActiveDesign] = useState(0);

  useEffect(() => {
    const IDLE = 1800;
    const FLY = 900;
    const LAND = 2000;
    let timeout: ReturnType<typeof setTimeout>;

    const cycle = () => {
      setPhase("idle");
      timeout = setTimeout(() => {
        setPhase("flying");
        timeout = setTimeout(() => {
          setPhase("landed");
          timeout = setTimeout(() => {
            setActiveDesign((p) => (p + 1) % CANVA_DESIGNS.length);
            cycle();
          }, LAND);
        }, FLY);
      }, IDLE);
    };

    cycle();
    return () => clearTimeout(timeout);
  }, []);

  const design = CANVA_DESIGNS[activeDesign];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={0.1}
      viewport={{ once: true }}
      className="relative h-80 rounded-3xl bg-blue-50 overflow-hidden flex items-center justify-center"
    >
      {/* ── Canva card (left side) ── */}
      <motion.div
        animate={
          phase === "flying"
            ? { x: 80, scale: 0.55, opacity: 0 }
            : phase === "landed"
            ? { x: 0, scale: 1, opacity: 0.4 }
            : { x: 0, scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-6 sm:left-10 top-1/2 -translate-y-1/2 w-[130px]"
      >
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Canva header bar */}
          <div className="bg-gradient-to-r from-[#7d2ae8] to-[#00c4cc] px-3 py-1.5 flex items-center gap-1.5">
            <span className="text-white text-[9px] font-bold tracking-wide">Canva</span>
            <div className="ml-auto flex gap-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/40" />
            </div>
          </div>
          {/* Design preview */}
          <div className={`h-[90px] bg-gradient-to-br ${design.gradient} p-3 flex flex-col justify-between`}>
            {design.shapes === "circles" && (
              <>
                <div className="flex gap-1.5">
                  <div className="w-5 h-5 rounded-full bg-white/30" />
                  <div className="w-5 h-5 rounded-full bg-white/20" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-white/50 rounded-full" />
                  <div className="h-1.5 w-10 bg-white/30 rounded-full" />
                </div>
              </>
            )}
            {design.shapes === "bars" && (
              <>
                <div className="flex gap-1 items-end h-8">
                  <div className="w-3 h-4 bg-white/30 rounded-sm" />
                  <div className="w-3 h-6 bg-white/40 rounded-sm" />
                  <div className="w-3 h-8 bg-white/50 rounded-sm" />
                  <div className="w-3 h-5 bg-white/35 rounded-sm" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-14 bg-white/50 rounded-full" />
                  <div className="h-1.5 w-8 bg-white/30 rounded-full" />
                </div>
              </>
            )}
            {design.shapes === "grid" && (
              <>
                <div className="grid grid-cols-3 gap-1">
                  <div className="h-4 bg-white/30 rounded-sm" />
                  <div className="h-4 bg-white/20 rounded-sm" />
                  <div className="h-4 bg-white/40 rounded-sm" />
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-16 bg-white/50 rounded-full" />
                  <div className="h-1.5 w-12 bg-white/30 rounded-full" />
                </div>
              </>
            )}
          </div>
          {/* Design title */}
          <div className="px-3 py-2">
            <AnimatePresence mode="wait">
              <motion.p
                key={activeDesign}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-[10px] font-semibold text-slate-700"
              >
                {design.title}
              </motion.p>
            </AnimatePresence>
            <p className="text-[8px] text-slate-400 mt-0.5">1920 × 1080</p>
          </div>
        </div>
      </motion.div>

      {/* ── Animated connection dots ── */}
      <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex items-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={
              phase === "flying"
                ? { opacity: [0, 1, 0], x: [0, 20, 40], scale: [0.8, 1.2, 0.8] }
                : { opacity: 0.3, x: 0, scale: 1 }
            }
            transition={
              phase === "flying"
                ? { duration: 0.7, delay: i * 0.15, ease: "easeInOut" }
                : { duration: 0.3 }
            }
            className="w-2 h-2 rounded-full bg-blue-500"
          />
        ))}
        <motion.div
          animate={phase === "flying" ? { scale: [1, 1.3, 1], opacity: 1 } : { scale: 1, opacity: 0.4 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 text-blue-500" />
        </motion.div>
      </div>

      {/* ── Citadel screen (right side) ── */}
      <div className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 w-[150px]">
        {/* Monitor bezel */}
        <div className="bg-[#1a1a1a] rounded-xl p-1.5 pb-2.5 shadow-xl">
          <div className="rounded-lg overflow-hidden bg-slate-900 relative" style={{ aspectRatio: "16/9" }}>
            {/* Screen content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={phase === "landed" ? `landed-${activeDesign}` : "empty"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                {phase === "landed" ? (
                  <div className={`w-full h-full bg-gradient-to-br ${design.gradient} p-2 flex flex-col justify-between`}>
                    {design.shapes === "circles" && (
                      <>
                        <div className="flex gap-1">
                          <div className="w-3 h-3 rounded-full bg-white/30" />
                          <div className="w-3 h-3 rounded-full bg-white/20" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="h-1 w-12 bg-white/50 rounded-full" />
                          <div className="h-1 w-8 bg-white/30 rounded-full" />
                        </div>
                      </>
                    )}
                    {design.shapes === "bars" && (
                      <>
                        <div className="flex gap-0.5 items-end h-5">
                          <div className="w-2 h-2.5 bg-white/30 rounded-sm" />
                          <div className="w-2 h-4 bg-white/40 rounded-sm" />
                          <div className="w-2 h-5 bg-white/50 rounded-sm" />
                          <div className="w-2 h-3 bg-white/35 rounded-sm" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="h-1 w-10 bg-white/50 rounded-full" />
                          <div className="h-1 w-6 bg-white/30 rounded-full" />
                        </div>
                      </>
                    )}
                    {design.shapes === "grid" && (
                      <>
                        <div className="grid grid-cols-3 gap-0.5">
                          <div className="h-2.5 bg-white/30 rounded-sm" />
                          <div className="h-2.5 bg-white/20 rounded-sm" />
                          <div className="h-2.5 bg-white/40 rounded-sm" />
                        </div>
                        <div className="space-y-0.5">
                          <div className="h-1 w-12 bg-white/50 rounded-full" />
                          <div className="h-1 w-8 bg-white/30 rounded-full" />
                        </div>
                      </>
                    )}
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Monitor className="w-5 h-5 text-slate-700" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Flying design card overlay during flight */}
            <AnimatePresence>
              {phase === "flying" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.3, x: -60 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className={`absolute inset-0 bg-gradient-to-br ${design.gradient}`}
                />
              )}
            </AnimatePresence>

            {/* Dashed border pulse during flight */}
            {phase === "flying" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.6, 0] }}
                transition={{ duration: 0.8, repeat: 1 }}
                className="absolute inset-0 border-2 border-dashed border-white/60 rounded-lg"
              />
            )}
          </div>
          {/* Monitor chin */}
          <div className="flex justify-center pt-1">
            <div className="w-5 h-0.5 rounded-full bg-[#2a2a2a]" />
          </div>
        </div>
        {/* Monitor stand */}
        <div className="flex justify-center">
          <div className="w-5 h-3 bg-[#1a1a1a] rounded-b-sm" />
        </div>
        <div className="flex justify-center -mt-0.5">
          <div className="w-12 h-1 bg-[#1a1a1a] rounded-full" />
        </div>
        {/* Citadel label */}
        <div className="text-center mt-2">
          <span className="text-[10px] font-bold text-slate-600">Citadel</span>
          <span className="text-[10px] font-bold text-blue-600">DS</span>
        </div>
      </div>

      {/* ── Floating "Published" badge ── */}
      <AnimatePresence>
        {phase === "landed" && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.35, ease: "backOut" }}
            className="absolute bottom-4 right-4 sm:right-8 bg-white rounded-full
                       px-3 py-1.5 shadow-md border border-slate-100 flex items-center gap-1.5"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
            <span className="text-[10px] font-semibold text-slate-700">Published to screen</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ─── Scheduling & Playlists animated visual ─────────────────────── */
const SCHEDULE_SLOTS = [
  { time: "8:00 AM", label: "Morning", content: "Welcome Msg", gradient: "from-amber-400 to-orange-400", icon: "sun" as const },
  { time: "12:00 PM", label: "Afternoon", content: "Lunch Menu", gradient: "from-emerald-400 to-teal-500", icon: "utensils" as const },
  { time: "5:00 PM", label: "Evening", content: "Happy Hour", gradient: "from-violet-500 to-purple-600", icon: "moon" as const },
];

const PLAYLIST_ITEMS = [
  { name: "Promo Banner", duration: "15s", gradient: "from-blue-400 to-sky-500" },
  { name: "Instagram Feed", duration: "20s", gradient: "from-pink-500 to-rose-500" },
  { name: "Weather Widget", duration: "10s", gradient: "from-amber-400 to-orange-400" },
  { name: "Google Reviews", duration: "15s", gradient: "from-emerald-400 to-green-500" },
];

function SchedulingVisual() {
  const [activeSlot, setActiveSlot] = useState(0);
  const [activePlaylistItem, setActivePlaylistItem] = useState(0);

  /* Cycle through time slots */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlot((p) => (p + 1) % SCHEDULE_SLOTS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  /* Cycle playlist items faster */
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePlaylistItem((p) => (p + 1) % PLAYLIST_ITEMS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const slot = SCHEDULE_SLOTS[activeSlot];

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={0.1}
      viewport={{ once: true }}
      className="relative h-80 rounded-3xl bg-sky-50 overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center px-5 sm:px-8 gap-4">

        {/* ── Left: Schedule timeline ── */}
        <div className="w-[140px] shrink-0">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
            {/* Header */}
            <div className="bg-sky-600 px-3 py-2 flex items-center gap-1.5">
              <Calendar className="w-3 h-3 text-white" />
              <span className="text-white text-[9px] font-bold">Day Schedule</span>
            </div>

            {/* Time slots */}
            <div className="p-2 space-y-1.5">
              {SCHEDULE_SLOTS.map((s, i) => {
                const isActive = i === activeSlot;
                return (
                  <motion.div
                    key={s.time}
                    animate={isActive ? { scale: 1.03 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-sky-50 ring-1 ring-sky-300" : "bg-white"
                    }`}
                  >
                    {/* Time indicator */}
                    <div className="flex flex-col items-center shrink-0 w-7">
                      <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        isActive ? "bg-sky-500" : "bg-slate-200"
                      }`} />
                      {i < SCHEDULE_SLOTS.length - 1 && (
                        <div className="w-px h-3 bg-slate-200 mt-0.5" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className={`text-[8px] font-bold transition-colors duration-300 ${
                        isActive ? "text-sky-700" : "text-slate-400"
                      }`}>
                        {s.time}
                      </p>
                      <p className={`text-[9px] font-semibold truncate transition-colors duration-300 ${
                        isActive ? "text-slate-800" : "text-slate-500"
                      }`}>
                        {s.content}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Playlist section */}
            <div className="border-t border-slate-100 px-2 py-2">
              <p className="text-[7px] font-bold text-slate-400 uppercase tracking-widest px-1 mb-1">Playlist</p>
              {PLAYLIST_ITEMS.map((item, i) => {
                const isActive = i === activePlaylistItem;
                return (
                  <div
                    key={item.name}
                    className={`flex items-center gap-1.5 px-1.5 py-1 rounded text-[8px] transition-all duration-300 ${
                      isActive ? "bg-sky-50 text-sky-700 font-bold" : "text-slate-400"
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-300 ${
                      isActive ? "bg-sky-500" : "bg-slate-200"
                    }`} />
                    <span className="truncate">{item.name}</span>
                    <span className="ml-auto text-[7px] text-slate-300 shrink-0">{item.duration}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── Right: Screen preview ── */}
        <div className="flex-1 flex flex-col items-center justify-center">
          {/* Monitor */}
          <div className="w-full max-w-[200px]">
            <div className="bg-[#1a1a1a] rounded-xl p-1.5 pb-2.5 shadow-xl">
              <div className="rounded-lg overflow-hidden bg-slate-900 relative" style={{ aspectRatio: "16/9" }}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSlot}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute inset-0 bg-gradient-to-br ${slot.gradient} p-3 flex flex-col justify-between`}
                  >
                    {/* Mock content on screen */}
                    <div className="flex items-center gap-1.5">
                      <div className="w-4 h-4 rounded-full bg-white/25" />
                      <div className="h-1.5 w-12 bg-white/40 rounded-full" />
                    </div>
                    <div>
                      <div className="h-2 w-20 bg-white/50 rounded-full mb-1" />
                      <div className="h-1.5 w-14 bg-white/30 rounded-full" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Playlist item cycling overlay at bottom */}
                <div className="absolute bottom-0 inset-x-0 bg-black/30 backdrop-blur-sm px-2 py-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activePlaylistItem}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-1.5"
                    >
                      <div className={`w-2 h-2 rounded-sm bg-gradient-to-br ${PLAYLIST_ITEMS[activePlaylistItem].gradient}`} />
                      <span className="text-[7px] text-white/80 font-semibold">{PLAYLIST_ITEMS[activePlaylistItem].name}</span>
                      <span className="ml-auto text-[6px] text-white/50">{PLAYLIST_ITEMS[activePlaylistItem].duration}</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              {/* Monitor chin */}
              <div className="flex justify-center pt-1">
                <div className="w-5 h-0.5 rounded-full bg-[#2a2a2a]" />
              </div>
            </div>
            {/* Stand */}
            <div className="flex justify-center">
              <div className="w-5 h-3 bg-[#1a1a1a] rounded-b-sm" />
            </div>
            <div className="flex justify-center -mt-0.5">
              <div className="w-12 h-1 bg-[#1a1a1a] rounded-full" />
            </div>
          </div>

          {/* Time label badge */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlot}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-3 inline-flex items-center gap-1.5 bg-white rounded-full
                         px-3 py-1 shadow-md border border-slate-100"
            >
              <Clock className="w-3 h-3 text-sky-500" />
              <span className="text-[10px] font-semibold text-slate-700">{slot.label}</span>
              <span className="text-[9px] text-slate-400">{slot.time}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Apps & Integrations visual ─────────────────────────────────── */
const MINI_APPS = [
  { name: "Canva", icon: Palette, bg: "bg-teal-500", shadow: "shadow-teal-500/30" },
  { name: "YouTube", icon: Youtube, bg: "bg-red-500", shadow: "shadow-red-500/30" },
  { name: "Instagram", icon: Camera, bg: "bg-gradient-to-br from-pink-500 to-purple-600", shadow: "shadow-pink-500/30" },
  { name: "Google Drive", icon: HardDrive, bg: "bg-green-500", shadow: "shadow-green-500/30" },
  { name: "Weather", icon: Cloud, bg: "bg-amber-500", shadow: "shadow-amber-500/30" },
  { name: "Reviews", icon: Star, bg: "bg-blue-500", shadow: "shadow-blue-500/30" },
  { name: "News Ticker", icon: Newspaper, bg: "bg-sky-600", shadow: "shadow-sky-500/30" },
];

function AppsGridVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={0.1}
      viewport={{ once: true }}
      className="relative h-80 rounded-3xl bg-violet-50 overflow-hidden flex items-center justify-center"
    >
      {/* Subtle dot pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.8) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      <div className="relative px-6 py-4 w-full max-w-[380px]">
        {/* Mini header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-6 rounded-lg bg-violet-600 flex items-center justify-center">
            <Puzzle className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-[11px] font-bold text-slate-700">Built-in Apps</span>
          <span className="ml-auto text-[9px] font-semibold text-violet-500 bg-violet-100 px-2 py-0.5 rounded-full">
            All included
          </span>
        </div>

        {/* App grid */}
        <div className="grid grid-cols-4 gap-2.5">
          {/* Canva featured — spans 2 cols */}
          <div className="col-span-2 bg-white rounded-xl p-3 shadow-md border border-slate-100 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl ${MINI_APPS[0].bg} flex items-center justify-center shadow-lg ${MINI_APPS[0].shadow} shrink-0`}>
              <Palette className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-800">Canva</p>
              <p className="text-[8px] text-slate-400 leading-snug">Design & publish in one click</p>
            </div>
          </div>

          {/* Remaining apps — single cells */}
          {MINI_APPS.slice(1).map(({ name, icon: Icon, bg, shadow }) => (
            <div
              key={name}
              className="bg-white rounded-xl p-2.5 shadow-sm border border-slate-100
                         flex flex-col items-center gap-1.5 hover:shadow-md transition-shadow"
            >
              <div className={`w-8 h-8 rounded-lg ${bg} flex items-center justify-center shadow-md ${shadow}`}>
                <Icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-[8px] font-semibold text-slate-600 text-center leading-tight">{name}</span>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="mt-3 flex justify-center">
          <div className="inline-flex items-center gap-1.5 bg-white rounded-full px-3 py-1 shadow-sm border border-slate-100">
            <CheckCircle2 className="w-3 h-3 text-green-500" />
            <span className="text-[9px] font-semibold text-slate-600">No extra fees — activate any app instantly</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ─── Teams & Permissions visual ─────────────────────────────────── */
const TEAM_MEMBERS = [
  { name: "Sarah Chen", role: "Admin", email: "sarah@company.com", color: "bg-blue-500", access: "Full access" },
  { name: "James Miller", role: "Editor", email: "james@company.com", color: "bg-emerald-500", access: "Publish & edit" },
  { name: "Alex Rivera", role: "Viewer", email: "alex@company.com", color: "bg-slate-400", access: "View only" },
];

const ROLE_BADGES = {
  Admin: { bg: "bg-blue-100", text: "text-blue-700" },
  Editor: { bg: "bg-emerald-100", text: "text-emerald-700" },
  Viewer: { bg: "bg-slate-100", text: "text-slate-600" },
} as const;

function TeamsVisual() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      custom={0.1}
      viewport={{ once: true }}
      className="relative h-80 rounded-3xl bg-emerald-50 overflow-hidden flex items-center justify-center"
    >
      <div className="relative px-5 py-4 w-full max-w-[400px]">
        {/* Team panel */}
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
          {/* Header */}
          <div className="bg-slate-900 px-4 py-2.5 flex items-center gap-2">
            <div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center shrink-0">
              <Monitor className="w-3 h-3 text-white" />
            </div>
            <span className="text-white text-[10px] font-bold">Citadel</span>
            <span className="text-slate-500 text-[10px]">/</span>
            <span className="text-slate-300 text-[10px] font-medium">Team Members</span>
            <div className="ml-auto flex items-center gap-1 bg-emerald-600 text-white text-[8px] font-semibold px-2 py-1 rounded">
              <Plus className="w-2.5 h-2.5" />
              Invite
            </div>
          </div>

          {/* Role filter pills */}
          <div className="px-4 py-2 border-b border-slate-100 flex items-center gap-1.5">
            <span className="text-[8px] font-semibold text-slate-400 mr-1">Filter:</span>
            {(["All", "Admin", "Editor", "Viewer"] as const).map((r, i) => (
              <span
                key={r}
                className={`text-[8px] font-semibold px-2 py-0.5 rounded-full ${
                  i === 0 ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {r}
              </span>
            ))}
            <span className="ml-auto text-[8px] text-slate-400">3 members</span>
          </div>

          {/* Member list */}
          <div className="divide-y divide-slate-50">
            {TEAM_MEMBERS.map((member) => {
              const badge = ROLE_BADGES[member.role as keyof typeof ROLE_BADGES];
              return (
                <div key={member.name} className="px-4 py-2.5 flex items-center gap-3">
                  {/* Avatar */}
                  <div className={`w-7 h-7 rounded-full ${member.color} flex items-center justify-center shrink-0`}>
                    <span className="text-white text-[9px] font-bold">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold text-slate-800 truncate">{member.name}</p>
                    <p className="text-[8px] text-slate-400 truncate">{member.email}</p>
                  </div>
                  {/* Role badge */}
                  <span className={`text-[8px] font-bold px-2 py-0.5 rounded-full shrink-0 ${badge.bg} ${badge.text}`}>
                    {member.role}
                  </span>
                  {/* Access level */}
                  <span className="text-[7px] text-slate-400 w-16 text-right shrink-0 hidden sm:block">
                    {member.access}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Permissions summary footer */}
          <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span className="text-[8px] font-semibold text-slate-600">Role-based access</span>
            </div>
            <div className="w-px h-3 bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-amber-500" />
              <span className="text-[8px] font-semibold text-slate-600">Zone permissions</span>
            </div>
            <div className="w-px h-3 bg-slate-200" />
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3 h-3 text-blue-500" />
              <span className="text-[8px] font-semibold text-slate-600">Approvals</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeatureSections() {
  return (
    <section id="features" className="py-8 bg-white">
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
                {title === "TOOL_CYCLER" ? (
                  <>Design in <ToolCycler />. Go live in one click.</>
                ) : (
                  title
                )}
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
            {eyebrow === "Content Creation" ? (
              <CanvaToScreen />
            ) : eyebrow === "Scheduling & Playlists" ? (
              <SchedulingVisual />
            ) : eyebrow === "Apps & Integrations" ? (
              <AppsGridVisual />
            ) : eyebrow === "Teams & Permissions" ? (
              <TeamsVisual />
            ) : (
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
            )}
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
    <section id="capabilities" className="py-24 bg-slate-50">
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
    <section id="faq" className="py-24 bg-slate-50">
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
const DS_SECTIONS = [
  { id: "hero",         label: "Home"         },
  { id: "stats",        label: "Stats"        },
  { id: "pillars",      label: "Why Citadel"  },
  { id: "features",     label: "Features"     },
  { id: "capabilities", label: "Capabilities" },
  { id: "faq",          label: "FAQ"          },
];

export default function DigitalSignageContent() {
  return (
    <>
      <HomeSectionNav sections={DS_SECTIONS} />
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
