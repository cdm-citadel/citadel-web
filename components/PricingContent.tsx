"use client";

/**
 * PricingContent – Full standalone pricing page: toggle, plans, comparison
 * table, hardware callout, FAQ, and CTA.
 */

import { useState, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2, Minus, ArrowRight, Zap, Building2,
  Lock, ShieldCheck, Globe, ChevronDown, Monitor,
  Calendar, Wifi, BarChart2, Cpu, MessageSquare,
} from "lucide-react";

/* ── Types ──────────────────────────────────────────────────────── */
type FeatureValue = boolean | string;

interface Plan {
  key: string;
  icon: React.ElementType;
  name: string;
  monthly: number;
  annual: number;
  tagline: string;
  featured: boolean;
  highlights: string[];
  cta: string;
}

interface FeatureRow {
  label: string;
  business: FeatureValue;
  enterprise: FeatureValue;
}

interface FeatureCategory {
  category: string;
  icon: React.ElementType;
  rows: FeatureRow[];
}

/* ── Plans ──────────────────────────────────────────────────────── */
const PLANS: Plan[] = [
  {
    key: "business",
    icon: Zap,
    name: "Business",
    monthly: 17,
    annual: 14,
    tagline: "Perfect for growing businesses",
    featured: false,
    highlights: [
      "1 license per screen — add as many as you need",
      "Up to 3 team member accounts",
      "Unlimited storage",
      "Canva integration for branded content",
      "Advanced scheduling & day-parting",
      "Remote screen management",
      "Proof of play reporting",
      "Email support",
    ],
    cta: "Start Free Trial",
  },
  {
    key: "enterprise",
    icon: Building2,
    name: "Enterprise",
    monthly: 27,
    annual: 22,
    tagline: "For large networks & agencies",
    featured: true,
    highlights: [
      "Everything in Business",
      "Live screen monitoring",
      "White-label dashboard",
      "Dedicated account manager",
      "SLA-backed uptime guarantee",
      "API access",
      "Priority phone support",
    ],
    cta: "Get Started",
  },
];

/* ── Feature comparison ─────────────────────────────────────────── */
const FEATURE_CATEGORIES: FeatureCategory[] = [
  {
    category: "Scheduling",
    icon: Calendar,
    rows: [
      { label: "Basic scheduling",          business: true,         enterprise: true },
      { label: "Day-parting",               business: true,         enterprise: true },
      { label: "Per-minute scheduling",     business: true,         enterprise: true },
      { label: "Seasonal automation",       business: true,         enterprise: true },
      { label: "Multi-zone layouts",        business: true,         enterprise: true },
    ],
  },
  {
    category: "Screen Management",
    icon: Wifi,
    rows: [
      { label: "Screens",                   business: "1 per license", enterprise: "1 per license" },
      { label: "Team members",              business: "3 users",    enterprise: "Unlimited" },
      { label: "Remote management",         business: true,         enterprise: true },
      { label: "Bulk screen editing",       business: true,         enterprise: true },
      { label: "Real-time status alerts",   business: true,         enterprise: true },
      { label: "Live screen monitoring",    business: false,        enterprise: true },
      { label: "Multi-location support",    business: true,         enterprise: true },
    ],
  },
  {
    category: "Analytics & Reporting",
    icon: BarChart2,
    rows: [
      { label: "Playback logs",             business: true,         enterprise: true },
      { label: "Proof of play reports",     business: true,         enterprise: true },
      { label: "Device health monitoring",  business: true,         enterprise: true },
      { label: "Advanced analytics",        business: false,        enterprise: true },
    ],
  },
  {
    category: "Integrations",
    icon: Cpu,
    rows: [
      { label: "Apps included",             business: true,         enterprise: true },
      { label: "Webhooks",                  business: true,         enterprise: true },
      { label: "API access",                business: false,        enterprise: true },
    ],
  },
  {
    category: "Support",
    icon: MessageSquare,
    rows: [
      { label: "Email support",             business: true,         enterprise: true },
      { label: "Priority phone support",    business: false,        enterprise: true },
      { label: "Dedicated account manager", business: false,        enterprise: true },
      { label: "Onboarding assistance",     business: false,        enterprise: true },
      { label: "SLA uptime guarantee",      business: false,        enterprise: true },
    ],
  },
  {
    category: "Security",
    icon: Lock,
    rows: [
      { label: "SOC 2 compliant",           business: true,         enterprise: true },
      { label: "GDPR compliant",            business: true,         enterprise: true },
      { label: "Data encryption at rest",   business: true,         enterprise: true },
      { label: "Audit logs",               business: false,        enterprise: true },
    ],
  },
];

