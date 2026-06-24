import { Reveal } from "@/components/ui";
import { TESTIMONIAL } from "@/lib/data";

export default function Testimonial() {
  return (
    <Reveal>
      <section className="mx-auto max-w-190 px-7 py-16 pb-24 text-center md:pb-35">
        <svg
          className="mx-auto mb-7 text-electric-2 opacity-50"
          width="40"
          height="32"
          viewBox="0 0 40 32"
          fill="none"
        >
          <path
            d="M0 32V18.4C0 12.3 1.5 7.5 4.5 4.1 7.5 0.7 11.6-1 16.8-1v6.4c-3 .3-5.2 1.4-6.6 3.3-1.4 1.9-2.1 4.5-2.1 7.8h8.4V32H0Zm22.4 0V18.4c0-6.1 1.5-10.9 4.5-14.3C29.9.7 34-1 39.2-1v6.4c-3 .3-5.2 1.4-6.6 3.3-1.4 1.9-2.1 4.5-2.1 7.8h8.4V32H22.4Z"
            fill="currentColor"
          />
        </svg>
        <p className="font-display text-xl leading-[1.45] font-medium tracking-[-0.005em] sm:text-2xl md:text-[28px]">
          {TESTIMONIAL.quote}
        </p>
        <div className="mt-7 flex flex-col gap-1">
          <span className="text-[15px] font-semibold">{TESTIMONIAL.name}</span>
          <span className="text-[13.5px] text-text-faint">
            {TESTIMONIAL.role}
          </span>
        </div>
      </section>
    </Reveal>
  );
}
