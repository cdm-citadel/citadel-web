/**
 * Industries layout – wraps all /industries/* pages with Navbar and Footer.
 * Root app/layout.tsx already provides <html>, <body>, <JsonLd />, and skip link.
 */

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function IndustriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
