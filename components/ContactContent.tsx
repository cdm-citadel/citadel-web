"use client";

/**
 * ContactContent – Best-in-class contact page.
 * Sections:
 *   1. Hero + 3 contact method cards
 *   2. Contact form (left) + trust sidebar (right)
 *   3. FAQ accordion
 *   4. Bottom CTA
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare, Calendar, Clock, ArrowRight,
  CheckCircle2, ChevronDown, Star, Headphones,
  Zap, Shield, Send,
} from "lucide-react";

/* ─── Animation helpers ─────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/* ─── Data ───────────────────────────────────────────────────────── */
const CONTACT_METHODS = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    detail: "Start a conversation",
    sub: "Mon–Fri, 9 am – 6 pm EST",
    iconBg: "bg-emerald-600",
    cardBg: "bg-emerald-50 border-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    icon: Calendar,
    title: "Book a Demo",
    detail: "Schedule 30 minutes",
    sub: "Free · no commitment required",
    iconBg: "bg-violet-600",
    cardBg: "bg-violet-50 border-violet-100",
    textColor: "text-violet-700",
    href: "/book-a-demo",
  },
];

const INQUIRY_TYPES = [
  "General Inquiry",
  "Request a Demo",
  "Sales & Pricing",
  "Technical Support",
  "Partnership",
  "Billing & Account",
];

const TRUST_POINTS = [
  { icon: Zap,        label: "4-hour response",  sub: "During business hours"          },
  { icon: Headphones, label: "Real humans",       sub: "No bots, no runarounds"         },
  { icon: Shield,     label: "Data protected",    sub: "SOC 2 Type II certified"        },
  { icon: Star,       label: "4.8★ rated",         sub: "2,000+ verified support reviews"},
];

const FAQ_ITEMS = [
  {
    q: "How quickly will you respond to my enquiry?",
    a: "Our team aims to respond to all email and web form enquiries within 4 business hours, Mon–Fri 9 am – 6 pm EST. For urgent technical issues, you can also open a support ticket for immediate assistance.",
  },
  {
    q: "Is there a free trial available?",
    a: "Yes — Citadel offers a 14-day free trial with no credit card required. You get full access to all Business plan features including up to 3 connected screens, Canva integration, and scheduling. No commitment needed.",
  },
  {
    q: "Can I book a product demo before signing up?",
    a: "Absolutely. You can schedule a free 30-minute live demo with one of our product specialists. We'll walk through the dashboard, connect your first screen live, and answer any questions specific to your business.",
  },
  {
    q: "What hardware do I need to get started?",
    a: "You need any commercial TV or monitor and a Citadel Player device ($60 one-time cost). Plug the Player into your screen's HDMI port, connect to Wi-Fi, and sign in to the dashboard. You can be live in under 5 minutes.",
  },
  {
    q: "Do you offer onboarding support for new customers?",
    a: "Yes. Every new Business and Enterprise customer receives a dedicated onboarding call to help you configure your first screens, set up your content schedule, and train your team on the dashboard. Ongoing support is available by chat and email.",
  },
  {
    q: "Is Citadel suitable for small businesses?",
    a: "Yes. Our Business plan starts at $17/month and is designed for businesses of any size — from a single-screen café to a 50-location retail chain. There's no minimum screen count and no long-term contract required.",
  },
  {
    q: "What payment options do you accept?",
    a: "We accept all major credit and debit cards (Visa, Mastercard, Amex), as well as bank transfer for annual Enterprise plans. All billing is handled securely through Stripe. Invoicing is available on Enterprise plans.",
  },
  {
    q: "Can I cancel my subscription at any time?",
    a: "Monthly plans can be cancelled at any time with no cancellation fee — your access continues until the end of the current billing period. Annual plans are non-refundable after 30 days but can be paused or downgraded at any time.",
  },
];

