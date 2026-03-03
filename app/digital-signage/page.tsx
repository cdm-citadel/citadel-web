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
    "Citadel digital signage software lets you create, schedule, and publish content to any screen from one cloud dashboard. 140+ integrations, 1,000+ templates, 99.9% uptime.",
  alternates: { canonical: "/digital-signage" },
  openGraph: {
    title: "Digital Signage Software – Citadel",
    description:
      "Manage every screen from one cloud dashboard. 140+ integrations, drag-and-drop editor, real-time scheduling.",
    type: "website",
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
