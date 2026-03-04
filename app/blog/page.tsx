/**
 * Blog listing page – /blog
 * Shows a featured hero post, topic/industry filters, and paginated post grid.
 */

import type { Metadata } from "next";
import { getAllPosts, getAllTopics } from "@/lib/sanity/queries";
import BlogHero from "@/components/blog/BlogHero";
import TopicFilter from "@/components/blog/TopicFilter";
import BlogListingClient from "@/components/blog/BlogListingClient";
import FinalCTA from "@/components/FinalCTA";

export const metadata: Metadata = {
  title: "Blog – Citadel Digital Signage",
  description:
    "Tips, guides, and industry insights on digital signage for every industry.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    siteName: "Citadel Digital Signage",
    title: "Blog – Citadel Digital Signage",
    description:
      "Tips, guides, and industry insights on digital signage for every industry.",
    url: "https://citadeldigitalsignage.com/blog",
  },
};

export default async function BlogPage() {
  const [posts, topics] = await Promise.all([getAllPosts(), getAllTopics()]);

  const featured = posts.find((p) => p.featured) ?? posts[0] ?? null;
  const remaining = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <main id="main-content">
      <BlogHero post={featured} />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicFilter topics={topics} />
          <BlogListingClient posts={remaining} />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
