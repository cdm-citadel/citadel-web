"use client";

/**
 * Industries – 3×2 grid of illustration-style industry cards.
 * Top: vivid gradient area with large centered icon.
 * Bottom: name, description, learn more link.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Stethoscope, ShoppingBag, UtensilsCrossed,
  Building2, Dumbbell, Bus, ArrowRight,
  GraduationCap, Factory, Landmark,
} from "lucide-react";

const INDUSTRIES = [
  {
    slug: "healthcare",
    icon: Stethoscope,
    name: "Healthcare",
    description: "Reduce perceived wait times, guide patients with confidence, and keep staff informed — all from one dashboard.",
    gradient: "from-blue-700 via-blue-600 to-cyan-500",
    border: "border-blue-100",
    accent: "text-blue-600",
  },
  {
    slug: "retail",
    icon: ShoppingBag,
    name: "Retail",
    description: "Promote products, run flash sales, and increase average order value with eye-catching displays.",
    gradient: "from-pink-600 via-pink-500 to-rose-400",
    border: "border-pink-100",
    accent: "text-pink-600",
  },
  {
    slug: "restaurants",
    icon: UtensilsCrossed,
    name: "Restaurants",
    description: "Update menus instantly, upsell daily specials, and entertain guests while they wait.",
    gradient: "from-orange-600 via-orange-500 to-amber-400",
    border: "border-orange-100",
    accent: "text-orange-600",
  },
  {
    slug: "corporate",
    icon: Building2,
    name: "Corporate Offices",
    description: "Display KPIs, team announcements, and company culture on every floor and common area.",
    gradient: "from-blue-700 via-blue-600 to-sky-400",
    border: "border-blue-100",
    accent: "text-blue-600",
  },
  {
    slug: "gyms-spas",
    icon: Dumbbell,
    name: "Gyms & Spas",
    description: "Showcase class schedules, motivate members, and promote membership upgrades automatically.",
    gradient: "from-emerald-700 via-emerald-600 to-teal-500",
    border: "border-emerald-100",
    accent: "text-emerald-600",
  },
  {
    slug: "transportation",
    icon: Bus,
    name: "Transportation",
    description: "Deliver real-time arrival schedules, wayfinding maps, and safety messaging at every touchpoint.",
    gradient: "from-cyan-700 via-cyan-600 to-sky-400",
    border: "border-cyan-100",
    accent: "text-cyan-600",
  },
  {
    slug: "education",
    icon: GraduationCap,
    name: "Education",
    description: "Keep students informed, promote events, and broadcast emergency alerts across every campus building.",
    gradient: "from-sky-700 via-sky-600 to-blue-500",
    border: "border-sky-100",
    accent: "text-sky-600",
  },
  {
    slug: "manufacturing",
    icon: Factory,
    name: "Manufacturing",
    description: "Surface live OEE metrics, broadcast safety alerts, and align every shift team from a single dashboard.",
    gradient: "from-amber-700 via-amber-600 to-yellow-500",
    border: "border-amber-100",
    accent: "text-amber-600",
  },
  {
    slug: "finance",
    icon: Landmark,
    name: "Finance",
    description: "Display live rates, promote products, and reduce wait times across every branch — compliance-safe.",
    gradient: "from-teal-700 via-teal-600 to-cyan-500",
    border: "border-teal-100",
    accent: "text-teal-600",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Digital Signage For{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Every Business
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Explore tailored digital signage solutions that fit your industry.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {INDUSTRIES.map(({ slug, icon: Icon, name, description, gradient, border, accent }) => (
            <motion.a
              key={name}
              href={`/industries/${slug}`}
              variants={card}
              className={`group bg-white rounded-2xl overflow-hidden border ${border} shadow-sm
                          hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 block`}
            >
              {/* Illustration area */}
              <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
                {/* Decorative background circles */}
                <div className="absolute w-40 h-40 rounded-full bg-white/5 -top-8 -right-8" />
                <div className="absolute w-24 h-24 rounded-full bg-white/5 -bottom-4 -left-4" />
                {/* Floating dots grid */}
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
                />
                {/* Icon */}
                <div className="relative w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm
                                flex items-center justify-center border border-white/30
                                group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-9 h-9 text-white" />
                </div>
              </div>

              {/* Text area */}
              <div className="p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {name}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{description}</p>
                <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${accent}
                                  group-hover:gap-2.5 transition-all duration-200`}>
                  Explore {name} <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
