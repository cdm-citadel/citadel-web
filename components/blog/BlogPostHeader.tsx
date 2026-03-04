import Link from "next/link";
import { ChevronRight, Clock, User, Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

export default function BlogPostHeader({ post }: { post: BlogPost }) {
  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : null;

  return (
    <header className="pt-28 pb-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1 text-sm text-slate-400 mb-6">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-600 truncate max-w-[200px]">{post.title}</span>
        </nav>

        {/* Topic pills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.topics?.map((topic) => (
            <Link
              key={topic}
              href={`/blog/topic/${topic}`}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-600
                         hover:bg-blue-100 transition-colors"
            >
              {topic.replace(/-/g, " ")}
            </Link>
          ))}
          {post.industry && (
            <Link
              href={`/blog/industry/${post.industry}`}
              className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 text-emerald-600
                         hover:bg-emerald-100 transition-colors"
            >
              {post.industry.replace(/-/g, " ")}
            </Link>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
          {post.title}
        </h1>

        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-5 text-sm text-slate-500 mb-8">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4" />
            {post.author?.name ?? "Citadel Team"}
            {post.author?.role && (
              <span className="text-slate-400">&middot; {post.author.role}</span>
            )}
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            {post.estimatedReadingTime || 3} min read
          </span>
        </div>

        {/* Cover image */}
        {imageUrl && (
          <div className="rounded-2xl overflow-hidden bg-slate-100 mb-8">
            <img
              src={imageUrl}
              alt={post.coverImage?.alt ?? post.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}
      </div>
    </header>
  );
}
