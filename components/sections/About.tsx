"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui";
import { skillCategories, skillsSection } from "@/lib/data";

export default function About() {
  return (
    <AnimatedSection
      id="skills"
      className="border-b border-line py-24 lg:py-30"
    >
      <div className="mx-auto max-w-wrap px-6 sm:px-8">
        <div className="mb-4.5 flex items-center gap-2.5 font-mono text-[13px] text-accent">
          <span className="text-text-low">{skillsSection.eyebrow.index}</span>
          {skillsSection.eyebrow.label}
        </div>
        <h2 className="max-w-190 text-[28px] font-extrabold leading-[1.15] tracking-tight text-text-hi sm:text-[34px] lg:text-[42px]">
          {skillsSection.headline}
        </h2>
        <p className="mt-4.5 max-w-150 text-[17px] leading-relaxed text-text-mid">
          {skillsSection.sub}
        </p>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              whileHover={{ backgroundColor: "#141832" }}
              transition={{ duration: 0.2 }}
              className="bg-bg-soft px-6 py-7"
            >
              <div className="mb-4 font-mono text-xs text-accent">
                {category.label}
              </div>
              <div className="flex flex-col gap-2.5">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2.5 text-[15px] font-medium text-text-hi"
                  >
                    <span className="h-1.25 w-1.25 rounded-full bg-text-low" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
