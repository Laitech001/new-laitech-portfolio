"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui";
import { featuredProject, architecture } from "@/lib/data";

function ArchitectureDiagram() {
  return (
    <div className="mt-12 overflow-x-auto rounded-[18px] border border-line bg-[#0c0f1d] p-6 sm:p-10">
      <svg
        viewBox="0 0 1040 480"
        className="block w-full min-w-190"
        role="img"
        aria-label="Diagram of Sellora's architecture: public storefront and owner/staff dashboard both run through Next.js, pass through middleware for route protection, connect to Supabase for auth and Postgres data, and four business modules (Products, Inventory, Sales, Customers) sync through a shared REST API layer, all deployed on Vercel."
      >
        <defs>
          <marker
            id="arrow"
            markerWidth="9"
            markerHeight="9"
            refX="7"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="#5b7fff" />
          </marker>
        </defs>

        {/* Client layer */}
        <text
          x="40"
          y="34"
          fill="#6b7290"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12"
        >
          CLIENT
        </text>
        <rect
          x="40"
          y="46"
          width="220"
          height="64"
          rx="10"
          fill="#11142d"
          stroke="#5b7fff55"
        />
        <text
          x="150"
          y="72"
          fill="#f4f5fb"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
        >
          Public Storefront
        </text>
        <text
          x="150"
          y="92"
          fill="#aab0c8"
          fontFamily="Inter, sans-serif"
          fontSize="11.5"
          textAnchor="middle"
        >
          customer-facing pages
        </text>

        <rect
          x="300"
          y="46"
          width="220"
          height="64"
          rx="10"
          fill="#11142d"
          stroke="#5b7fff55"
        />
        <text
          x="410"
          y="72"
          fill="#f4f5fb"
          fontFamily="Inter, sans-serif"
          fontSize="14"
          fontWeight="700"
          textAnchor="middle"
        >
          Owner / Staff Dashboard
        </text>
        <text
          x="410"
          y="92"
          fill="#aab0c8"
          fontFamily="Inter, sans-serif"
          fontSize="11.5"
          textAnchor="middle"
        >
          protected routes
        </text>

        {/* Next.js layer */}
        <rect
          x="40"
          y="160"
          width="480"
          height="80"
          rx="12"
          fill="#0d1020"
          stroke="#1f2438"
        />
        <text
          x="60"
          y="184"
          fill="#5b7fff"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12"
        >
          Next.js
        </text>
        <text
          x="60"
          y="206"
          fill="#f4f5fb"
          fontFamily="Inter, sans-serif"
          fontSize="13.5"
          fontWeight="600"
        >
          React component layer + SSR
        </text>
        <text
          x="60"
          y="226"
          fill="#6b7290"
          fontFamily="Inter, sans-serif"
          fontSize="11.5"
        >
          shared, reusable UI · route-level rendering · Tailwind CSS
        </text>

        {/* Middleware */}
        <rect
          x="560"
          y="160"
          width="180"
          height="80"
          rx="12"
          fill="#0d1020"
          stroke="#1f2438"
        />
        <text
          x="580"
          y="184"
          fill="#5b7fff"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12"
        >
          Middleware
        </text>
        <text
          x="580"
          y="206"
          fill="#f4f5fb"
          fontFamily="Inter, sans-serif"
          fontSize="13.5"
          fontWeight="600"
        >
          Route guard
        </text>
        <text
          x="580"
          y="226"
          fill="#6b7290"
          fontFamily="Inter, sans-serif"
          fontSize="11.5"
        >
          role check
        </text>

        {/* Supabase */}
        <rect
          x="780"
          y="160"
          width="220"
          height="80"
          rx="12"
          fill="#0d1020"
          stroke="#5b7fff55"
        />
        <text
          x="800"
          y="184"
          fill="#5b7fff"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12"
        >
          Supabase
        </text>
        <text
          x="800"
          y="206"
          fill="#f4f5fb"
          fontFamily="Inter, sans-serif"
          fontSize="13.5"
          fontWeight="600"
        >
          Auth + Postgres
        </text>
        <text
          x="800"
          y="226"
          fill="#6b7290"
          fontFamily="Inter, sans-serif"
          fontSize="11.5"
        >
          sessions · roles · row data
        </text>

        {/* Business modules */}
        <text
          x="40"
          y="290"
          fill="#6b7290"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12"
        >
          DATA MODULES
        </text>
        <g fontFamily="Inter, sans-serif">
          <rect
            x="40"
            y="304"
            width="160"
            height="58"
            rx="10"
            fill="#11142340"
            stroke="#1f2438"
          />
          <text x="120" y="328" fill="#f4f5fb" fontSize="13" fontWeight="600" textAnchor="middle">
            Products
          </text>
          <text x="120" y="346" fill="#6b7290" fontSize="10.5" textAnchor="middle">
            catalog + pricing
          </text>

          <rect
            x="220"
            y="304"
            width="160"
            height="58"
            rx="10"
            fill="#11142340"
            stroke="#1f2438"
          />
          <text x="300" y="328" fill="#f4f5fb" fontSize="13" fontWeight="600" textAnchor="middle">
            Inventory
          </text>
          <text x="300" y="346" fill="#6b7290" fontSize="10.5" textAnchor="middle">
            stock levels
          </text>

          <rect
            x="400"
            y="304"
            width="160"
            height="58"
            rx="10"
            fill="#11142340"
            stroke="#1f2438"
          />
          <text x="480" y="328" fill="#f4f5fb" fontSize="13" fontWeight="600" textAnchor="middle">
            Sales
          </text>
          <text x="480" y="346" fill="#6b7290" fontSize="10.5" textAnchor="middle">
            orders + revenue
          </text>

          <rect
            x="580"
            y="304"
            width="160"
            height="58"
            rx="10"
            fill="#11142340"
            stroke="#1f2438"
          />
          <text x="660" y="328" fill="#f4f5fb" fontSize="13" fontWeight="600" textAnchor="middle">
            Customers
          </text>
          <text x="660" y="346" fill="#6b7290" fontSize="10.5" textAnchor="middle">
            records + history
          </text>

          <rect
            x="780"
            y="304"
            width="220"
            height="58"
            rx="10"
            fill="#11142340"
            stroke="#1f2438"
          />
          <text x="890" y="328" fill="#f4f5fb" fontSize="13" fontWeight="600" textAnchor="middle">
            REST API layer
          </text>
          <text x="890" y="346" fill="#6b7290" fontSize="10.5" textAnchor="middle">
            sync across modules
          </text>
        </g>

        {/* Deploy */}
        <rect
          x="40"
          y="404"
          width="960"
          height="50"
          rx="10"
          fill="#0d1020"
          stroke="#1f2438"
        />
        <text
          x="520"
          y="434"
          fill="#aab0c8"
          fontFamily="JetBrains Mono, monospace"
          fontSize="12.5"
          textAnchor="middle"
        >
          Deployed on Vercel · Git-based CI · production builds on every push
        </text>

        {/* Arrows */}
        <line x1="150" y1="110" x2="150" y2="160" stroke="#5b7fff" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="410" y1="110" x2="410" y2="160" stroke="#5b7fff" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="520" y1="200" x2="560" y2="200" stroke="#5b7fff" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="740" y1="200" x2="780" y2="200" stroke="#5b7fff" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="280" y1="240" x2="280" y2="304" stroke="#5b7fff" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="890" y1="240" x2="890" y2="304" stroke="#5b7fff" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="520" y1="362" x2="520" y2="404" stroke="#1f2438" strokeWidth="1.5" />
      </svg>
    </div>
  );
}

