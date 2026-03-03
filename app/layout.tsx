import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://citadeldigitalsignage.com"),
  title: "Citadel Digital Signage – Master Your Brand on Any Screen",
  description:
    "The easiest, most powerful digital signage software to manage your screens, engage your customers, and drive revenue. Built for businesses of all sizes.",
  keywords: [
    "digital signage",
    "digital signage software",
    "screen management",
    "signage software",
    "citadel digital signage",
  ],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Citadel Digital Signage",
    locale: "en_US",
    url: "https://citadeldigitalsignage.com",
    title: "Citadel Digital Signage – Master Your Brand on Any Screen",
    description:
      "The easiest, most powerful digital signage software to manage your screens, engage your customers, and drive revenue.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Citadel Digital Signage – Master Your Brand on Any Screen",
    description:
      "The easiest, most powerful digital signage software to manage your screens, engage your customers, and drive revenue.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
                     focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-lg
                     focus:font-semibold focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
