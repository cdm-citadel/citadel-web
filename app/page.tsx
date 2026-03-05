/**
 * Root page – assembles all homepage sections in order.
 * Section order:
 *   Navbar → Hero → TrustedBy → StatsBar → SignageInPractice →
 *   HowItWorks → FeatureTabs → Hardware → Industries → Testimonials →
 *   Apps → Pricing → Faq → FinalCTA → Footer
 *
 * Below-fold sections are code-split via next/dynamic to reduce initial JS.
 */

import dynamic from "next/dynamic";
import Navbar           from "@/components/Navbar";
import Hero             from "@/components/Hero";
import TrustedBy        from "@/components/TrustedBy";
import StatsBar         from "@/components/StatsBar";
import Footer           from "@/components/Footer";
import HomeSectionNav   from "@/components/HomeSectionNav";

/* Below-fold: lazy-loaded JS chunks, still SSR-rendered */
const SignageInPractice = dynamic(() => import("@/components/SignageInPractice"));
const HowItWorks        = dynamic(() => import("@/components/HowItWorks"));
const FeatureTabs       = dynamic(() => import("@/components/FeatureTabs"));
const Hardware          = dynamic(() => import("@/components/Hardware"));
const Industries        = dynamic(() => import("@/components/Industries"));
const Testimonials      = dynamic(() => import("@/components/Testimonials"));
const Apps              = dynamic(() => import("@/components/Apps"));
const Pricing           = dynamic(() => import("@/components/Pricing"));
const Faq               = dynamic(() => import("@/components/Faq"));
const FinalCTA          = dynamic(() => import("@/components/FinalCTA"));

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HomeSectionNav />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <StatsBar />
        <SignageInPractice />
        <HowItWorks />
        <FeatureTabs />
        <Hardware />
        <Industries />
        <Testimonials />
        <Apps />
        <Pricing />
        <Faq />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
