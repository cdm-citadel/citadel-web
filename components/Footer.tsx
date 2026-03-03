"use client";

/**
 * Footer – Standard SaaS footer with four link columns and branding.
 */

import Link from "next/link";
import { Monitor, Twitter, Linkedin, Youtube, Mail, Phone } from "lucide-react";

/** Routes for the Solutions (industry) column */
const SOLUTIONS_HREFS: Record<string, string> = {
  "Healthcare":     "/industries/healthcare",
  "Retail":         "/industries/retail",
  "Restaurants":    "/industries/restaurants",
  "Corporate":      "/industries/corporate",
  "Gyms & Spas":    "/industries/gyms-spas",
  "Transportation": "/industries/transportation",
};

const COLUMNS = [
  {
    heading: "Product",
    links: [
      "Features",
      "Hardware",
      "Pricing",
      "Integrations",
      "Changelog",
      "Status",
    ],
  },
  {
    heading: "Solutions",
    links: [
      "Healthcare",
      "Retail",
      "Restaurants",
      "Corporate",
      "Gyms & Spas",
      "Transportation",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Documentation",
      "Blog",
      "Case Studies",
      "Webinars",
      "API Reference",
      "Community",
    ],
  },
  {
    heading: "Contact",
    links: [
      "Support",
      "Sales",
      "Partnerships",
      "Press",
      "Careers",
      "Legal",
    ],
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* Top row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand column – 2 col span */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Monitor className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Citadel<span className="text-blue-400">DS</span>
              </span>
            </a>

            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              The easiest, most powerful digital signage software. Built for businesses of all sizes.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2 mb-5">
              <a href="mailto:hello@citadeldigitalsignage.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                hello@citadeldigitalsignage.com
              </a>
              <a href="tel:+18005551234"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +1 (800) 555-1234
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter,  href: "#", label: "Twitter"  },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Youtube,  href: "#", label: "YouTube"  },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center
                             transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => {
                  const href = heading === "Solutions" ? (SOLUTIONS_HREFS[link] ?? "#") : "#";
                  return (
                    <li key={link}>
                      {heading === "Solutions" && SOLUTIONS_HREFS[link] ? (
                        <Link href={href} className="text-sm hover:text-white transition-colors">
                          {link}
                        </Link>
                      ) : (
                        <a href={href} className="text-sm hover:text-white transition-colors">
                          {link}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Citadel Digital Signage. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