export default function FeaturedProject() {
  return (
    <>
      <AnimatedSection
        id="project"
        className="border-b border-line py-24 lg:py-30"
      >
        <div className="mx-auto max-w-wrap px-6 sm:px-8">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="mb-4.5 flex items-center gap-2.5 font-mono text-[13px] text-accent">
                <span className="text-text-low">
                  {featuredProject.eyebrow.index}
                </span>
                {featuredProject.eyebrow.label}
              </div>
              <h2 className="max-w-190 text-[28px] font-extrabold leading-[1.15] tracking-tight text-text-hi sm:text-[34px] lg:text-[42px]">
                {featuredProject.headline}
              </h2>
              <p className="mt-4.5 max-w-150 text-[17px] leading-relaxed text-text-mid">
                {featuredProject.sub}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-pill border border-line bg-[#11142340] px-3 py-1.5 font-mono text-xs text-text-mid"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-14 grid gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="mb-3.5 flex items-center gap-2 font-mono text-[12.5px] text-accent">
                <span className="text-text-low">—</span>
                {featuredProject.problem.label}
              </div>
              <h3 className="mb-3.5 text-2xl font-bold leading-snug text-text-hi">
                {featuredProject.problem.title}
              </h3>
              <p className="text-[15.5px] leading-[1.7] text-text-mid">
                {featuredProject.problem.body}
              </p>
            </div>

            <div>
              <div className="mb-3.5 flex items-center gap-2 font-mono text-[12.5px] text-accent">
                <span className="text-text-low">—</span>
                {featuredProject.approach.label}
              </div>
              <h3 className="mb-3.5 text-2xl font-bold leading-snug text-text-hi">
                {featuredProject.approach.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {featuredProject.approach.points.map((point) => (
                  <li
                    key={point}
                    className="relative pl-5 text-[14.5px] leading-relaxed text-text-mid"
                  >
                    <span className="absolute left-0 top-1.75 h-0.5 w-2 rounded-sm bg-accent" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 border-t border-line pt-9 sm:grid-cols-3">
            {featuredProject.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-mono text-[30px] font-bold text-accent">
                  {stat.value}
                </div>
                <div className="mt-1.5 text-[13px] leading-snug text-text-low">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <motion.a
              href={featuredProject.sourceLink.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ borderColor: "rgba(91,127,255,0.55)", color: "#5b7fff" }}
              className="inline-flex items-center gap-2 rounded-pill border border-line px-4.5 py-2.75 text-sm font-semibold text-text-hi"
            >
              {featuredProject.sourceLink.label}
            </motion.a>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection
        id="architecture"
        className="border-b border-line py-24 lg:py-30"
      >
        <div className="mx-auto max-w-wrap px-6 sm:px-8">
          <div className="mb-4.5 flex items-center gap-2.5 font-mono text-[13px] text-accent">
            <span className="text-text-low">{architecture.eyebrow.index}</span>
            {architecture.eyebrow.label}
          </div>
          <h2 className="max-w-190 text-[28px] font-extrabold leading-[1.15] tracking-tight text-text-hi sm:text-[34px] lg:text-[42px]">
            {architecture.headline}
          </h2>
          <p className="mt-4.5 max-w-150 text-[17px] leading-relaxed text-text-mid">
            {architecture.sub}
          </p>

          <ArchitectureDiagram />

          <p className="mt-6 max-w-175 text-[13.5px] leading-[1.7] text-text-low">
            {architecture.caption}
          </p>
        </div>
      </AnimatedSection>
    </>
  );
}
