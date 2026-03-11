/**
 * Root page – assembles all homepage sections in order.
 * Section order:
 *   Navbar → Hero → TrustedBy → StatsBar → SignageInPractice →
 *   HowItWorks → FeatureTabs → Hardware → Industries → Testimonials →
 *   Apps → Pricing → Faq → FinalCTA → Footer
 *
 * Heaviest below-fold sections are code-split via next/dynamic.
 */

import dynamic from "next/dynamic";
import Navbar              from "@/components/Navbar";
import Hero                from "@/components/Hero";
import TrustedBy           from "@/components/TrustedBy";
import StatsBar            from "@/components/StatsBar";
import SignageInPractice   from "@/components/SignageInPractice";
import HowItWorks          from "@/components/HowItWorks";
import Industries          from "@/components/Industries";
import Pricing             from "@/components/Pricing";
import Faq                 from "@/components/Faq";
import FinalCTA            from "@/components/FinalCTA";
import Footer              from "@/components/Footer";
import HomeSectionNav      from "@/components/HomeSectionNav";
import { HOME_FAQ_SCHEMA } from "@/components/JsonLd";

/* Heavy below-fold sections: lazy-loaded JS chunks, still SSR-rendered */
const FeatureTabs  = dynamic(() => import("@/components/FeatureTabs"));
const Hardware     = dynamic(() => import("@/components/Hardware"));
const Testimonials = dynamic(() => import("@/components/Testimonials"));
const Apps         = dynamic(() => import("@/components/Apps"));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_FAQ_SCHEMA) }}
      />
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
