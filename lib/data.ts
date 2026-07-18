import { Project } from "@/types";

export interface NavLink {
  label: string;
  href: string;
}
 
export const navLinks: NavLink[] = [
  { label: "Project", href: "#project" },
  { label: "Architecture", href: "#architecture" },
  { label: "Skills", href: "#skills" },
  { label: "Challenges", href: "#challenges" },
  { label: "Contact", href: "#contact" },
];

export const brand = {
  name: "Laitech",
  mark: "L",
};
 
export interface HeroStat {
  value: string;
  label: string;
}
 
export const hero = {
  kicker: "Abdulganiy Ibrahim · Frontend Developer",
  titleLine1: "I built Sellora to learn what it takes",
  titleEmphasis: "to ship a real SaaS",
  description:
    "Frontend developer focused on React, Next.js and TypeScript. Recently built Sellora, a multi-tenant storefront SaaS with authentication, dashboards, payments, analytics, and tenant management.",
  primaryCta: { label: "See the Sellora case study", href: "#project" },
  secondaryCta: {
    label: "GitHub →",
    href: "https://github.com/Laitech001",
  },
  card: {
    badge: "S",
    title: "Sellora — live SaaS platform",
    subtitle: "Multi-tenant storefronts · auth · dashboards · sales tracking",
    stats: [
      { value: "React", label: "core library" },
      { value: "Next.js", label: "framework" },
      { value: "Supabase", label: "auth + data" },
    ] as HeroStat[],
  },
};

export const projects: Project[] = [
  {
  id: "sellora",
  name: "Sellora",
  category: "Multi-tenant E-commerce Platform",
  description:
    "A full-stack multi-tenant e-commerce platform that enables businesses to create their own online storefront, manage products and inventory, receive customer orders, and monitor sales from a centralized dashboard. Built with secure authentication, tenant isolation, responsive dashboards, and seamless WhatsApp order integration.",
  stack: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
  ],
  status: "completed",
  mock: "dashboard",
  images: [
    "/images/sellora-preview-1.png",
    "/images/sellora-preview-2.png",
    "/images/sellora-preview-3.png",
    "/images/sellora-preview-4.png"
  ],
  primaryLink: {
    label: "Live Demo",
    href: "https://sellora-project-pi.vercel.app",
  },
  privateRepo: true,
}
]
 
export interface ProjectStat {
  value: string;
  label: string;
}
 
export const featuredProject = {
  eyebrow: { label: "Featured Project" },
  headline:
    "Sellora, a storefront SaaS for businesses that don't have an engineering team.",
  sub: "A full-stack platform letting small businesses spin up an online storefront, manage inventory, and track sales without touching a line of code themselves.",
  tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
  problem: {
    label: "The problem",
    title:
      "Small businesses needed one place to sell, track, and manage, not five disconnected tools.",
    body: "Most small operators were stitching together a storefront link, a spreadsheet for inventory, and a notes app for customers. Sellora needed to replace that whole stack with a single dashboard a non-technical owner could trust from day one fast, responsive, and safe enough to gate by role.",
  },
  approach: {
    label: "My approach",
    title: "Build the foundation first, then layer business logic on top of it.",
    points: [
      "Designed a scalable frontend architecture with reusable components so every new feature followed the same patterns instead of reinventing them.",
      "Implemented authentication, protected routes, and role-based access with Supabase, so owners and staff see different things by design, not by convention.",
      "Built product management, inventory tracking, customer records, and sales monitoring as distinct, composable modules.",
      "Used Next.js server-side rendering and route-level optimization to keep the dashboard fast on real-world connections.",
      "Added form validation and error handling throughout so bad input fails loudly in development, not silently in production.",
    ],
  },
  stats: [
    {
      value: "3+",
      label: "core modules shipped product, order, inventory, sales, customers",
    },
    { value: "2", label: "access roles enforced end-to-end (owner / staff)" },
    { value: "100%", label: "component-based, no one-off, throwaway UI" },
  ] as ProjectStat[],
  sourceLink: {
    label: "View source on GitHub →",
    href: "https://github.com/Laitech001",
  },
};
 
export const architecture = {
  eyebrow: { label: "Architecture" },
  headline: "How Sellora is actually wired together.",
  sub: "Public storefront and private dashboard share one frontend codebase, split by route protection not by separate apps.",
  caption:
    "One Next.js codebase serves both the public storefront and the gated dashboard. Middleware checks the Supabase session and role before a request ever reaches a protected page, and the four business modules talk to Postgres through a shared REST layer so product, inventory, sales, and customer data stay in sync instead of drifting apart.",
};
 
