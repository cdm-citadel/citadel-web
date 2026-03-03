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

const PRINCIPLES = [
  {
    icon: BookOpen,
    accent: "from-blue-500 to-sky-400",
    iconBg: "bg-blue-600",
    label: "01",
    title: "Educate Clients",
    description:
      "Keep customers informed at every touchpoint. Display product guides, service explanations, and helpful content exactly where decisions are made — turning passive waiting into active understanding.",
  },
  {
    icon: Zap,
    accent: "from-violet-500 to-purple-400",
    iconBg: "bg-violet-600",
    label: "02",
    title: "Engage Customers",
    description:
      "Replace static displays with dynamic content that captures attention and keeps people looking. Relevant, timely media creates moments that stick — and brings customers back.",
  },
  {
    icon: Star,
    accent: "from-amber-500 to-orange-400",
    iconBg: "bg-amber-500",
    label: "03",
    title: "Elevate Your Brand",
    description:
      "Every screen is a brand moment. Control exactly how your business looks and feels — consistently, across every location — so every visit reinforces who you are.",
  },
];

export default function SignageInPractice() {
  return (
    <section id="in-practice" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
          {PRINCIPLES.map(({ icon: Icon, accent, iconBg, label, title, description }, i) => (
            <motion.div
              key={title}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.12}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden
                         hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder — replace this div with <Image /> when ready */}
              <div className={`relative h-52 bg-gradient-to-br ${accent} overflow-hidden`}>
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
                {/* Step label */}
                <span className="absolute top-4 left-4 text-white/60 text-xs font-bold tracking-widest">
                  {label}
                </span>
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
