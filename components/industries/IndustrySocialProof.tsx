"use client";

/**
 * IndustrySocialProof – Lightweight social proof band.
 * Shows review platform ratings + industry-specific customer type pills.
 * Inserted between IndustryHero and IndustryUseCases.
 */

import { Star } from "lucide-react";
import type { IndustryData } from "@/lib/industries-data";

const RATINGS = [
  { platform: "Capterra", score: "4.8" },
  { platform: "G2", score: "4.7" },
  { platform: "Software Advice", score: "4.8" },
];

export default function IndustrySocialProof({ data }: { data: IndustryData }) {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Rating badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {RATINGS.map(({ platform, score }) => (
            <div
              key={platform}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white rounded-full
                         border border-slate-200 shadow-sm text-sm font-semibold text-slate-700"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{score}</span>
              <span className="text-slate-400 font-normal text-xs">{platform}</span>
            </div>
          ))}
        </div>

        {/* Customer type pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-5">
          {data.customerTypes.map((type) => (
            <span
              key={type}
              className={`text-xs font-medium px-3 py-1 rounded-full ${data.accent.badge}
                          border ${data.accent.border}`}
            >
              {type}
            </span>
          ))}
        </div>

        {/* Caption */}
        <p className="text-sm text-slate-500">
          Trusted by{" "}
          <span className="font-semibold text-slate-700">3,000+ screens</span>
          {" "}across {data.name.toLowerCase()} businesses worldwide
        </p>

      </div>
    </section>
  );
}
