/**
 * Blog posts filtered by industry – /blog/industry/[industry]
 */

import type { Metadata } from "next";
import { INDUSTRY_SLUGS, INDUSTRIES_DATA } from "@/lib/industries-data";
import { getPostsByIndustry, getAllTopics } from "@/lib/sanity/queries";
import TopicFilter from "@/components/blog/TopicFilter";
import BlogListingClient from "@/components/blog/BlogListingClient";
import BlogFilterJsonLd from "@/components/blog/BlogFilterJsonLd";
import FinalCTA from "@/components/FinalCTA";

type Props = { params: Promise<{ industry: string }> };

export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((industry) => ({ industry }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industry } = await params;
  const data = INDUSTRIES_DATA[industry];
  const name = data?.name ?? industry.replace(/-/g, " ");
  return {
    title: `${name} Digital Signage Articles | Citadel Blog`,
    description: `Digital signage tips and guides for the ${name.toLowerCase()} industry.`,
    alternates: { canonical: `/blog/industry/${industry}` },
    openGraph: {
      type: "website",
      siteName: "Citadel Digital Signage",
      locale: "en_US",
      url: `https://citadeldigitalsignage.com/blog/industry/${industry}`,
      title: `${name} Digital Signage Articles | Citadel Blog`,
      description: `Digital signage tips and guides for the ${name.toLowerCase()} industry.`,
    },
    twitter: {
      card: "summary",
      title: `${name} Digital Signage Articles | Citadel Blog`,
      description: `Digital signage tips and guides for the ${name.toLowerCase()} industry.`,
    },
  };
}

export default async function IndustryBlogPage({ params }: Props) {
  const { industry } = await params;
  const data = INDUSTRIES_DATA[industry];
  const name = data?.name ?? industry.replace(/-/g, " ");

  const [posts, allTopics] = await Promise.all([
    getPostsByIndustry(industry),
    getAllTopics(),
  ]);

  return (
    <>
    <BlogFilterJsonLd label={name} path={`/blog/industry/${industry}`} />
    <main id="main-content">
      <section className="pt-32 pb-8 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700
                           text-xs font-semibold uppercase tracking-widest mb-4">
            Industry
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            {name}
          </h1>
          <p className="text-lg text-slate-500">
            {posts.length} article{posts.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TopicFilter topics={allTopics} activeIndustry={industry} />
          <BlogListingClient posts={posts} />
        </div>
      </section>

      <FinalCTA />
    </main>
    </>
  );
}
