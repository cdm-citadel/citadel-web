import { MetadataRoute } from "next";
import { INDUSTRY_SLUGS } from "@/lib/industries-data";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];
}
