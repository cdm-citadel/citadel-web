"use client";

/**
 * TrustedBy – infinite horizontal marquee of company/industry logos.
 * CSS animation only (no JS scroll), pauses on hover.
 */

import { Building2, Stethoscope, ShoppingBag, UtensilsCrossed, Dumbbell, Plane } from "lucide-react";

const LOGOS = [
  { label: "HealthFirst Clinics",    icon: Stethoscope },
  { label: "Apex Retail Group",      icon: ShoppingBag },
  { label: "Metro Dining Co.",       icon: UtensilsCrossed },
  { label: "Summit Corporate",       icon: Building2 },
  { label: "FitLife Gyms",           icon: Dumbbell },
  { label: "TransitHub",             icon: Plane },
  { label: "CityMed Centers",        icon: Stethoscope },
  { label: "Harbor Boutiques",       icon: ShoppingBag },
  { label: "Table & Vine Kitchens",  icon: UtensilsCrossed },
  { label: "Pinnacle Office Suites", icon: Building2 },
];

/* We render the list twice to create a seamless loop */
function LogoList() {
  return (
    <>
      {LOGOS.map(({ label, icon: Icon }, i) => (
        <div
          key={`${label}-${i}`}
          className="flex items-center gap-2.5 px-8 shrink-0 opacity-60 hover:opacity-100 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
            <Icon className="w-4 h-4 text-slate-500" />
          </div>
          <span className="text-sm font-semibold text-slate-600 whitespace-nowrap">{label}</span>
        </div>
      ))}
    </>
  );
}

export default function TrustedBy() {
  return (
    <section className="py-14 border-y border-slate-100 bg-white overflow-hidden">
      {/* Heading */}
      <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
        Trusted by modern clinics, retailers, restaurants, and more
      </p>

      {/* Marquee wrapper – overflow hidden with fade edges */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Track: duplicate content for seamless loop */}
        <div className="flex overflow-hidden">
          <div
            className="flex items-center marquee-track hover:[animation-play-state:paused]"
            style={{ width: "max-content" }}
          >
            <LogoList />
            {/* Duplicate for seamless loop */}
            <LogoList />
          </div>
        </div>
      </div>
    </section>
  );
}
