/* ──────────────────────────────────────────────────────────────
   SITE DATA — Single source of truth for all page content.
   Edit values here and the site updates automatically.
   See DATA_GUIDE.md for field-by-field documentation.
   ────────────────────────────────────────────────────────────── */

// ── Meta ─────────────────────────────────────────────────────
export const meta = {
  siteTitle: "Darshan Jain",
  siteDescription: "Developer. Architect. Tifosi.",
};

// ── Personal ─────────────────────────────────────────────────
export const personal = {
  name: "Darshan",
  fullName: "Darshan Jain",
  image: "/image.png",
  title: "Senior Backend Engineer",
  descriptors: ["Developer", "Architect", "Tifosi"],
  bio: [
    "I'm a backend engineer from Bengaluru with 4+ years of experience building high-throughput systems in FinTech. My bread and butter is designing APIs, event-driven architectures, and distributed systems that scale — part-time Jira copilot.",
    "I've shipped production services across the stack — from Spring Boot microservices backed by Kafka to real-time collaboration tools running on WebSocket. Currently building at Indihood, where I architect the platform that powers our creator-first ecosystem.",
    "Before that, I worked as a QA Specialist at Dassault Systèmes in Pune, where I automated 50+ high-priority test cases and contributed to 9 major deployment releases with near-zero bug slippage. That attention to quality still shows up in everything I build.",
    "Currently pursuing a Master's in Computer Science at Woolf University (Scaler Neovarsity), deepening my foundation in System Design and distributed computing. Alumnus of MIT ADT School of Engineering, Pune.",
    "When I'm not writing code, I'm watching Formula 1, listening to 90s East Coast hip-hop, or arguing about whether DRS should be scrapped.",
  ],
};

// ── Social Links ─────────────────────────────────────────────
// platform must be one of: "github" | "linkedin" | "twitter" | "email" | "peerlist"
export const socials = [
  {
    platform: "github" as const,
    url: "https://github.com/DMJain",
    label: "GitHub",
  },
  {
    platform: "linkedin" as const,
    url: "https://www.linkedin.com/in/darshan-jain-3687291a7/",
    label: "LinkedIn",
  },
  {
    platform: "twitter" as const,
    url: "https://x.com/darshanjain098",
    label: "Twitter",
  },
  {
    platform: "email" as const,
    url: "mailto:darshan.j098@gmail.com",
    label: "Email",
  },
];

// ── Home Widgets (bottom 4 tiles) ────────────────────────────
export const widgets = {
  currentRead: {
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
  },
  writes: {
    title: "2¢ on Systems & Scale",
    subtitle: "Essays & Notes ↓",
  },
  status: {
    emoji: "🏎",
    title: "Tifosi Forever",
    subtitle: "Formula 1 · Scuderia Ferrari",
  },
  spotify: {
    title: "90s East Coast Hip-Hop",
    subtitle: "Nas · Biggie · Wu-Tang",
  },
};

// ── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    number: "01",
    title: "Web-IDE 2.0",
    description:
      "A real-time collaborative WebIDE for pair programming in containerised environments. Features live cursor tracking, an integrated pseudo-terminal, and instant application preview — all running inside Docker containers.",
    tags: ["React", "Node.js", "Docker", "Socket.io", "Monaco Editor", "MongoDB"],
    image: "/projects/webide.png",
    href: "https://github.com/DMJain/CollabrativeCloudIDE",
  },
  {
    number: "02",
    title: "WikiPulse",
    description:
      "A real-time analytics engine that ingests the Wikipedia EventStreams feed, detects edit anomalies, and surfaces trending articles across language editions through a live dashboard.",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Redis", "Next.js"],
    image: null,
    href: "#",
  },
];

// ── Experience ───────────────────────────────────────────────
export const experience = [
  {
    role: "Software Developer",
    company: "Indihood",
    location: "Bengaluru",
    period: "Feb 2025 — Present",
    description:
      "Architecting complex workflows and designing APIs for a creator-first ecosystem. Maintaining oversight of project reliabilities across distributed backend services powered by Spring Boot, Kafka, and Redis.",
  },
  {
    role: "QA/Automation Engineer",
    company: "Dassault Systèmes",
    location: "Pune",
    period: "2022 — 2024",
    description:
      "Automated 50+ high-priority test cases using CAFET (JavaScript), achieving a 30% reduction in testing time. Contributed to 9 major releases across 2 product suites with near-zero bug slippage.",
  },
];

// ── Education ────────────────────────────────────────────────
export const education = [
  {
    degree: "MS in Computer Science",
    institution: "Woolf University (Scaler Neovarsity)",
    location: "Remote",
    period: "Completed Dec 2025 · 3.9/4.0 GPA",
    description:
      "Specialised in System Design, distributed computing, and full-stack development. Deep-diving into data structures, algorithms, and project management.",
  },
  {
    degree: "B.Tech in Mechatronics",
    institution: "MIT ADT University",
    location: "Pune",
    period: "Completed 2022",
    description:
      "Created a LiDAR-based crash avoidance system for automobiles. Hands-on with 3D modelling, CFD, embedded systems, and product design.",
  },
];

