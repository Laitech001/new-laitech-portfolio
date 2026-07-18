import { LucideIcon } from "lucide-react";

export interface TrustStat {
  label: string;
  count: number;
  suffix?: string;
}

export interface CaseMetric {
  value: string;
  label: string;
}

export interface CaseStudy {
  index: string;
  tags: string[];
  client: string;
  problem: string;
  solution: string;
  metrics: CaseMetric[];
}

export interface ApproachItem {
  value: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export type ProjectStatus = "completed" | "in-progress" | "archived";

export type MockVariant = "editor" | "dashboard" | "terminal";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  stack: string[];
  status: ProjectStatus;
  mock: MockVariant;
  images?: string[];
  primaryLink?: ProjectLink;
  githubLink?: ProjectLink;
  privateRepo?: boolean;
  comingSoon?: boolean;
}

export interface StackRow {
  layer: string;
  tool: string;
  why: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface TerminalLine {
  type: "cmd" | "out" | "ok" | "metric";
  text: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}