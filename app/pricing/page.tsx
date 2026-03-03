import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingContent from "@/components/PricingContent";

export const metadata: Metadata = {
  title: "Pricing – Citadel Digital Signage",
  description:
    "Simple, transparent pricing for Citadel Digital Signage software. Business at $17/screen/month, Enterprise at $27/screen/month. 14-day free trial, no credit card required.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Pricing – Citadel Digital Signage",
    description:
      "Simple, transparent pricing. No contracts, no surprises. Start your 14-day free trial today.",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pt-16">
        <PricingContent />
      </main>
      <Footer />
    </>
  );
}
