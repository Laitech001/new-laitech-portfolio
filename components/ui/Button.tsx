import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "ghost";
type ButtonSize = "default" | "small";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  glow?: boolean;
  block?: boolean;
  className?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-linear-to-br from-electric-2 to-electric text-white border border-electric/60 hover:-translate-y-0.5",
  ghost:
    "border border-line-strong text-text bg-panel/40 hover:border-ice hover:text-ice hover:-translate-y-0.5",
};

const sizeStyles: Record<ButtonSize, string> = {
  default: "px-6 py-3.5 text-[14.5px]",
  small: "px-4.5 py-2.5 text-[13.5px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "default",
  glow = false,
  block = false,
  className = "",
  target,
  rel,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full font-semibold whitespace-nowrap transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${variantStyles[variant]} ${sizeStyles[size]} ${glow ? "shadow-[0_0_0_0_var(--glow)] hover:shadow-[0_8px_30px_-6px_var(--glow)]" : ""} ${block ? "w-full justify-center" : ""} ${className}`}
    >
      {children}
    </Link>
  );
}