export interface SkillCategory {
  label: string;
  items: string[];
}
 
export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    label: "Backend & Services",
    items: ["Supabase", "REST APIs", "Authentication & authorization"],
  },
  {
    label: "Tools",
    items: ["Git & GitHub", "VS Code", "Vercel"],
  },
  {
    label: "Architecture",
    items: ["Component-based design", "State management", "API integration"],
  },
  {
    label: "Practice",
    items: [
      "Responsive design",
      "Performance optimization",
      "Form validation & error handling",
    ],
  },
];
 
export const skillsSection = {
  eyebrow: { index: "03", label: "Technical Skills" },
  headline: "What I actually reach for when building.",
  sub: "Tools I've used in production on Sellora, not a generic checklist.",
};
 
export interface Challenge {
  index: string;
  name: string;
  whatWentWrong: string;
  howIFixedIt: string;
}
 
export const challenges: Challenge[] = [
  {
    index: "01",
    name: "Routing",
    whatWentWrong:
      "Public storefront pages and the private dashboard lived in the same app, and early routes leaked dashboard layouts into storefront URLs, a customer could briefly land on a half-rendered owner page.",
    howIFixedIt:
      "Restructured the route tree so storefront and dashboard are cleanly separated groups in Next.js, with middleware deciding access before any component renders, instead of each page checking auth itself.",
  },
  {
    index: "02",
    name: "Authentication",
    whatWentWrong:
      'Supabase sessions would occasionally desync from the client a user stayed "logged in" in the UI for a few seconds after their token had actually expired, which made protected actions fail silently.',
    howIFixedIt:
      'Centralized session checks into the route middleware and protected-route wrapper rather than scattering them across components, so there\'s one source of truth for "is this user actually authenticated right now."',
  },
  {
    index: "03",
    name: "Role-based access",
    whatWentWrong:
      'Owner and staff roles needed different dashboard views, but hardcoding "if owner, show X" inside every component made the codebase fragile and easy to break with each new feature.',
    howIFixedIt:
      "Pulled permission checks out into a single role-access layer that components read from, so adding a new role or screen never means hunting through the app for every place a permission was checked.",
  },
  {
    index: "04",
    name: "Data sync",
    whatWentWrong:
      "Inventory counts and sales records were updated from different parts of the dashboard, and without a clear data-ownership model, two screens could show different numbers for the same product.",
    howIFixedIt:
      'Defined a single API layer each module reads and writes through, instead of letting individual components query Supabase directly — so "what\'s the current stock count" has exactly one answer, not several.',
  },
];
 
export const challengesSection = {
  eyebrow: { index: "04", label: "Challenges Faced" },
  headline: "The parts that didn't work on the first try.",
  sub: "Building Sellora solo meant hitting these head-on with no one else to hand them to.",
};
 
export interface LearningItem {
  icon: string;
  status: "in progress" | "starting";
  title: string;
  description: string;
  progress: number;
}
 
export const learningItems: LearningItem[] = [
  {
    icon: "N",
    status: "in progress",
    title: "Node.js & server-side architecture",
    description:
      "Going beyond Supabase's managed layer to understand how to design and run my own backend services from scratch.",
    progress: 55,
  },
  {
    icon: "DB",
    status: "in progress",
    title: "Database design beyond Supabase defaults",
    description:
      "Studying schema design, indexing, and query performance directly in Postgres, instead of relying on Supabase's generated structure.",
    progress: 40,
  },
  {
    icon: "FS",
    status: "starting",
    title: "Full-stack system design",
    description:
      "Learning to reason about a product end-to-end — API contracts, data ownership, and scaling decisions — not just the UI built on top of it.",
    progress: 25,
  },
];
 
export const learningSection = {
  eyebrow: { index: "05", label: "Currently Learning" },
  headline: "Going deeper into the backend and the full stack.",
  sub: "Sellora taught me the frontend side cold. Right now I'm closing the gap on what's underneath it.",
};
 
export const contact = {
  eyebrow: { index: "06", label: "Contact" },
  headline: "Building something? I'd like to hear about it.",
  sub: "Frontend developer, available for internships, junior roles, and freelance frontend work.",
  availability: "Open to opportunities",
  email: "contact.laitech@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/Laitech001" },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/abdulganiy-ibrahim-04339840a",
    },
    { label: "+234 806 992 3682", href: "tel:+2348069923682" },
  ],
};
 
export const footer = {
  text: "Abdulganiy Ibrahim · Laitech · Built with React, Next.js & Tailwind CSS",
};