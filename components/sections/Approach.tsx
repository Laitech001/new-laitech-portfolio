import { SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/ui";
import { APPROACH_ITEMS } from "@/lib/data";

export default function Approach() {
  return (
    <section id="approach" className="mx-auto max-w-laitech px-7 py-20 md:py-30">
      <Reveal>
        <div className="mb-14">
          <SectionHeading
            tag="02 / Approach"
            title="How the work actually gets done."
          />
        </div>
      </Reveal>

      <Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {APPROACH_ITEMS.map((item) => (
            <div
              key={item.mark}
              className="group p-8 transition-colors duration-300"
              style={{ backgroundColor: "color-mix(in srgb, var(--panel) 55%, transparent)" }}
            >
              <span
                className="mb-5 inline-block rounded-md px-2.5 py-1 font-mono text-[12.5px] font-semibold text-electric-2"
                style={{ backgroundColor: "var(--glow-soft)" }}
              >
                {item.mark}
              </span>
              <h3 className="mb-2.5 font-display text-[19px] font-semibold">
                {item.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-text-dim">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
