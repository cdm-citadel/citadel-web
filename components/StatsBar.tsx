/**
 * StatsBar – Tight horizontal proof-metrics band.
 * Inserted after TrustedBy to establish immediate credibility.
 */

const STATS = [
  { value: "3,000+", label: "Screens Managed" },
  { value: "< 5 min", label: "Average Setup Time" },
  { value: "99.9%",   label: "Platform Uptime" },
  { value: "6",       label: "Built-In Apps Included" },
];

export default function StatsBar() {
  return (
    <section className="py-12 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-slate-100">
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center text-center lg:px-8"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                {value}
              </span>
              <span className="mt-1 text-sm text-slate-500 font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
