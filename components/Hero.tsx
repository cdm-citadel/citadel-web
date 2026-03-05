"use client";

/**
 * Hero – split-screen layout with copy left, device showcase right.
 *
 * ASSET GUIDE – Place files in /public/hero/
 * Video: WebM (VP9) + MP4 (H.264), 720p, 24fps, 10-15s loop, ≤ 3 MB
 * Poster: WebP first-frame still
 * Images: WebP, 1280×720, 50-150 KB each, 3-5 slides max
 */

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Monitor,
  TrendingUp,
  Wifi,
  Image as ImageIcon,
  LayoutDashboard,
  Video,
  CloudSun,
  Rss,
  BarChart3,
  Zap,
  Eye,
  Users,
} from "lucide-react";

/* ── Animation variants ──────────────────────────────────────────── */
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ── Hero media config ──────────────────────────────────────────── */
const HERO_MODE: "video" | "slideshow" = "slideshow";

const HERO_VIDEO = {
  webm: "/hero/hero-video.webm",
  mp4: "/hero/hero-video.mp4",
  poster: "/hero/hero-poster.webp",
};

const HERO_SLIDES: { src: string; alt: string }[] = [
  { src: "/hero/slide-1.webp", alt: "Digital signage for gas stations and retail" },
  { src: "/hero/slide-2.webp", alt: "Award-winning digital signage software" },
  { src: "/hero/slide-3.webp", alt: "Digital signage content on any screen" },
];

const SLIDE_INTERVAL = 5000;

/* ── App dock config ─────────────────────────────────────────────── */
const DOCK_APPS = [
  { icon: ImageIcon, label: "Media", gradient: "from-blue-500 to-blue-600" },
  { icon: LayoutDashboard, label: "Dashboards", gradient: "from-emerald-500 to-teal-600" },
  { icon: Video, label: "Streams", gradient: "from-purple-500 to-violet-600" },
  { icon: CloudSun, label: "Weather", gradient: "from-amber-400 to-orange-500" },
  { icon: Rss, label: "Feeds", gradient: "from-rose-500 to-pink-600" },
];

