"use client";

/**
 * IndustryTestimonial – Dark, full-width testimonial block.
 * Quote, star row, name, role, company, avatar initials.
 * + 2 mini-quote cards below the main testimonial.
 */

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { IndustryData } from "@/lib/industries-data";

const MINI_QUOTES: Record<string, Array<{ quote: string; name: string }>> = {
  healthcare: [
    { quote: "Setup took less than 10 minutes per screen. Our IT team was amazed.", name: "Operations Lead" },
    { quote: "Emergency alert override has been invaluable during drills.", name: "Facilities Manager" },
  ],
  retail: [
    { quote: "We cut promotion update time from 2 days to 30 seconds.", name: "Store Manager" },
    { quote: "Our Canva designs go live on screen in one click.", name: "Marketing Lead" },
  ],
  restaurants: [
    { quote: "Daypart switching means our menus are always correct.", name: "General Manager" },
    { quote: "Customers started ordering specials as soon as we put them on screen.", name: "Owner" },
  ],
  corporate: [
    { quote: "Teams announcements now show on every floor automatically.", name: "IT Manager" },
    { quote: "Employee recognition on the lobby screen has been a huge morale boost.", name: "HR Director" },
  ],
  "gyms-spas": [
    { quote: "Class schedule updates from Mindbody show on screens instantly.", name: "Studio Manager" },
    { quote: "Members stop and read the membership upgrade screen every time.", name: "Owner" },
  ],
  transportation: [
    { quote: "Passenger enquiries at the info desk dropped 60% in the first month.", name: "Station Manager" },
    { quote: "GTFS feed integration was up and running in one afternoon.", name: "Systems Engineer" },
  ],
};

export default function IndustryTestimonial({ data }: { data: IndustryData }) {
  const { testimonial } = data;
  const miniQuotes = MINI_QUOTES[data.slug] ?? [];

  return (
    <section id="testimonial" className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >

          {/* Decorative quote mark */}
          <p aria-hidden="true" className="text-8xl font-serif text-slate-700 leading-none mb-4 select-none">
            "
          </p>

          {/* Stars */}
          <div className="flex justify-center gap-1 mb-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-xl sm:text-2xl text-white font-medium leading-relaxed mb-10 max-w-3xl mx-auto">
            {testimonial.quote}
          </blockquote>

          {/* Attribution */}
          <div className="flex items-center justify-center gap-4">
            <div className={`w-12 h-12 rounded-full ${testimonial.avatarBg}
                             flex items-center justify-center shrink-0`}>
              <span className="text-white font-bold text-sm">{testimonial.initials}</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-white">{testimonial.name}</p>
              <p className="text-sm text-slate-400">
                {testimonial.role}
              </p>
            </div>
          </div>

          {/* Industry badge */}
          <div className="mt-8">
            <span className={`inline-block px-4 py-1.5 rounded-full ${data.accent.badge}
                              text-xs font-semibold uppercase tracking-widest`}>
              {data.name} customer
            </span>
          </div>

        </motion.div>

        {/* Mini-quote cards */}
        {miniQuotes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid sm:grid-cols-2 gap-4"
          >
            {miniQuotes.map(({ quote, name }) => (
              <div
                key={name}
                className="bg-slate-800 rounded-2xl p-5 text-left border border-slate-700"
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-3">"{quote}"</p>
                <p className="text-xs font-semibold text-white">{name}</p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
