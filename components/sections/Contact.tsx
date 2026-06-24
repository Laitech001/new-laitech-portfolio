import { Reveal } from "@/components/ui";
import { SITE } from "@/lib/data";

const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X / Twitter", href: "https://x.com" },
  { label: "Résumé ↓", href: "/resume.pdf" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-7 py-10 pb-24 md:pb-30">
      <Reveal>
        <div className="mx-auto max-w-180 text-center">
          <p className="mb-4.5 flex justify-center font-mono text-[12.5px] font-medium tracking-[0.04em] text-ice">
            04 / Contact
          </p>
          <h2 className="font-display text-[30px] leading-[1.2] font-semibold tracking-[-0.01em] sm:text-4xl md:text-[46px]">
            Have a frontend problem worth solving properly?
          </h2>
          <p className="mx-auto mt-5 max-w-120 text-[16.5px] leading-relaxed text-text-dim">
            Currently taking on one new engagement for Q3 2026. Tell me
            what&apos;s broken or what you&apos;re building — I&apos;ll reply
            within a business day.
          </p>

          <a
            href={`mailto:${SITE.email}`}
            className="group mt-11 inline-flex items-center gap-3 border-b-2 border-line-strong pb-2 font-display text-[22px] font-semibold text-text transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-ice hover:text-ice sm:text-[30px]"
          >
            {SITE.email}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1"
            >
              <path
                d="M4 10h12M11 5l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <div className="mt-13 flex flex-wrap justify-center gap-7">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-dim transition-colors duration-250 hover:text-ice"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
