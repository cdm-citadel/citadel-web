/**
 * Blog posts filtered by topic – /blog/topic/[topic]
 */

import type { Metadata } from "next";
import { getAllTopics, getPostsByTopic } from "@/lib/sanity/queries";
import TopicFilter from "@/components/blog/TopicFilter";
import BlogListingClient from "@/components/blog/BlogListingClient";
import FinalCTA from "@/components/FinalCTA";

type Props = { params: Promise<{ topic: string }> };

function toLabel(slug: string) {
  return slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateStaticParams() {
  const topics = await getAllTopics();
  return topics
    .filter((t): t is string => typeof t === "string" && t.length > 0)
    .map((topic) => ({ topic }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { topic } = await params;
  const label = toLabel(topic);
  return {
    title: `${label} | Citadel Blog`,
    description: `Articles about ${label.toLowerCase()} from Citadel Digital Signage.`,
    alternates: { canonical: `/blog/topic/${topic}` },
  };
}

export default async function TopicPage({ params }: Props) {
  const { topic } = await params;
  const [posts, allTopics] = await Promise.all([
    getPostsByTopic(topic),
    getAllTopics(),
  ]);

  return (
    <main id="main-content">
      <section className="pt-32 pb-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Topic
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {toLabel(topic)}
          </h1>
          <p className="text-lg text-slate-500">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicFilter topics={allTopics} activeTopic={topic} />
          <BlogListingClient posts={posts} />
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