// ── Skills ───────────────────────────────────────────────────
export const skills: Record<string, string[]> = {
  Languages: ["Java", "Go", "Python", "TypeScript", "JavaScript"],
  "Runtimes & Frameworks": ["Spring Boot", "Next.js", "Node.js", "Express.js"],
  Infrastructure: ["Kubernetes", "Docker", "Kafka", "Redis"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL"],
  Cloud: ["AWS (ECS, S3, RDS)", "GCP"],
};

// ── Shelf Items ──────────────────────────────────────────────
export interface ShelfItem {
  id: string;
  title: string;
  excerpt?: string;
  date: string;
  type: "article" | "book" | "music" | "insight";
  origin: "work" | "recommendation";
  url: string;
  isExternal: boolean;
  isFeatured: boolean;
  isPinned: boolean;
  mediaUrl?: string;
}

export const shelfItems: ShelfItem[] = [
  {
    id: "kafka-wikipulse",
    title: "Architecting WikiPulse with Kafka Streams",
    excerpt:
      "How we built a real-time Wikipedia analytics pipeline that processes 10K edits per second using Kafka Streams, windowed aggregations, and a Next.js dashboard.",
    date: "2026-06-08",
    type: "article",
    origin: "work",
    url: "#",
    isExternal: false,
    isFeatured: true,
    isPinned: false,
  },
  {
    id: "rag-production",
    title: "RAG Optimization Patterns for Production Ecosystems",
    excerpt:
      "Retrieval-augmented generation sounds simple until you hit production. Here are the patterns that survived our scale tests at Indihood — from chunking strategies to hybrid search.",
    date: "2026-05-20",
    type: "article",
    origin: "work",
    url: "#",
    isExternal: false,
    isFeatured: true,
    isPinned: false,
  },
  {
    id: "ferrari-monza",
    title: "Analyzing Scuderia Ferrari's Telemetry at Monza",
    excerpt:
      "A deep dive into SF-24 telemetry data from the Italian Grand Prix — cornering speeds, DRS efficiency, and what the tyre degradation curves reveal about strategy.",
    date: "2026-06-01",
    type: "insight",
    origin: "work",
    url: "#",
    isExternal: false,
    isFeatured: true,
    isPinned: false,
  },
  {
    id: "the-log-kreps",
    title: "The Log: What Every Software Engineer Should Know",
    excerpt:
      "Jay Kreps' foundational essay on why the humble append-only log is the unifying abstraction behind databases, streams, and distributed systems.",
    date: "2025-12-15",
    type: "article",
    origin: "recommendation",
    url: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",
    isExternal: true,
    isFeatured: false,
    isPinned: true,
  },
  {
    id: "ddia-kleppmann",
    title: "Designing Data-Intensive Applications",
    excerpt:
      "Martin Kleppmann's masterclass on the principles behind reliable, scalable, and maintainable systems. The backend engineer's bible.",
    date: "2025-10-01",
    type: "book",
    origin: "recommendation",
    url: "https://dataintensive.net/",
    isExternal: true,
    isFeatured: false,
    isPinned: true,
  },
  {
    id: "staff-engineer",
    title: "Staff Engineer: Leadership Beyond the Management Track",
    excerpt:
      "Will Larson maps the invisible work of staff-plus engineering — setting technical direction, aligning teams, and operating with organisational leverage.",
    date: "2026-01-10",
    type: "book",
    origin: "recommendation",
    url: "https://staffeng.com/book",
    isExternal: true,
    isFeatured: false,
    isPinned: true,
  },
  {
    id: "event-sourcing-postmortem",
    title: "Event Sourcing at Indihood: A Post-Mortem",
    excerpt:
      "We bet our payment ledger on event sourcing. Eighteen months in, here's what we'd do differently — and what we'd double down on.",
    date: "2026-04-12",
    type: "article",
    origin: "work",
    url: "#",
    isExternal: false,
    isFeatured: false,
    isPinned: false,
  },
  {
    id: "rb20-floor-aero",
    title: "Why Red Bull's RB20 Floor Edge Is a Masterclass in Aero",
    excerpt:
      "Breaking down the fluid dynamics behind the most controversial floor design on the 2024 grid, and what it means for the 2026 regulations.",
    date: "2026-03-28",
    type: "insight",
    origin: "work",
    url: "#",
    isExternal: false,
    isFeatured: false,
    isPinned: false,
  },
  {
    id: "sync-microservices-cost",
    title: "The Hidden Cost of Synchronous Microservices",
    excerpt:
      "Synchronous HTTP chains between microservices look clean on architecture diagrams. In production, they create invisible coupling that cascading failures exploit.",
    date: "2026-02-18",
    type: "insight",
    origin: "recommendation",
    url: "#",
    isExternal: false,
    isFeatured: false,
    isPinned: false,
  },
  {
    id: "illmatic-nas",
    title: "Illmatic — Nas (1994)",
    excerpt:
      "Ten tracks. Forty minutes. The definitive record of 90s New York hip-hop — Queensbridge storytelling over DJ Premier and Pete Rock production.",
    date: "2026-05-05",
    type: "music",
    origin: "recommendation",
    url: "https://open.spotify.com/album/3kEtdS2pH6hKcMU9Wkp7Sb",
    isExternal: true,
    isFeatured: false,
    isPinned: false,
  },
  {
    id: "wu-tang-36-chambers",
    title: "Enter the Wu-Tang: 36 Chambers",
    excerpt:
      "RZA's lo-fi production blueprint meets nine MCs with nine distinct styles. Kung-fu samples, Staten Island grit, and bars that still hit thirty years later.",
    date: "2026-04-20",
    type: "music",
    origin: "recommendation",
    url: "https://open.spotify.com/album/3tQd5mwBtVyxCoEo4htGAV",
    isExternal: true,
    isFeatured: false,
    isPinned: false,
  },
  {
    id: "figma-multiple-databases",
    title: "How Figma Scaled to Multiple Databases",
    excerpt:
      "Figma's engineering team on the migration from a single PostgreSQL instance to a horizontally partitioned architecture — with zero downtime.",
    date: "2026-03-05",
    type: "article",
    origin: "recommendation",
    url: "https://www.figma.com/blog/how-figma-scaled-to-multiple-databases/",
    isExternal: true,
    isFeatured: false,
    isPinned: false,
  },
];
