"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";
import type { BlogPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function BlogCard({ post }: { post: BlogPost }) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(600).height(340).url()
    : null;

  return (
    <motion.article
      variants={fadeUp}
      className="group bg-white rounded-2xl border border-slate-100 overflow-hidden
                 shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`}>
        {/* Cover image */}
        <div className="aspect-video bg-slate-100 overflow-hidden">
          {imageUrl ? (
            <img
              src={imageUrl}
              alt={post.coverImage?.alt ?? post.title}
              width={600}
              height={340}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-300 text-sm">
              No image
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Topic pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {post.topics?.slice(0, 2).map((topic) => (
              <span
                key={topic}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600"
              >
                {topic.replace(/-/g, " ")}
              </span>
            ))}
            {post.industry && (
              <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
                {post.industry.replace(/-/g, " ")}
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-slate-900 leading-snug mb-2 line-clamp-2
                         group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <User className="w-3 h-3" />
              {post.author?.name ?? "Citadel Team"}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.estimatedReadingTime || 3} min read
            </span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
