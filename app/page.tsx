/**
 * Root page – assembles all homepage sections in order.
 * Section order:
 *   Navbar → Hero → TrustedBy → StatsBar → HowItWorks →
 *   SignageInPractice → FeatureTabs → Hardware → Industries → Testimonials →
 *   Apps → Pricing → Faq → FinalCTA → Footer
 */

import Navbar        from "@/components/Navbar";
import Hero          from "@/components/Hero";
import TrustedBy     from "@/components/TrustedBy";
import StatsBar      from "@/components/StatsBar";
import HowItWorks         from "@/components/HowItWorks";
import SignageInPractice  from "@/components/SignageInPractice";
import FeatureTabs        from "@/components/FeatureTabs";
import Hardware      from "@/components/Hardware";
import Industries    from "@/components/Industries";
import Testimonials  from "@/components/Testimonials";
import Apps          from "@/components/Apps";
import Pricing       from "@/components/Pricing";
import Faq           from "@/components/Faq";
import FinalCTA      from "@/components/FinalCTA";
import Footer        from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TrustedBy />
        <StatsBar />
        <HowItWorks />
        <SignageInPractice />
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
