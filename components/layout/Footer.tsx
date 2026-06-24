import { SITE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-laitech flex-wrap items-center justify-between gap-3 border-t border-line px-7 py-7 pb-10 text-[13px] text-text-faint">
      <span>© 2026 {SITE.name}. Built from scratch — no template.</span>
      <span>
        {SITE.location} · {SITE.timezone} · Open to remote
      </span>
    </footer>
  );
}