/* ── FAQ ────────────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "Can I add or remove screens at any time?",
    a: "Yes. Your bill is prorated automatically — add a screen mid-month and you only pay for the remaining days. Remove screens any time; the credit rolls into your next invoice.",
  },
  {
    q: "What happens at the end of my 14-day free trial?",
    a: "Your trial gives you full access to the Business plan. At the end, you can choose a plan and enter payment details to continue. If you don't, your account is paused and your content is saved for 30 days.",
  },
  {
    q: "Is there a minimum contract length?",
    a: "No. Monthly plans are cancel-anytime with no penalty. Annual plans are billed upfront and are non-refundable after 30 days, but carry no lock-in beyond that.",
  },
  {
    q: "Do you offer discounts for non-profits or education?",
    a: "Yes — we offer 30% off all plans for verified non-profits and educational institutions. Contact our sales team with proof of status to get your discount code applied.",
  },
  {
    q: "What payment methods do you accept?",
    a: "All major credit/debit cards (Visa, Mastercard, Amex), ACH bank transfer for annual plans, and purchase orders for Enterprise customers with a dedicated account manager.",
  },
  {
    q: "Can I switch between Business and Enterprise?",
    a: "Absolutely. Upgrade or downgrade at any time from your account dashboard. Upgrades take effect immediately; downgrades apply at your next billing cycle.",
  },
  {
    q: "Are volume discounts available?",
    a: "Yes. Deployments with 50+ screens qualify for custom volume pricing. Reach out to our sales team and we'll build a plan that fits your network size and budget.",
  },
  {
    q: "Does the Citadel Player require a subscription?",
    a: "The Citadel Player is a one-time $60 hardware purchase. It requires an active Citadel software subscription to operate, but there's no additional hardware fee — just your per-screen plan.",
  },
];

/* ── Animation preset ────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ── Sub-components ─────────────────────────────────────────────── */
function CellValue({ val, featured }: { val: FeatureValue; featured: boolean }) {
  if (val === true)  return <CheckCircle2 className={`w-5 h-5 mx-auto ${featured ? "text-blue-500" : "text-emerald-500"}`} />;
  if (val === false) return <Minus className="w-4 h-4 mx-auto text-slate-300" />;
  return <span className={`text-sm font-semibold ${featured ? "text-blue-600" : "text-slate-700"}`}>{val}</span>;
}

