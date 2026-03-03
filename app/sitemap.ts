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
    ...INDUSTRY_SLUGS.map((slug) => ({
      url: `https://citadeldigitalsignage.com/industries/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
  ];
}
