"use client";

/**
 * IndustrySocialProof – Lightweight social proof band.
 * Shows review platform ratings + industry-specific customer type pills.
 * Inserted between IndustryHero and IndustryUseCases.
 */

import type { IndustryData } from "@/lib/industries-data";

export default function IndustrySocialProof({ data }: { data: IndustryData }) {
  return (
    <section className="py-12 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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
