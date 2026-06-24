import { Reveal, SectionHeading } from "@/components/ui";
import { CaseStudyCard } from "@/components/sections";
import { CASE_STUDIES } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-laitech px-7 py-12 md:pt-16">
      <Reveal>
        <div className="mb-16">
          <SectionHeading
            tag="01 / Selected work"
            title="Real problems. Shipped solutions."
            description="Three engagements where the brief was vague, the deadline was tight, and the metrics now speak for themselves."
          />
        </div>
      </Reveal>

      {CASE_STUDIES.map((study, i) => (
        <Reveal key={study.index}>
          <CaseStudyCard
            study={study}
            isLast={i === CASE_STUDIES.length - 1}
          />
        </Reveal>
      ))}
    </section>
  );
}
