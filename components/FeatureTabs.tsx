"use client";

/**
 * FeatureTabs – Monday.com-style interactive feature showcase.
 * Left: vertical tab list. Right: visual content panel that animates on change.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MousePointerClick, Wifi, CalendarClock, BarChart2,
  ImagePlay, Smartphone, Clock3, Activity,
  Globe2, AlarmClock, MonitorCheck,
} from "lucide-react";

/* ── Tab data ──────────────────────────────────────────────────── */
const TABS = [
  {
    id: "drag-drop",
    icon: MousePointerClick,
    label: "Content Management",
    headline: "Create with Canva. Manage with ease.",
    body: "Connect your Canva account to design brand-consistent content without a design team. Organise media into playlists using drag-and-drop, then publish to any screen in seconds.",
    bullets: [
      { icon: ImagePlay,        text: "Canva integration for branded content" },
      { icon: MousePointerClick, text: "Drag & drop playlist management" },
      { icon: Globe2,           text: "Royalty-free media library" },
    ],
    visual: {
      gradient: "from-blue-500 to-sky-600",
      icon: MousePointerClick,
      label: "Content Manager",
    },
  },
  {
    id: "remote",
    icon: Wifi,
    label: "Remote Updates",
    headline: "Update any screen from anywhere, instantly.",
    body: "Push content to one screen or a thousand from any device, anywhere in the world. Use bulk actions and smart tag filtering to keep your entire network current — no on-site visits required.",
    bullets: [
      { icon: Smartphone,   text: "Push updates from any device" },
      { icon: Globe2,       text: "Bulk actions & tag filtering" },
      { icon: MonitorCheck, text: "Real-time device status" },
    ],
    visual: {
      gradient: "from-cyan-500 to-blue-600",
      icon: Wifi,
      label: "Remote Updates",
    },
  },
  {
    id: "scheduling",
    icon: CalendarClock,
    label: "Advanced Scheduling",
    headline: "Set it, schedule it, forget it.",
    body: "Time-based playback with per-minute precision. Schedule seasonal promotions, day-parting, and recurring playlists automatically — your screens always show the right content at the right time.",
    bullets: [
      { icon: Clock3,      text: "Per-minute scheduling precision" },
      { icon: AlarmClock,  text: "Day-parting & recurring rules" },
      { icon: CalendarClock, text: "Automated seasonal playlists" },
    ],
    visual: {
      gradient: "from-amber-400 to-orange-500",
      icon: CalendarClock,
      label: "Scheduler",
    },
  },
  {
    id: "analytics",
    icon: BarChart2,
    label: "Proof of Play & Analytics",
    headline: "Know exactly what played, when, and where.",
    body: "Track detailed playback reports, monitor device health, and get real-time network status across every screen in your fleet. Prove ROI with data-backed performance insights.",
    bullets: [
      { icon: BarChart2,   text: "Full playback reporting" },
      { icon: Activity,    text: "Live device health monitoring" },
      { icon: MonitorCheck, text: "Network status dashboard" },
    ],
    visual: {
      gradient: "from-emerald-500 to-teal-600",
      icon: BarChart2,
      label: "Analytics",
    },
  },
];

/* ── Visual panel placeholder ────────────────────────────────────── */
function VisualPanel({ tab }: { tab: (typeof TABS)[0] }) {
  const Icon = tab.visual.icon;
  return (
    <div className={`relative h-full min-h-[380px] rounded-2xl overflow-hidden
                     bg-gradient-to-br ${tab.visual.gradient} p-8 flex flex-col justify-between`}>

      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      {/* Label chip */}
      <div className="relative z-10 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm
                      text-white text-xs font-semibold px-3 py-1.5 rounded-full w-fit">
        <Icon className="w-3.5 h-3.5" />
        {tab.visual.label}
      </div>

      {/* Central icon */}
      <div className="relative z-10 flex items-center justify-center flex-1 py-8">
        <div className="w-28 h-28 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center
                        shadow-2xl border border-white/30">
          <Icon className="w-14 h-14 text-white" strokeWidth={1.5} />
        </div>
      </div>

      {/* Bottom caption */}
      <p className="relative z-10 text-white/70 text-xs text-center">
        Replace with product screenshot — swap this div for an {`<Image />`}
      </p>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function FeatureTabs() {
  const [active, setActive] = useState(TABS[0].id);
  const activeTab = TABS.find((t) => t.id === active)!;

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Platform Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Everything you need to run
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              {" "}a world-class network.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            One platform to create, schedule, manage, and measure all of your digital signage.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: tab list (2 cols) ── */}
          <div className="lg:col-span-2 flex flex-col gap-2">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = active === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={`group w-full text-left px-5 py-4 rounded-2xl transition-all duration-200
                    ${isActive
                      ? "bg-blue-600 shadow-lg shadow-blue-200 scale-[1.01]"
                      : "bg-slate-50 hover:bg-slate-100 hover:scale-[1.005]"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors
                      ${isActive ? "bg-white/20 text-white" : "bg-white text-blue-600 shadow-sm"}`}>
                      <Icon className="w-4.5 h-4.5 w-[18px] h-[18px]" />
                    </div>
                    <span className={`font-semibold text-sm ${isActive ? "text-white" : "text-slate-700"}`}>
                      {tab.label}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* ── Right: content panel (3 cols) ── */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="grid md:grid-cols-2 gap-6 h-full"
              >
                {/* Visual placeholder */}
                <VisualPanel tab={activeTab} />

                {/* Text content */}
                <div className="flex flex-col justify-center py-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 leading-snug">
                    {activeTab.headline}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">
                    {activeTab.body}
                  </p>
                  <ul className="flex flex-col gap-3">
                    {activeTab.bullets.map(({ icon: BIcon, text }) => (
                      <li key={text} className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                          <BIcon className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">{text}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 group"
                  >
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
