"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui";
import {
  challenges,
  challengesSection,
  learningItems,
  learningSection,
} from "@/lib/data";

export default function Journey() {
  return (
    <>
      <AnimatedSection
        id="challenges"
        className="border-b border-line py-24 lg:py-30"
      >
        <div className="mx-auto max-w-wrap px-6 sm:px-8">
          <div className="mb-4.5 flex items-center gap-2.5 font-mono text-[13px] text-accent">
            {challengesSection.eyebrow.label}
          </div>
          <h2 className="max-w-190 text-[28px] font-extrabold leading-[1.15] tracking-tight text-text-hi sm:text-[34px] lg:text-[42px]">
            {challengesSection.headline}
          </h2>
          <p className="mt-4.5 max-w-150 text-[17px] leading-relaxed text-text-mid">
            {challengesSection.sub}
          </p>

          <div className="mt-14 flex flex-col gap-px overflow-hidden rounded-2xl border border-line bg-line">
            {challenges.map((challenge) => (
              <motion.div
                key={challenge.index}
                whileHover={{ backgroundColor: "#12152c" }}
                transition={{ duration: 0.2 }}
                className="grid gap-7 bg-bg-soft px-7 py-8 lg:grid-cols-[200px_1fr_1fr]"
              >
                <div className="text-base font-bold text-text-hi">
                  <span className="mr-2.5 inline-flex h-7.5 w-7.5 items-center justify-center rounded-lg border border-accent-line bg-accent-soft font-mono text-xs text-accent align-middle">
                    {challenge.index}
                  </span>
                  {challenge.name}
                </div>
                <div>
                  <div className="mb-2 font-mono text-[11.5px] uppercase tracking-wide text-text-low">
                    What went wrong
                  </div>
                  <div className="text-[14.5px] leading-relaxed text-text-mid">
                    {challenge.whatWentWrong}
                  </div>
                </div>
                <div>
                  <div className="mb-2 font-mono text-[11.5px] uppercase tracking-wide text-text-low">
                    How I fixed it
                  </div>
                  <div className="text-[14.5px] leading-relaxed text-text-mid">
                    {challenge.howIFixedIt}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="learning"
        className="border-b border-line py-24 lg:py-30"
      >
        <div className="mx-auto max-w-wrap px-6 sm:px-8">
          <div className="mb-4.5 flex items-center gap-2.5 font-mono text-[13px] text-accent">
            {learningSection.eyebrow.label}
          </div>
          <h2 className="max-w-190 text-[28px] font-extrabold leading-[1.15] tracking-tight text-text-hi sm:text-[34px] lg:text-[42px]">
            {learningSection.headline}
          </h2>
          <p className="mt-4.5 max-w-150 text-[17px] leading-relaxed text-text-mid">
            {learningSection.sub}
          </p>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {learningItems.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -4, borderColor: "rgba(91,127,255,0.4)" }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-line bg-[#11142340] p-7"
              >
                <div className="mb-4.5 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-accent-line bg-accent-soft font-mono text-[15px] text-accent">
                    {item.icon}
                  </div>
                  <span className="rounded-pill border border-good/25 bg-good/10 px-2.5 py-1 font-mono text-[11px] text-good">
                    {item.status}
                  </span>
                </div>
                <h4 className="mb-2.5 text-[17px] font-bold text-text-hi">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-text-mid">
                  {item.description}
                </p>
                <div className="mt-4.5 h-1.25 overflow-hidden rounded-pill bg-line">
                  <motion.div
                    className="h-full rounded-pill bg-linear-to-r from-accent to-[#8aa3ff]"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
