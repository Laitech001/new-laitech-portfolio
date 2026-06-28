"use client";

import { motion, type Variants, type Easing } from "framer-motion";
import { hero } from "@/lib/data";

const easeOut: Easing = [0.21, 0.47, 0.32, 0.98];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: easeOut },
  },
};

export default function Hero() {
  return (
    <header className="border-b border-line pb-22.5 pt-24">
      <motion.div
        className="mx-auto flex max-w-wrap flex-col gap-6 px-6 sm:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          variants={itemVariants}
          className="flex w-fit items-center gap-2 rounded-pill border border-accent-line bg-accent-soft px-3 py-1.5 font-mono text-[13px] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-good shadow-[0_0_0_3px_rgba(62,224,138,0.13)]" />
          {hero.kicker}
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="max-w-195 text-[38px] font-extrabold leading-[1.08] tracking-tight text-text-hi sm:text-[48px] lg:text-[58px]"
        >
          {hero.titleLine1}{" "}
          <span className="text-accent">{hero.titleEmphasis}</span>.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="max-w-150 text-lg leading-relaxed text-text-mid"
        >
          {hero.description}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-1.5 flex flex-wrap gap-3.5"
        >
          <motion.a
            href={hero.primaryCta.href}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-pill bg-accent px-5 py-2.75 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(91,127,255,0.55)]"
          >
            {hero.primaryCta.label}
          </motion.a>
          <motion.a
            href={hero.secondaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, borderColor: "rgba(91,127,255,0.55)" }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 rounded-pill border border-line px-5 py-2.75 text-sm font-semibold text-text-hi"
          >
            {hero.secondaryCta.label}
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="mx-auto max-w-wrap px-6 sm:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: easeOut }}
      >
        <div className="mt-16 flex flex-wrap items-center justify-between gap-6 rounded-[18px] border border-line bg-linear-to-b from-[#11142d99] to-[#0d1020aa] px-6 py-7 sm:px-8">
          <div className="flex items-center gap-4.5">
            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-xl border border-accent-line bg-accent-soft font-mono text-lg text-accent">
              {hero.card.badge}
            </div>
            <div>
              <div className="text-base font-bold text-text-hi">
                {hero.card.title}
              </div>
              <div className="mt-0.5 text-[13.5px] text-text-low">
                {hero.card.subtitle}
              </div>
            </div>
          </div>
          <div className="flex gap-8">
            {hero.card.stats.map((stat) => (
              <div key={stat.label} className="text-right">
                <div className="font-mono text-lg font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-0.5 text-[11.5px] text-text-low">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
}
