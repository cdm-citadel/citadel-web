import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async redirects() {
    return [
      /* ── Old /use-cases/* → new /industries/* ────────────────────── */
      { source: "/use-cases/retail-digital-signage",          destination: "/industries/retail",          permanent: true },
      { source: "/use-cases/office-digital-signage",          destination: "/industries/corporate",       permanent: true },
      { source: "/use-cases/healthcare-digital-signage",      destination: "/industries/healthcare",      permanent: true },
      { source: "/use-cases/restaurant-digital-signage",      destination: "/industries/restaurants",     permanent: true },
      { source: "/use-cases/gym-and-spa-digital-signage",     destination: "/industries/gyms-spas",       permanent: true },
      { source: "/use-cases/transportation-digital-signage",  destination: "/industries/transportation",  permanent: true },
      { source: "/use-cases/education-digital-signage",       destination: "/industries/education",       permanent: true },
      { source: "/use-cases/manufacturing-digital-signage",   destination: "/industries/manufacturing",   permanent: true },
      { source: "/use-cases/finance-digital-signage",         destination: "/industries/finance",         permanent: true },
      { source: "/use-cases",                                 destination: "/#industries",                permanent: true },
      { source: "/use-cases/:slug",                           destination: "/#industries",                permanent: true },
      /* ── Old resource / misc pages ──────────────────────────────── */
      { source: "/digital-signage-resources",                 destination: "/blog",                       permanent: true },
      { source: "/resources",                                 destination: "/blog",                       permanent: true },
      /* ── Common guesses / legacy paths ──────────────────────────── */
      { source: "/home",                                      destination: "/",                           permanent: true },
      { source: "/about",                                     destination: "/",                           permanent: true },
      { source: "/about-us",                                  destination: "/",                           permanent: true },
      { source: "/features",                                  destination: "/digital-signage",            permanent: true },
      { source: "/products",                                  destination: "/digital-signage",            permanent: true },
      { source: "/services",                                  destination: "/digital-signage",            permanent: true },
      { source: "/solutions",                                 destination: "/digital-signage",            permanent: true },
      { source: "/demo",                                      destination: "/book-a-demo",                permanent: true },
      { source: "/signup",                                    destination: "/book-a-demo",                permanent: true },
      { source: "/sign-up",                                   destination: "/book-a-demo",                permanent: true },
      { source: "/support",                                   destination: "https://support.citadeldigitalsignage.com/support/tickets/new", permanent: true },
      { source: "/help",                                      destination: "https://support.citadeldigitalsignage.com/support/home",         permanent: true },
      { source: "/faq",                                       destination: "/digital-signage#faq",        permanent: true },
      { source: "/hardware",                                  destination: "/digital-signage",            permanent: true },
      { source: "/industries",                                destination: "/#industries",                permanent: true },
      { source: "/privacy",                                   destination: "/terms-of-service",           permanent: true },
      { source: "/privacy-policy",                            destination: "/terms-of-service",           permanent: true },
      { source: "/cookie-policy",                             destination: "/terms-of-service",           permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
