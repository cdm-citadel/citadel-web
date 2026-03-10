"use client";

/**
 * FeatureTabs – Monday.com-style interactive feature showcase.
 * Left: vertical tab list. Right: visual content panel that animates on change.
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  MousePointerClick, Wifi, CalendarClock, BarChart2,
  ImagePlay, Smartphone, Clock3, Activity,
  Globe2, AlarmClock, MonitorCheck,
  Star, Image as LucideImage, ListMusic, GripVertical,
  Eye, Settings2, Trash2,
  Upload, FolderPlus, MoreVertical, Folder,
} from "lucide-react";

/* ── Cycling tool names for Content Management headline ────────── */
const CREATION_TOOLS = ["Canva", "Adobe", "PowerPoint", "Google Slides", "Figma"];

function ToolCycler() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % CREATION_TOOLS.length), 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="relative inline-flex overflow-hidden align-baseline h-[1.35em]">
      {/* Invisible sizer matches current word so width adapts */}
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

/* ── Tab data ──────────────────────────────────────────────────── */
const TABS = [
  {
    id: "drag-drop",
    icon: MousePointerClick,
    label: "Content Management",
    headline: "",
    body: "Design content with the tools you already use — or start from scratch with our built-in editor. Organise media into playlists using drag-and-drop, then publish to any screen in seconds.",
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

/* ── Playlist items for the Content Manager mockup ─────────────── */
const PLAYLIST_ITEMS = [
  {
    id: "reviews",
    icon: Star,
    iconBg: "bg-amber-400",
    name: "Google Reviews",
    badge: "REVIEWS",
    badgeCls: "bg-red-50 text-red-500 border border-red-100",
  },
  {
    id: "banner",
    icon: LucideImage,
    iconBg: "bg-sky-100",
    name: "Brand_Banner.png",
    badge: "ASSET",
    badgeCls: "bg-blue-50 text-blue-500 border border-blue-100",
    sub: "Image",
  },
  {
    id: "office",
    icon: LucideImage,
    iconBg: "bg-emerald-100",
    name: "Office_Promo.png",
    badge: "ASSET",
    badgeCls: "bg-blue-50 text-blue-500 border border-blue-100",
    sub: "Image",
  },
  {
    id: "promos",
    icon: ListMusic,
    iconBg: "bg-violet-100",
    name: "Weekly Promos",
    badge: "PLAYLIST",
    badgeCls: "bg-orange-50 text-orange-500 border border-orange-100",
    sub: "3m 30s",
  },
];

/* ── Remote Updates animated mockup (channel playlist reorder) ────── */
function RemoteUpdatesPanel() {
  const [swapped, setSwapped] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setSwapped((s) => !s), 3200);
    return () => clearInterval(id);
  }, []);

  const display = swapped
    ? [PLAYLIST_ITEMS[0], PLAYLIST_ITEMS[2], PLAYLIST_ITEMS[1], PLAYLIST_ITEMS[3]]
    : PLAYLIST_ITEMS;

  return (
    <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden
                    bg-gradient-to-br from-cyan-500 to-blue-600 p-4 sm:p-5 flex items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      {/* Floating card */}
      <div className="relative z-10 w-full bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-4 py-3 border-b border-slate-100">
          <p className="text-[11px] font-bold text-slate-800 leading-tight">Channel &ndash; Marketing 101</p>
          <p className="text-[9px] text-slate-400 mt-0.5">View and manage channel information.</p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-4 px-4 pt-2 border-b border-slate-100 text-[10px]">
          <span className="text-slate-400 pb-2 cursor-default">Info</span>
          <span className="font-semibold text-blue-600 pb-2 border-b-2 border-blue-600 cursor-default">Playback</span>
          <span className="text-slate-400 pb-2 cursor-default">Screens</span>
          <span className="text-slate-400 pb-2 cursor-default">Share</span>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 px-4 py-2.5">
          <span className="text-[9px] font-semibold text-white bg-blue-500 px-2.5 py-1 rounded-md cursor-default">
            + Add Content
          </span>
          <span className="text-[9px] font-semibold text-white bg-blue-500 px-2.5 py-1 rounded-md cursor-default">
            + Add Playlist
          </span>
        </div>

        {/* Playlist items with animated reorder */}
        <div className="px-3 pb-3">
          <LayoutGroup>
            {display.map((item, i) => {
              const Icon = item.icon;
              const isDragging =
                (swapped && item.id === "office") || (!swapped && item.id === "office" && false);
              return (
                <motion.div
                  key={item.id}
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  className={`flex items-center gap-2 px-2 py-[7px] rounded-lg transition-colors duration-200
                    ${isDragging ? "bg-blue-50 shadow-md ring-1 ring-blue-200" : ""}`}
                >
                  {/* Drag handle */}
                  <GripVertical className="w-3 h-3 text-slate-300 shrink-0" />

                  {/* Row number */}
                  <span className="text-[10px] font-medium text-slate-400 w-3 text-center shrink-0">
                    {i + 1}
                  </span>

                  {/* Thumbnail */}
                  <div className={`w-6 h-6 rounded-md ${item.iconBg} flex items-center justify-center shrink-0`}>
                    <Icon className="w-3 h-3 text-white" strokeWidth={2} />
                  </div>

                  {/* Name + sub */}
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-semibold text-slate-700 truncate leading-tight">{item.name}</p>
                    {item.sub && (
                      <p className="text-[8px] text-slate-400 leading-tight">{item.sub}</p>
                    )}
                  </div>

                  {/* Badge */}
                  <span className={`text-[7px] font-bold px-1.5 py-0.5 rounded-md shrink-0 ${item.badgeCls}`}>
                    {item.badge}
                  </span>

                  {/* Action icons */}
                  <div className="flex items-center gap-1 shrink-0">
                    <Eye className="w-2.5 h-2.5 text-slate-300" />
                    <Settings2 className="w-2.5 h-2.5 text-slate-300" />
                    <Trash2 className="w-2.5 h-2.5 text-slate-300" />
                  </div>
                </motion.div>
              );
            })}
          </LayoutGroup>
        </div>
      </div>
    </div>
  );
}

