"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { navLinks, brand } from "@/lib/data";

export default function Navbar() {
  const [activeHref, setActiveHref] = useState<string>("#project");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHref(`#${entry.target.id}`);
          }
        });
      },
      {
        rootMargin: "-40% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-19 max-w-wrap items-center justify-between px-6 sm:px-8">
        <div className="flex items-center gap-3 text-[17px] font-bold">
          <span className="flex h-8.5 w-8.5 items-center justify-center rounded-[9px] bg-linear-to-br from-accent to-[#2f47b8] font-mono text-[15px] font-bold text-white shadow-[0_0_0_1px_rgba(91,127,255,0.33),0_8px_20px_-6px_rgba(91,127,255,0.4)]">
            {brand.mark}
          </span>
          {brand.name}
        </div>

        <div className="hidden items-center gap-9 text-sm text-text-mid lg:flex">
          {navLinks.map((link) => {
            const isActive = activeHref === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                className="relative flex items-center gap-2 py-2 transition-colors hover:text-text-hi"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`font-mono text-xs transition-colors ${
                    isActive ? "text-accent" : "text-accent/70"
                  }`}
                >
                  {link.index}
                </span>
                <span className={isActive ? "text-text-hi" : ""}>
                  {link.label}
                </span>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-underline"
                    className="absolute -bottom-px left-0 right-0 h-[1.5px] bg-accent"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-3.5">
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-9.5 w-9.5 items-center justify-center rounded-full border border-line text-text-mid transition-colors hover:text-text-hi"
          >
            ☀
          </button>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-pill bg-accent px-5 py-2.75 text-sm font-semibold text-white shadow-[0_8px_20px_-8px_rgba(91,127,255,0.55)]"
          >
            Get in touch
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
