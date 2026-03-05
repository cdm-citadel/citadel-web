import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import CookieConsentBanner from "@/components/CookieConsentBanner";

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
    "digital signage platform",
    "screen management software",
    "cloud digital signage",
    "signage content management",
    "remote screen updates",
    "digital menu boards",
    "digital display software",
    "citadel digital signage",
    "multi-location signage",
    "business screen software",
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
    <html lang="en" className={inter.variable} suppressHydrationWarning>
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
        <CookieConsentBanner />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