/* ─── 1. HERO ────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-0">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-[500px] h-[400px] bg-blue-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-sky-100 rounded-full blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          variants={fadeUp} initial="hidden" animate="show" custom={0}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                     bg-blue-100 text-blue-700 text-sm font-semibold mb-6 border border-blue-200"
        >
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          We reply within 4 business hours
        </motion.div>

        <motion.h1
          variants={fadeUp} initial="hidden" animate="show" custom={0.1}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900
                     leading-[1.1] tracking-tight mb-6"
        >
          We&rsquo;d love to{" "}
          <span className="bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
            hear from you
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp} initial="hidden" animate="show" custom={0.2}
          className="text-lg text-slate-500 max-w-xl mx-auto mb-14 leading-relaxed"
        >
          Whether you have a question about pricing, need help with a screen,
          or want to see a live demo — our team is standing by.
        </motion.p>

        {/* Contact method cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {CONTACT_METHODS.map(({ icon: Icon, title, detail, sub, iconBg, cardBg, textColor, href }, i) => {
            const inner = (
              <>
                <div className={`w-12 h-12 rounded-2xl ${iconBg} flex items-center justify-center shadow-sm
                                 ${href ? "group-hover:scale-110" : ""} transition-transform duration-200`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className={`text-sm font-bold ${textColor}`}>{title}</p>
                  <p className="text-sm font-medium text-slate-700 mt-0.5">{detail}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{sub}</p>
                </div>
              </>
            );
            const cls = `flex flex-col items-center gap-3 p-6 rounded-2xl border ${cardBg} text-center ${
              href ? "group hover:shadow-lg hover:-translate-y-1 transition-all duration-200" : ""
            }`;
            return href ? (
              <motion.a
                key={title} href={href}
                variants={fadeUp} initial="hidden" animate="show" custom={0.25 + i * 0.08}
                className={cls}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.div
                key={title}
                variants={fadeUp} initial="hidden" animate="show" custom={0.25 + i * 0.08}
                className={cls}
              >
                {inner}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── 2. FORM + SIDEBAR ──────────────────────────────────────────── */
type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;

  inquiryType: string;
  message: string;
  agreed: boolean;
};

const EMPTY_FORM: FormState = {
  firstName: "", lastName: "", email: "", company: "",
  inquiryType: "", message: "", agreed: false,
};

