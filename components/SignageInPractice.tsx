"use client";

/**
 * SignageInPractice – "Three principles" homepage section.
 * Highlights what digital signage achieves in the real world.
 * Each card has an image placeholder (swap for a real photo via the
 * bgImage prop or by replacing the placeholder div with an <Image />).
 */

import { motion } from "framer-motion";
import { BookOpen, Zap, Star } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* Images: drop 760×416 WebP files in /public/in-practice/ and update paths below */
const PRINCIPLES = [
  {
    icon: BookOpen,
    accent: "from-blue-500 to-sky-400",
    iconBg: "bg-blue-600",
    glow: "rgba(59,130,246,0.28)",
    label: "01",
    title: "Educate Clients",
    image: "/in-practice/educate-clients.webp",
    description:
      "Keep customers informed at every touchpoint. Display product guides, service explanations, and helpful content exactly where decisions are made — turning passive waiting into active understanding.",
  },
  {
    icon: Zap,
    accent: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-600",
    glow: "rgba(139,92,246,0.28)",
    label: "02",
    title: "Engage Customers",
    image: "/in-practice/engage-customers.webp",
    description:
      "Replace static displays with dynamic content that captures attention and keeps people looking. Relevant, timely media creates moments that stick — and brings customers back.",
  },
  {
    icon: Star,
    accent: "from-amber-500 to-orange-400",
    iconBg: "bg-amber-500",
    glow: "rgba(245,158,11,0.28)",
    label: "03",
    title: "Elevate Your Brand",
    image: "/in-practice/elevate-brand.webp",
    description:
      "Every screen is a brand moment. Control exactly how your business looks and feels — consistently, across every location — so every visit reinforces who you are.",
  },
];

export default function SignageInPractice() {
  return (
    <section id="in-practice" className="relative py-24 bg-slate-900 overflow-hidden">

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

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-slate-300
                           text-xs font-semibold uppercase tracking-widest mb-4">
            In Practice
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Screens that do more{" "}
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              than display content
            </span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            The most effective digital signage isn't just beautiful — it works.
            Here's what it looks like when it's done right.
          </p>
        </motion.div>

        {/* Principle cards */}
        <div className="grid sm:grid-cols-3 gap-6">
          {PRINCIPLES.map(({ icon: Icon, accent, iconBg, glow, label, title, image, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.12}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl
                         hover:-translate-y-1 transition-all duration-300"
              style={{ boxShadow: `0 0 40px 0 ${glow}` }}
            >
              {/* Card image area */}
              <div className={`relative h-52 overflow-hidden rounded-t-2xl ${image ? "" : `bg-gradient-to-br ${accent}`}`}>
                {image ? (
                  <img
                    src={image}
                    alt={title}
                    width={760}
                    height={416}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    {/* Subtle texture */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                      }}
                    />
                    {/* Decorative circles */}
                    <div className="absolute w-40 h-40 rounded-full bg-white/10 -top-10 -right-10" />
                    <div className="absolute w-24 h-24 rounded-full bg-white/10 -bottom-6 -left-6" />
                    {/* Centred icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-16 h-16 rounded-2xl ${iconBg} bg-opacity-90
                                       flex items-center justify-center shadow-lg
                                       group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </>
                )}
                {/* Step label */}
                <span className={`absolute top-4 left-4 text-xs font-bold tracking-widest
                  ${image ? "text-white drop-shadow-md" : "text-white/60"}`}>
                  {label}
                </span>
              </div>

              {/* Floating icon badge – straddles bottom of card */}
              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 z-10">
                <div className={`w-16 h-16 rounded-2xl ${iconBg}
                                 flex items-center justify-center shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
