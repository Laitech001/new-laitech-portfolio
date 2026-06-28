"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <AnimatedSection
      id="contact"
      className="pb-30 pt-24 text-center lg:pt-30"
    >
      <div className="mx-auto max-w-wrap px-6 sm:px-8">
        <div className="mb-4.5 flex items-center justify-center gap-2.5 font-mono text-[13px] text-accent">
          <span className="text-text-low">{contact.eyebrow.index}</span>
          {contact.eyebrow.label}
        </div>
        <h2 className="mx-auto max-w-190 text-[28px] font-extrabold leading-[1.15] tracking-tight text-text-hi sm:text-[34px] lg:text-[46px]">
          {contact.headline}
        </h2>
        <p className="mx-auto mt-4.5 max-w-150 text-[17px] leading-relaxed text-text-mid">
          {contact.sub}
        </p>

        <div className="mt-8 inline-flex items-center gap-2.5 rounded-pill border border-line px-4 py-2.5 font-mono text-[13px] text-text-mid">
          <span className="h-1.5 w-1.5 rounded-full bg-good shadow-[0_0_0_3px_rgba(62,224,138,0.13)]" />
          {contact.availability}
        </div>

        <div>
          <motion.a
            href={`mailto:${contact.email}`}
            whileHover={{ scale: 1.02 }}
            className="group mt-11 inline-flex items-center gap-3.5 text-2xl font-bold text-text-hi sm:text-3xl lg:text-[34px]"
          >
            <span className="transition-colors group-hover:text-accent">
              {contact.email}
            </span>
            <span className="transition-colors group-hover:text-accent">
              →
            </span>
          </motion.a>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          {contact.links.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              whileHover={{
                color: "#5b7fff",
                borderColor: "rgba(91,127,255,0.55)",
              }}
              className="rounded-pill border border-line px-4 py-2.5 text-[13.5px] text-text-mid"
            >
              {link.label}
            </motion.a>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
