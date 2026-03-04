"use client";

import Link from "next/link";
import { INDUSTRY_SLUGS } from "@/lib/industries-data";

interface TopicFilterProps {
  topics: string[];
  activeTopic?: string;
  activeIndustry?: string;
}

function toLabel(slug: string) {
  return slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

export default function TopicFilter({
  topics,
  activeTopic,
  activeIndustry,
}: TopicFilterProps) {
  const isAll = !activeTopic && !activeIndustry;

  /* Only show industries that have blog posts — use the full list as a superset */
  const industries = INDUSTRY_SLUGS;

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-12">
      {/* All */}
      <Link
        href="/blog"
        className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors
          ${isAll ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"}`}
      >
        All
      </Link>

      {/* Topics */}
      {topics.map((topic) => (
        <Link
          key={topic}
          href={`/blog/topic/${topic}`}
          className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors
            ${activeTopic === topic
              ? "bg-blue-600 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
            }`}
        >
          {toLabel(topic)}
        </Link>
      ))}

      {/* Divider */}
      {topics.length > 0 && industries.length > 0 && (
        <span className="self-center text-slate-300 px-1">|</span>
      )}

      {/* Industries */}
      {industries.map((ind) => (
        <Link
          key={ind}
          href={`/blog/industry/${ind}`}
          className={`text-sm font-semibold px-4 py-2 rounded-full transition-colors
            ${activeIndustry === ind
              ? "bg-emerald-600 text-white"
              : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100"
            }`}
        >
          {toLabel(ind)}
        </Link>
      ))}
    </div>
  );
}
