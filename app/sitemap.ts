import { MetadataRoute } from "next";
import { INDUSTRY_SLUGS } from "@/lib/industries-data";
import { getAllPosts, getAllTopics } from "@/lib/sanity/queries";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let posts: { slug: string; publishedAt: string; updatedAt?: string }[] = [];
  let topics: string[] = [];

  try {
    [posts, topics] = await Promise.all([getAllPosts(), getAllTopics()]);
  } catch {
    /* Sanity not configured yet — skip blog URLs */
  }

  return [
    {
      url: "https://citadeldigitalsignage.com",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://citadeldigitalsignage.com/digital-signage",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://citadeldigitalsignage.com/pricing",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: "https://citadeldigitalsignage.com/book-a-demo",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://citadeldigitalsignage.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://citadeldigitalsignage.com/terms-of-service",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...INDUSTRY_SLUGS.map((slug) => ({
      url: `https://citadeldigitalsignage.com/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    /* ── Blog ─────────────────────────────────────────────────────── */
    {
      url: "https://citadeldigitalsignage.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `https://citadeldigitalsignage.com/blog/${post.slug}`,
      lastModified: new Date(post.updatedAt ?? post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...topics.map((topic) => ({
      url: `https://citadeldigitalsignage.com/blog/topic/${topic}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
    ...INDUSTRY_SLUGS.map((slug) => ({
      url: `https://citadeldigitalsignage.com/blog/industry/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
