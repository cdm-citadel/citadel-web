"use client";

/**
 * Footer – Standard SaaS footer with four link columns and branding.
 * All links reflect pages/routes that actually exist on the site.
 */

import Link from "next/link";
import { Monitor, Linkedin, Mail, Phone } from "lucide-react";

type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

const COLUMNS: FooterColumn[] = [
  {
    heading: "Product",
    links: [
      { label: "Digital Signage", href: "/digital-signage" },
      { label: "Hardware",        href: "/#hardware" },
      { label: "Pricing",         href: "/pricing" },
      { label: "Book a Demo",     href: "/book-a-demo" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "Healthcare",     href: "/industries/healthcare"     },
      { label: "Retail",         href: "/industries/retail"         },
      { label: "Restaurants",    href: "/industries/restaurants"    },
      { label: "Corporate",      href: "/industries/corporate"      },
      { label: "Gyms & Spas",    href: "/industries/gyms-spas"      },
      { label: "Transportation", href: "/industries/transportation"  },
      { label: "Education",      href: "/industries/education"      },
      { label: "Manufacturing",  href: "/industries/manufacturing"  },
      { label: "Finance",        href: "/industries/finance"        },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Knowledgebase", href: "https://support.citadeldigitalsignage.com/support/home",        external: true },
      { label: "Support",       href: "https://support.citadeldigitalsignage.com/support/tickets/new", external: true },
      { label: "Book a Demo",   href: "/book-a-demo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact Us",  href: "/contact" },
      { label: "Book a Demo", href: "/book-a-demo" },
      { label: "Support",     href: "https://support.citadeldigitalsignage.com/support/tickets/new", external: true },
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
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
                <Monitor className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-white tracking-tight">
                Citadel<span className="text-blue-400">DS</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed mb-5 max-w-xs">
              The easiest, most powerful digital signage software. Built for businesses of all sizes.
            </p>

            {/* Contact */}
            <div className="flex flex-col gap-2 mb-5">
              <a
                href="mailto:hello@citadeldigitalsignage.com"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                hello@citadeldigitalsignage.com
              </a>
              <a
                href="tel:+18005551234"
                className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                +1 (800) 555-1234
              </a>
            </div>

            {/* Social – LinkedIn only */}
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-slate-300 mb-4">
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map(({ label, href, external }) => (
                  <li key={label + href}>
                    {external ? (
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm hover:text-white transition-colors"
                      >
                        {label}
                      </a>
                    ) : (
                      <Link href={href} className="text-sm hover:text-white transition-colors">
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
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
            <a href="https://app.getterms.io/view/GocYO/privacy/en-us" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <Link href="/terms-of-service" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <a href="https://gettermscdn.com/view/GocYO/cookies/en-us" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors">Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
