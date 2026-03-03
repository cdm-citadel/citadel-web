/**
 * industries-data.ts
 * Single source of truth for all 6 industry landing pages.
 * Used by: app/industries/[slug]/page.tsx (server) and passed as props to client components.
 */

export type MockScreenItem = {
  label: string;
  value: string;
  accent?: boolean; // renders value in industry accent colour
};

export type IndustryData = {
  slug: string;
  name: string;
  nameLong: string;
  lucideIcon: string; // matches icon name in icon-map.ts
  accent: {
    bg: string;      // e.g. "bg-blue-50"
    text: string;    // e.g. "text-blue-600"
    border: string;  // e.g. "border-blue-200"
    badge: string;   // e.g. "bg-blue-100 text-blue-700"
    iconBg: string;  // e.g. "bg-blue-600" (filled icon circle bg)
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    stats: [
      { value: string; label: string },
      { value: string; label: string },
      { value: string; label: string },
    ];
    mockScreen: {
      header: string;
      badge: string;
      items: MockScreenItem[];
    };
  };
  useCases: Array<{ icon: string; title: string; description: string }>;
  features: Array<{ icon: string; title: string; description: string }>;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
    initials: string;
    avatarBg: string;
  };
  faq: Array<{ q: string; a: string }>;
  integrations: Array<{ name: string; icon: string }>;
  customerTypes: string[];
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  relatedSlugs: [string, string];
};

