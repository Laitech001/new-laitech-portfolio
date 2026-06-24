import Link from "next/link";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <Link
      href="#main"
      aria-label="Laitech, home"
      className={`group flex items-center gap-2.5 ${className}`}
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl border border-line-strong bg-linear-to-br from-electric-2/20 to-electric/5 font-display text-lg font-bold text-ice transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-ice group-hover:shadow-[0_0_20px_-4px_var(--glow)]">
        L
      </span>
      <span className="font-display text-[17px] font-semibold tracking-[0.01em] text-text">
        Laitech
      </span>
    </Link>
  );
}
