"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

interface BlogSidebarProps {
  relatedPosts: BlogPost[];
  allTopics: string[];
  currentTopic?: string;
}

export default function BlogSidebar({
  relatedPosts,
  allTopics,
  currentTopic,
}: BlogSidebarProps) {
  return (
    <aside className="space-y-8">
      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 p-5">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Related Articles
          </h3>
          <div className="space-y-4">
            {relatedPosts.map((post) => {
              const thumb = post.coverImage
                ? urlFor(post.coverImage).width(120).height(80).url()
                : null;
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="flex gap-3 group"
                >
                  {thumb && (
                    <img
                      src={thumb}
                      alt={post.title}
                      className="w-16 h-12 rounded-lg object-cover shrink-0"
                    />
                  )}
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-slate-700 line-clamp-2
                                  group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </p>
                    <time className="text-xs text-slate-400" dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Topic cloud */}
      {allTopics.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-100 p-5">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Topics
          </h3>
          <div className="flex flex-wrap gap-2">
            {allTopics.map((topic) => (
              <Link
                key={topic}
                href={`/blog/topic/${topic}`}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full transition-colors
                  ${topic === currentTopic
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                  }`}
              >
                {topic.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* CTA */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-center">
        <h3 className="text-white font-bold text-lg mb-2">
          Ready to get started?
        </h3>
        <p className="text-blue-100 text-sm mb-4">
          Try Citadel Digital Signage free for 14 days.
        </p>
        <Link
          href="/pricing"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-700
                     font-semibold text-sm rounded-full hover:scale-105 transition-transform"
        >
          Try For Free <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
