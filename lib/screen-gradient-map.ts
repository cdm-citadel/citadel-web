/**
 * screen-gradient-map.ts
 * Maps industry slugs to Tailwind gradient class strings used on screen mockups.
 * Matches the gradients used in the home-page Industries grid.
 */

export function getScreenGradient(slug: string): string {
  const MAP: Record<string, string> = {
    healthcare:     "from-blue-700 via-blue-600 to-cyan-500",
    retail:         "from-pink-600 via-pink-500 to-rose-400",
    restaurants:    "from-orange-600 via-orange-500 to-amber-400",
    corporate:      "from-blue-700 via-blue-600 to-sky-400",
    "gyms-spas":    "from-emerald-700 via-emerald-600 to-teal-500",
    transportation: "from-cyan-700 via-cyan-600 to-sky-400",
  };
  return MAP[slug] ?? "from-slate-700 via-slate-600 to-slate-500";
}
