"use client";

import { motion } from "framer-motion";
import { AnimatedSection, ProjectCard } from "@/components/ui";
import { projects } from "@/lib/data";

const gridVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

export default function ProjectsGrid() {
  return (
    <AnimatedSection
      id="projects"
      className="border-b border-line py-24 lg:py-30"
    >
      <div className="mx-auto max-w-wrap px-6 sm:px-8">
        {/* Section header */}
        <div className="mb-14">
          <p className="mb-2.5 font-mono text-[12px] uppercase tracking-[0.06em] text-text-low">
            Selected Work
          </p>
          <h2 className="text-[28px] font-extrabold tracking-tight text-text-hi sm:text-[34px] lg:text-[42px]">
            Projects
          </h2>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-7"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
}