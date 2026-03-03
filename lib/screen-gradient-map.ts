/**
 * screen-gradient-map.ts
 * Maps industry slugs to Tailwind gradient class strings for use in screen mockups.
 * All strings are complete Tailwind class literals (no dynamic construction)
 * so they are picked up correctly by Tailwind v4's static scanner.
 */

export const SCREEN_GRADIENT_MAP: Record<string, string> = {
  healthcare:     "from-blue-700 via-blue-600 to-cyan-500",
  retail:         "from-pink-600 via-pink-500 to-rose-400",
  restaurants:    "from-orange-600 via-orange-500 to-amber-400",
  corporate:      "from-indigo-700 via-indigo-600 to-violet-500",
  "gyms-spas":    "from-emerald-700 via-emerald-600 to-teal-500",
  transportation: "from-violet-700 via-violet-600 to-purple-500",
  education:      "from-sky-700 via-sky-600 to-blue-500",
  manufacturing:  "from-amber-700 via-amber-600 to-yellow-500",
  finance:        "from-teal-700 via-teal-600 to-cyan-500",
};

export function getScreenGradient(slug: string): string {
  return SCREEN_GRADIENT_MAP[slug] ?? "from-slate-700 to-slate-600";
}
