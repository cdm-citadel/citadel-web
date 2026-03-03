/**
 * Digital Signage – standalone product page.
 * Server component for metadata; interactive sections live in DigitalSignageContent.
 */

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DigitalSignageContent from "@/components/DigitalSignageContent";

export const metadata: Metadata = {
  title: "Digital Signage Software – Citadel | Manage Every Screen, Effortlessly",
  description:
    "Citadel digital signage software lets you create, schedule, and publish content to any screen from one cloud dashboard. Canva integration, real-time scheduling, 99.9% uptime.",
  keywords: [
    "digital signage software",
    "digital signage platform",
    "cloud digital signage",
    "screen management software",
    "signage content management",
    "remote screen management",
    "digital menu boards",
    "digital display software",
  ],
  alternates: { canonical: "/digital-signage" },
  openGraph: {
    type: "website",
    siteName: "Citadel Digital Signage",
    locale: "en_US",
    title: "Digital Signage Software – Citadel",
    description:
      "Manage every screen from one cloud dashboard. Canva integration, drag-and-drop playlist management, real-time scheduling.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Signage Software – Citadel",
    description:
      "Manage every screen from one cloud dashboard. Canva integration, drag-and-drop playlist management, real-time scheduling.",
  },
};

export default function DigitalSignagePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        <DigitalSignageContent />
      </main>
      <Footer />
    </>
  );
}
