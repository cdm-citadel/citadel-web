/**
 * Industry landing page – /industries/[slug]
 * Server component: generateStaticParams (SSG) + generateMetadata (per-page SEO).
 * Passes data as props to "use client" section components.
 */

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { INDUSTRIES_DATA, INDUSTRY_SLUGS } from "@/lib/industries-data";
import IndustryHero         from "@/components/industries/IndustryHero";
import IndustrySocialProof  from "@/components/industries/IndustrySocialProof";
import IndustryImageSection from "@/components/industries/IndustryImageSection";
import IndustryUseCases     from "@/components/industries/IndustryUseCases";
import IndustryFeatures    from "@/components/industries/IndustryFeatures";
import IndustryTestimonial from "@/components/industries/IndustryTestimonial";
import IndustryFaq         from "@/components/industries/IndustryFaq";
import IndustryRelated     from "@/components/industries/IndustryRelated";
import FinalCTA            from "@/components/FinalCTA";

type Props = { params: Promise<{ slug: string }> };

/* ── Static generation ───────────────────────────────────────────────────────── */
export function generateStaticParams() {
  return INDUSTRY_SLUGS.map((slug) => ({ slug }));
}

/* ── Per-page metadata ───────────────────────────────────────────────────────── */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) return {};

  const url = `https://citadeldigitalsignage.com/industries/${slug}`;

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: `/industries/${slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      siteName: "Citadel Digital Signage",
      locale: "en_US",
      url,
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: industry.metaTitle,
      description: industry.metaDescription,
    },
  };
}

/* ── Page component ──────────────────────────────────────────────────────────── */
export default async function IndustryPage({ params }: Props) {
  const { slug } = await params;
  const industry = INDUSTRIES_DATA[slug];
  if (!industry) notFound();

  /* Related industry data (passed as props to keep client bundle lean) */
  const relatedIndustries = industry.relatedSlugs.map(
    (s) => INDUSTRIES_DATA[s]
  ).filter(Boolean);

  /* Per-page JSON-LD schemas */
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://citadeldigitalsignage.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://citadeldigitalsignage.com/#industries",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: `https://citadeldigitalsignage.com/industries/${slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: industry.faq.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <>
      {/* Per-page structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main id="main-content">
        <IndustryHero         data={industry} />
        <IndustrySocialProof  data={industry} />
        <IndustryImageSection data={industry} />
        <IndustryUseCases     data={industry} />
        <IndustryFeatures    data={industry} />
        <IndustryTestimonial data={industry} />
        <IndustryFaq         data={industry} />
        <IndustryRelated     currentName={industry.name} related={relatedIndustries} />
        <FinalCTA />
      </main>
    </>
  );
}
