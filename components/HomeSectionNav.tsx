"use client";

/**
 * HomeSectionNav – floating right-side dot navigation for the homepage.
 * - Active section label stays visible; others appear on hover.
 * - Progress lines between dots: blue for passed/active, grey for upcoming.
 * - Only visible on xl screens and larger.
 */

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero",          label: "Home"         },
  { id: "in-practice",   label: "In Practice"  },
  { id: "how-it-works",  label: "How It Works" },
  { id: "features",      label: "Features"     },
  { id: "industries",    label: "Industries"   },
  { id: "pricing",       label: "Pricing"      },
  { id: "faq",           label: "FAQ"          },
];

export default function HomeSectionNav() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const activeIndex = SECTIONS.findIndex((s) => s.id === active);

  return (
    <div className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-end">
      {SECTIONS.map(({ id, label }, i) => {
        const isActiveSec  = i === activeIndex;
        const isPast       = i < activeIndex;
        const isActiveOrPast = i <= activeIndex;

        return (
          <div key={id} className="flex flex-col items-end">

            {/* Row: label + dot */}
            <button
              onClick={() => scrollTo(id)}
              aria-label={`Scroll to ${label}`}
              className="group flex items-center gap-2.5 py-0.5"
            >
              {/* Label — always visible when active, hover-only otherwise */}
              <span
                className={`text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap
                            bg-white/90 backdrop-blur-sm shadow border border-slate-100
                            transition-all duration-200 pointer-events-none
                  ${isActiveSec
                    ? "opacity-100 translate-x-0 text-blue-600"
                    : "opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-slate-700"
                  }`}
              >
                {label}
              </span>

              {/* Dot — fixed-width container keeps the line centred below */}
              <div className="w-3 flex items-center justify-center">
                <div
                  className={`rounded-full transition-all duration-200
                    ${isActiveSec
                      ? "w-3 h-3 bg-blue-600 shadow-sm shadow-blue-200"
                      : isPast
                        ? "w-2 h-2 bg-blue-400"
                        : "w-2 h-2 bg-slate-300 group-hover:bg-blue-400"
                    }`}
                />
              </div>
            </button>

            {/* Progress line to next dot */}
            {i < SECTIONS.length - 1 && (
              <div className="w-3 flex justify-center">
                <div
                  className={`w-0.5 h-5 transition-colors duration-300
                    ${isActiveOrPast ? "bg-blue-400" : "bg-slate-200"}`}
                />
              </div>
            )}

          </div>
        );
      })}
    </div>
  );
}
