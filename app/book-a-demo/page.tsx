import type { Metadata } from "next";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookADemoContent from "@/components/BookADemoContent";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

export const metadata: Metadata = {
  title: "Book a Demo | Citadel Digital Signage",
  description:
    "Schedule a free 1-on-1 demo with the Citadel team. See how digital signage can transform your business in 30 minutes.",
  alternates: { canonical: "/book-a-demo" },
  openGraph: {
    type: "website",
    siteName: "Citadel Digital Signage",
    locale: "en_US",
    title: "Book a Free Demo – Citadel Digital Signage",
    description:
      "See Citadel digital signage in action with a free 30-minute guided demo. Get answers to your questions and find the right plan for your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Demo – Citadel Digital Signage",
    description:
      "See Citadel digital signage in action with a free 30-minute guided demo. Get answers to your questions and find the right plan for your business.",
  },
};

export default function BookADemoPage() {
  return (
    <>
      <BreadcrumbJsonLd name="Book a Demo" path="/book-a-demo" />
      <Navbar />
      <main id="main-content">
        <BookADemoContent />
      </main>
      <Footer />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
      />
    </>
  );
}
