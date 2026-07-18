"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, type PanInfo } from "framer-motion";
import type { Project, ProjectStatus } from "@/types";
import { MockEditor, MockDashboard, MockTerminal } from '@/components/ui';

// Status chip
const statusConfig: Record<
  ProjectStatus,
  { label: string; dotClass: string; textClass: string }
> = {
  completed: {
    label: "Completed",
    dotClass: "bg-good shadow-[0_0_0_3px_rgba(62,224,138,0.13)]",
    textClass: "text-good/80",
  },
  "in-progress": {
    label: "In Progress",
    dotClass: "bg-[#E3B15B] shadow-[0_0_0_3px_rgba(227,177,91,0.13)]",
    textClass: "text-[#E3B15B]/80",
  },
  archived: {
    label: "Archived",
    dotClass: "bg-text-low shadow-[0_0_0_3px_rgba(107,114,144,0.13)]",
    textClass: "text-text-low",
  },
};

function StatusChip({ status }: { status: ProjectStatus }) {
  const cfg = statusConfig[status];
  return (
    <div className="absolute right-3 top-3 z-10 flex items-center gap-1.5 rounded-pill border border-white/8 bg-bg/75 px-2.5 py-1.25 font-mono text-[11px] tracking-[0.02em]">
      <span className={`h-1.5 w-1.5 flex-none rounded-full ${cfg.dotClass}`} />
      <span className={cfg.textClass}>{cfg.label}</span>
    </div>
  );
}

const mocks = { editor: MockEditor, dashboard: MockDashboard, terminal: MockTerminal };

interface ImageAccordionProps {
  images: string[];
  projectName: string;
}

// Wraps an index into [0, length) so next()/prev() loop infinitely
// in both directions without special-casing the ends.
function wrapIndex(index: number, length: number): number {
  return ((index % length) + length) % length;
}

const SWIPE_THRESHOLD = 50; // px of drag before we commit to a slide change
const SLIDE_TRANSITION = { duration: 0.35, ease: [0.32, 0.72, 0, 1] as const };

// direction: 1 = advancing forward, -1 = going back.
// Drives which side the incoming/outgoing slide animates from/to.
const slideVariants = {
  enter: (direction: number) => ({ x: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: "0%", opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? "-100%" : "100%", opacity: 0 }),
};

function IconChevronLeft() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m15 18-6-6 6-6" />
    </svg>
  );
}

