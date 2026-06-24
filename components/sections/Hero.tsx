import { 
  Button,
  Terminal,
  Reveal,
  AnimatedCounter 
} from "@/components/ui";
import { TRUST_STATS, TERMINAL_SEQUENCE } from "@/lib/data";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-laitech flex-col justify-center px-7 pt-30 pb-24 md:pt-35">
      <div className="grid items-center gap-14 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <Reveal>
          <div>
            <p
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-line-strong py-1.5 pr-3.5 pl-2.5 font-mono text-[13px] text-text-dim"
              style={{ backgroundColor: "color-mix(in srgb, var(--panel) 50%, transparent)" }}
            >
              <span className="animate-pulse-dot h-1.75 w-1.75 rounded-full bg-success" />
              Available for new engagements — Q3 2026
            </p>

            <h1 className="max-w-160 font-display text-[36px] leading-[1.08] font-bold tracking-[-0.015em] sm:text-5xl md:text-[60px]">
              I build interfaces that{" "}
              <span className="bg-linear-to-r from-ice via-electric-2 to-electric bg-clip-text text-transparent">
                ship clean
              </span>{" "}
              and{" "}
              <span className="bg-linear-to-r from-ice via-electric-2 to-electric bg-clip-text text-transparent">
                never flake
              </span>
              .
            </h1>

            <p className="mt-6 max-w-120 text-[17.5px] leading-relaxed text-text-dim">
              Frontend engineer specializing in React and TypeScript systems
              for teams who can&apos;t afford to debug in production. Eight
              years, zero rollback-worthy launches.
            </p>

            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
              <Button href="#work" glow>
                See the work
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Button>
              <Button href="#contact" variant="ghost">
                Get in touch
              </Button>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-6 border-t border-line pt-8">
              {TRUST_STATS.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && (
                    <div className="hidden h-9 w-px bg-line-strong sm:block" />
                  )}
                  <div className="flex flex-col gap-1">
                    <AnimatedCounter count={stat.count} suffix={stat.suffix} />
                    <span className="max-w-27.5 text-[12.5px] leading-tight text-text-faint">
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <Terminal sequence={TERMINAL_SEQUENCE} />
        </Reveal>
      </div>

      <div className="mx-auto mt-16 hidden flex-col items-center gap-2.5 font-mono text-[11px] tracking-[0.08em] text-text-faint sm:flex">
        <span>Scroll</span>
        <div className="relative h-9 w-px overflow-hidden bg-line-strong">
          <div className="animate-scroll-fill absolute top-0 left-0 h-[40%] w-full bg-ice" />
        </div>
      </div>
    </section>
  );
}
