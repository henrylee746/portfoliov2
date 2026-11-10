"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface Entry {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string[];
}

const entries: Entry[] = [
  {
    role: "Software Developer Intern, Web/Tooling",
    company: "Nokia",
    startDate: "May 2026",
    endDate: "Present",
    description: [
      "Delivered 3-tier RBAC (read / write / execute) for Nokia NSP License Manager, with a no-access forbidden state and RFC 9457 error handling, verified in lab against admin, read-only, and no-access roles",
      "Built a reusable Incident Feed widget (list, grouping, filters, dashlet) in a shared React library and registered it in the AIOps catalog so the dashboard and AI GUI share one incident UI",
      "Shipped AI GUI catalog and chat UX (composer Stop, in-chat widget deep-links, card and chart layout fixes), moved 7 shared UI libraries from Node 22 to 24, and published native arm64 and amd64 Cypress images",
    ],
  },
  {
    role: "Software Developer Intern, Frontend + Build Tooling Infrastructure",
    company: "Kinaxis",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    description: [
      "Led the yarn/lerna → pnpm/turborepo migration in the frontend monorepo, cutting CI install times by 55% and improving build performance by 60%",
      "Refactored base React components in the enterprise-wide UI library, supporting 60+ developers to build consistent interfaces across the Maestro platform",
      "Automated versioning and publishing for the enterprise Storybook library across 3 UI packages, eliminating manual release steps",
    ],
  },
  {
    role: "Technical Lead (Full Stack)",
    company: "Carleton Blueprint, Technology For Non-Profits",
    startDate: "Oct 2025",
    endDate: "Apr 2026",
    description: [
      "Directed a 5-person team shipping a Next.js app for a 200+ member nonprofit",
      "Shipped Better Auth/Prisma sessions and Stripe checkout via Strapi/GraphQL, with $6,000+ in projected annual billing",
      "Migrated Prisma Postgres to Supabase (ca-central-1) with connection pooling, reducing query latency and resolving HMR connection exhaustion",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Parliament of Canada (House of Commons)",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    description: [
      "Built MP Onboarding features on ServiceNow, including table views for simpler model mutations",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Ericsson",
    startDate: "Sep 2024",
    endDate: "May 2025",
    description: [
      "Designed and built the team's first performance analytics dashboard from scratch, selected the stack, and surfaced commit bottlenecks that improved sprint planning visibility for 20+ developers",
      "Structured the Node.js/Gerrit API integration with automated Bash/Python scripts, reducing query time by 50–75% and improving dashboard responsiveness",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Parliament of Canada (House of Commons)",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    description: [
      "Developed and tested the Security Clearance application, reducing client-side defects by 50%",
    ],
  },
];

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 6.5 8 10.5 12 6.5" />
    </svg>
  );
}

function ExperienceItem({
  entry,
  index,
  isLast,
  defaultOpen,
}: {
  entry: Entry;
  index: number;
  isLast: boolean;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `experience-panel-${index}`;

  return (
    <div className="flex items-stretch gap-5">
      <div className="w-[80px] shrink-0 text-right pt-[3px]">
        <p className="text-[13px] text-muted-foreground leading-snug">
          {entry.startDate}
          {entry.endDate ? (
            <>
              <br />- {entry.endDate}
            </>
          ) : null}
        </p>
      </div>

      <div className="w-4 shrink-0 flex flex-col items-center">
        <div className="w-[7px] h-[7px] rounded-full bg-muted-foreground/40 shrink-0 mt-[3px]" />
        {isLast ? null : <div className="w-px flex-1 bg-border mt-1" />}
      </div>

      <div className={cn("flex-1 min-w-0", isLast ? "pb-1" : "pb-6")}>
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
          className="group w-full text-left flex items-start justify-between gap-3 rounded-sm cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60"
        >
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground leading-snug">
              {entry.role}
            </p>
            <p className="text-[13px] text-muted-foreground mt-0.5">
              {entry.company}
            </p>
          </div>
          <ChevronIcon
            className={cn(
              "size-4 shrink-0 mt-0.5 text-muted-foreground/70 transition-transform duration-300 ease-out group-hover:text-foreground",
              open && "rotate-180",
            )}
          />
        </button>

        <div
          id={panelId}
          role="region"
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden min-h-0">
            <ul className="list-disc pl-4 space-y-1 text-sm text-muted-foreground/80 leading-relaxed mt-2">
              {entry.description.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <section className="w-full mt-8">
      <h2 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-8">
        Experience
      </h2>
      <div>
        {entries.map((entry, index) => (
          <ExperienceItem
            key={`${entry.company}-${entry.startDate}`}
            entry={entry}
            index={index}
            isLast={index === entries.length - 1}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </section>
  );
}
