"use client";

/**
 * IndustriesGrid – shared full-width section showing all 9 industry cards.
 * Used on the digital-signage page and all individual industry landing pages.
 */

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  Stethoscope, ShoppingBag, UtensilsCrossed,
  Building2, Dumbbell, Bus, GraduationCap, Factory, Landmark,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const INDUSTRY_LINKS = [
  { slug: "healthcare",    name: "Healthcare",     icon: Stethoscope,     color: "bg-blue-50 text-blue-600 border-blue-100"     },
  { slug: "retail",        name: "Retail",         icon: ShoppingBag,     color: "bg-pink-50 text-pink-600 border-pink-100"     },
  { slug: "restaurants",   name: "Restaurants",    icon: UtensilsCrossed, color: "bg-orange-50 text-orange-600 border-orange-100" },
  { slug: "corporate",     name: "Corporate",      icon: Building2,       color: "bg-indigo-50 text-indigo-600 border-indigo-100" },
  { slug: "gyms-spas",     name: "Gyms & Spas",    icon: Dumbbell,        color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
  { slug: "transportation",name: "Transportation", icon: Bus,             color: "bg-violet-50 text-violet-600 border-violet-100" },
  { slug: "education",     name: "Education",      icon: GraduationCap,   color: "bg-sky-50 text-sky-600 border-sky-100"        },
  { slug: "manufacturing", name: "Manufacturing",  icon: Factory,         color: "bg-amber-50 text-amber-600 border-amber-100"  },
  { slug: "finance",       name: "Finance",        icon: Landmark,        color: "bg-teal-50 text-teal-600 border-teal-100"     },
];

export default function IndustriesGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Industries
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Built for your business,{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              whatever your industry
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Citadel powers screens across every major industry. Explore tailored
            solutions for your industry.
          </p>
        </motion.div>

        {/* Industry cards */}
        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-9 gap-3">
          {INDUSTRY_LINKS.map(({ slug, name, icon: Icon, color }, i) => (
            <motion.div
              key={slug}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.05}
              viewport={{ once: true }}
            >
              <Link
                href={`/industries/${slug}`}
                className={`flex flex-col items-center gap-2 p-4 rounded-2xl border ${color}
                            hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 text-center`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-semibold leading-tight">{name}</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" custom={0.2}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/#industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600
                       hover:text-blue-700 transition-colors"
          >
            Explore all industry solutions <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
