"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Button } from '@/components/ui';
import type { NavLink } from "@/types";

interface MobileMenuProps {
  links: NavLink[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const panel = isOpen ? (
    <div
      className="fixed inset-x-0 top-17 bottom-0 z-110 flex flex-col gap-1 overflow-y-auto border-b border-line bg-ink px-7 pt-2 pb-6 md:hidden"
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={close}
          className="border-b border-line py-3.5 text-base font-medium text-text-dim"
        >
          {link.index} — {link.label}
        </a>
      ))}
      <Button href="#contact" block className="mt-4" onClick={close}>
        Start a project
      </Button>
    </div>
  ) : null;

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen((v) => !v)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        className="flex h-9 w-9 flex-col items-center justify-center gap-1.5"
      >
        <span
          className={`h-[1.5px] w-full bg-text transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-[6.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-full bg-text transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`h-[1.5px] w-full bg-text transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isOpen ? "translate-y-[-6.5px] -rotate-45" : ""
          }`}
        />
      </button>

      {panel && typeof document !== "undefined" && createPortal(panel, document.body)}
    </div>
  );
}