/* ── Cycling badge config (matched to DOCK_APPS order) ───────────── */
// 0 = Media, 1 = Dashboards, 2 = Streams, 3 = Weather, 4 = Feeds
const TOP_LEFT_BADGES = [
  { icon: ImageIcon, iconBg: "bg-blue-500/10", iconColor: "text-blue-600", dotColor: "bg-blue-400", label: "Media library", sub: "48 assets" },
  { icon: LayoutDashboard, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-600", dotColor: "bg-emerald-400", label: "Dashboards", sub: "6 active" },
  { icon: Video, iconBg: "bg-purple-500/10", iconColor: "text-purple-600", dotColor: "bg-purple-400", label: "Live stream", sub: "broadcasting" },
  { icon: CloudSun, iconBg: "bg-amber-500/10", iconColor: "text-amber-600", dotColor: "bg-amber-400", label: "Weather app", sub: "active" },
  { icon: Rss, iconBg: "bg-rose-500/10", iconColor: "text-rose-600", dotColor: "bg-rose-400", label: "Social feeds", sub: "synced" },
];

const BOTTOM_RIGHT_BADGES = [
  { icon: Eye, iconBg: "bg-blue-500/10", iconColor: "text-blue-600", value: "2.4k", sub: "images served" },
  { icon: BarChart3, iconBg: "bg-emerald-500/10", iconColor: "text-emerald-600", value: "12", sub: "live dashboards" },
  { icon: TrendingUp, iconBg: "bg-purple-500/10", iconColor: "text-purple-600", value: "3x", sub: "more engagement" },
  { icon: Zap, iconBg: "bg-amber-500/10", iconColor: "text-amber-600", value: "99.9%", sub: "uptime" },
  { icon: Users, iconBg: "bg-rose-500/10", iconColor: "text-rose-600", value: "4.2k", sub: "plays today" },
];

/* ── Device showcase (right column) ──────────────────────────────── */
function DeviceShowcase() {
  const [activeDock, setActiveDock] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [videoFailed, setVideoFailed] = useState(false);

  const isVideo = HERO_MODE === "video" && !videoFailed;
  const hasSlides = HERO_SLIDES.length > 0;

  /* Auto-cycle active dock icon + badges (synced with slideshow) */
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveDock((p) => (p + 1) % DOCK_APPS.length);
      setBadgeIndex((p) => (p + 1) % TOP_LEFT_BADGES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  /* Slideshow auto-advance */
  useEffect(() => {
    if (isVideo || !hasSlides || HERO_SLIDES.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentSlide((p) => (p + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [isVideo, hasSlides]);

  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      {/* ── Monitor ── */}
      <div>
        {/* Monitor bezel */}
        <div className="relative bg-[#1a1a1a] rounded-[24px] p-3 pb-5 shadow-2xl">
          {/* Screen */}
          <div
            className="rounded-xl overflow-hidden relative bg-slate-900"
            style={{ aspectRatio: "16 / 9" }}
          >
            {/* Video mode */}
            {isVideo && (
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={HERO_VIDEO.poster}
                onError={() => setVideoFailed(true)}
                className="w-full h-full object-cover"
              >
                <source src={HERO_VIDEO.webm} type="video/webm" />
                <source src={HERO_VIDEO.mp4} type="video/mp4" />
              </video>
            )}

            {/* Slideshow mode */}
            {!isVideo && hasSlides && (
              <>
                {HERO_SLIDES.map(({ src, alt }, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    width={1280}
                    height={720}
                    loading={i === 0 ? "eager" : "lazy"}
                    fetchPriority={i === 0 ? "high" : "auto"}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
                      ${i === currentSlide ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
                {HERO_SLIDES.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {HERO_SLIDES.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`w-5 h-1.5 rounded-full transition-all duration-300 origin-center ${
                          i === currentSlide ? "bg-white scale-x-100" : "bg-white/40 scale-x-[0.3]"
                        }`}
                        aria-label={`Slide ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Placeholder (no assets yet) */}
            {!isVideo && !hasSlides && (
              <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900
                              flex flex-col items-center justify-center gap-2">
                <Monitor className="w-10 h-10 text-slate-600" />
                <span className="text-slate-500 text-xs font-medium">
                  Video / image placeholder
                </span>
              </div>
            )}
          </div>

          {/* Monitor chin indicator */}
          <div className="flex justify-center pt-2">
            <div className="w-8 h-1 rounded-full bg-[#2a2a2a]" />
          </div>

          {/* ── Cycling badge – top left ── */}
          <div className="absolute -top-4 -left-5 z-20">
            <AnimatePresence mode="wait">
              {(() => {
                const b = TOP_LEFT_BADGES[badgeIndex];
                const Icon = b.icon;
                return (
                  <motion.div
                    key={badgeIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white/60 backdrop-blur-xl border border-white/30
                               rounded-2xl px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${b.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${b.iconColor}`} />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className={`w-2 h-2 rounded-full ${b.dotColor} animate-pulse`} />
                          <p className="text-sm font-bold text-slate-900 leading-none">{b.label}</p>
                        </div>
                        <p className="text-[11px] text-slate-500 mt-0.5">{b.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>

          {/* ── Cycling badge – bottom right ── */}
          <div className="absolute -bottom-4 -right-5 z-20">
            <AnimatePresence mode="wait">
              {(() => {
                const b = BOTTOM_RIGHT_BADGES[badgeIndex];
                const Icon = b.icon;
                return (
                  <motion.div
                    key={badgeIndex}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-white/60 backdrop-blur-xl border border-white/30
                               rounded-2xl px-4 py-3 shadow-lg"
                  >
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-xl ${b.iconBg} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${b.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-xl font-bold text-slate-900 leading-none">{b.value}</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">{b.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ── App dock ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="mt-8 flex justify-center"
      >
        <div
          className="inline-flex items-center gap-3 px-5 py-3
                     bg-white/70 backdrop-blur-xl border border-white/40
                     rounded-2xl shadow-lg"
        >
          {DOCK_APPS.map(({ icon: Icon, label, gradient }, i) => {
            const isActive = i === activeDock;
            return (
              <motion.div
                key={label}
                animate={isActive ? { scale: 1.18, y: -5 } : { scale: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                {/* Glow ring behind active icon */}
                <div
                  className={`absolute -inset-1 rounded-2xl bg-blue-400/25 blur-sm transition-opacity duration-300
                    ${isActive ? "opacity-100" : "opacity-0"}`}
                />
                <div
                  className={`relative w-11 h-11 rounded-xl bg-gradient-to-br ${gradient}
                              flex items-center justify-center shadow-md cursor-pointer
                              transition-shadow duration-200
                              ${isActive ? "shadow-lg ring-2 ring-white/50" : ""}`}
                >
                  <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                {/* Tooltip label */}
                <span
                  className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold
                              whitespace-nowrap transition-opacity duration-200
                              ${isActive ? "opacity-100 text-slate-600" : "opacity-0"}`}
                >
                  {label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[700px] h-[700px] bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-sky-200 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

          {/* ── Left: copy ── */}
          <div>
            {/* Eyebrow pill */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-blue-100 text-blue-700 text-sm font-semibold mb-6
                         border border-blue-200"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              Trusted by 3,000+ screens worldwide
            </div>

            {/* Headline */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900
                         leading-[1.1] tracking-tight mb-6"
            >
              Engage your audience{" "}
              <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                everywhere they look.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg text-slate-500 max-w-lg mb-8 leading-relaxed"
            >
              Turn any screen into a powerful communication tool. Stream
              dashboards, social feeds, and live meetings with one click.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-10"
            >
              <a
                href="https://app.citadeldigitalsignage.com/tenant-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full
                           bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold text-sm
                           hover:shadow-lg hover:shadow-blue-200 hover:scale-105 active:scale-95
                           transition-all duration-150"
              >
                Try For Free
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
            </div>

            {/* Trust signals */}
            <div
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500"
            >
              {["No credit card required", "Free 14-day trial", "Cancel anytime"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: device showcase ── */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate="show"
            className="hidden lg:block"
          >
            <DeviceShowcase />
          </motion.div>

          {/* Mobile showcase */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:hidden mt-4"
          >
            <DeviceShowcase />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
