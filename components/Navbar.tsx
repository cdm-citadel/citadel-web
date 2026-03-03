"use client";

/**
 * Navbar – sticky header that transitions from transparent to solid white on scroll.
 * "Industries" and "Resources" nav items open dropdown flyouts (desktop) / expandable sub-lists (mobile).
 */

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Monitor, Menu, X, ChevronDown, ExternalLink,
  Stethoscope, ShoppingBag, UtensilsCrossed, Building2, Dumbbell, Bus,
  GraduationCap, Factory, Landmark,
  BookOpen, LifeBuoy, CalendarDays,
} from "lucide-react";

/** Simple nav links (no dropdown) */
const NAV_LINKS_BEFORE = [
  { label: "Digital Signage", href: "/digital-signage" },
];
const NAV_LINKS_AFTER = [
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

/** Industries dropdown items */
const INDUSTRY_NAV = [
  { slug: "healthcare",     name: "Healthcare",      icon: Stethoscope,     description: "Patient communication & wayfinding",    color: "bg-blue-50 text-blue-600"     },
  { slug: "retail",         name: "Retail",          icon: ShoppingBag,     description: "Promotions & in-store displays",         color: "bg-pink-50 text-pink-600"     },
  { slug: "restaurants",    name: "Restaurants",     icon: UtensilsCrossed, description: "Digital menus & specials boards",         color: "bg-orange-50 text-orange-600" },
  { slug: "corporate",      name: "Corporate",       icon: Building2,       description: "KPIs, announcements & wayfinding",       color: "bg-blue-50 text-blue-600"     },
  { slug: "gyms-spas",      name: "Gyms & Spas",     icon: Dumbbell,        description: "Class schedules & membership promos",    color: "bg-emerald-50 text-emerald-600"},
  { slug: "transportation", name: "Transportation",  icon: Bus,             description: "Real-time arrivals & safety alerts",     color: "bg-sky-50 text-sky-600"       },
  { slug: "education",      name: "Education",       icon: GraduationCap,   description: "Campus announcements & schedules",       color: "bg-sky-50 text-sky-600"       },
  { slug: "manufacturing",  name: "Manufacturing",   icon: Factory,         description: "Production KPIs & safety alerts",        color: "bg-amber-50 text-amber-600"   },
  { slug: "finance",        name: "Finance",         icon: Landmark,        description: "Live rates & branch promotions",         color: "bg-teal-50 text-teal-600"     },
];

/** Resources dropdown items */
const RESOURCES_NAV = [
  {
    label: "Knowledgebase",
    description: "Guides, tutorials, and how-tos",
    href: "https://support.citadeldigitalsignage.com/support/home",
    icon: BookOpen,
    color: "bg-blue-50 text-blue-600",
    external: true,
  },
  {
    label: "Support",
    description: "Open a ticket with our team",
    href: "https://support.citadeldigitalsignage.com/support/tickets/new",
    icon: LifeBuoy,
    color: "bg-teal-50 text-teal-600",
    external: true,
  },
  {
    label: "Book a Demo",
    description: "Schedule a 1-on-1 walkthrough",
    href: "/book-a-demo",
    icon: CalendarDays,
    color: "bg-purple-50 text-purple-600",
    external: false,
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const isActivePrefix = (prefix: string) => pathname.startsWith(prefix);

  const [scrolled,             setScrolled]             = useState(false);
  const [mobileOpen,           setMobileOpen]           = useState(false);
  const [industriesOpen,       setIndustriesOpen]       = useState(false);
  const [resourcesOpen,        setResourcesOpen]        = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen,  setMobileResourcesOpen]  = useState(false);

  const industriesTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const resourcesTimer  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openIndustries  = () => { clearTimeout(industriesTimer.current); setIndustriesOpen(true);  };
  const closeIndustries = () => { industriesTimer.current = setTimeout(() => setIndustriesOpen(false), 150); };
  const openResources   = () => { clearTimeout(resourcesTimer.current);  setResourcesOpen(true);   };
  const closeResources  = () => { resourcesTimer.current  = setTimeout(() => setResourcesOpen(false),  150); };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center shadow-sm group-hover:bg-blue-700 transition-colors">
                <Monitor className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <span className="font-bold text-lg text-slate-900 tracking-tight">
                Citadel<span className="text-blue-600">DS</span>
              </span>
            </Link>

            {/* ── Desktop nav ── */}
            <nav className="hidden lg:flex items-center gap-1">

              {/* Digital Signage */}
              {NAV_LINKS_BEFORE.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                    ${isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Industries dropdown */}
              <div
                className="relative"
                onMouseEnter={openIndustries}
                onMouseLeave={closeIndustries}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                    ${isActivePrefix("/industries")
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  aria-haspopup="true"
                  aria-expanded={industriesOpen}
                >
                  Industries
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {industriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px]
                                 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                      onMouseEnter={openIndustries}
                      onMouseLeave={closeIndustries}
                    >
                      <div className="p-3 grid grid-cols-3 gap-1">
                        {INDUSTRY_NAV.map(({ slug, name, icon: Icon, description, color }) => (
                          <Link
                            key={slug}
                            href={`/industries/${slug}`}
                            onClick={() => setIndustriesOpen(false)}
                            className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                          >
                            <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center shrink-0 mt-0.5`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                                {name}
                              </p>
                              <p className="text-xs text-slate-500 leading-snug mt-0.5">{description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="border-t border-slate-100 px-4 py-3">
                        <a href="/#industries" className="text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors">
                          View all industries →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing */}
              {NAV_LINKS_AFTER.slice(0, 1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                    ${isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Resources dropdown */}
              <div
                className="relative"
                onMouseEnter={openResources}
                onMouseLeave={closeResources}
              >
                <button
                  className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                    ${isActive("/book-a-demo")
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  aria-haspopup="true"
                  aria-expanded={resourcesOpen}
                >
                  Resources
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${resourcesOpen ? "rotate-180" : ""}`} />
                </button>

                <AnimatePresence>
                  {resourcesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.97 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72
                                 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden z-50"
                      onMouseEnter={openResources}
                      onMouseLeave={closeResources}
                    >
                      <div className="p-2">
                        {RESOURCES_NAV.map(({ label, description, href, icon: Icon, color, external }) => {
                          const inner = (
                            <>
                              <div className={`w-9 h-9 rounded-xl ${color} flex items-center justify-center shrink-0`}>
                                <Icon className="w-4 h-4" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors flex items-center gap-1">
                                  {label}
                                  {external && <ExternalLink className="w-3 h-3 text-slate-400 shrink-0" />}
                                </p>
                                <p className="text-xs text-slate-500 mt-0.5">{description}</p>
                              </div>
                            </>
                          );
                          return external ? (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                            >
                              {inner}
                            </a>
                          ) : (
                            <Link
                              key={label}
                              href={href}
                              onClick={() => setResourcesOpen(false)}
                              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors group"
                            >
                              {inner}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              {NAV_LINKS_AFTER.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-150
                    ${isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="https://app.citadeldigitalsignage.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2"
              >
                Log In
              </a>
              <a
                href="https://app.citadeldigitalsignage.com/tenant-register"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold
                           hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-150 shadow-sm shadow-blue-200"
              >
                Try Today
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-white border-b border-slate-100 shadow-lg lg:hidden"
          >
            <nav className="flex flex-col p-4 gap-1" aria-label="Mobile navigation">

              {/* Digital Signage */}
              {NAV_LINKS_BEFORE.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors
                    ${isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Industries expandable */}
              <div>
                <button
                  onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors
                    ${isActivePrefix("/industries")
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  Industries
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileIndustriesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileIndustriesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="ml-4 flex flex-col gap-0.5 pb-1">
                        {INDUSTRY_NAV.map(({ slug, name, icon: Icon, color }) => (
                          <Link
                            key={slug}
                            href={`/industries/${slug}`}
                            onClick={() => { setMobileOpen(false); setMobileIndustriesOpen(false); }}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                          >
                            <div className={`w-6 h-6 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                              <Icon className="w-3 h-3" />
                            </div>
                            {name}
                          </Link>
                        ))}
                        <a
                          href="/#industries"
                          onClick={() => setMobileOpen(false)}
                          className="px-4 py-2 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          View all industries →
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Pricing */}
              {NAV_LINKS_AFTER.slice(0, 1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors
                    ${isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Resources expandable */}
              <div>
                <button
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-xl transition-colors
                    ${isActive("/book-a-demo")
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  Resources
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence initial={false}>
                  {mobileResourcesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="ml-4 flex flex-col gap-0.5 pb-1">
                        {RESOURCES_NAV.map(({ label, href, icon: Icon, color, external }) =>
                          external ? (
                            <a
                              key={label}
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            >
                              <div className={`w-6 h-6 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                                <Icon className="w-3 h-3" />
                              </div>
                              <span className="flex items-center gap-1">
                                {label}
                                <ExternalLink className="w-3 h-3 text-slate-400" />
                              </span>
                            </a>
                          ) : (
                            <Link
                              key={label}
                              href={href}
                              onClick={() => { setMobileOpen(false); setMobileResourcesOpen(false); }}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-colors"
                            >
                              <div className={`w-6 h-6 rounded-lg ${color} flex items-center justify-center shrink-0`}>
                                <Icon className="w-3 h-3" />
                              </div>
                              {label}
                            </Link>
                          )
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Contact */}
              {NAV_LINKS_AFTER.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-xl transition-colors
                    ${isActive(link.href)
                      ? "text-blue-600 bg-blue-50"
                      : "text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                >
                  {link.label}
                </Link>
              ))}

              <div className="border-t border-slate-100 mt-3 pt-3 flex flex-col gap-2">
                <a href="https://app.citadeldigitalsignage.com/login" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm font-medium text-slate-600 hover:text-blue-600 rounded-xl hover:bg-slate-50 transition-colors">
                  Log In
                </a>
                <a href="https://app.citadeldigitalsignage.com/tenant-register" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-xl text-center hover:bg-blue-700 transition-colors">
                  Try Today
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
