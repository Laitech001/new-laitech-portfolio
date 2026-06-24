"use client";

import { useEffect, useState } from "react";
import { Logo, Button, ThemeToggle } from "@/components/ui";
import { MobileMenu } from "@/components/layout";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-100 border-b py-4.5 backdrop-blur-2xl backdrop-saturate-150 transition-colors duration-300 ${
        isScrolled ? "border-line" : "border-transparent"
      }`}
      style={{
        backgroundColor: "color-mix(in srgb, var(--ink) 72%, transparent)",
      }}
    >
      <div className="mx-auto flex max-w-laitech items-center justify-between gap-6 px-7">
        <Logo />

        <nav aria-label="Primary" className="hidden gap-9 text-sm font-medium text-text-dim md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-center gap-1.5 transition-colors duration-250 hover:text-text"
            >
              <span className="font-mono text-[11px] text-text-faint transition-colors duration-250 group-hover:text-ice">
                {link.index}
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3.5 md:flex">
          <ThemeToggle />
          <Button href="#contact" size="small">
            Start a project
          </Button>
        </div>

        <MobileMenu links={NAV_LINKS} />
      </div>
    </header>
  );
}
