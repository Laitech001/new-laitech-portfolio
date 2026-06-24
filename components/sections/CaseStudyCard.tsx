import type { CaseStudy } from "@/types";

interface CaseStudyCardProps {
  study: CaseStudy;
  isLast?: boolean;
}

export default function CaseStudyCard({ study, isLast = false }: CaseStudyCardProps) {
  return (
    <div className={`border-t border-line py-12 ${isLast ? "border-b" : ""}`}>
      <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
        <span className="font-display text-[15px] font-bold text-text-faint">
          {study.index}
        </span>
        <div className="flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line-strong px-2.75 py-1.25 font-mono text-[11.5px] text-ice"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 md:gap-10">
        <div>
          <span className="mb-3.5 block font-mono text-xs text-text-faint">
            — Problem
          </span>
          <h3 className="font-display text-[19px] leading-snug font-medium text-text sm:text-[23px]">
            {study.problem}
          </h3>
        </div>
        <div>
          <span className="mb-3.5 block font-mono text-xs text-text-faint">
            — Solution
          </span>
          <p className="text-[15.5px] leading-relaxed text-text-dim">
            {study.solution}
          </p>
        </div>
      </div>

      <div className="mt-9 flex flex-wrap gap-7 sm:gap-14">
        {study.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <span className="font-display text-2xl font-bold text-ice sm:text-[26px]">
              {metric.value}
            </span>
            <span className="max-w-40 text-[13px] leading-tight text-text-faint">
              {metric.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
