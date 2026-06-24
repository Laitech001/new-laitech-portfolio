import type { ReactNode } from "react";

interface SectionHeadingProps {
  tag: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  tag,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "flex flex-col items-center text-center" : ""}>
      <p className="mb-4.5 font-mono text-[12.5px] font-medium tracking-[0.04em] text-ice">
        {tag}
      </p>
      <h2
        className={`font-display text-[28px] leading-[1.15] font-semibold tracking-[-0.01em] sm:text-4xl md:text-[42px] ${
          isCenter ? "max-w-190" : "max-w-190"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-140 text-[16.5px] leading-relaxed text-text-dim">
          {description}
        </p>
      )}
    </div>
  );
}