function IconChevronRight() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ImageAccordion({ images, projectName }: ImageAccordionProps) {
  // Bundle index + direction together so AnimatePresence's `custom`
  // always reflects the change that produced the current index.
  const [[index, direction], setSlide] = useState<[number, number]>([0, 0]);
  const count = images.length;

  function goTo(target: number, dir: number) {
    setSlide([wrapIndex(target, count), dir]);
  }

  const next = () => goTo(index + 1, 1);
  const prev = () => goTo(index - 1, -1);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if (info.offset.x < -SWIPE_THRESHOLD) next();
    else if (info.offset.x > SWIPE_THRESHOLD) prev();
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }

  // Single image: no controls needed, just render it.
  if (count <= 1) {
    return (
      <div className="relative h-full w-full overflow-hidden bg-[#0c0d10]">
        <Image
          src={images[0]}
          alt={`${projectName} screenshot`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-top"
          draggable={false}
        />
      </div>
    );
  }

  return (
    <div
      // group/carousel is scoped so it won't collide with ProjectCard's own `group`
      className="group/carousel relative h-full w-full overflow-hidden bg-[#0c0d10] outline-none"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectName} screenshots`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Slide track — absolute + fill keeps the aspect-ratio box stable, no layout shift */}
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={SLIDE_TRANSITION}
          className="absolute inset-0"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={handleDragEnd}
        >
          <Image
            src={images[index]}
            alt={`${projectName} screenshot ${index + 1} of ${count}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="pointer-events-none object-cover object-top"
            draggable={false}
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next — hidden until hover, per the "handcrafted, not marketing slider" brief */}
      <button
        type="button"
        onClick={prev}
        aria-label="Previous screenshot"
        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10
                   bg-bg/70 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200
                   group-hover/carousel:opacity-100 hover:bg-bg/90"
      >
        <IconChevronLeft />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Next screenshot"
        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/10
                   bg-bg/70 p-1.5 text-white opacity-0 backdrop-blur-sm transition-opacity duration-200
                   group-hover/carousel:opacity-100 hover:bg-bg/90"
      >
        <IconChevronRight />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-2.5 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i, i > index ? 1 : -1)}
            aria-label={`Go to screenshot ${i + 1}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-250 ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// SVG icones

function IconArrowUpRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M7 17 17 7" /><path d="M7 7h10v10" />
    </svg>
  );
}

function IconGitHub() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.73.5.98 5.24.98 11.52c0 5.02 3.26 9.28 7.78 10.78.57.1.78-.25.78-.55v-2.15c-3.16.69-3.83-1.34-3.83-1.34-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.72-1.53-2.52-.29-5.17-1.26-5.17-5.6 0-1.24.44-2.25 1.17-3.04-.12-.29-.51-1.45.11-3.02 0 0 .96-.31 3.15 1.16a10.9 10.9 0 0 1 5.74 0c2.19-1.47 3.15-1.16 3.15-1.16.62 1.57.23 2.73.11 3.02.73.79 1.17 1.8 1.17 3.04 0 4.35-2.66 5.31-5.19 5.59.41.36.77 1.06.77 2.14v3.17c0 .3.2.66.79.55A11.03 11.03 0 0 0 23.02 11.5C23.02 5.24 18.27.5 12 .5Z" />
    </svg>
  );
}

function IconLock() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="4" y="10" width="16" height="10" rx="2" />
      <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    </svg>
  );
}

// Project Card

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const MockComponent = mocks[project.mock];
  const hasImages = project.images && project.images.length > 0;

  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
      className="group flex flex-col overflow-hidden rounded-[18px] border border-line bg-bg-soft will-change-transform
                 transition-[border-color,background-color,box-shadow] duration-350 ease-[cubic-bezier(.2,.7,.3,1)]
                 hover:border-[#3a3e47] hover:bg-[#131519] hover:shadow-[0_16px_32px_-20px_rgba(0,0,0,0.55)]"
    >
      {/* ── Thumbnail: accordion when images provided, mock as fallback ── */}
      <div className="relative aspect-video overflow-hidden border-b border-line bg-[#0c0d10]">
        {hasImages ? (
          <ImageAccordion images={project.images!} projectName={project.name} />
        ) : (
          <div className="absolute inset-0 transition-transform duration-600 ease-[cubic-bezier(.2,.7,.3,1)] group-hover:scale-[1.035]">
            <MockComponent />
          </div>
        )}
        <StatusChip status={project.status} />
      </div>

      {/* ── Body ── */}
      <div className="flex flex-1 flex-col gap-3.5 p-5.5">

        <div className="flex flex-col gap-1">
          <p className="font-mono text-[11.5px] tracking-[0.02em] text-text-low">
            {project.category}
          </p>
          <h3 className="text-lg font-semibold tracking-tight text-text-hi">
            {project.name}
          </h3>
        </div>

        <p className="line-clamp-3 text-[13.5px] leading-relaxed text-text-mid">
          {project.description}
        </p>

        <div className="mt-0.5 flex flex-wrap gap-1.75">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-[#0c0d10] px-2.25 py-1 font-mono text-[11px] text-text-mid
                         transition-[border-color,color] duration-300 group-hover:border-[#2c2f36] group-hover:text-text-hi"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2.5 border-t border-line pt-4">
          {project.primaryLink && (
            <motion.a
              href={project.primaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.75 rounded-lg bg-text-hi px-3.5 py-2 text-[13px] font-medium text-bg
                         transition-colors duration-200 hover:bg-white"
            >
              {project.primaryLink.label}
              <IconArrowUpRight />
            </motion.a>
          )}
          {project.githubLink && (
            <motion.a
              href={project.githubLink.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-1.75 rounded-lg border border-line px-3.5 py-2 text-[13px] font-medium text-text-mid
                         transition-[border-color,color] duration-200 hover:border-[#3a3e47] hover:text-text-hi"
            >
              <IconGitHub />
              GitHub
            </motion.a>
          )}
          {project.privateRepo && !project.githubLink && (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-line px-3 py-2 font-mono text-[11.5px] text-text-low">
              <IconLock />
              Private Repository
            </span>
          )}
          {project.comingSoon && !project.primaryLink && (
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-line px-3 py-2 font-mono text-[11.5px] text-text-low">
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}