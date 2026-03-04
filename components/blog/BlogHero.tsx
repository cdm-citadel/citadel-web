"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import type { BlogPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

export default function BlogHero({ post }: { post: BlogPost | null }) {
  if (!post) {
    return (
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Insights &amp; Guides
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tips, tutorials, and industry insights for digital signage.
          </p>
        </div>
      </section>
    );
  }

  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(800).height(450).url()
    : null;

  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Insights &amp; Guides
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Tips, tutorials, and industry insights for digital signage.
          </p>
        </div>

        {/* Featured post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href={`/blog/${post.slug}`}
            className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl border border-slate-100
                       shadow-sm hover:shadow-lg transition-shadow p-6 md:p-8"
          >
            {/* Image */}
            <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
              {imageUrl && (
                <img
                  src={imageUrl}
                  alt={post.coverImage?.alt ?? post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">
                Featured
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h2>
              <p className="text-slate-500 leading-relaxed mb-4 line-clamp-3">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                <span>{post.author?.name ?? "Citadel Team"}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {post.estimatedReadingTime || 3} min read
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 group-hover:gap-3 transition-all">
                Read article <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