export const INDUSTRIES_DATA: Record<string, IndustryData> = {

  /* ─── HEALTHCARE ──────────────────────────────────────────────────────────── */
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    nameLong: "Hospitals, Clinics & Medical Offices",
    lucideIcon: "Stethoscope",
    accent: {
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      iconBg: "bg-blue-600",
    },
    hero: {
      eyebrow: "Digital Signage for Healthcare",
      headline: "Digital Signage for Hospitals, Clinics & Medical Offices",
      sub: "Reduce perceived wait times, guide patients with confidence, and keep staff informed — all managed from a single dashboard.",
      stats: [
        { value: "37%", label: "Reduction in perceived wait time" },
        { value: "2.4×", label: "Patient satisfaction improvement" },
        { value: "< 5 min", label: "Average setup per screen" },
      ],
      mockScreen: {
        header: "Waiting Room — Suite A",
        badge: "Live",
        items: [
          { label: "Now Serving", value: "#47", accent: true },
          { label: "Estimated Wait", value: "8 minutes" },
          { label: "Health Tip", value: "Wash hands frequently" },
        ],
      },
    },
    useCases: [
      {
        icon: "Tv",
        title: "Patient Education Displays",
        description: "Stream health tips, treatment explainers, and wellness content to waiting rooms — reducing anxiety and improving patient preparedness.",
      },
      {
        icon: "MapPin",
        title: "Lobby & Floor Wayfinding",
        description: "Guide patients and visitors through complex facilities with clear, real-time directional displays at every decision point.",
      },
      {
        icon: "Users",
        title: "Staff Communication Boards",
        description: "Push shift updates, protocol changes, and urgent notices directly to break-room and nursing-station screens without email noise.",
      },
      {
        icon: "Clock",
        title: "Queue & Wait-Time Displays",
        description: "Show live queue positions and estimated wait times — reducing perceived waits and front-desk interruptions by up to 40%.",
      },
    ],
    features: [
      {
        icon: "Lock",
        title: "HIPAA-Friendly Content Controls",
        description: "Role-based access, audit trails, and content review workflows ensure no PHI ever appears on a public-facing display.",
      },
      {
        icon: "AlertTriangle",
        title: "Emergency Alert Override",
        description: "Instantly push a full-screen emergency or code alert to every screen in a facility with a single click from the dashboard or mobile app.",
      },
      {
        icon: "Globe",
        title: "Multi-Site Scheduling",
        description: "Manage content across a single clinic or a 200-location health system from one central dashboard — same login, zero complexity.",
      },
      {
        icon: "Plug",
        title: "EHR-Integration-Ready APIs",
        description: "Connect to Epic, Cerner, or your existing systems to surface live queue data or appointment information directly on screen.",
      },
    ],
    testimonial: {
      quote: "Our patients consistently comment on how professional and calming our waiting rooms feel now. Citadel paid for itself in the first month — the front-desk phone volume dropped by almost half.",
      name: "Dr. Sarah Mitchell",
      role: "Practice Manager",
      company: "Eastside Regional Medical Group",
      initials: "SM",
      avatarBg: "bg-blue-600",
    },
    faq: [
      {
        q: "Is Citadel HIPAA compliant?",
        a: "Citadel is designed with healthcare privacy in mind. Content management uses role-based access controls, full audit trails, and approval workflows to ensure no Protected Health Information (PHI) is accidentally published to a patient-facing display.",
      },
      {
        q: "Can I manage screens across multiple clinic locations?",
        a: "Yes. Citadel's multi-site dashboard lets you group screens by location, wing, or department. You can push content to one screen, one location, or your entire network simultaneously.",
      },
      {
        q: "What hardware do you recommend for clinical environments?",
        a: "We recommend the Citadel Player paired with commercial-grade displays from Samsung or LG. Commercial displays are built for 16–24 hour runtime — critical in healthcare settings. The player is compact, silent, and VESA-mountable.",
      },
      {
        q: "Can I display real-time wait times from our queue management system?",
        a: "Yes. Citadel supports REST API integrations, so you can pull live queue or appointment data from most EHR and queue management systems. Our team can help configure the integration.",
      },
      {
        q: "Does Citadel support emergency alert broadcasting?",
        a: "Yes. Emergency Override allows any authorised administrator to instantly push a full-screen alert to every screen in a location or across all locations. Alerts override all scheduled content until manually dismissed.",
      },
    ],
    metaTitle: "Digital Signage for Healthcare | Citadel",
    metaDescription:
      "Reduce patient wait times, improve wayfinding, and keep staff informed with Citadel digital signage — purpose-built for hospitals, clinics, and medical offices.",
    keywords: [
      "healthcare digital signage",
      "hospital digital signage",
      "clinic waiting room displays",
      "medical office signage",
      "patient communication screens",
      "hospital wayfinding signage",
    ],
    integrations: [
      { name: "Epic", icon: "Heart" },
      { name: "Cerner", icon: "Heart" },
      { name: "Azure AD", icon: "Cloud" },
      { name: "Slack", icon: "MessageSquare" },
      { name: "Microsoft Teams", icon: "MessageSquare" },
      { name: "Workday", icon: "Database" },
    ],
    customerTypes: [
      "County Health Systems",
      "Regional Clinics",
      "Urgent Care Networks",
      "Dental Practices",
      "Rehabilitation Centers",
      "Assisted Living Facilities",
    ],
    relatedSlugs: ["corporate", "transportation"],
  },

  /* ─── RETAIL ──────────────────────────────────────────────────────────────── */
  retail: {
    slug: "retail",
    name: "Retail",
    nameLong: "Retail Stores, Malls & Showrooms",
    lucideIcon: "ShoppingBag",
    accent: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      border: "border-pink-200",
      badge: "bg-pink-100 text-pink-700",
      iconBg: "bg-pink-600",
    },
    hero: {
      eyebrow: "Digital Signage for Retail",
      headline: "Retail Digital Signage That Increases Average Order Value",
      sub: "Capture attention on the floor, promote the right products at the right time, and increase average transaction value — without extra headcount.",
      stats: [
        { value: "33%", label: "Lift in impulse purchases" },
        { value: "3×", label: "Faster promotion updates" },
        { value: "200+", label: "Retail-ready templates" },
      ],
      mockScreen: {
        header: "Weekend Flash Sale",
        badge: "Updating live",
        items: [
          { label: "Winter Collection", value: "40% OFF", accent: true },
          { label: "Promo Code", value: "WINTER40" },
          { label: "Offer Ends", value: "Sunday Midnight" },
        ],
      },
    },
    useCases: [
      {
        icon: "ShoppingBag",
        title: "Window & Entrance Displays",
        description: "Turn your storefront into a 24/7 salesperson with eye-catching entrance screens that pull foot traffic from the street.",
      },
      {
        icon: "Tag",
        title: "Promotional Endcap Screens",
        description: "Highlight featured products and bundle deals right at the point of decision — where purchase intent is highest.",
      },
      {
        icon: "Zap",
        title: "Flash-Sale Countdown Boards",
        description: "Create urgency with real-time countdown timers and flash-promotion content that updates across all stores in seconds.",
      },
      {
        icon: "Heart",
        title: "Loyalty Programme Awareness",
        description: "Drive sign-ups and repeat visits by promoting your loyalty or rewards programme at every screen across your store network.",
      },
    ],
    features: [
      {
        icon: "CreditCard",
        title: "POS-Linked Offer Boards",
        description: "Connect to your point-of-sale to automatically surface high-margin items, surplus stock, or live pricing on any screen.",
      },
      {
        icon: "Layers",
        title: "Zone-Based Screen Targeting",
        description: "Show different content on entrance screens, checkout lanes, and fitting-room areas — all from the same account, zero extra cost.",
      },
      {
        icon: "Zap",
        title: "Flash-Sale Template Library",
        description: "Launch a seasonal promotion in minutes using 200+ retail-ready templates. No designer, no agency, no waiting.",
      },
      {
        icon: "Calendar",
        title: "Seasonal Campaign Scheduler",
        description: "Pre-load holiday, weekend, and event campaigns weeks in advance. Content switches automatically on the day you set.",
      },
    ],
    testimonial: {
      quote: "We ran a weekend flash sale using Citadel and saw a 41% increase in the promoted product's sell-through versus our previous paper-poster campaigns. The ROI was immediate.",
      name: "James Hargreaves",
      role: "Head of Visual Merchandising",
      company: "Beacon Home Goods",
      initials: "JH",
      avatarBg: "bg-pink-600",
    },
    faq: [
      {
        q: "Can I connect Citadel to my point-of-sale system?",
        a: "Yes. Citadel integrates with major POS platforms via REST API or direct connectors. You can automatically surface in-stock items, real-time pricing, and high-margin products on your screens.",
      },
      {
        q: "How quickly can I update a promotion across all my stores?",
        a: "Instantly. Once you publish an update, it goes live on all selected screens within seconds — not the hours or days needed to print and distribute physical signage.",
      },
      {
        q: "Can I show different content in different parts of the store?",
        a: "Absolutely. Citadel's zone targeting lets you group screens by location — window, checkout, fitting rooms — and assign unique content schedules to each group.",
      },
      {
        q: "Does Citadel work for multi-store retail chains?",
        a: "Yes. You can manage a single store or a 500-location chain from one dashboard. Franchisors can lock brand-level templates while allowing local managers to customise approved content slots.",
      },
      {
        q: "Do I need a designer to create content?",
        a: "No. Citadel includes 200+ retail-ready templates and a drag-and-drop editor. You can also connect your Canva account and publish directly from there — no design skills required.",
      },
    ],
    metaTitle: "Retail Digital Signage | Increase Sales & AOV | Citadel",
    metaDescription:
      "Drive impulse purchases, update promotions in seconds, and increase average order value with Citadel retail digital signage — built for stores, malls, and showrooms.",
    keywords: [
      "retail digital signage",
      "store digital displays",
      "in-store signage software",
      "retail screen management",
      "POS digital signage",
      "flash sale signage",
    ],
    integrations: [
      { name: "Shopify", icon: "ShoppingBag" },
      { name: "Square", icon: "CreditCard" },
      { name: "Salesforce", icon: "Database" },
      { name: "Mailchimp", icon: "Mail" },
      { name: "Google Ads", icon: "Globe" },
      { name: "Canva", icon: "Palette" },
    ],
    customerTypes: [
      "Boutique Retailers",
      "Shopping Centres",
      "Franchise Chains",
      "Showrooms",
      "Grocery Stores",
      "Pop-Up Shops",
    ],
    relatedSlugs: ["restaurants", "gyms-spas"],
  },

  /* ─── RESTAURANTS ─────────────────────────────────────────────────────────── */
  restaurants: {
    slug: "restaurants",
    name: "Restaurants",
    nameLong: "Restaurants, Cafés, Bars & QSRs",
    lucideIcon: "UtensilsCrossed",
    accent: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      badge: "bg-orange-100 text-orange-700",
      iconBg: "bg-orange-600",
    },
    hero: {
      eyebrow: "Digital Signage for Restaurants",
      headline: "Digital Menu Boards & Restaurant Signage That Sells",
      sub: "Replace printed menus, highlight specials in real time, and upsell every visit — without printing a single menu ever again.",
      stats: [
        { value: "15%", label: "Increase in upsell orders" },
        { value: "Zero", label: "Menu printing costs" },
        { value: "< 60 s", label: "From edit to live on screen" },
      ],
      mockScreen: {
        header: "Today's Specials",
        badge: "Updated 2 min ago",
        items: [
          { label: "Chef's Feature", value: "Grilled Salmon — $18", accent: true },
          { label: "Soup", value: "Lobster Bisque — $12" },
          { label: "Drinks", value: "Happy Hour 4–7 PM" },
        ],
      },
    },
    useCases: [
      {
        icon: "UtensilsCrossed",
        title: "Digital Menu Boards",
        description: "Replace static boards with vibrant, always-current digital menus that reflect your actual offerings in real time.",
      },
      {
        icon: "RotateCcw",
        title: "Daily-Specials Rotation",
        description: "Push today's specials automatically on a schedule — update once and every screen in every location reflects the change instantly.",
      },
      {
        icon: "Tv",
        title: "Wait-Queue Entertainment",
        description: "Reduce perceived wait times with curated entertainment, brand storytelling, and promotional content while guests are in line.",
      },
      {
        icon: "Gift",
        title: "Loyalty & Rewards Promotion",
        description: "Remind every diner about your rewards programme with high-visibility screen placements near the checkout and exit.",
      },
    ],
    features: [
      {
        icon: "Wheat",
        title: "Allergen & Calorie Fields",
        description: "Stay compliant with local menu-labelling laws. Allergen icons and calorie counts are built into every restaurant menu template.",
      },
      {
        icon: "Clock",
        title: "Daypart Scheduling",
        description: "Automatically switch between breakfast, lunch, and dinner menus at the times you set — zero manual intervention required.",
      },
      {
        icon: "Plug",
        title: "POS Integration Hooks",
        description: "Connect to Toast, Square, or your existing POS to keep on-screen prices and item availability in perfect sync.",
      },
      {
        icon: "Building2",
        title: "Franchise Template Locking",
        description: "Franchisors can define brand-safe templates that local managers can personalise within approved bounds — consistency at scale.",
      },
    ],
    testimonial: {
      quote: "Switching to Citadel menu boards was the best investment we made this year. We upsell the evening tasting menu every single night now — the screen does the selling for us.",
      name: "Marco Delgado",
      role: "Head Chef & Co-owner",
      company: "Osteria Verde",
      initials: "MD",
      avatarBg: "bg-orange-600",
    },
    faq: [
      {
        q: "Can I update my menu from my phone?",
        a: "Yes. The Citadel mobile app lets you edit menu items, update prices, and push specials from anywhere. Changes go live on your screens within seconds.",
      },
      {
        q: "Does Citadel support daypart scheduling for breakfast, lunch, and dinner?",
        a: "Yes. You can define as many dayparts as you need and assign a unique content schedule to each. Menu transitions happen automatically at the times you set.",
      },
      {
        q: "How do I manage digital menus across multiple restaurant locations?",
        a: "Citadel's multi-location dashboard lets you manage all locations from a single login. Push a chain-wide promotion to all sites, or allow individual managers to make local adjustments within your approved templates.",
      },
      {
        q: "Can I connect Citadel to my existing POS system?",
        a: "Citadel integrates with popular restaurant POS platforms including Toast, Square, and Lightspeed via REST API. Price and availability changes in your POS can automatically update your menu boards.",
      },
      {
        q: "Is there a template for allergen and calorie information?",
        a: "Yes. Every Citadel restaurant template includes structured allergen icon fields and calorie count fields, helping you meet local menu-labelling regulations without custom design work.",
      },
    ],
    metaTitle: "Digital Menu Boards & Restaurant Signage | Citadel",
    metaDescription:
      "Ditch printed menus. Update specials in real time, upsell every visit, and cut printing costs to zero with Citadel digital signage for restaurants, cafés, and QSRs.",
    keywords: [
      "restaurant digital signage",
      "digital menu board software",
      "digital menu board",
      "restaurant menu screen",
      "QSR digital signage",
      "cafe menu display",
    ],
    integrations: [
      { name: "Toast POS", icon: "UtensilsCrossed" },
      { name: "Square", icon: "CreditCard" },
      { name: "Yelp", icon: "Star" },
      { name: "DoorDash", icon: "Truck" },
      { name: "OpenTable", icon: "Calendar" },
      { name: "Canva", icon: "Palette" },
    ],
    customerTypes: [
      "Quick-Service Restaurants",
      "Full-Service Restaurants",
      "Café Chains",
      "Bars & Pubs",
      "Food Halls",
      "Hotel Restaurants",
    ],
    relatedSlugs: ["retail", "gyms-spas"],
  },

  /* ─── CORPORATE ───────────────────────────────────────────────────────────── */
  corporate: {
    slug: "corporate",
    name: "Corporate",
    nameLong: "Corporate Offices & Enterprise Workplaces",
    lucideIcon: "Building2",
    accent: {
      bg: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-200",
      badge: "bg-indigo-100 text-indigo-700",
      iconBg: "bg-indigo-600",
    },
    hero: {
      eyebrow: "Digital Signage for Corporate Offices",
      headline: "Office Digital Signage for Internal Communication & Culture",
      sub: "Replace overflowing email inboxes with beautiful screens that keep your entire team aligned, motivated, and informed — floor by floor.",
      stats: [
        { value: "47%", label: "Improvement in comms engagement" },
        { value: "3×", label: "Employee news reach vs email" },
        { value: "1,200+", label: "Corporate offices deployed" },
      ],
      mockScreen: {
        header: "Q4 Sales Dashboard",
        badge: "Live data",
        items: [
          { label: "Revenue", value: "$2.4M ↑ 12%", accent: true },
          { label: "Deals Closed", value: "47 this month" },
          { label: "Team NPS", value: "Score: 72" },
        ],
      },
    },
    useCases: [
      {
        icon: "BarChart2",
        title: "Live KPI Dashboards",
        description: "Surface real-time sales figures, NPS scores, or OKR progress on shared screens to drive accountability and team alignment.",
      },
      {
        icon: "Megaphone",
        title: "Company News & Announcements",
        description: "Broadcast HR updates, product launches, and town hall reminders to every desk and communal area instantly.",
      },
      {
        icon: "Star",
        title: "Employee Recognition Boards",
        description: "Celebrate wins and spotlight high performers on public screens — a proven driver of engagement and staff retention.",
      },
      {
        icon: "Navigation",
        title: "Floor & Meeting-Room Wayfinding",
        description: "Display live room booking status, floor maps, and visitor check-in instructions to reduce confusion and interruptions.",
      },
    ],
    features: [
      {
        icon: "RefreshCcw",
        title: "Microsoft 365 & Google Workspace",
        description: "Pull live calendar data, SharePoint announcements, or Google Slides directly onto your screens — no re-publishing needed.",
      },
      {
        icon: "MessageSquare",
        title: "Slack & Teams Notification Push",
        description: "Display Slack channel highlights or Teams announcements on office screens to reach team members away from their desks.",
      },
      {
        icon: "Database",
        title: "HR System Feeds",
        description: "Integrate with Workday, BambooHR, or your HRIS to auto-publish birthdays, work anniversaries, and new-starter announcements.",
      },
      {
        icon: "Radio",
        title: "Emergency Broadcast Override",
        description: "Instantly push a full-screen emergency message to every screen in your office or entire building network with one click.",
      },
    ],
    testimonial: {
      quote: "Within a month of deploying Citadel, our all-hands survey showed a 52% jump in employees who felt well informed about company direction. Our CEO calls it the best culture investment we've made.",
      name: "Rachel Nguyen",
      role: "Head of Internal Communications",
      company: "Veritas Financial Group",
      initials: "RN",
      avatarBg: "bg-indigo-600",
    },
    faq: [
      {
        q: "Does Citadel integrate with Microsoft 365 and SharePoint?",
        a: "Yes. Citadel connects to Microsoft 365 to pull live calendar data, SharePoint pages, and Power BI dashboards directly onto your screens. Google Workspace content is also supported.",
      },
      {
        q: "Is Citadel suitable for enterprise deployments with SSO requirements?",
        a: "Yes. Enterprise plan customers get SAML 2.0 SSO support, role-based access controls, and a white-label dashboard option — making it straightforward to roll out across large organisations with existing identity providers.",
      },
      {
        q: "How secure is Citadel for internal corporate communications?",
        a: "Citadel is SOC 2 Type II compliant and GDPR-ready. All content is encrypted in transit and at rest. Role-based permissions ensure only authorised team members can publish to sensitive screens.",
      },
      {
        q: "Can we deploy Citadel across multiple office buildings or campuses?",
        a: "Yes. Citadel is built for multi-site deployments. You can organise screens by building, floor, department, or region and manage content for all of them from a single admin account.",
      },
      {
        q: "Can I import existing PowerPoint presentations onto screens?",
        a: "Yes. Upload PowerPoint files directly into the Citadel content library and schedule them like any other content. Slides render natively with no quality loss.",
      },
    ],
    metaTitle: "Corporate Digital Signage for Office Communication | Citadel",
    metaDescription:
      "Replace email noise with screens that inform, align, and motivate. Citadel corporate digital signage integrates with Microsoft 365, Slack, and your HR systems.",
    keywords: [
      "corporate digital signage",
      "office digital signage",
      "internal communication screens",
      "workplace digital displays",
      "employee communication screens",
      "office signage software",
    ],
    integrations: [
      { name: "Slack", icon: "MessageSquare" },
      { name: "Microsoft Teams", icon: "MessageSquare" },
      { name: "Google Workspace", icon: "Globe" },
      { name: "Workday", icon: "Database" },
      { name: "Power BI", icon: "BarChart2" },
      { name: "Tableau", icon: "BarChart2" },
    ],
    customerTypes: [
      "Corporate Headquarters",
      "Regional Offices",
      "Enterprise Companies",
      "Co-working Spaces",
      "Professional Services Firms",
      "Financial Institutions",
    ],
    relatedSlugs: ["healthcare", "transportation"],
  },

  /* ─── GYMS & SPAS ─────────────────────────────────────────────────────────── */
  "gyms-spas": {
    slug: "gyms-spas",
    name: "Gyms & Spas",
    nameLong: "Gyms, Fitness Studios & Spa Facilities",
    lucideIcon: "Dumbbell",
    accent: {
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      badge: "bg-emerald-100 text-emerald-700",
      iconBg: "bg-emerald-600",
    },
    hero: {
      eyebrow: "Digital Signage for Gyms & Spas",
      headline: "Digital Signage for Gyms, Fitness Studios & Spas",
      sub: "Show your class schedule, motivate members on the floor, and drive membership upgrades — all from a single dashboard that updates in real time.",
      stats: [
        { value: "28%", label: "Increase in add-on bookings" },
        { value: "2×", label: "Class sign-up visibility" },
        { value: "40%", label: "Fewer front-desk questions" },
      ],
      mockScreen: {
        header: "Today's Classes",
        badge: "Synced from Mindbody",
        items: [
          { label: "9:00 AM — Yoga", value: "3 spots left", accent: true },
          { label: "11:00 AM — HIIT", value: "Full" },
          { label: "6:00 PM — Spin", value: "8 spots left" },
        ],
      },
    },
    useCases: [
      {
        icon: "Calendar",
        title: "Live Class Schedule Boards",
        description: "Show today's and this week's class schedule in real time, reducing front-desk enquiries and getting members to the right room on time.",
      },
      {
        icon: "Flame",
        title: "Motivational Floor Content",
        description: "Stream high-energy workout videos, member achievement shout-outs, and motivational quotes on gym-floor screens to energise every session.",
      },
      {
        icon: "TrendingUp",
        title: "Membership Upgrade Promotions",
        description: "Promote premium tiers, personal training packages, and seasonal offers at the moments members are most engaged and receptive.",
      },
      {
        icon: "Sparkles",
        title: "Spa Treatment & Service Menus",
        description: "Display your full treatment menu, pricing, and seasonal specials on sleek screens in reception and spa waiting areas.",
      },
    ],
    features: [
      {
        icon: "RefreshCcw",
        title: "Mindbody & Vagaro Integration",
        description: "Sync your live class schedule directly from Mindbody or Vagaro — no manual updates, no scheduling gaps, no missed classes.",
      },
      {
        icon: "Film",
        title: "Motivational Content Library",
        description: "Access 1,000+ licensed workout clips, motivational quotes, and wellness visuals — ready to drop into any screen layout immediately.",
      },
      {
        icon: "Calendar",
        title: "Event & Promotion Calendar",
        description: "Pre-schedule seasonal promotions, member challenges, and events weeks in advance. Content switches automatically on the date you set.",
      },
      {
        icon: "Droplets",
        title: "Humidity-Rated Hardware Pairing",
        description: "We recommend commercial displays and mounting solutions rated for high-humidity environments like pools, saunas, and steam rooms.",
      },
    ],
    testimonial: {
      quote: "Our personal training bookings went up 31% in the 60 days after we installed Citadel screens at the gym entrance. Members actually stop and read the screens — it's become our best marketing channel.",
      name: "Kyle Brennan",
      role: "General Manager",
      company: "Apex Fitness Club",
      initials: "KB",
      avatarBg: "bg-emerald-600",
    },
    faq: [
      {
        q: "Does Citadel integrate with Mindbody or Vagaro for class schedules?",
        a: "Yes. Citadel connects to Mindbody and Vagaro via their APIs to pull your live class schedule. When a class is added, cancelled, or changed in Mindbody, your screen updates automatically — no manual re-entry.",
      },
      {
        q: "What kind of screens work best in a gym environment?",
        a: "We recommend commercial-grade displays with high brightness ratings for gym floors, and IP-rated or humidity-tolerant displays for pool areas and steam rooms. The Citadel Player works with any HDMI-enabled commercial display.",
      },
      {
        q: "Can I display different content in different zones — gym floor vs reception vs spa?",
        a: "Yes. Citadel's zone targeting lets you assign unique content playlists to each area of your facility. Reception screens can show welcome messages, while gym-floor screens show motivation and schedules.",
      },
      {
        q: "Is there a content library for fitness-related visuals?",
        a: "Yes. Citadel includes 1,000+ licensed fitness and wellness visuals — workout clips, motivational quotes, and lifestyle imagery — that you can use on any screen without additional licensing fees.",
      },
      {
        q: "Can I promote personal training packages and membership upgrades on-screen?",
        a: "Absolutely. Our template library includes conversion-focused layouts for personal training promotions, seasonal membership deals, and add-on services. You can schedule these to appear during peak hours for maximum impact.",
      },
    ],
    metaTitle: "Digital Signage for Gyms, Fitness Studios & Spas | Citadel",
    metaDescription:
      "Show live class schedules, motivate members, and increase add-on bookings with Citadel gym and spa digital signage — integrates with Mindbody and Vagaro.",
    keywords: [
      "gym digital signage",
      "fitness studio digital signage",
      "spa digital signage",
      "Mindbody digital signage",
      "gym class schedule display",
      "fitness screen software",
    ],
    integrations: [
      { name: "Mindbody", icon: "Calendar" },
      { name: "Vagaro", icon: "Calendar" },
      { name: "ClassPass", icon: "Flame" },
      { name: "Stripe", icon: "CreditCard" },
      { name: "Instagram", icon: "Heart" },
      { name: "Google Calendar", icon: "Calendar" },
    ],
    customerTypes: [
      "Fitness Studios",
      "Boutique Gyms",
      "Spa Facilities",
      "Wellness Centres",
      "Yoga Studios",
      "Country Clubs",
    ],
    relatedSlugs: ["retail", "restaurants"],
  },

  /* ─── EDUCATION ──────────────────────────────────────────────────────────── */
  education: {
    slug: "education",
    name: "Education",
    nameLong: "Schools, Universities & Campuses",
    lucideIcon: "GraduationCap",
    accent: {
      bg: "bg-sky-50",
      text: "text-sky-600",
      border: "border-sky-200",
      badge: "bg-sky-100 text-sky-700",
      iconBg: "bg-sky-600",
    },
    hero: {
      eyebrow: "Digital Signage for Education",
      headline: "Campus Digital Signage for Schools, Colleges & Universities",
      sub: "Keep students informed, promote events, and broadcast emergency alerts across every building — managed from a single admin account.",
      stats: [
        { value: "3×",     label: "Event sign-up visibility" },
        { value: "< 30 s", label: "Emergency alert delivery to all screens" },
        { value: "800+",   label: "Educational campuses deployed" },
      ],
      mockScreen: {
        header: "Student Union — Main Lobby",
        badge: "Live",
        items: [
          { label: "Today: Career Fair",  value: "Room 204, 1–5 PM", accent: true },
          { label: "Cafeteria Special",   value: "BBQ Chicken Wrap — $6.50" },
          { label: "Gym Hours",           value: "Open until 10 PM" },
        ],
      },
    },
    useCases: [
      {
        icon: "Megaphone",
        title: "Campus-Wide Announcements",
        description: "Broadcast event reminders, academic deadlines, and administrative notices to every building on campus simultaneously — no email required.",
      },
      {
        icon: "UtensilsCrossed",
        title: "Cafeteria Menus & Specials",
        description: "Display daily menus, allergen information, and pricing across dining halls — updated in seconds from the central dashboard.",
      },
      {
        icon: "Calendar",
        title: "Event Promotion & Wayfinding",
        description: "Drive attendance at lectures, sports events, and club nights with high-visibility screen placements at key campus entry points.",
      },
      {
        icon: "Radio",
        title: "Emergency Alert Broadcasting",
        description: "Instantly override every screen on campus with a full-screen emergency notice — lockdown alerts, severe weather, or critical safety messages.",
      },
    ],
    features: [
      {
        icon: "Plug",
        title: "LMS & SIS Integration",
        description: "Connect to Canvas, Blackboard, or your Student Information System to automatically surface class schedules, room bookings, and academic calendars on-screen.",
      },
      {
        icon: "Clock",
        title: "Automated Schedule Displays",
        description: "Pull room booking and class schedule data from your existing systems — displays update automatically so staff never have to touch the dashboard.",
      },
      {
        icon: "Globe",
        title: "Multi-Building Management",
        description: "Manage screens across one campus or a multi-site district from a single login. Group screens by building, department, or faculty with independent schedules.",
      },
      {
        icon: "Lock",
        title: "Faculty-Controlled Zone Screens",
        description: "Give department heads permission to publish to their own zone without access to the rest of the campus network — granular, role-based control.",
      },
    ],
    testimonial: {
      quote: "Event attendance at our university jumped 40% in the semester after we installed Citadel. Students actually stop and read the screens because the content is always fresh and relevant.",
      name: "Professor Linda Ashworth",
      role: "Director of Student Engagement",
      company: "Eastbrook University",
      initials: "LA",
      avatarBg: "bg-sky-600",
    },
    faq: [
      {
        q: "Can Citadel integrate with our LMS (Canvas, Blackboard, etc.)?",
        a: "Yes. Citadel connects to major LMS platforms and Student Information Systems via REST API. You can automatically surface class schedules, room availability, and academic announcements on campus screens without manual updates.",
      },
      {
        q: "Can emergency alerts override all screens instantly?",
        a: "Yes. Citadel's Emergency Override feature lets any authorised administrator push a full-screen alert to every screen on campus — or a specific building — within seconds. All scheduled content pauses until the alert is cleared.",
      },
      {
        q: "How do we manage screens across multiple buildings or campuses?",
        a: "Citadel's multi-site dashboard lets you organise screens by building, floor, or department. You can push content to one room or every screen across your entire district from a single login.",
      },
      {
        q: "Can different departments manage their own screens?",
        a: "Yes. Citadel's role-based access controls let you give department heads or faculty permission to publish content to their zone only — without access to the rest of the campus network.",
      },
      {
        q: "Is there a template library for educational content?",
        a: "Yes. Citadel includes hundreds of templates designed for educational settings — event promotions, cafeteria menus, announcements, wayfinding maps, and more. All are customisable with your institution's branding.",
      },
    ],
    metaTitle: "Campus Digital Signage for Schools & Universities | Citadel",
    metaDescription:
      "Keep students informed, promote events, and broadcast emergency alerts across your campus with Citadel digital signage — built for schools, colleges, and universities.",
    keywords: [
      "education digital signage",
      "campus digital signage",
      "school signage software",
      "university digital displays",
      "student information displays",
      "campus communication screens",
    ],
    integrations: [
      { name: "Canvas LMS",       icon: "Globe" },
      { name: "Blackboard",       icon: "Globe" },
      { name: "Google Workspace", icon: "Globe" },
      { name: "Microsoft Teams",  icon: "MessageSquare" },
      { name: "Slate",            icon: "Database" },
      { name: "Banner SIS",       icon: "Database" },
    ],
    customerTypes: [
      "K–12 Schools",
      "Community Colleges",
      "Universities",
      "Charter Networks",
      "Private Schools",
      "Sports Programs",
    ],
    relatedSlugs: ["corporate", "healthcare"],
  },

  /* ─── MANUFACTURING ───────────────────────────────────────────────────────── */
  manufacturing: {
    slug: "manufacturing",
    name: "Manufacturing",
    nameLong: "Factories, Warehouses & Production Facilities",
    lucideIcon: "Factory",
    accent: {
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-700",
      iconBg: "bg-amber-600",
    },
    hero: {
      eyebrow: "Digital Signage for Manufacturing",
      headline: "Production Floor Displays & Factory Digital Signage",
      sub: "Surface real-time OEE metrics, broadcast safety alerts, and keep every shift team aligned — without a single trip to the control room.",
      stats: [
        { value: "23%",   label: "Improvement in OEE visibility" },
        { value: "< 5 s", label: "Safety alert delivery time" },
        { value: "40%",   label: "Reduction in shift-change delays" },
      ],
      mockScreen: {
        header: "Line 3 — Production Dashboard",
        badge: "Real-time",
        items: [
          { label: "Units/Hour",  value: "847 ↑ 6%", accent: true },
          { label: "Downtime",    value: "12 min today" },
          { label: "Next Target", value: "1,200 by 18:00" },
        ],
      },
    },
    useCases: [
      {
        icon: "BarChart2",
        title: "Live Production KPI Dashboards",
        description: "Display real-time units produced, cycle times, and OEE scores on floor-level screens — keeping every operator aligned with shift targets.",
      },
      {
        icon: "ShieldCheck",
        title: "Safety & Compliance Messaging",
        description: "Rotate mandatory safety reminders, PPE requirements, and incident-free day counters across every screen on the production floor.",
      },
      {
        icon: "Users",
        title: "Shift Scheduling & Attendance",
        description: "Show current shift assignments, upcoming rotations, and attendance data on break-room and entry-point screens to reduce supervisor queries.",
      },
      {
        icon: "Activity",
        title: "Quality Control Tracking",
        description: "Surface live defect rates, first-pass yield, and QC checkpoints on screens at inspection stations to catch issues before they escalate.",
      },
    ],
    features: [
      {
        icon: "Database",
        title: "ERP & MES Integration",
        description: "Connect directly to SAP, Oracle, or your Manufacturing Execution System to pull live production data — no manual data entry, no delays.",
      },
      {
        icon: "Radio",
        title: "Safety Alert Override",
        description: "Instantly push a full-screen safety alert or evacuation notice to every screen on the floor with one click — overriding all scheduled content.",
      },
      {
        icon: "Layers",
        title: "Floor-Level Zone Control",
        description: "Assign unique content to Line 1, the warehouse, the break room, and the loading dock independently — from a single admin account.",
      },
      {
        icon: "Activity",
        title: "Downtime & OEE Analytics",
        description: "Track screen uptime and content delivery alongside your production data — know instantly if a display goes offline during a critical shift.",
      },
    ],
    testimonial: {
      quote: "Since deploying Citadel on our production floor, operators are self-managing against targets for the first time. Downtime incidents have dropped 19% and our shift leads get half as many questions.",
      name: "Tom Brannigan",
      role: "Plant Operations Manager",
      company: "Apex Industrial Components",
      initials: "TB",
      avatarBg: "bg-amber-600",
    },
    faq: [
      {
        q: "Can Citadel integrate with our ERP or MES (SAP, Oracle, etc.)?",
        a: "Yes. Citadel connects to major ERP and MES platforms via REST API and data feeds. You can display live production counts, OEE scores, and shift targets pulled directly from your existing systems — no manual re-entry.",
      },
      {
        q: "How does the safety alert override work on the production floor?",
        a: "Any authorised administrator can trigger a Safety Override from the Citadel dashboard or mobile app. This instantly replaces all content on every screen in a zone or facility with a full-screen safety or evacuation message, cleared only by an admin.",
      },
      {
        q: "Can I show different content in different areas of the facility?",
        a: "Yes. Citadel's zone targeting lets you group screens by production line, warehouse area, break room, or loading dock. Each zone has its own content schedule and can be managed independently.",
      },
      {
        q: "Is the hardware suitable for industrial environments?",
        a: "The Citadel Player is compact and designed for indoor industrial use. For environments with extreme dust, vibration, or temperature ranges, we recommend pairing it with appropriately rated industrial enclosures — our team can advise.",
      },
      {
        q: "Can shift supervisors update screens without an IT team?",
        a: "Yes. Citadel's role-based permissions allow shift supervisors to update approved content zones without accessing the full admin panel — keeping control simple and secure.",
      },
    ],
    metaTitle: "Manufacturing & Factory Digital Signage | Citadel",
    metaDescription:
      "Display live OEE metrics, broadcast safety alerts, and align every shift with Citadel digital signage — built for factories, warehouses, and production facilities.",
    keywords: [
      "manufacturing digital signage",
      "factory digital signage",
      "production floor displays",
      "warehouse digital signage",
      "industrial screen management",
      "OEE digital dashboard",
    ],
    integrations: [
      { name: "SAP",                icon: "Database" },
      { name: "Oracle",             icon: "Database" },
      { name: "Microsoft Dynamics", icon: "Database" },
      { name: "Slack",              icon: "MessageSquare" },
      { name: "PagerDuty",          icon: "AlertTriangle" },
      { name: "Power BI",           icon: "BarChart2" },
    ],
    customerTypes: [
      "Manufacturing Plants",
      "Distribution Centers",
      "Warehouses",
      "Food Processing",
      "Automotive Facilities",
      "Pharmaceutical Plants",
    ],
    relatedSlugs: ["corporate", "transportation"],
  },

  /* ─── FINANCE ─────────────────────────────────────────────────────────────── */
  finance: {
    slug: "finance",
    name: "Finance",
    nameLong: "Banks, Credit Unions & Financial Offices",
    lucideIcon: "Landmark",
    accent: {
      bg: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-200",
      badge: "bg-teal-100 text-teal-700",
      iconBg: "bg-teal-600",
    },
    hero: {
      eyebrow: "Digital Signage for Financial Services",
      headline: "Branch Digital Signage for Banks, Credit Unions & Wealth Firms",
      sub: "Promote products, display live rates, and reduce perceived wait times across every branch — all managed remotely from one compliance-safe dashboard.",
      stats: [
        { value: "34%",  label: "Increase in product enquiries" },
        { value: "2.1×", label: "Faster rate board updates" },
        { value: "500+", label: "Financial branches deployed" },
      ],
      mockScreen: {
        header: "Branch Lobby — Current Offers",
        badge: "Updated now",
        items: [
          { label: "30-Year Mortgage",   value: "6.75% APR", accent: true },
          { label: "High-Yield Savings", value: "4.85% APY" },
          { label: "Auto Loan",          value: "From 5.99% APR" },
        ],
      },
    },
    useCases: [
      {
        icon: "DollarSign",
        title: "Live Rate & Offer Boards",
        description: "Display automatically updated mortgage rates, savings APYs, and loan offers — pulled from your core banking system in real time.",
      },
      {
        icon: "TrendingUp",
        title: "Product & Service Promotions",
        description: "Promote new account offers, credit card sign-ups, and wealth management services to customers while they wait in the branch.",
      },
      {
        icon: "Clock",
        title: "Queue & Wait-Time Displays",
        description: "Show live queue positions and estimated wait times to reduce perceived delays and lower front-desk interruptions by up to 45%.",
      },
      {
        icon: "Tv",
        title: "Financial Education Screens",
        description: "Build trust and drive cross-sell with rotating financial literacy content — budgeting tips, investment explainers, and retirement planning guides.",
      },
    ],
    features: [
      {
        icon: "Wifi",
        title: "Live Rate API Integration",
        description: "Connect to your core banking platform or rate management system to display always-accurate rates and offers — zero manual updates required.",
      },
      {
        icon: "Lock",
        title: "Compliance-Safe Content Controls",
        description: "Role-based approval workflows, content expiry dates, and full audit trails ensure every screen meets regulatory requirements before going live.",
      },
      {
        icon: "Globe",
        title: "Multi-Branch Management",
        description: "Manage content across one branch or a 500-location network from a single dashboard. Regional managers can push to their locations; HQ controls the master template.",
      },
      {
        icon: "ShieldCheck",
        title: "Security & Regulatory Compliance",
        description: "SOC 2 Type II certified, GDPR-ready, and built with financial-sector data security in mind — encryption at rest, SSO support, and detailed access logs.",
      },
    ],
    testimonial: {
      quote: "Citadel transformed our branch experience. Customer enquiries about our home equity product went up 28% in the first month — the screens do the cross-selling for us while the team focuses on service.",
      name: "Angela Forsythe",
      role: "VP of Branch Experience",
      company: "Horizon Community Credit Union",
      initials: "AF",
      avatarBg: "bg-teal-600",
    },
    faq: [
      {
        q: "Can Citadel display live rates pulled from our core banking system?",
        a: "Yes. Citadel integrates via REST API with most core banking platforms and rate management tools. Rate changes in your system can automatically update every branch screen within seconds — no staff intervention required.",
      },
      {
        q: "How does Citadel handle compliance and content approvals?",
        a: "Citadel's Enterprise plan includes content approval workflows, expiry date controls, and full audit trails. Content can be staged, reviewed by a compliance officer, and only published once approved — meeting standard financial advertising controls.",
      },
      {
        q: "Can we manage screens across hundreds of branches?",
        a: "Yes. Citadel is built for multi-site financial networks. You can organise branches by region, set brand-level templates at the corporate level, and give regional managers permission to customise within approved bounds.",
      },
      {
        q: "Is Citadel secure enough for a regulated financial institution?",
        a: "Yes. Citadel is SOC 2 Type II compliant, GDPR-ready, and supports SAML 2.0 SSO for Enterprise customers. All data is encrypted in transit and at rest, with role-based access controls and detailed audit logging.",
      },
      {
        q: "Can we display queue numbers and wait times for teller services?",
        a: "Yes. Citadel integrates with most queue management systems via REST API to display live queue positions and estimated wait times — reducing perceived wait times and front-desk enquiries.",
      },
    ],
    metaTitle: "Digital Signage for Banks & Financial Services | Citadel",
    metaDescription:
      "Display live rates, promote products, and reduce wait times across every branch with Citadel digital signage — compliance-safe and built for banks, credit unions, and wealth firms.",
    keywords: [
      "bank digital signage",
      "financial services digital signage",
      "credit union digital displays",
      "branch digital signage",
      "rate board digital signage",
      "financial office screens",
    ],
    integrations: [
      { name: "Salesforce",  icon: "Database" },
      { name: "Fiserv",      icon: "CreditCard" },
      { name: "Jack Henry",  icon: "Database" },
      { name: "Bloomberg",   icon: "BarChart2" },
      { name: "Teams",       icon: "MessageSquare" },
      { name: "Slack",       icon: "MessageSquare" },
    ],
    customerTypes: [
      "Commercial Banks",
      "Credit Unions",
      "Wealth Management Firms",
      "Insurance Offices",
      "Mortgage Brokers",
      "Investment Firms",
    ],
    relatedSlugs: ["corporate", "healthcare"],
  },

  /* ─── TRANSPORTATION ──────────────────────────────────────────────────────── */
  transportation: {
    slug: "transportation",
    name: "Transportation",
    nameLong: "Transit Hubs, Airports & Public Transport",
    lucideIcon: "Bus",
    accent: {
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      badge: "bg-violet-100 text-violet-700",
      iconBg: "bg-violet-600",
    },
    hero: {
      eyebrow: "Digital Signage for Transportation",
      headline: "Passenger Information Displays & Transit Digital Signage",
      sub: "Give passengers real-time schedules, clear wayfinding, and safety messaging on displays that never sleep — managed from a single control room.",
      stats: [
        { value: "62%", label: "Fewer passenger enquiries" },
        { value: "< 10 s", label: "Real-time update latency" },
        { value: "99.9%", label: "Display uptime SLA" },
      ],
      mockScreen: {
        header: "Platform 3 — Departures",
        badge: "Real-time",
        items: [
          { label: "18:42 → City Centre", value: "On time", accent: true },
          { label: "19:05 → Airport", value: "Delayed 8 min" },
          { label: "19:30 → North Terminal", value: "On time" },
        ],
      },
    },
    useCases: [
      {
        icon: "Clock",
        title: "Real-Time Arrivals & Departures",
        description: "Display live departure and arrival boards pulled from your scheduling system — keeping passengers informed and calm at every touchpoint.",
      },
      {
        icon: "Map",
        title: "Terminal & Station Wayfinding",
        description: "Guide passengers through complex terminals, stations, or concourses with clear, animated wayfinding screens at every junction.",
      },
      {
        icon: "ShieldCheck",
        title: "Safety & Compliance Messaging",
        description: "Broadcast mandatory safety notices, platform closures, and compliance messages to every screen simultaneously in real time.",
      },
      {
        icon: "DollarSign",
        title: "Advertising & Concession Promos",
        description: "Monetise your screen network by displaying targeted advertising or concession promotions during high-dwell periods.",
      },
    ],
    features: [
      {
        icon: "Wifi",
        title: "GTFS & Live API Feed Integration",
        description: "Connect to GTFS feeds or your live scheduling API to display accurate, real-time departure and arrival information on any screen.",
      },
      {
        icon: "Radio",
        title: "Emergency Broadcast Override",
        description: "Instantly override all screens with a full-screen message — service disruptions, evacuation notices, or severe weather alerts.",
      },
      {
        icon: "Activity",
        title: "24/7 Uptime Monitoring",
        description: "Enterprise plan includes continuous screen-health monitoring with automatic alerts if any display goes offline — day or night.",
      },
      {
        icon: "Cloud",
        title: "Weatherproof Hardware Pairing",
        description: "We partner with hardware manufacturers rated for outdoor, exposed, or extreme-temperature environments — from bus shelters to airport tarmacs.",
      },
    ],
    testimonial: {
      quote: "Passenger satisfaction scores at our main terminal went up 18 points in the quarter after installing Citadel. The screens practically eliminated the 'where is my bus?' queue at the information desk.",
      name: "Diane Okafor",
      role: "Director of Passenger Experience",
      company: "Meridian Transit Authority",
      initials: "DO",
      avatarBg: "bg-violet-600",
    },
    faq: [
      {
        q: "Can Citadel connect to our GTFS live feed for real-time schedule data?",
        a: "Yes. Citadel supports GTFS Realtime feeds and custom REST API integrations, allowing you to display live departure and arrival data that updates within 5–10 seconds of a schedule change.",
      },
      {
        q: "How does the emergency broadcast override work?",
        a: "Any authorised administrator can trigger an Emergency Override from the Citadel dashboard or mobile app. This instantly pushes a full-screen alert to every screen in a location or across your entire network. All scheduled content pauses until the override is cleared.",
      },
      {
        q: "Is Citadel reliable enough for 24/7 public transport operations?",
        a: "Yes. Citadel's Enterprise plan includes a 99.9% uptime SLA, 24/7 screen health monitoring, and automatic incident alerts. The Citadel Player is designed for continuous operation and reboots automatically after power interruptions.",
      },
      {
        q: "Can Citadel screens be used outdoors or in exposed environments?",
        a: "The Citadel Player works with any HDMI-enabled display, including commercial outdoor screens rated for your environment. We can advise on compatible hardware for bus shelters, rail platforms, and airport terminals.",
      },
      {
        q: "Can we monetise our screen network with advertising?",
        a: "Yes. Citadel's CitadelAds module allows you to schedule third-party advertising content alongside operational messaging. You control the percentage of screen time allocated to ads and retain all advertising revenue.",
      },
    ],
    metaTitle: "Transit & Transportation Digital Signage | Citadel",
    metaDescription:
      "Real-time departure boards, passenger wayfinding, and emergency broadcast — Citadel transportation digital signage built for transit hubs, airports, and public transport.",
    keywords: [
      "transportation digital signage",
      "transit digital signage",
      "passenger information display",
      "airport digital signage",
      "bus station screen software",
      "GTFS digital signage",
    ],
    integrations: [
      { name: "GTFS Realtime", icon: "Wifi" },
      { name: "Google Maps", icon: "Map" },
      { name: "Microsoft Azure", icon: "Cloud" },
      { name: "AWS", icon: "Cloud" },
      { name: "Slack", icon: "MessageSquare" },
      { name: "PagerDuty", icon: "AlertTriangle" },
    ],
    customerTypes: [
      "Transit Authorities",
      "Airport Terminals",
      "Rail Stations",
      "Bus Depots",
      "Ferry Terminals",
      "Parking Facilities",
    ],
    relatedSlugs: ["healthcare", "corporate"],
  },
};

/** Ordered array of all slugs (matches Industries.tsx INDUSTRIES array order) */
export const INDUSTRY_SLUGS = [
  "healthcare",
  "retail",
  "restaurants",
  "corporate",
  "gyms-spas",
  "transportation",
  "education",
  "manufacturing",
  "finance",
] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];
