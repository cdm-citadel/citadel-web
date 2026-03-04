/**
 * Individual blog post page – /blog/[slug]
 * Server component: generateStaticParams (SSG) + generateMetadata (per-page SEO).
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAllPostSlugs,
  getPostBySlug,
  getRelatedPosts,
  getAllTopics,
} from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/image";
import BlogPostHeader from "@/components/blog/BlogPostHeader";
import BlogContent from "@/components/blog/BlogContent";
import BlogSidebar from "@/components/blog/BlogSidebar";
import BlogJsonLd from "@/components/blog/BlogJsonLd";
import FinalCTA from "@/components/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

/* ── Static generation ─────────────────────────────────────────── */
export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

/* ── Per-page metadata ─────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const imageUrl = post.coverImage
    ? urlFor(post.coverImage).width(1200).height(630).url()
    : undefined;

  return {
    title: `${post.title} | Citadel Blog`,
    description: post.excerpt,
    keywords: [...(post.topics ?? []), post.industry, "digital signage blog"].filter(Boolean) as string[],
    alternates: { canonical: `/blog/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "article",
      siteName: "Citadel Digital Signage",
      locale: "en_US",
      url: `https://citadeldigitalsignage.com/blog/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }] : [],
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author?.name ?? "Citadel Team"],
      tags: post.topics,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

/* ── Page component ────────────────────────────────────────────── */
export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const [related, allTopics] = await Promise.all([
    getRelatedPosts(slug, post.industry, post.topics),
    getAllTopics(),
  ]);

  return (
    <>
      <BlogJsonLd post={post} />

      <main id="main-content">
        <BlogPostHeader post={post} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <BlogContent body={post.body} />
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <BlogSidebar
                relatedPosts={related}
                allTopics={allTopics}
              />
            </div>
          </div>
        </div>

        <FinalCTA />
      </main>
    </>
  );
}
