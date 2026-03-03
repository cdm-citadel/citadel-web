"use client";

/**
 * IndustryImageSection – Split section: 3 feature bullets (left) + image placeholder (right).
 * Headline: "Solve Your [name] Needs With Ease"
 * Left bullets: first 3 features from industry data.
 * Right: styled image placeholder — swap the inner div for <Image> when real photos are ready.
 */

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { ICON_MAP } from "./icon-map";
import type { IndustryData } from "@/lib/industries-data";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function IndustryImageSection({ data }: { data: IndustryData }) {
  const bullets = data.features.slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section headline */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Solve Your{" "}
            <span className={data.accent.text}>{data.name}</span>{" "}
            Needs With Ease
          </h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: feature bullets */}
          <div className="flex flex-col gap-10">
            {bullets.map(({ icon, title, description }, idx) => {
              const Icon = ICON_MAP[icon] ?? ICON_MAP.Monitor;
              return (
                <motion.div
                  key={title}
                  variants={fadeUp} initial="hidden" whileInView="show" custom={idx * 0.12}
                  viewport={{ once: true }}
                  className="flex items-start gap-5"
                >
                  {/* Circular icon */}
                  <div className={`w-14 h-14 rounded-full border-2 ${data.accent.border}
                                   ${data.accent.bg} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${data.accent.text}`} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">{title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: image placeholder
              ─────────────────────────────────────────────────────────────────
              To replace with a real photo:
                1. Import Image from "next/image"
                2. Replace the <div className="relative h-[420px]..."> with:
                   <div className="relative h-[420px] rounded-3xl overflow-hidden shadow-xl">
                     <Image src="/images/[industry].jpg" alt="..." fill className="object-cover" />
                   </div>
              ─────────────────────────────────────────────────────────────────
          */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.15}
            viewport={{ once: true }}
            className={`relative h-[420px] rounded-3xl border-2 border-dashed
                        ${data.accent.border} ${data.accent.bg}
                        flex flex-col items-center justify-center gap-5 shadow-sm overflow-hidden`}
          >
            {/* Subtle dot-grid overlay */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
                backgroundSize: "24px 24px",
              }}
            />

            {/* Placeholder icon + labels */}
            <div className={`relative w-16 h-16 rounded-2xl ${data.accent.iconBg}
                             flex items-center justify-center shadow-lg`}>
              <ImageIcon className="w-7 h-7 text-white" />
            </div>
            <div className="relative text-center px-8">
              <p className={`text-sm font-semibold ${data.accent.text}`}>Image Placeholder</p>
              <p className="text-xs text-slate-400 mt-1.5 leading-snug">
                Replace with a real photo of Citadel deployed in{" "}
                <span className="font-medium">{data.nameLong.toLowerCase()}</span>
              </p>
            </div>

            {/* Bottom accent strip */}
            <div
              aria-hidden="true"
              className={`absolute bottom-0 left-0 right-0 h-1 ${data.accent.iconBg} opacity-60`}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