/* ── Schedule days for the Scheduler mockup ──────────────────────── */
const SCHEDULE_DAYS = [
  { day: "Monday",    start: "8:00 AM", end: "6:00 PM" },
  { day: "Tuesday",   start: "9:00 AM", end: "5:00 PM" },
  { day: "Wednesday", start: "8:00 AM", end: "5:00 PM" },
  { day: "Thursday",  start: "9:00 AM", end: "6:00 PM" },
  { day: "Friday",    start: "8:00 AM", end: "4:00 PM" },
];

/* ── Scheduler animated mockup ───────────────────────────────────── */
function SchedulerPanel() {
  const [activeCount, setActiveCount] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveCount((c) => (c >= 5 ? 1 : c + 1));
    }, 1400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden
                    bg-gradient-to-br from-amber-400 to-orange-500 p-4 sm:p-5 flex items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      {/* Floating card */}
      <div className="relative z-10 w-full bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-4 py-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <p className="text-[11px] font-bold text-slate-800 leading-tight">Screen &ndash; Lobby Display</p>
            <span className="text-[8px] font-bold text-amber-600 bg-amber-50 border border-amber-100 px-1.5 py-0.5 rounded">
              Active
            </span>
          </div>
          <p className="text-[9px] text-slate-400 mt-0.5">View and manage screen information.</p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-3 px-4 pt-2 border-b border-slate-100 text-[10px]">
          <span className="text-slate-400 pb-2 cursor-default">Info</span>
          <span className="text-slate-400 pb-2 cursor-default">Playback</span>
          <span className="font-semibold text-amber-600 pb-2 border-b-2 border-amber-500 cursor-default">Scheduling</span>
          <span className="text-slate-400 pb-2 cursor-default">Location</span>
        </div>

        {/* Schedule Configuration */}
        <div className="px-3 py-3">
          <p className="text-[10px] font-bold text-slate-800 mb-2 px-1">Schedule Configuration</p>

          {/* Day rows */}
          <div className="flex flex-col gap-1">
            {SCHEDULE_DAYS.map(({ day, start, end }, i) => {
              const isOn = i < activeCount;
              return (
                <motion.div
                  key={day}
                  animate={{
                    backgroundColor: isOn ? "rgba(245, 158, 11, 0.06)" : "rgba(255,255,255,0)",
                  }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-center gap-2 py-[6px] px-2 rounded-lg
                    ${isOn ? "ring-1 ring-amber-200" : ""}`}
                >
                  {/* Toggle track */}
                  <div className={`relative w-7 h-[14px] rounded-full shrink-0 transition-colors duration-300
                    ${isOn ? "bg-blue-500" : "bg-slate-200"}`}>
                    <motion.div
                      animate={{ x: isOn ? 13 : 1 }}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      className="absolute top-[1px] w-3 h-3 rounded-full bg-white shadow-sm"
                    />
                  </div>

                  {/* Day name */}
                  <span className="text-[10px] font-semibold text-slate-700 w-[62px] shrink-0">{day}</span>

                  {/* Time range or Off */}
                  <AnimatePresence mode="wait">
                    {isOn ? (
                      <motion.div
                        key="times"
                        initial={{ opacity: 0, x: -4 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex gap-3 flex-1"
                      >
                        <div>
                          <p className="text-[7px] text-slate-400 leading-none mb-0.5">Start Time</p>
                          <p className="text-[9px] font-medium text-slate-700 leading-none">{start}</p>
                        </div>
                        <div>
                          <p className="text-[7px] text-slate-400 leading-none mb-0.5">End Time</p>
                          <p className="text-[9px] font-medium text-slate-700 leading-none">{end}</p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="off"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-[9px] text-slate-400"
                      >
                        Off
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Footer buttons */}
          <div className="flex justify-end gap-2 mt-3 pt-2 border-t border-slate-100">
            <span className="text-[9px] font-medium text-slate-400 px-2.5 py-1 rounded-md border border-slate-200 cursor-default">
              Cancel
            </span>
            <span className="text-[9px] font-semibold text-white bg-blue-500 px-2.5 py-1 rounded-md cursor-default">
              Save Changes
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Analytics data for the Proof of Play mockup ─────────────────── */
const ANALYTICS_ROWS = [
  { name: "Google Reviews",    type: "Application", plays: 257, duration: "443,480" },
  { name: "My Main Reviews",   type: "Application", plays: 90,  duration: "7,440" },
  { name: "Brand_Banner.png",  type: "Media File",  plays: 89,  duration: "8,305" },
  { name: "Office_Promo.png",  type: "Media File",  plays: 77,  duration: "6,355" },
];

/* Chart data points (normalised 0-1 for SVG path) */
const CHART_POINTS = [
  { x: 0, y: 0 },
  { x: 0.02, y: 0.78 },
  { x: 0.2, y: 0.82 },
  { x: 0.5, y: 0.88 },
  { x: 0.65, y: 0.95 },
  { x: 0.85, y: 0.85 },
  { x: 1, y: 0.25 },
];

/* ── Analytics / Proof of Play animated mockup ───────────────────── */
function AnalyticsPanel() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setProgress((p) => (p >= 1 ? 0 : Math.min(p + 0.015, 1)));
    }, 40);
    return () => clearInterval(id);
  }, []);

  /* Build SVG path */
  const w = 260;
  const h = 90;
  const pad = { l: 0, r: 0, t: 4, b: 4 };
  const chartW = w - pad.l - pad.r;
  const chartH = h - pad.t - pad.b;

  const pathD = CHART_POINTS
    .map((p, i) => {
      const x = pad.l + p.x * chartW;
      const y = pad.t + (1 - p.y) * chartH;
      return `${i === 0 ? "M" : "L"}${x},${y}`;
    })
    .join(" ");

  const fillD = `${pathD} L${pad.l + chartW},${pad.t + chartH} L${pad.l},${pad.t + chartH} Z`;

  /* Clip path to reveal chart progressively */
  const clipX = pad.l + progress * chartW;

  return (
    <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden
                    bg-gradient-to-br from-emerald-500 to-teal-600 p-4 sm:p-5 flex items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      {/* Floating card */}
      <div className="relative z-10 w-full bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-4 py-2.5 border-b border-slate-100 flex items-center justify-between">
          <p className="text-[11px] font-bold text-slate-800 leading-tight">Play Count &amp; Duration Over Time</p>
          <div className="flex items-center gap-3 text-[8px]">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-teal-400 inline-block" /> Play Count
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-sm bg-orange-400 inline-block" /> Duration
            </span>
          </div>
        </div>

        {/* Chart area */}
        <div className="px-3 pt-2 pb-1">
          <div className="flex gap-1">
            {/* Y-axis labels */}
            <div className="flex flex-col justify-between text-[7px] text-slate-400 font-medium py-1 pr-1 shrink-0">
              <span>16k</span>
              <span>12k</span>
              <span>8k</span>
              <span>4k</span>
              <span>0</span>
            </div>

            {/* SVG chart */}
            <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-[90px]" preserveAspectRatio="none">
              {/* Grid lines */}
              {[0.25, 0.5, 0.75, 1].map((frac) => (
                <line
                  key={frac}
                  x1={pad.l} y1={pad.t + (1 - frac) * chartH}
                  x2={pad.l + chartW} y2={pad.t + (1 - frac) * chartH}
                  stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="3,3"
                />
              ))}

              {/* Clip for animation */}
              <defs>
                <clipPath id="chart-reveal">
                  <rect x="0" y="0" width={clipX} height={h} />
                </clipPath>
              </defs>

              {/* Fill area */}
              <path d={fillD} fill="url(#chart-gradient)" opacity="0.2" clipPath="url(#chart-reveal)" />

              {/* Line */}
              <path d={pathD} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" clipPath="url(#chart-reveal)" />

              {/* Data points */}
              {CHART_POINTS.map((p, i) => {
                const cx = pad.l + p.x * chartW;
                const cy = pad.t + (1 - p.y) * chartH;
                return cx <= clipX ? (
                  <circle key={i} cx={cx} cy={cy} r="3" fill="white" stroke="#f97316" strokeWidth="1.5" />
                ) : null;
              })}

              <defs>
                <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* X-axis labels */}
          <div className="flex justify-between text-[7px] text-slate-400 font-medium pl-6 pr-1 mt-0.5">
            <span>Feb 24</span>
            <span>Feb 25</span>
            <span>Feb 26</span>
          </div>

          {/* Period toggles */}
          <div className="flex justify-center gap-1 mt-1.5 mb-1">
            <span className="text-[8px] font-bold text-white bg-blue-500 px-2 py-0.5 rounded cursor-default">Daily</span>
            <span className="text-[8px] font-medium text-slate-400 px-2 py-0.5 cursor-default">Weekly</span>
            <span className="text-[8px] font-medium text-slate-400 px-2 py-0.5 cursor-default">Monthly</span>
          </div>
        </div>

        {/* Data table */}
        <div className="px-3 pb-3">
          {/* Table header */}
          <div className="flex items-center gap-1 px-2 py-1.5 bg-slate-50 rounded-t-md border border-slate-100 text-[8px] font-bold text-slate-500">
            <span className="flex-1">Asset Name</span>
            <span className="w-14 text-center">Type</span>
            <span className="w-10 text-right">Plays</span>
            <span className="w-12 text-right">Duration</span>
          </div>
          {/* Table rows */}
          {ANALYTICS_ROWS.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12, duration: 0.3 }}
              className="flex items-center gap-1 px-2 py-[5px] border-x border-b border-slate-100 text-[8px]
                         last:rounded-b-md"
            >
              <span className="flex-1 font-medium text-blue-600 truncate">{row.name}</span>
              <span className="w-14 text-center text-slate-400">{row.type}</span>
              <span className="w-10 text-right font-semibold text-slate-700">{row.plays}</span>
              <span className="w-12 text-right text-slate-500">{row.duration}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Files/Assets data for Content Management mockup ─────────────── */
const FILE_ITEMS = [
  { name: "My New Content", size: "537 KB", color: "bg-amber-50", iconColor: "text-amber-500", type: "folder" as const },
  { name: "Assisted_03.png", size: "458 KB", color: "bg-slate-100", iconColor: "text-slate-400", type: "image" as const },
  { name: "GymScreen.png", size: "325 KB", color: "bg-teal-50", iconColor: "text-teal-400", type: "image" as const },
  { name: "Office_02.png", size: "397 KB", color: "bg-sky-50", iconColor: "text-sky-400", type: "image" as const },
  { name: "Brand_Logo.png", size: "54 KB", color: "bg-blue-50", iconColor: "text-blue-400", type: "image" as const },
  { name: "AURACAST", size: "57 KB", color: "bg-cyan-50", iconColor: "text-cyan-500", type: "image" as const },
];

/* ── Files / Assets animated mockup ──────────────────────────────── */
function FilesAssetsPanel() {
  const [showUpload, setShowUpload] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setShowUpload((s) => !s), 3400);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full min-h-[380px] rounded-2xl overflow-hidden
                    bg-gradient-to-br from-blue-500 to-sky-600 p-4 sm:p-5 flex items-center justify-center">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4" />

      {/* Floating card */}
      <div className="relative z-10 w-full bg-white rounded-xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="px-4 py-2.5 border-b border-slate-100">
          <p className="text-[11px] font-bold text-slate-800 leading-tight">Files/Assets</p>
        </div>

        {/* Toolbar */}
        <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 font-medium">
            <span className="px-1.5 py-0.5 bg-slate-50 rounded">/ root</span>
          </div>
          <div className="flex gap-1.5">
            <span className="text-[8px] font-semibold text-white bg-green-500 px-2 py-0.5 rounded cursor-default flex items-center gap-0.5">
              <FolderPlus className="w-2.5 h-2.5" /> New Folder
            </span>
            <span className="text-[8px] font-semibold text-white bg-blue-500 px-2 py-0.5 rounded cursor-default flex items-center gap-0.5">
              <Upload className="w-2.5 h-2.5" /> Upload
            </span>
          </div>
        </div>

        {/* File grid */}
        <div className="px-3 py-2.5 relative">
          <div className="grid grid-cols-3 gap-2">
            {FILE_ITEMS.map((file, i) => (
              <motion.div
                key={file.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: showUpload ? 0.4 : 1, scale: 1 }}
                transition={{ delay: i * 0.06, duration: 0.25 }}
                className="bg-white border border-slate-100 rounded-lg overflow-hidden"
              >
                {/* Thumbnail */}
                <div className={`h-10 ${file.color} flex items-center justify-center`}>
                  {file.type === "folder" ? (
                    <Folder className={`w-5 h-5 ${file.iconColor}`} fill="currentColor" />
                  ) : (
                    <LucideImage className={`w-4 h-4 ${file.iconColor}`} />
                  )}
                </div>
                {/* Info */}
                <div className="px-1.5 py-1">
                  <div className="flex items-center justify-between">
                    <p className="text-[8px] font-semibold text-slate-700 truncate leading-tight">{file.name}</p>
                    <MoreVertical className="w-2.5 h-2.5 text-slate-300 shrink-0" />
                  </div>
                  <p className="text-[7px] text-slate-400 leading-tight">{file.size}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upload modal overlay */}
          <AnimatePresence>
            {showUpload && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm"
              >
                <div className="bg-white rounded-xl shadow-xl border border-slate-200 w-[85%] p-4">
                  <p className="text-[11px] font-bold text-slate-800 mb-0.5">Upload Files</p>
                  <p className="text-[8px] text-slate-400 mb-3">Select files to upload. You can rename files before uploading.</p>

                  {/* Drop zone */}
                  <div className="border-2 border-dashed border-slate-200 rounded-lg py-5 flex flex-col items-center gap-1.5 mb-3">
                    <motion.div
                      animate={{ y: [0, -4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    >
                      <Upload className="w-5 h-5 text-slate-300" />
                    </motion.div>
                    <p className="text-[9px] font-semibold text-slate-600">Drag and drop files here</p>
                    <p className="text-[8px] text-slate-400">or click to browse</p>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-end gap-2">
                    <span className="text-[8px] font-medium text-slate-400 px-2 py-1 rounded border border-slate-200 cursor-default">
                      Cancel
                    </span>
                    <span className="text-[8px] font-semibold text-slate-400 bg-slate-100 px-2 py-1 rounded cursor-default">
                      Upload 0 Files
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

/* ── Generic visual panel placeholder ────────────────────────────── */
function VisualPanel({ tab }: { tab: (typeof TABS)[0] }) {
  if (tab.id === "drag-drop") return <FilesAssetsPanel />;
  if (tab.id === "remote") return <RemoteUpdatesPanel />;
  if (tab.id === "scheduling") return <SchedulerPanel />;
  if (tab.id === "analytics") return <AnalyticsPanel />;

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
                    {activeTab.id === "drag-drop" ? (
                      <>Create with <ToolCycler />. Manage with ease.</>
                    ) : (
                      activeTab.headline
                    )}
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
