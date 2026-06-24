import { SectionHeading, Reveal } from "@/components/ui";
import { STACK_ROWS } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-laitech px-7 py-10 pb-20 md:pb-30">
      <Reveal>
        <div className="mb-12">
          <SectionHeading tag="03 / Stack" title="Tools I reach for, and why." />
        </div>
      </Reveal>

      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-line">
          <div
            className="grid grid-cols-[100px_1fr] gap-6 px-6 py-4.5 font-mono text-[11.5px] tracking-wider text-text-faint sm:grid-cols-[140px_220px_1fr]"
            style={{ backgroundColor: "color-mix(in srgb, var(--panel) 60%, transparent)" }}
          >
            <span>Layer</span>
            <span>Tool</span>
            <span className="hidden sm:block">Why</span>
          </div>

          {STACK_ROWS.map((row) => (
            <div
              key={row.layer}
              className="grid grid-cols-[100px_1fr] items-baseline gap-6 border-b border-line px-6 py-4.5 text-[14.5px] transition-colors duration-250 last:border-b-0 hover:bg-[color-mix(in_srgb,var(--panel)_50%,transparent)] sm:grid-cols-[140px_220px_1fr]"
            >
              <span className="font-mono text-[12.5px] text-ice">
                {row.layer}
              </span>
              <span className="font-semibold text-text">{row.tool}</span>
              <span className="col-span-2 pt-1 leading-snug text-text-dim sm:col-span-1 sm:pt-0">
                {row.why}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
