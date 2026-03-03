"use client";

/**
 * Faq – Accordion FAQ section targeting long-tail search queries.
 * Built with useState — no external library.
 */

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ_ITEMS = [
  {
    question: "What is digital signage software?",
    answer:
      "Digital signage software lets you remotely manage and display content — images, videos, web pages, and live data — on screens in your business. Citadel DS handles scheduling, design, and real-time updates from one cloud dashboard.",
  },
  {
    question: "How much does digital signage cost?",
    answer:
      "Citadel DS starts at $17 per screen per month on the Business plan. Enterprise is $27 per screen per month. Both plans include a 14-day free trial with no credit card required.",
  },
  {
    question: "Do I need special hardware to use Citadel?",
    answer:
      "No special hardware is required. Any commercial display with an HDMI input works. Citadel also sells its own plug-and-play Citadel Player device for $60 — it ships pre-configured and is online in minutes.",
  },
  {
    question: "Can I manage multiple locations remotely?",
    answer:
      "Yes. Citadel DS is 100% cloud-based, so you can manage screens across unlimited locations from a single dashboard on any device with a web browser.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Every plan includes a 14-day free trial. No credit card is required. You can cancel at any time — no questions asked.",
  },
  {
    question: "What content apps does Citadel support?",
    answer:
      "Citadel includes built-in content apps: Canva, Google Slides, YouTube, Instagram, Live Weather, Google Reviews, Google Drive, News Ticker, and many more — all included at no extra charge.",
  },
  {
    question: "Is Citadel secure and GDPR compliant?",
    answer:
      "Yes. Citadel DS is SOC 2 compliant and supports GDPR data handling requirements. All connections are encrypted, and role-based access controls are available on all plans.",
  },
  {
    question: "How is Citadel different from a TV stick or Chromecast?",
    answer:
      "Consumer streaming sticks have no scheduling, content management, or remote monitoring capabilities. Citadel provides an enterprise-grade platform with scheduling, analytics, multi-location management, app integrations, and 24/7 uptime monitoring.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                       text-xs font-semibold uppercase tracking-widest mb-4"
          >
            FAQ
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight"
          >
            Common questions, straight answers.
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col divide-y divide-slate-100">
          {FAQ_ITEMS.map(({ question, answer }, idx) => (
            <div key={question}>
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                aria-expanded={openIndex === idx}
              >
                <h3 className="text-sm sm:text-base font-semibold text-slate-900
                               group-hover:text-blue-600 transition-colors leading-snug">
                  {question}
                </h3>
                <span className="shrink-0 mt-0.5 text-slate-400 group-hover:text-blue-500 transition-colors">
                  {openIndex === idx
                    ? <Minus className="w-4 h-4" />
                    : <Plus className="w-4 h-4" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 text-sm text-slate-500 leading-relaxed">{answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
