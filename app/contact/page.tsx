/**
 * Contact – standalone contact page.
 * Server component for metadata; all interactive content in ContactContent.
 */

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactContent from "@/components/ContactContent";

export const metadata: Metadata = {
  title: "Contact Us – Citadel Digital Signage",
  description:
    "Get in touch with the Citadel team. Ask about pricing, book a live demo, or get technical support — we reply within 4 business hours.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    siteName: "Citadel Digital Signage",
    locale: "en_US",
    title: "Contact Citadel Digital Signage",
    description:
      "Reach our team by email or book a free 30-minute demo. We reply within 4 business hours.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Citadel Digital Signage",
    description:
      "Reach our team by email or book a free 30-minute demo. We reply within 4 business hours.",
  },
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        <ContactContent />
      </main>
      <Footer />
    </>
  );
}
