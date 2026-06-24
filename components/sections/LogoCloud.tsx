import { Reveal } from "@/components/ui";
import { LOGO_CLOUD } from "@/lib/data";

export default function LogoCloud() {
  return (
    <Reveal>
      <section className="mx-auto max-w-laitech border-t border-line px-7 py-12 md:py-22.5">
        <p className="mb-7 text-center text-[12.5px] tracking-[0.04em] text-text-faint">
          Engineering work trusted by
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 font-display text-lg font-semibold text-text-faint sm:gap-10 md:gap-14">
          {LOGO_CLOUD.map((name) => (
            <span
              key={name}
              className="opacity-70 transition-opacity duration-250 hover:text-text-dim hover:opacity-100"
            >
              {name}
            </span>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
