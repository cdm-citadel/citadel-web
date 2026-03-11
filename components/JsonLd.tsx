/**
 * JsonLd – Structured data (JSON-LD) schemas for SEO.
 * Server component — intentionally no "use client".
 * Renders WebSite, Organization, and SoftwareApplication schemas.
 * FAQPage schema is NOT included here — it is added per-page to avoid duplicates.
 */

const WEBSITE = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Citadel Digital Signage",
  url: "https://citadeldigitalsignage.com",
  description:
    "Cloud-based digital signage software — create, schedule, and manage content across any number of screens from one dashboard.",
};

const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Citadel Digital Signage",
  url: "https://citadeldigitalsignage.com",
  logo: "https://citadeldigitalsignage.com/logo.png",
  email: "hello@citadeldigitalsignage.com",
  sameAs: [
    "https://twitter.com/citadelds",
    "https://www.linkedin.com/company/citadelds",
    "https://www.youtube.com/@citadelds",
  ],
};

const SOFTWARE_APP = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Citadel Digital Signage",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, Chrome OS",
  offers: [
    {
      "@type": "Offer",
      name: "Business",
      price: "17.00",
      priceCurrency: "USD",
      description: "Per screen per month",
    },
    {
      "@type": "Offer",
      name: "Enterprise",
      price: "27.00",
      priceCurrency: "USD",
      description: "Per screen per month",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "320",
  },
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_APP) }}
      />
    </>
  );
}

/** FAQPage schema for the homepage only. Import and render in app/page.tsx. */
export const HOME_FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is digital signage software?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Digital signage software lets you remotely manage and display content — images, videos, web pages, and live data — on screens in your business. Citadel DS handles scheduling, design, and real-time updates from one cloud dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "How much does digital signage cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citadel DS starts at $17 per screen per month on the Business plan. Enterprise is $27 per screen per month. Both plans include a 14-day free trial with no credit card required.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need special hardware to use Citadel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No special hardware is required. Any commercial display with an HDMI input works. Citadel also sells its own plug-and-play Citadel Player device for $60 — it ships pre-configured and is online in minutes.",
      },
    },
    {
      "@type": "Question",
      name: "Can I manage multiple locations remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Citadel DS is 100% cloud-based, so you can manage screens across unlimited locations from a single dashboard, on any device with a web browser.",
      },
    },
    {
      "@type": "Question",
      name: "Is there a free trial?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every plan includes a 14-day free trial. No credit card is required. You can cancel at any time — no questions asked.",
      },
    },
    {
      "@type": "Question",
      name: "What content apps does Citadel support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Citadel includes 6 built-in content apps: Canva, YouTube, Instagram, Google Drive, Google Reviews, Live Weather, and a News Ticker — all included at no extra charge.",
      },
    },
    {
      "@type": "Question",
      name: "Is Citadel secure and GDPR compliant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Citadel DS is SOC 2 compliant and supports GDPR data handling requirements. All connections are encrypted, and role-based access controls are available on all plans.",
      },
    },
    {
      "@type": "Question",
      name: "How is Citadel different from a TV stick or Chromecast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consumer streaming sticks have no scheduling, content management, or remote monitoring capabilities. Citadel provides an enterprise-grade platform with scheduling, analytics, multi-location management, and 24/7 uptime monitoring.",
      },
    },
  ],
};
