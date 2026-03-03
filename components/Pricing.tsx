"use client";

/**
 * Pricing – Dual-plan pricing teaser highlighting key differentiators.
 */

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, Zap, Building2, Lock, ShieldCheck, Globe } from "lucide-react";

const PLANS = [
  {
    icon: Zap,
    name: "Business",
    price: "$17",
    period: "/mo per screen",
    tagline: "Perfect for growing businesses",
    featured: false,
    features: [
      "Unlimited storage",
      "Drag & drop content editor",
      "Advanced scheduling",
      "Remote screen management",
      "Proof of play reporting",
      "Email support",
    ],
    cta: "Start Free Trial",
    ctaStyle: "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50",
  },
  {
    icon: Building2,
    name: "Enterprise",
    price: "$27",
    period: "/mo per screen",
    tagline: "For large networks & agencies",
    featured: true,
    features: [
      "Everything in Business",
      "Live screen monitoring",
      "CitadelAds monetization",
      "White-label dashboard",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
    ],
    cta: "Get Started",
    ctaStyle: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
              pricing.
            </span>
          </h2>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            No contracts. No surprises. Cancel any time.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {PLANS.map(({ icon: Icon, name, price, period, tagline, featured, features, cta, ctaStyle }, idx) => (
            <motion.div
              key={name}
              variants={fadeUp} initial="hidden" whileInView="show" custom={idx * 0.1}
              viewport={{ once: true }}
              className={`relative rounded-3xl p-8 border transition-all duration-300
                ${featured
                  ? "border-indigo-200 bg-indigo-50 shadow-xl shadow-indigo-100 scale-[1.02]"
                  : "border-slate-200 bg-white shadow-sm hover:shadow-md hover:-translate-y-1"
                }`}
            >
              {featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-5 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold
                                   shadow-lg shadow-indigo-200 whitespace-nowrap">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan icon & name */}
              <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4
                ${featured ? "bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"}`}>
                <Icon className="w-5 h-5" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">{name}</h3>
              <p className="text-sm text-slate-500 mb-5">{tagline}</p>

              {/* Price */}
              <div className="flex items-end gap-1.5 mb-6">
                <span className={`text-4xl font-extrabold ${featured ? "text-indigo-700" : "text-slate-900"}`}>
                  {price}
                </span>
                <span className="text-sm text-slate-500 pb-1">{period}</span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2.5 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? "text-indigo-600" : "text-emerald-500"}`} />
                    <span className="text-sm text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#"
                className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full
                            font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-150 ${ctaStyle}`}>
                {cta}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 mt-10">
          {[
            { icon: Lock,        label: "SOC 2 Compliant" },
            { icon: ShieldCheck, label: "99.9% Uptime SLA" },
            { icon: Globe,       label: "GDPR Ready" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-1.5 text-slate-500 text-sm">
              <Icon className="w-4 h-4 text-slate-400 shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-sm text-slate-400 mt-10">
          All plans include a <strong className="text-slate-600">14-day free trial</strong> — no credit card required.
          Enterprise pricing available for large deployments.{" "}
          <a href="#" className="text-indigo-600 hover:underline">Contact sales →</a>
        </p>

      </div>
    </section>
  );
}
