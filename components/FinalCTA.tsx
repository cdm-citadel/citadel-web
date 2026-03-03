"use client";

/**
 * FinalCTA – Bold, gradient bottom-of-page call-to-action banner.
 */

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900
                     rounded-3xl px-8 py-20 text-center overflow-hidden"
        >

          {/* Decorative circles */}
          <div aria-hidden="true" className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div aria-hidden="true" className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 rounded-full translate-y-1/2 -translate-x-1/4 pointer-events-none" />
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-semibold
                            px-4 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              Free 14-day trial. No credit card required.
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white
                           leading-tight tracking-tight mb-6 max-w-3xl mx-auto">
              Ready to bring your screens to life?
            </h2>

            <p className="text-lg text-blue-100 max-w-xl mx-auto mb-10">
              Join thousands of businesses already using Citadel to engage customers,
              inform employees, and grow revenue — one screen at a time.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.citadeldigitalsignage.com/tenant-register"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-blue-700
                           font-bold text-base hover:bg-blue-50 hover:scale-105 active:scale-95
                           transition-all duration-150 shadow-xl shadow-blue-900/20">
                Start your free trial today
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/book-a-demo"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white/30
                           text-white font-semibold text-base hover:border-white hover:bg-white/10
                           hover:scale-105 active:scale-95 transition-all duration-150">
                Schedule a demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
