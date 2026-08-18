/**
 * Central content layer for the Ineza SmartGrid website.
 *
 * All copy, links, and structured data lives here so the site is
 * CMS-ready: swap these modules for content fetched from a headless
 * CMS (e.g. Sanity, Contentful, or a database) without touching any
 * component markup.
 *
 * NOTE: contact details, social URLs, stats, and project examples are
 * placeholders — replace them with real information before launch.
 */

export const site = {
  name: "Ineza SmartGrid",
  tagline: "We engineer software systems that people depend on.",
  description:
    "Ineza SmartGrid is a software engineering company in Kigali, Rwanda. We design and build production systems — web and mobile platforms, APIs, data infrastructure, cloud environments, and AI-powered software — for businesses, institutions, and startups that need technology to actually work.",
  email: "hello@inezasmartgrid.com",
  phone: "+250 700 000 000",
  address: "Kigali, Rwanda",
  responseTime: "An engineer responds within 24 hours.",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/",
      icon: "Linkedin",
    },
    {
      label: "GitHub",
      href: "https://github.com/",
      icon: "Github",
    },
    {
      label: "X (Twitter)",
      href: "https://x.com/",
      icon: "Twitter",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/",
      icon: "Instagram",
    },
  ] as const,
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Ineza", href: "#why-us" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
] as const;

export const hero = {
  badge: "Technology & software engineering",
  /** Headline, split into styled segments so the data layer drives the markup. */
  title: [
    { text: "We engineer the " },
    { text: "software your business runs on", gradient: true },
  ] as { text: string; gradient?: boolean; accent?: boolean }[],
  description:
    "Ineza SmartGrid designs and builds software systems from Kigali, Rwanda — for businesses, institutions, and startups that need technology they can depend on: platforms, APIs, data infrastructure, and AI-powered automation that holds up in production.",
  primaryCta: { label: "Start your build", href: "#contact" },
  secondaryCta: { label: "See how we work", href: "#services" },
  miniPills: ["React", "Node.js", "Flutter", "AI", "Cloud"],
};

export const about = {
  eyebrow: "Who we are",
  title: "We build systems that hold up in production",
  paragraphs: [
    "Ineza SmartGrid is a software engineering company based in Kigali, Rwanda. We design and build production systems — web and mobile platforms, APIs, data pipelines, cloud infrastructure, and AI-powered software — for businesses, institutions, and startups that need technology to actually work.",
    "We engineer the way operators do: requirements are questioned, architecture is decided on trade-offs, code is reviewed, and every release ships with monitoring and a rollback plan. You get a system you can run, maintain, and extend for years — not a demo.",
  ],
  points: [
    "Product engineering from spec to production",
    "Distributed systems and well-factored APIs",
    "Cloud infrastructure with real observability",
    "Data systems that stay fast as they grow",
  ],
  stats: [
    { value: 50, suffix: "+", label: "Production systems shipped" },
    { value: 40, suffix: "+", label: "Clients and institutions" },
    { value: 99.9, suffix: "%", label: "Platform uptime", decimals: 1 },
    { value: 24, suffix: "/7", label: "Engineering support" },
  ] as { value: number; suffix: string; label: string; decimals?: number }[],
};

export const services = [
  {
    title: "Software Engineering",
    description:
      "We take a business process or a product idea and turn it into a production system — architecture, backend services, interfaces, databases, integrations, deployment, and maintenance. Built to be run, not demonstrated.",
    features: ["Architecture & system design", "Backend services & APIs", "Deployment, monitoring & maintenance"],
  },
  {
    title: "Web Platforms",
    description:
      "Web platforms built for real load — customer portals, internal tools, and public products that stay fast and available under traffic. Server-rendered where it matters, instrumented everywhere.",
    features: ["React, Next.js & Vue builds", "Performance & accessibility hardening", "Observability & uptime"],
  },
  {
    title: "Mobile Products",
    description:
      "Cross-platform apps for iOS and Android built with Flutter and React Native. Offline-first data, secure local storage, and release management through the app stores.",
    features: ["Flutter & React Native", "Offline-first architecture", "App store release & updates"],
  },
  {
    title: "Cloud Infrastructure",
    description:
      "We design, migrate, and operate cloud environments — containers, CI/CD pipelines, infrastructure as code, and monitoring that catches problems before users do.",
    features: ["Cloud migration & DevOps", "Infrastructure as code", "Monitoring & incident response"],
  },
  {
    title: "Data & Backend Systems",
    description:
      "Databases, pipelines, and backend services that keep data consistent and queries fast. From schema design and ETL to reporting systems your teams actually use.",
    features: ["SQL & NoSQL data modeling", "Data pipelines & analytics", "Backend APIs & integrations"],
  },
  {
    title: "AI & Automation",
    description:
      "We ship AI where it earns its keep — document processing, classification, recommendations, and automation that removes manual work from critical processes. Production systems, not demo models.",
    features: ["LLM-powered features", "Machine learning models", "Process automation"],
  },
];

export const consulting = {
  title: "Technology Consulting",
  description:
    "We review your architecture, code, and infrastructure — then tell you what needs to change before it fails in production. Audits, roadmaps, and senior engineers embedded in your team when you need depth on demand.",
  features: ["Technical audits & architecture review", "System roadmaps & modernization", "Senior engineers on demand"],
};

