import type {
  ApproachItem,
  CaseStudy,
  NavLink,
  StackRow,
  Testimonial,
  TerminalLine,
  TrustStat,
} from "@/types";

export const SITE = {
  name: "Abdulganiy Ibrahim",
  nickname: "Laitech",
  role: "Frontend Engineer",
  email: "hello@laitech.dev",
  location: "Lagos, Nigeria",
  timezone: "GMT+1",
};

export const NAV_LINKS: NavLink[] = [
  { href: "#work", label: "Work", index: "01" },
  { href: "#approach", label: "Approach", index: "02" },
  { href: "#stack", label: "Stack", index: "03" },
  { href: "#contact", label: "Contact", index: "04" },
];

export const TRUST_STATS: TrustStat[] = [
  { label: "production launches", count: 47 },
  { label: "in frontend engineering", count: 8, suffix: "yrs" },
  { label: "avg. Lighthouse score", count: 99, suffix: "+" },
];

export const TERMINAL_SEQUENCE: TerminalLine[] = [
  { type: "cmd", text: "npm run build" },
  { type: "out", text: "vite v5.2.0 building for production…" },
  { type: "out", text: "✓ 312 modules transformed" },
  { type: "cmd", text: "npx playwright test" },
  { type: "ok", text: "✓ 86 passed  (0 failed)" },
  { type: "cmd", text: "npx lighthouse --quiet" },
  {
    type: "metric",
    text: "Performance 99 · Accessibility 100 · Best Practices 100",
  },
  { type: "cmd", text: "echo $DEPLOY_STATUS" },
  { type: "ok", text: "✓ deployed — 0 rollbacks this year" },
];

export const LOGO_CLOUD: string[] = [
  "FINTRA",
  "Northwind Labs",
  "Halcyon",
  "Verge Health",
  "Atlas Studio",
  "Kestrel",
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    index: "01",
    client: "FINTRA",
    tags: ["React", "TypeScript", "Performance"],
    problem:
      "FINTRA's trading dashboard was dropping frames under live data load, eroding trust with institutional clients.",
    solution:
      "Rebuilt the rendering layer around windowed lists and a custom diffing strategy for the WebSocket feed. Moved chart rendering off the main thread into a Web Worker.",
    metrics: [
      { value: "61fps", label: "sustained under load" },
      { value: "−74%", label: "main-thread blocking time" },
      { value: "+18%", label: "session duration post-launch" },
    ],
  },
  {
    index: "02",
    client: "Verge Health",
    tags: ["Next.js", "Accessibility", "Design systems"],
    problem:
      "Verge Health needed a patient portal that would pass a WCAG 2.2 AA audit before a hospital-system rollout — their existing build failed on 40+ criteria.",
    solution:
      "Rebuilt the component library from primitives with correct ARIA semantics, keyboard flows, and focus management baked in, then wired automated a11y testing into CI so regressions fail the build.",
    metrics: [
      { value: "0", label: "critical audit failures" },
      { value: "38", label: "reusable accessible components shipped" },
      { value: "4wks", label: "audit-to-clearance turnaround" },
    ],
  },
  {
    index: "03",
    client: "Northwind Labs",
    tags: ["Vite", "State architecture", "DX tooling"],
    problem:
      "Northwind Labs' internal tool had grown to 90k lines with no architecture — every feature took weeks and shipped new bugs.",
    solution:
      "Introduced a feature-sliced architecture with clear data-ownership boundaries, migrated state piece by piece without a feature freeze, and cut the build tool over to Vite for instant HMR.",
    metrics: [
      { value: "12s → 0.3s", label: "hot reload time" },
      { value: "−61%", label: "avg. feature lead time" },
      { value: "0", label: "days of feature freeze" },
    ],
  },
];

export const APPROACH_ITEMS: ApproachItem[] = [
  {
    mark: "if",
    title: "Ship behind a flag, not a prayer",
    description:
      "Every non-trivial change ships dark first. Production is not where I find out if something works — staging metrics and feature flags are.",
  },
  {
    mark: "try",
    title: "Performance is a requirement, not a pass",
    description:
      "Bundle size and render cost are reviewed like code. A feature that ships slow is a bug, not a tradeoff to revisit later.",
  },
  {
    mark: "test",
    title: "If it's not tested, it's not done",
    description:
      "Unit coverage on logic, integration tests on flows that touch money or data integrity, visual regression on anything a designer will notice.",
  },
  {
    mark: "catch",
    title: "Accessibility isn't a checklist pass",
    description:
      "Keyboard-first, screen-reader tested, built with real assistive tech open during development — not bolted on before an audit.",
  },
];

export const STACK_ROWS: StackRow[] = [
  {
    layer: "UI",
    tool: "React + TypeScript",
    why: "Static types catch the bugs code review misses, at the scale where it matters.",
  },
  {
    layer: "Framework",
    tool: "Next.js",
    why: "Right rendering strategy per route — static where possible, streamed where needed.",
  },
  {
    layer: "Styling",
    tool: "Tailwind CSS",
    why: "Utility-first for velocity, with design tokens that keep the system consistent.",
  },
  {
    layer: "State",
    tool: "Zustand / TanStack Query",
    why: "Server state and client state are different problems — I stop using one tool for both.",
  },
  {
    layer: "Testing",
    tool: "Vitest + Playwright",
    why: "Fast unit feedback locally, real-browser confidence in CI.",
  },
  {
    layer: "Tooling",
    tool: "Vite, Turborepo",
    why: "Build speed is a developer-experience feature, not a nice-to-have.",
  },
];

export const TESTIMONIAL: Testimonial = {
  quote:
    "Laitech was the first engineer who pushed back on our timeline with data instead of opinions — and then hit the revised one exactly. The dashboard hasn't dropped a frame since.",
  name: "Priya Raman",
  role: "VP Engineering, FINTRA",
};