/* ── Main component ─────────────────────────────────────────────── */
export default function PricingContent() {
  const [annual, setAnnual]     = useState(false);
  const [openFaq, setOpenFaq]   = useState<number | null>(null);

  return (
    <div className="bg-white">

      {/* ── Hero + Toggle ───────────────────────────────────────── */}
      <section className="pt-20 pb-12 text-center px-4">
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="max-w-2xl mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-5">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Simple, transparent{" "}
            <span className="bg-gradient-to-r from-blue-600 to-sky-400 bg-clip-text text-transparent">
              pricing.
            </span>
          </h1>
          <p className="text-lg text-slate-500 mb-8">
            No contracts. No surprises. No credit card for your free trial.
          </p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 bg-slate-100 rounded-full p-1.5">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                annual ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
              }`}
            >
              Annual
              <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>
      </section>

      {/* ── Plan cards ──────────────────────────────────────────── */}
      <section className="pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {PLANS.map(({ key, icon: Icon, name, monthly, annual: annualPrice, tagline, featured, highlights, cta }, idx) => {
              const price = annual ? annualPrice : monthly;
              return (
                <motion.div
                  key={key}
                  variants={fadeUp} initial="hidden" animate="show" custom={idx * 0.1}
                  className={`relative rounded-3xl p-8 border transition-all duration-300 ${
                    featured
                      ? "border-blue-200 bg-gradient-to-b from-blue-50 to-white shadow-xl shadow-blue-100 scale-[1.02]"
                      : "border-slate-200 bg-white shadow-sm"
                  }`}
                >
                  {featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-5 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold shadow-lg shadow-blue-200 whitespace-nowrap">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${
                    featured ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 mb-1">{name}</h2>
                  <p className="text-sm text-slate-500 mb-6">{tagline}</p>

                  {/* Animated price */}
                  <div className="flex items-end gap-1.5 mb-1">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={price}
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className={`text-5xl font-extrabold tabular-nums ${featured ? "text-blue-700" : "text-slate-900"}`}
                      >
                        ${price}
                      </motion.span>
                    </AnimatePresence>
                    <span className="text-sm text-slate-500 pb-1.5">/mo per screen</span>
                  </div>

                  {annual ? (
                    <p className="text-xs text-emerald-600 font-medium mb-5">
                      Billed annually — save ${(monthly - annualPrice) * 12}/screen/year
                    </p>
                  ) : (
                    <div className="mb-5" />
                  )}

                  <ul className="flex flex-col gap-2.5 mb-8">
                    {highlights.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${featured ? "text-blue-500" : "text-emerald-500"}`} />
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://app.citadeldigitalsignage.com/tenant-register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full
                                font-semibold text-sm hover:scale-105 active:scale-95 transition-all duration-150 ${
                      featured
                        ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                        : "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {cta}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              );
            })}
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

          <p className="text-center text-sm text-slate-400 mt-6">
            All plans include a <strong className="text-slate-600">14-day free trial</strong> — no credit card required.
            Need 50+ screens?{" "}
            <a href="/contact" className="text-blue-600 hover:underline">Talk to sales →</a>
          </p>
        </div>
      </section>

      {/* ── Feature comparison table ────────────────────────────── */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Compare plans in full
            </h2>
            <p className="text-slate-500">Every feature, side by side.</p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[480px]">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left p-5 text-sm text-slate-500 font-medium w-1/2">Feature</th>
                  <th className="text-center p-5 text-sm font-bold text-slate-700 w-1/4">Business</th>
                  <th className="text-center p-5 w-1/4 bg-blue-50/60">
                    <span className="text-sm font-bold text-blue-700">Enterprise</span>
                    <span className="ml-2 inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                      Popular
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {FEATURE_CATEGORIES.map(({ category, icon: CatIcon, rows }) => (
                  <Fragment key={category}>
                    <tr className="bg-slate-50 border-t border-slate-200">
                      <td colSpan={3} className="px-5 py-3">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
                          <CatIcon className="w-3.5 h-3.5" />
                          {category}
                        </div>
                      </td>
                    </tr>
                    {rows.map(({ label, business, enterprise }) => (
                      <tr key={label} className="border-t border-slate-100 hover:bg-slate-50/50 transition-colors">
                        <td className="px-5 py-3.5 text-sm text-slate-700">{label}</td>
                        <td className="px-5 py-3.5 text-center">
                          <CellValue val={business} featured={false} />
                        </td>
                        <td className="px-5 py-3.5 text-center bg-blue-50/30">
                          <CellValue val={enterprise} featured={true} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Hardware callout ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 sm:p-12
                       flex flex-col sm:flex-row items-start sm:items-center gap-8"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center shrink-0">
              <Monitor className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Hardware Add-on</p>
              <h3 className="text-2xl font-extrabold text-white mb-2">Citadel Player — $60 one-time</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                4K-ready, quad-core ARM device. Pre-formatted and ships pre-configured — plug in and
                you&apos;re live in under 5 minutes. No recurring hardware fee, just your per-screen plan.
                12-month warranty included.
              </p>
            </div>
            <a
              href="https://app.citadeldigitalsignage.com/tenant-register"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white
                         text-sm font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95
                         transition-all duration-150 whitespace-nowrap"
            >
              Order the Player
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-3">
              Pricing questions, answered.
            </h2>
            <p className="text-slate-500">
              Still unsure?{" "}
              <a href="/contact" className="text-blue-600 hover:underline">Talk to sales.</a>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {FAQS.map(({ q, a }, idx) => (
              <motion.div
                key={q}
                variants={fadeUp} initial="hidden" whileInView="show" custom={idx * 0.04}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left"
                  aria-expanded={openFaq === idx}
                >
                  <span className="text-sm font-semibold text-slate-800">{q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
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

      {/* ── Final CTA ───────────────────────────────────────────── */}
      <section className="py-24 px-4">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-4">
            Free 14-day trial. No credit card required.
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-slate-500 mb-10">
            Join thousands of businesses already running Citadel on their screens.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://app.citadeldigitalsignage.com/tenant-register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-blue-600 text-white
                         font-semibold hover:bg-blue-700 hover:scale-105 active:scale-95
                         transition-all duration-150 shadow-lg shadow-blue-200"
            >
              Start your free trial
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/book-a-demo"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-slate-200
                         text-slate-700 font-semibold hover:border-slate-300 hover:bg-slate-50
                         transition-all duration-150"
            >
              Schedule a demo
            </a>
          </div>
        </motion.div>
      </section>

    </div>
  );
}