export const projects = [
  {
    name: "GridOps",
    category: "Energy analytics platform",
    description:
      "Real-time monitoring and analytics for energy utilities — live dashboards, anomaly detection, and load forecasting over high-volume meter telemetry.",
    problem: "Operators were making decisions from hourly spreadsheets while faults unfolded in minutes.",
    challenge:
      "Ingesting time-series telemetry from thousands of meters at sub-minute latency, with anomaly detection that does not drown the control room in false alarms.",
    impact: "Operators now respond to events in minutes, and load forecasting cut reported energy losses by 9% within two quarters.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "InfluxDB"],
    accent: "emerald",
    mock: "analytics",
  },
  {
    name: "PayBridge",
    category: "Mobile payment wallet",
    description:
      "A mobile wallet for payments, bill settlement, and transfers — built for financial institutions where every movement of funds must reconcile exactly.",
    problem: "Cash-based payments were slow, unrecorded, and expensive to reconcile for merchants and their customers.",
    challenge:
      "Keeping transaction state consistent across the wallet, provider rails, and offline fallbacks — with double-entry accounting on every transfer.",
    impact: "Settlement is automatic, and every transaction reconciles against provider records without manual work.",
    technologies: ["Flutter", "Node.js", "MongoDB", "AES-256"],
    accent: "violet",
    mock: "wallet",
  },
  {
    name: "CareLink",
    category: "Telehealth platform",
    description:
      "A telehealth system connecting patients with clinicians — video consultations, e-prescriptions, and structured patient records in one platform.",
    problem: "Patients in remote areas traveled for hours to reach a doctor for consultations that could happen over video.",
    challenge:
      "Low-bandwidth video streaming, end-to-end encryption of health data, and records that stay consistent across devices and clinics.",
    impact: "Consultations that used to take a day now take minutes; clinics report a 40% drop in no-show appointments.",
    technologies: ["Next.js", "React Native", "WebRTC", "MySQL"],
    accent: "sky",
    mock: "telehealth",
  },
  {
    name: "LogiTrack",
    category: "Fleet intelligence",
    description:
      "An IoT platform that tracks fleets in real time — route optimization, fuel analytics, and driver behavior scoring over live telemetry.",
    problem: "Fleet managers tracked vehicles with phone calls and paper logs, with no visibility into routes, fuel use, or driving behavior.",
    challenge:
      "Collecting and processing GPS and sensor telemetry from hundreds of devices over unreliable mobile networks, then serving live maps from that data.",
    impact: "Fuel consumption fell by 12% across client fleets within the first three months of rollout.",
    technologies: ["React", "Python", "FastAPI", "MongoDB", "MQTT"],
    accent: "amber",
    mock: "fleet",
  },
];

export const whyChooseUs = {
  eyebrow: "Why Ineza",
  title: "Built for the hard parts",
  description:
    "Five principles govern how we engineer. They are the reason systems we build stay up, stay fast, and stay maintainable long after launch.",
  items: [
    {
      title: "Engineering depth",
      description:
        "Senior engineers on every engagement. We debate architecture, review code, and document decisions — because the hard problems live in the details.",
    },
    {
      title: "Security",
      description:
        "Security is designed in, not bolted on. Access control, encryption, and audit trails are part of the build, and are reviewed against known threat patterns.",
    },
    {
      title: "Performance",
      description:
        "We measure. Latency budgets, load tests, and profiling are part of the definition of done. A fast product is a feature, not an afterthought.",
    },
    {
      title: "Maintainability",
      description:
        "Code is written for the engineers who will maintain it. Clear structure, automated tests, and CI/CD keep systems improving instead of decaying.",
    },
    {
      title: "Long-term ownership",
      description:
        "We stay after launch. Monitoring, support, and a roadmap of improvements keep systems healthy — production is a long-term responsibility, not a handoff.",
    },
  ],
};

export const techStack = {
  eyebrow: "Engineering stack",
  title: "Technologies we build with",
  description:
    "The tools below are the ones we use in real systems — chosen for how they behave under load, how they age, and how easy they are to maintain and replace.",
  categories: [
    {
      name: "Frontend",
      items: [{ name: "React" }, { name: "Next.js" }, { name: "Vue" }],
    },
    {
      name: "Backend",
      items: [{ name: "Node.js" }, { name: "Laravel" }, { name: "Python" }],
    },
    {
      name: "Mobile",
      items: [{ name: "Flutter" }, { name: "React Native" }],
    },
    {
      name: "Data",
      items: [{ name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB" }, { name: "SQL" }],
    },
    {
      name: "Infrastructure",
      items: [{ name: "Cloud" }, { name: "Docker" }, { name: "CI/CD" }, { name: "DevOps" }],
    },
    {
      name: "Intelligence",
      items: [{ name: "AI" }, { name: "Machine Learning" }, { name: "LLMs" }, { name: "Automation" }],
    },
    {
      name: "Connected Systems",
      items: [{ name: "IoT" }, { name: "APIs" }, { name: "Real-time systems" }],
    },
  ],
};

export const visionMission = {
  eyebrow: "Vision & Mission",
  vision: {
    title: "Our Vision",
    text: "To be the software engineering company that East Africa's most demanding organizations call when the system has to work — and to hold that standard anywhere in the world.",
  },
  mission: {
    title: "Our Mission",
    text: "To build that future through engineering: products, platforms, and infrastructure that perform, shipped with discipline and operated with care long after launch.",
  },
  principles: [
    { label: "Engineered in Rwanda" },
    { label: "Built to global standards" },
    { label: "Maintained for the long run" },
  ],
};