function ContactForm() {
  const [form, setForm]           = useState<FormState>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [errors, setErrors]         = useState<Partial<Record<keyof FormState, string>>>({});

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  }

  function validate() {
    const errs: Partial<Record<keyof FormState, string>> = {};
    if (!form.firstName.trim()) errs.firstName = "Required";
    if (!form.lastName.trim())  errs.lastName  = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.company.trim())   errs.company   = "Required";
    if (!form.inquiryType)      errs.inquiryType = "Please select an inquiry type";
    if (!form.message.trim() || form.message.trim().length < 10) errs.message = "Please write at least 10 characters";
    if (!form.agreed)           errs.agreed    = "Required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          company: form.company,
          inquiryType: form.inquiryType,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setSubmitted(true);
    } catch {
      setErrors({ message: "Something went wrong. Please try again." });
    } finally {
      setSubmitting(false);
    }
  }

  const inputBase =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 " +
    "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-150";
  const inputError = "border-red-300 focus:ring-red-400";

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-start">

          {/* ── Form card ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 sm:p-10"
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Send us a message</h2>
                  <p className="text-sm text-slate-500 mb-8">
                    Fill in the form below and we&rsquo;ll be in touch shortly.
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name row */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          First Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="firstName" value={form.firstName} onChange={handleChange}
                          placeholder="Jane"
                          aria-invalid={!!errors.firstName}
                          aria-describedby={errors.firstName ? "err-firstName" : undefined}
                          className={`${inputBase} ${errors.firstName ? inputError : ""}`}
                        />
                        {errors.firstName && (
                          <p id="err-firstName" role="alert" aria-live="polite" className="mt-1 text-xs text-red-500">{errors.firstName}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Last Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="lastName" value={form.lastName} onChange={handleChange}
                          placeholder="Smith"
                          aria-invalid={!!errors.lastName}
                          aria-describedby={errors.lastName ? "err-lastName" : undefined}
                          className={`${inputBase} ${errors.lastName ? inputError : ""}`}
                        />
                        {errors.lastName && (
                          <p id="err-lastName" role="alert" aria-live="polite" className="mt-1 text-xs text-red-500">{errors.lastName}</p>
                        )}
                      </div>
                    </div>

                    {/* Email + Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Work Email <span className="text-red-400">*</span>
                        </label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          placeholder="jane@company.com"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? "err-email" : undefined}
                          className={`${inputBase} ${errors.email ? inputError : ""}`}
                        />
                        {errors.email && (
                          <p id="err-email" role="alert" aria-live="polite" className="mt-1 text-xs text-red-500">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                          Company Name <span className="text-red-400">*</span>
                        </label>
                        <input
                          name="company" value={form.company} onChange={handleChange}
                          placeholder="Acme Inc."
                          aria-invalid={!!errors.company}
                          aria-describedby={errors.company ? "err-company" : undefined}
                          className={`${inputBase} ${errors.company ? inputError : ""}`}
                        />
                        {errors.company && (
                          <p id="err-company" role="alert" aria-live="polite" className="mt-1 text-xs text-red-500">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    {/* Inquiry type */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Inquiry Type <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <select
                          name="inquiryType" value={form.inquiryType} onChange={handleChange}
                          aria-invalid={!!errors.inquiryType}
                          aria-describedby={errors.inquiryType ? "err-inquiryType" : undefined}
                          className={`${inputBase} appearance-none pr-10 ${errors.inquiryType ? inputError : ""}`}
                        >
                          <option value="">Select a topic…</option>
                          {INQUIRY_TYPES.map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                      </div>
                      {errors.inquiryType && (
                        <p id="err-inquiryType" role="alert" aria-live="polite" className="mt-1 text-xs text-red-500">{errors.inquiryType}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                        Message <span className="text-red-400">*</span>
                      </label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange}
                        rows={5}
                        placeholder="Tell us a bit about your business, how many screens you need, and what you're hoping to achieve…"
                        aria-invalid={!!errors.message}
                        aria-describedby={errors.message ? "err-message" : undefined}
                        className={`${inputBase} resize-none leading-relaxed ${errors.message ? inputError : ""}`}
                      />
                      <div className="flex items-start justify-between mt-1">
                        {errors.message
                          ? <p id="err-message" role="alert" aria-live="polite" className="text-xs text-red-500">{errors.message}</p>
                          : <span />
                        }
                        <span className="text-xs text-slate-400 shrink-0 ml-2">
                          {form.message.length} / 1000
                        </span>
                      </div>
                    </div>

                    {/* Privacy checkbox */}
                    <div>
                      <label className="flex items-start gap-3 cursor-pointer group">
                        <div className="relative mt-0.5 shrink-0">
                          <input
                            type="checkbox" name="agreed"
                            checked={form.agreed} onChange={handleChange}
                            className="sr-only peer"
                          />
                          <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center
                            transition-all duration-150 peer-checked:bg-blue-600 peer-checked:border-blue-600
                            ${errors.agreed ? "border-red-400" : "border-slate-300 group-hover:border-blue-400"}`}>
                            {form.agreed && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                          </div>
                        </div>
                        <span className="text-xs text-slate-500 leading-relaxed">
                          I agree to Citadel&rsquo;s{" "}
                          <a href="https://app.getterms.io/view/GocYO/privacy/en-us" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">Privacy Policy</a>
                          {" "}and consent to being contacted about my enquiry. We never share your data with third parties.
                        </span>
                      </label>
                      {errors.agreed && (
                        <p className="mt-1 text-xs text-red-500 ml-8">You must agree to continue</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-xl
                                 bg-blue-600 text-white font-semibold text-sm
                                 hover:bg-blue-700 hover:scale-[1.01] active:scale-[0.99]
                                 disabled:opacity-70 disabled:cursor-not-allowed
                                 transition-all duration-150 shadow-lg shadow-blue-200"
                    >
                      {submitting ? (
                        <>
                          <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"/>
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* ── Success state ── */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="py-12 text-center"
                  role="status"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5, ease: "backOut" }}
                    className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </motion.div>

                  <h3 className="text-2xl font-extrabold text-slate-900 mb-3">Message received!</h3>
                  <p className="text-slate-500 max-w-sm mx-auto mb-8 leading-relaxed">
                    Thanks{form.firstName ? `, ${form.firstName}` : ""}! We&rsquo;ve got your message and
                    a member of our team will be in touch{" "}
                    <span className="font-semibold text-slate-700">within 4 business hours</span>.
                  </p>

                  <div className="grid grid-cols-3 gap-4 max-w-sm mx-auto mb-10">
                    {[
                      { icon: Clock, label: "4-hr reply" },
                      { icon: Headphones, label: "Real human" },
                      { icon: Shield, label: "Data safe" },
                    ].map(({ icon: Icon, label }) => (
                      <div key={label} className="flex flex-col items-center gap-1.5 p-3 bg-slate-50 rounded-xl">
                        <Icon className="w-5 h-5 text-blue-600" />
                        <span className="text-xs font-medium text-slate-600">{label}</span>
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-slate-400 mb-4">While you wait, explore:</p>
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      { label: "View Pricing", href: "/pricing" },
                      { label: "Digital Signage Guide", href: "/digital-signage" },
                    ].map(({ label, href }) => (
                      <a
                        key={label}
                        href={href}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200
                                   text-sm font-medium text-slate-600 hover:border-blue-300 hover:text-blue-600
                                   hover:bg-blue-50 transition-all duration-150"
                      >
                        {label} <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* ── Sidebar ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" custom={0.1}
            viewport={{ once: true }}
            className="space-y-6 lg:sticky lg:top-24"
          >
            {/* Trust points */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7">
              <h3 className="text-base font-bold text-slate-900 mb-5">Why teams choose Citadel support</h3>
              <div className="space-y-4">
                {TRUST_POINTS.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-800">{label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business hours */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-7 space-y-4">
              <h3 className="text-base font-bold text-slate-900">Business hours</h3>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-slate-500" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Hours</p>
                  <p className="text-sm font-medium text-slate-700">Mon–Fri, 9 am – 6 pm EST</p>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-gradient-to-br from-blue-600 to-sky-600 rounded-3xl p-7 text-white">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                ))}
              </div>
              <blockquote className="text-sm leading-relaxed mb-4 text-blue-50">
                &ldquo;The Citadel support team responded within an hour and had our screens back online
                before the end of the day. Genuinely the best support I&rsquo;ve experienced from any SaaS product.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-xs font-bold text-white">
                  MR
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Marcus R.</p>
                  <p className="text-xs text-blue-200">IT Manager</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── 3. FAQ ─────────────────────────────────────────────────────── */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-slate-500">
            Can&rsquo;t find what you&rsquo;re looking for?{" "}
            <a href="/contact" className="text-blue-600 hover:underline font-medium">
              Contact us directly
            </a>
            .
          </p>
        </motion.div>

        <div className="space-y-3">
          {FAQ_ITEMS.map(({ q, a }, i) => (
            <motion.div
              key={q}
              variants={fadeUp} initial="hidden" whileInView="show" custom={i * 0.04}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl border border-slate-100 overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                aria-expanded={open === i}
              >
                <span className="text-sm font-semibold text-slate-900">{q}</span>
                <div className={`w-7 h-7 rounded-full shrink-0 flex items-center justify-center transition-colors duration-200
                  ${open === i ? "bg-blue-600 text-white" : "bg-white border border-slate-200 text-slate-400"}`}>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`} />
                </div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="px-6 pb-5 text-sm text-slate-500 leading-relaxed border-t border-slate-100 pt-4">
                      {a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── 4. BOTTOM CTA ──────────────────────────────────────────────── */
function BottomCta() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-sky-800
                     rounded-3xl px-8 py-20 text-center overflow-hidden"
        >
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-72 h-72 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10">
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-4">Not ready to fill in a form?</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white
                           leading-tight tracking-tight mb-6 max-w-2xl mx-auto">
              Book a live demo instead
            </h2>
            <p className="text-lg text-blue-100 max-w-lg mx-auto mb-10">
              See Citadel running on a real screen in 30 minutes.
              No slides, no sales pitch — just a live walkthrough tailored to your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/book-a-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700
                           font-bold text-base hover:bg-blue-50 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-xl shadow-blue-900/20">
                <Calendar className="w-5 h-5" />
                Schedule a Demo
              </a>
              <a href="/pricing"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30
                           text-white font-semibold text-base hover:border-white hover:bg-white/10
                           hover:scale-105 active:scale-95 transition-all duration-150">
                View Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── ROOT EXPORT ────────────────────────────────────────────────── */
export default function ContactContent() {
  return (
    <>
      <Hero />
      <ContactForm />
      <FaqSection />
      <BottomCta />
    </>
  );
}
