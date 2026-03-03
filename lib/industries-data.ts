/**
 * industries-data.ts
 * Source-of-truth data for all 6 industry landing pages.
 * Imported by app/industries/[slug]/page.tsx (server) and industry sub-components (client, type-only).
 */

export type IndustryData = {
  slug: string;
  name: string;
  nameLong: string;
  lucideIcon: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  accent: {
    badge: string;
    bg: string;
    text: string;
    border: string;
    iconBg: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    stats: Array<{ value: string; label: string }>;
    mockScreen: {
      header: string;
      badge: string;
      items: Array<{ label: string; value: string; accent?: boolean }>;
    };
  };
  customerTypes: string[];
  useCases: Array<{ icon: string; title: string; description: string }>;
  features: Array<{ icon: string; title: string; description: string }>;
  integrations: Array<{ name: string }>;
  testimonial: {
    quote: string;
    name: string;
    role: string;
    company: string;
    initials: string;
    avatarBg: string;
  };
  faq: Array<{ q: string; a: string }>;
  relatedSlugs: string[];
};

export const INDUSTRY_SLUGS = [
  "healthcare",
  "retail",
  "restaurants",
  "corporate",
  "gyms-spas",
  "transportation",
] as const;

export const INDUSTRIES_DATA: Record<string, IndustryData> = {
  healthcare: {
    slug: "healthcare",
    name: "Healthcare",
    nameLong: "healthcare facilities",
    lucideIcon: "Stethoscope",
    metaTitle: "Digital Signage for Healthcare | Citadel",
    metaDescription:
      "Improve patient experience, reduce perceived wait times, and keep staff informed with Citadel digital signage for hospitals, clinics, and medical offices.",
    keywords: [
      "healthcare digital signage",
      "hospital signage software",
      "clinic displays",
      "medical office screens",
      "patient waiting room screens",
    ],
    accent: {
      badge: "bg-blue-100 text-blue-700",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
    },
    hero: {
      eyebrow: "Healthcare Digital Signage",
      headline: "Screens that reduce anxiety and improve care.",
      sub: "Citadel helps healthcare organizations reduce perceived wait times, deliver wayfinding information, and keep patients calm and informed — all from one easy dashboard.",
      stats: [
        { value: "22%", label: "Avg. patient satisfaction increase" },
        { value: "< 5 min", label: "Setup time per screen" },
        { value: "99.9%", label: "Uptime guaranteed" },
      ],
      mockScreen: {
        header: "Patient Information Display",
        badge: "Live",
        items: [
          { label: "Current Wait Time", value: "12 min", accent: true },
          { label: "Next Available Room", value: "Room 4" },
          { label: "Today's Providers", value: "Dr. Kim, Dr. Patel" },
          { label: "Emergency Contact", value: "See front desk" },
        ],
      },
    },
    customerTypes: ["Hospitals", "Urgent Care Centers", "Medical Offices", "Dental Clinics", "Specialty Practices"],
    useCases: [
      {
        icon: "Clock",
        title: "Waiting Room Engagement",
        description:
          "Reduce perceived wait times by up to 35% with educational health content, facility news, and local weather — keeping patients informed and calm.",
      },
      {
        icon: "MapPin",
        title: "Patient Wayfinding",
        description:
          "Guide patients and visitors through complex facilities with clear directional screens, department directories, and building maps.",
      },
      {
        icon: "AlertTriangle",
        title: "Emergency Alerts",
        description:
          "Override all screens instantly with emergency alerts, lockdown notices, or critical announcements — one click and every screen updates in seconds.",
      },
      {
        icon: "Users",
        title: "Staff Communications",
        description:
          "Keep clinical and administrative staff aligned with shift schedules, compliance reminders, policy updates, and HR announcements.",
      },
    ],
    features: [
      {
        icon: "Lock",
        title: "Privacy-Conscious Design",
        description:
          "All patient-facing content tools are designed with privacy in mind. No PHI is ever displayed or stored on screens.",
      },
      {
        icon: "AlertTriangle",
        title: "Emergency Override",
        description:
          "Instantly override all screens with emergency messages, codes, or instructions — across every location in your network.",
      },
      {
        icon: "Globe",
        title: "Multi-Location Management",
        description:
          "Manage content across every clinic, wing, or hospital in your network from one centralized dashboard.",
      },
      {
        icon: "Calendar",
        title: "Automated Scheduling",
        description:
          "Schedule content by time of day, day of week, or season — so morning check-in info switches automatically to afternoon health tips.",
      },
    ],
    integrations: [
      { name: "Canva" },
      { name: "YouTube" },
      { name: "Google Drive" },
      { name: "Live Weather" },
      { name: "Google Reviews" },
      { name: "News Ticker" },
    ],
    testimonial: {
      quote:
        "We replaced 6 manual bulletin boards across our clinic network with Citadel. Patient satisfaction scores improved 22% in the first quarter — screens that inform patients actually work.",
      name: "Dr. Sarah Okonkwo",
      role: "Operations Director",
      company: "Meridian Health Group",
      initials: "SO",
      avatarBg: "bg-teal-500",
    },
    faq: [
      {
        q: "Is Citadel suitable for healthcare facilities?",
        a: "Yes. Citadel's platform is designed with patient privacy in mind. All content is curated by your team and no PHI is ever displayed or stored on screens.",
      },
      {
        q: "Can I override all screens in an emergency?",
        a: "Absolutely. Our emergency override feature lets you push a critical message to every screen in your network instantly, from any device.",
      },
      {
        q: "How long does setup take for a clinic?",
        a: "Most clinics are fully operational within a day. Each Citadel Player takes under 5 minutes to set up, and our onboarding team is available to help.",
      },
      {
        q: "Can I manage multiple locations from one account?",
        a: "Yes. Citadel supports unlimited locations under one account. You can manage, schedule, and update content for every facility from a single dashboard.",
      },
      {
        q: "What types of content can I show in waiting rooms?",
        a: "Anything from health education videos and wait time estimates, to local news, weather, and entertainment. You control exactly what appears and when.",
      },
    ],
    relatedSlugs: ["corporate", "retail"],
  },

  retail: {
    slug: "retail",
    name: "Retail",
    nameLong: "retail stores and chains",
    lucideIcon: "ShoppingBag",
    metaTitle: "Digital Signage for Retail | Citadel",
    metaDescription:
      "Drive more sales, promote flash offers, and update pricing instantly across every store with Citadel digital signage for retail.",
    keywords: [
      "retail digital signage",
      "store display software",
      "digital price tags",
      "retail screens",
      "in-store marketing",
    ],
    accent: {
      badge: "bg-pink-100 text-pink-700",
      bg: "bg-pink-50",
      text: "text-pink-600",
      border: "border-pink-200",
      iconBg: "bg-pink-600",
    },
    hero: {
      eyebrow: "Retail Digital Signage",
      headline: "Turn every screen into a sales tool.",
      sub: "Citadel helps retailers push promotions, update pricing, and drive product discovery — from a single screen to hundreds of locations.",
      stats: [
        { value: "18%", label: "Avg. promoted item revenue increase" },
        { value: "4 min", label: "To update all 40+ locations" },
        { value: "500+", label: "Ready-made retail templates" },
      ],
      mockScreen: {
        header: "Today's Promotions",
        badge: "Live",
        items: [
          { label: "Flash Sale", value: "40% Off", accent: true },
          { label: "New Arrivals", value: "Summer Collection" },
          { label: "Loyalty Points", value: "2× Today Only" },
          { label: "Store Hours", value: "Open until 9pm" },
        ],
      },
    },
    customerTypes: ["Fashion Retailers", "Electronics Stores", "Grocery Chains", "Home Goods", "Specialty Boutiques"],
    useCases: [
      {
        icon: "Tag",
        title: "Promotions & Flash Sales",
        description:
          "Launch time-sensitive promotions across every store in minutes. Schedule flash sales to start and end automatically — no staff required.",
      },
      {
        icon: "TrendingUp",
        title: "Upsell & Cross-Sell",
        description:
          "Suggest complementary products and accessories at the point of sale with dynamic screens that react to what's selling.",
      },
      {
        icon: "RotateCcw",
        title: "Instant Pricing Updates",
        description:
          "Update prices and offers across every location simultaneously — no more reprinting signs or sending staff to change displays.",
      },
      {
        icon: "Gift",
        title: "Seasonal Campaigns",
        description:
          "Pre-schedule holiday campaigns, seasonal looks, and event promotions weeks in advance and let Citadel handle the rollout.",
      },
    ],
    features: [
      {
        icon: "Zap",
        title: "Instant Multi-Store Updates",
        description:
          "Push content updates to every store in your network simultaneously — changes go live in under 60 seconds.",
      },
      {
        icon: "Calendar",
        title: "Campaign Scheduling",
        description:
          "Schedule promotions to start and end at exact times — daypart your content so the right offer reaches shoppers at the right moment.",
      },
      {
        icon: "Layers",
        title: "Template Library",
        description:
          "Choose from 500+ retail-focused templates or bring in your own Canva designs for consistent, branded in-store displays.",
      },
      {
        icon: "BarChart2",
        title: "Performance Analytics",
        description:
          "Track content performance, screen uptime, and promotion engagement to continuously improve your in-store marketing.",
      },
    ],
    integrations: [
      { name: "Canva" },
      { name: "Instagram" },
      { name: "Google Drive" },
      { name: "YouTube" },
      { name: "Google Reviews" },
      { name: "News Ticker" },
    ],
    testimonial: {
      quote:
        "Our in-store promotions used to take 3 days to roll out across 40 locations. With Citadel it takes 4 minutes. Revenue from promoted items is up 18% since launch.",
      name: "Marcus Tran",
      role: "Head of Marketing",
      company: "Westfield Retail Co.",
      initials: "MT",
      avatarBg: "bg-blue-500",
    },
    faq: [
      {
        q: "How quickly can I push a promotion to all stores?",
        a: "Updates go live across your entire network in under 60 seconds. You can also schedule promotions to start and end at exact times automatically.",
      },
      {
        q: "Can I use my own brand designs?",
        a: "Yes. You can upload your own graphics, use our Canva integration, or start from one of 500+ retail templates. Full brand control is always yours.",
      },
      {
        q: "What apps and tools can I connect to Citadel?",
        a: "Citadel includes built-in integrations with Canva, Instagram, YouTube, Google Drive, Google Reviews, Live Weather, and News Ticker — all included at no extra charge.",
      },
      {
        q: "Can different stores show different content?",
        a: "Absolutely. You can show the same content everywhere, or customize per store, region, or screen group — all from one dashboard.",
      },
      {
        q: "What screens does the Citadel Player support?",
        a: "The Citadel Player works with any HDMI display up to 4K. It's compatible with all major commercial screen brands.",
      },
    ],
    relatedSlugs: ["restaurants", "healthcare"],
  },

  restaurants: {
    slug: "restaurants",
    name: "Restaurants",
    nameLong: "restaurants and food service businesses",
    lucideIcon: "UtensilsCrossed",
    metaTitle: "Digital Menu Boards for Restaurants | Citadel",
    metaDescription:
      "Replace printed menus with dynamic digital menu boards. Update specials instantly, switch dayparts automatically, and upsell with Citadel.",
    keywords: [
      "restaurant digital menu boards",
      "digital signage for restaurants",
      "menu board software",
      "QSR screens",
      "food service display",
    ],
    accent: {
      badge: "bg-orange-100 text-orange-700",
      bg: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-200",
      iconBg: "bg-orange-600",
    },
    hero: {
      eyebrow: "Restaurant Digital Signage",
      headline: "Your menu, always fresh. Your specials, always live.",
      sub: "Citadel replaces static menus with dynamic digital boards — update items and prices instantly, switch from breakfast to lunch automatically, and upsell with eye-catching promotions.",
      stats: [
        { value: "15%", label: "Avg. increase in upsell revenue" },
        { value: "30 sec", label: "To update your full menu" },
        { value: "Auto", label: "Daypart switching — no staff needed" },
      ],
      mockScreen: {
        header: "Today's Menu",
        badge: "Live",
        items: [
          { label: "Today's Special", value: "Grilled Salmon", accent: true },
          { label: "Happy Hour", value: "4pm – 7pm" },
          { label: "Featured Drink", value: "Summer Sangria" },
          { label: "Estimated Wait", value: "~15 minutes" },
        ],
      },
    },
    customerTypes: ["Quick Service", "Casual Dining", "Coffee Shops", "Food Trucks", "Ghost Kitchens", "Catering"],
    useCases: [
      {
        icon: "Wheat",
        title: "Digital Menu Boards",
        description:
          "Replace your printed menus with live digital boards. Update items, prices, and photos instantly — no reprinting, no waiting.",
      },
      {
        icon: "Clock",
        title: "Automatic Daypart Switching",
        description:
          "Schedule your breakfast, lunch, dinner, and happy hour menus to switch automatically. Perfect timing, every day, zero manual effort.",
      },
      {
        icon: "Flame",
        title: "Daily Specials Promotion",
        description:
          "Highlight today's specials with high-impact visuals that grab attention and drive orders before guests even reach the counter.",
      },
      {
        icon: "Tv",
        title: "Entertainment & Wait Time",
        description:
          "Keep guests entertained and reduce perceived wait times with curated content, news, sports scores, and wait time estimates.",
      },
    ],
    features: [
      {
        icon: "RefreshCcw",
        title: "Instant Menu Updates",
        description:
          "Add a sold-out item, change a price, or launch a new special — updates reflect across all your screens in under 30 seconds.",
      },
      {
        icon: "Calendar",
        title: "Daypart Automation",
        description:
          "Set it once: breakfast, lunch, dinner, and late-night menus switch on schedule every day without any staff action.",
      },
      {
        icon: "Layers",
        title: "Beautiful Food Templates",
        description:
          "Choose from hundreds of restaurant-specific templates designed to make your food photography and specials look irresistible.",
      },
      {
        icon: "Globe",
        title: "Multi-Location Control",
        description:
          "Whether you have 1 or 100 locations, manage every menu board from one dashboard. Push to all, or customize per location.",
      },
    ],
    integrations: [
      { name: "Canva" },
      { name: "YouTube" },
      { name: "Instagram" },
      { name: "Google Reviews" },
      { name: "Live Weather" },
      { name: "News Ticker" },
    ],
    testimonial: {
      quote:
        "Switching to Citadel digital menu boards was the best decision we made this year. We update specials in 30 seconds and our upsell revenue on featured items is up 15%.",
      name: "Carlos Rivera",
      role: "Owner & Head Chef",
      company: "Verde Bistro",
      initials: "CR",
      avatarBg: "bg-orange-500",
    },
    faq: [
      {
        q: "Can I schedule my menu to change automatically throughout the day?",
        a: "Yes. Citadel's daypart scheduling lets you set exact times for breakfast, lunch, dinner, and happy hour menus to switch automatically — every day.",
      },
      {
        q: "What if I need to update an item right away?",
        a: "Simply log in from your phone and update the item. Changes go live across all your screens in under 30 seconds.",
      },
      {
        q: "Do I need design experience to make great-looking menus?",
        a: "Not at all. Citadel includes hundreds of restaurant-specific templates. You just swap in your items and photos — no design skills needed.",
      },
      {
        q: "Can I use my existing screens?",
        a: "Yes. The Citadel Player works with any HDMI screen. Plug it in, connect to Wi-Fi, and your digital board is live in minutes.",
      },
      {
        q: "What integrations come included with Citadel?",
        a: "Citadel includes built-in integrations with Canva, YouTube, Instagram, Google Reviews, Live Weather, and News Ticker — all at no extra charge and ready to use from day one.",
      },
    ],
    relatedSlugs: ["retail", "corporate"],
  },

  corporate: {
    slug: "corporate",
    name: "Corporate Offices",
    nameLong: "corporate offices and enterprise workplaces",
    lucideIcon: "Building2",
    metaTitle: "Digital Signage for Corporate Offices | Citadel",
    metaDescription:
      "Keep employees informed, celebrate wins, and run your office communication on digital screens. Citadel for corporate workplaces.",
    keywords: [
      "corporate digital signage",
      "office screens",
      "workplace communication displays",
      "employee engagement screens",
      "enterprise signage",
    ],
    accent: {
      badge: "bg-blue-100 text-blue-700",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      iconBg: "bg-blue-600",
    },
    hero: {
      eyebrow: "Corporate Digital Signage",
      headline: "Inform every employee. Celebrate every win.",
      sub: "Citadel turns your office screens into a powerful internal communications channel — display KPIs, company news, employee spotlights, and more from one dashboard.",
      stats: [
        { value: "10+", label: "Hours saved per week (AV team)" },
        { value: "200", label: "Screens managed by one admin" },
        { value: "< 5 min", label: "To push a company-wide update" },
      ],
      mockScreen: {
        header: "Corporate HQ — Floor 3",
        badge: "Live",
        items: [
          { label: "Q3 Revenue", value: "$2.4M ↑", accent: true },
          { label: "Team Spotlight", value: "Engineering" },
          { label: "Town Hall", value: "Thursday 2pm" },
          { label: "Office Hours", value: "8am – 7pm" },
        ],
      },
    },
    customerTypes: ["Enterprise HQs", "Mid-Market Offices", "Multi-Floor Buildings", "Financial Services", "Tech Companies"],
    useCases: [
      {
        icon: "BarChart2",
        title: "KPI & Metrics Dashboards",
        description:
          "Surface live business metrics, sales performance, and OKRs on lobby and floor screens — keeping every team aligned with company goals.",
      },
      {
        icon: "Megaphone",
        title: "Company-Wide Announcements",
        description:
          "Push HR updates, policy changes, or executive messages to every floor and location simultaneously, in real time.",
      },
      {
        icon: "Star",
        title: "Employee Recognition",
        description:
          "Celebrate birthdays, work anniversaries, and team wins on the lobby screen. Boost morale with visible, company-wide recognition.",
      },
      {
        icon: "Navigation",
        title: "Lobby & Wayfinding",
        description:
          "Welcome visitors, guide employees through complex campuses, and display meeting room availability on corridor screens.",
      },
    ],
    features: [
      {
        icon: "Database",
        title: "Live Data Integrations",
        description:
          "Connect to Google Drive and Canva to surface live presentations, documents, and branded content directly on your office screens.",
      },
      {
        icon: "Users",
        title: "Role-Based Access",
        description:
          "Give department managers content control for their own screens while keeping company-wide overrides in IT's hands.",
      },
      {
        icon: "Globe",
        title: "Multi-Campus Management",
        description:
          "Manage screens across every office, floor, and satellite location from one account. Update everywhere or customize per site.",
      },
      {
        icon: "MessageSquare",
        title: "Content Integrations",
        description:
          "Pull content from Google Drive, Canva, and YouTube to surface company updates, presentations, and media on screens automatically.",
      },
    ],
    integrations: [
      { name: "Canva" },
      { name: "Google Drive" },
      { name: "YouTube" },
      { name: "Instagram" },
      { name: "Google Reviews" },
      { name: "News Ticker" },
    ],
    testimonial: {
      quote:
        "We manage 200 screens across our corporate campus from one dashboard. The scheduling engine alone saves our AV team 10+ hours every single week.",
      name: "Priya Sharma",
      role: "AV & Workplace Tech Lead",
      company: "Nexus Financial",
      initials: "PS",
      avatarBg: "bg-sky-500",
    },
    faq: [
      {
        q: "Can different departments manage their own screens?",
        a: "Yes. Citadel's role-based access lets you give department managers control over their own screens while keeping global admin access centralized.",
      },
      {
        q: "Can I show live content like presentations on screens?",
        a: "Absolutely. Citadel connects to Google Drive so you can display live Google Slides, Docs, and Sheets — keeping every team aligned with current information.",
      },
      {
        q: "How do I push urgent communications company-wide?",
        a: "From the dashboard, select all screens (or specific groups) and push a message — it goes live everywhere in under 60 seconds.",
      },
      {
        q: "What integrations does Citadel include for corporate offices?",
        a: "Citadel includes built-in integrations with Google Drive, Canva, YouTube, Instagram, Google Reviews, and News Ticker — all included at no extra charge and ready to use from day one.",
      },
      {
        q: "Can Citadel work in hybrid and remote office environments?",
        a: "Yes. Citadel works wherever you have screens and internet — offices, home screens, and conference room displays are all supported.",
      },
    ],
    relatedSlugs: ["healthcare", "transportation"],
  },

  "gyms-spas": {
    slug: "gyms-spas",
    name: "Gyms & Spas",
    nameLong: "gyms, fitness studios, and wellness centers",
    lucideIcon: "Dumbbell",
    metaTitle: "Digital Signage for Gyms & Spas | Citadel",
    metaDescription:
      "Motivate members, promote class schedules, and upsell memberships with Citadel digital signage for gyms, fitness studios, and wellness centers.",
    keywords: [
      "gym digital signage",
      "fitness studio displays",
      "spa screens",
      "wellness center signage",
      "class schedule screens",
    ],
    accent: {
      badge: "bg-emerald-100 text-emerald-700",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      iconBg: "bg-emerald-600",
    },
    hero: {
      eyebrow: "Gym & Wellness Signage",
      headline: "Motivate members. Fill classes. Grow revenue.",
      sub: "Citadel helps gyms and spas show live class schedules, celebrate member milestones, and promote membership upgrades automatically — all while keeping the energy high on the floor.",
      stats: [
        { value: "30%", label: "Avg. class booking lift" },
        { value: "Auto", label: "Class schedule updates" },
        { value: "100+", label: "Fitness-specific templates" },
      ],
      mockScreen: {
        header: "Today's Classes",
        badge: "Live",
        items: [
          { label: "Next Class", value: "Spin @ 6:30pm", accent: true },
          { label: "Available Spots", value: "4 Remaining" },
          { label: "Trainer of the Month", value: "Coach Mike" },
          { label: "Member Spotlight", value: "Sarah T. — 100 Classes!" },
        ],
      },
    },
    customerTypes: ["CrossFit Boxes", "Yoga Studios", "Pilates Studios", "Day Spas", "Health Clubs", "Martial Arts"],
    useCases: [
      {
        icon: "Calendar",
        title: "Live Class Schedules",
        description:
          "Display your live class schedule on screen — push updates from Google Drive or Canva so members always see the most accurate times and instructors.",
      },
      {
        icon: "Sparkles",
        title: "Member Recognition",
        description:
          "Celebrate milestones like 100th class, birthdays, and top performers on your floor screens — building community and loyalty.",
      },
      {
        icon: "DollarSign",
        title: "Membership Upsells",
        description:
          "Promote premium tiers, personal training packages, and spa services with eye-catching screens at high-traffic locations.",
      },
      {
        icon: "Activity",
        title: "Motivational Content",
        description:
          "Keep the energy on the floor with workout tips, transformation stories, and branded motivational content that keeps members coming back.",
      },
    ],
    features: [
      {
        icon: "RefreshCcw",
        title: "Easy Schedule Updates",
        description:
          "Create your class schedule in Canva or Google Drive and push it live to your screens in one click — always accurate, no manual work required.",
      },
      {
        icon: "Film",
        title: "Branded Content Library",
        description:
          "Access 100+ gym and wellness templates, plus a royalty-free media library with fitness imagery to elevate your floor content.",
      },
      {
        icon: "Zap",
        title: "Instant Promotions",
        description:
          "Launch a flash promotion for a membership upgrade or class pass in minutes — perfect for slow seasons or referral campaigns.",
      },
      {
        icon: "Cloud",
        title: "Manage from Anywhere",
        description:
          "Update content from your phone, tablet, or laptop — whether you're on the floor, at home, or at another location.",
      },
    ],
    integrations: [
      { name: "Canva" },
      { name: "YouTube" },
      { name: "Instagram" },
      { name: "Google Reviews" },
      { name: "Live Weather" },
      { name: "News Ticker" },
    ],
    testimonial: {
      quote:
        "Our class schedules are always up to date on screen and members love the member spotlight feature. Membership upgrades are up 25% this quarter.",
      name: "Jordan Blake",
      role: "Studio Owner",
      company: "Peak Fitness Studio",
      initials: "JB",
      avatarBg: "bg-emerald-500",
    },
    faq: [
      {
        q: "Can I display my class schedule on screens?",
        a: "Yes. Create your schedule in Canva or Google Drive and push it live to your screens in one click — members always see the most up-to-date times and instructors.",
      },
      {
        q: "Can I show member milestones and spotlights?",
        a: "Absolutely. You can set up automated member milestone notifications (e.g. 100th class) or manually highlight members on your floor screens.",
      },
      {
        q: "Can I promote different membership tiers?",
        a: "Yes. Create targeted promotions for premium tiers, personal training, or spa add-ons and schedule them to show at peak traffic times.",
      },
      {
        q: "How many screens can I manage?",
        a: "As many as you need. Citadel scales from a single screen at a boutique studio to hundreds across a chain — all from one account.",
      },
      {
        q: "Can I update content from my phone?",
        a: "Yes. The Citadel dashboard is fully mobile-responsive. Update content, check screen status, and push promotions from anywhere.",
      },
    ],
    relatedSlugs: ["retail", "corporate"],
  },

  transportation: {
    slug: "transportation",
    name: "Transportation",
    nameLong: "transit hubs, stations, and transportation networks",
    lucideIcon: "Bus",
    metaTitle: "Digital Signage for Transportation | Citadel",
    metaDescription:
      "Real-time arrivals, wayfinding, and safety messaging for transit hubs. Citadel digital signage for transportation and transit networks.",
    keywords: [
      "transportation digital signage",
      "transit screen software",
      "bus station displays",
      "airport signage software",
      "real-time transit displays",
    ],
    accent: {
      badge: "bg-cyan-100 text-cyan-700",
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      border: "border-cyan-200",
      iconBg: "bg-cyan-600",
    },
    hero: {
      eyebrow: "Transportation Digital Signage",
      headline: "Real-time info for passengers who can't wait.",
      sub: "Citadel powers passenger information displays across transit hubs — from live arrival boards and wayfinding to safety alerts and platform updates, all managed from one place.",
      stats: [
        { value: "60%", label: "Drop in info desk enquiries" },
        { value: "Live", label: "GTFS & real-time feed support" },
        { value: "99.9%", label: "Uptime for mission-critical displays" },
      ],
      mockScreen: {
        header: "Platform Information",
        badge: "Live",
        items: [
          { label: "Next Arrival", value: "2 minutes", accent: true },
          { label: "Platform", value: "Track 4B" },
          { label: "Service Alert", value: "No delays" },
          { label: "Connection", value: "Line 7 — On Time" },
        ],
      },
    },
    customerTypes: ["Bus Terminals", "Train Stations", "Metro Systems", "Airports", "Ferry Terminals", "Transit Authorities"],
    useCases: [
      {
        icon: "Navigation",
        title: "Real-Time Arrival Boards",
        description:
          "Display live arrival and departure times from GTFS feeds, APIs, or manual inputs — keeping passengers informed and reducing crowding at info desks.",
      },
      {
        icon: "Map",
        title: "Wayfinding & Maps",
        description:
          "Guide passengers through complex hubs with wayfinding screens — directories, platform maps, and exit guidance.",
      },
      {
        icon: "AlertTriangle",
        title: "Safety & Service Alerts",
        description:
          "Push safety messages, service disruptions, and emergency alerts instantly to every screen across your network.",
      },
      {
        icon: "Tv",
        title: "Passenger Entertainment",
        description:
          "Keep passengers engaged during waits with news, weather, local information, and sponsored content.",
      },
    ],
    features: [
      {
        icon: "Radio",
        title: "Live Content Integration",
        description:
          "Display live News Ticker feeds, Live Weather, and YouTube content to keep passengers informed and entertained while they wait.",
      },
      {
        icon: "AlertTriangle",
        title: "Emergency Override",
        description:
          "Take over every screen instantly with emergency messaging — evacuations, service disruptions, or security alerts go live in seconds.",
      },
      {
        icon: "Globe",
        title: "Network-Wide Management",
        description:
          "Manage every screen across every station and hub from a single dashboard — update content, push alerts, and monitor status in real time.",
      },
      {
        icon: "Activity",
        title: "Uptime Monitoring",
        description:
          "Real-time screen health monitoring with instant alerts when any display goes offline — keeping mission-critical information always visible.",
      },
    ],
    integrations: [
      { name: "Canva" },
      { name: "YouTube" },
      { name: "News Ticker" },
      { name: "Live Weather" },
      { name: "Google Drive" },
      { name: "Google Reviews" },
    ],
    testimonial: {
      quote:
        "Passenger enquiries at the info desk dropped 60% in the first month after deploying Citadel. Setup was live in one afternoon and it has been flawless ever since.",
      name: "James Woolley",
      role: "Station Manager",
      company: "Westfield Transit Hub",
      initials: "JW",
      avatarBg: "bg-cyan-500",
    },
    faq: [
      {
        q: "What live content can I show on passenger screens?",
        a: "Citadel supports News Ticker feeds, Live Weather, YouTube, and Canva designs — so passengers always see fresh, accurate information and engaging content on screen.",
      },
      {
        q: "How quickly can I push a service disruption alert?",
        a: "In seconds. Our emergency override pushes to every screen in your network simultaneously — one click from the dashboard or mobile app.",
      },
      {
        q: "Can Citadel manage screens across multiple stations?",
        a: "Yes. Citadel is built for large networks — manage screens across every station, hub, and platform from one centralized account.",
      },
      {
        q: "What happens if the internet goes down at a station?",
        a: "Citadel screens cache the most recent content locally, so they continue displaying the last known information even during connectivity interruptions.",
      },
      {
        q: "Is Citadel suitable for outdoor screens?",
        a: "Yes. The Citadel Player is compatible with commercial-grade outdoor displays rated for extreme temperatures and weather conditions.",
      },
    ],
    relatedSlugs: ["corporate", "healthcare"],
  },
};
