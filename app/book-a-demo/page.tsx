import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookADemoContent from "@/components/BookADemoContent";

export const metadata: Metadata = {
  title: "Book a Demo | Citadel Digital Signage",
  description:
    "Schedule a free 1-on-1 demo with the Citadel team. See how digital signage can transform your business in 30 minutes.",
  alternates: { canonical: "/book-a-demo" },
};

export default function BookADemoPage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <BookADemoContent />
      </main>
      <Footer />
    </>
  );
}
