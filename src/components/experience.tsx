interface Entry {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
}

const entries: Entry[] = [
  {
    role: "Software Developer Intern, Web",
    company: "Nokia",
    startDate: "May 2026",
    endDate: "Present",
    description:
      "Delivered RBAC for Nokia NSP License Manager with 3-tier permission gating and RFC 9457 error handling, supporting 1,000+ users globally, and a reusable Incident Feed widget for the AIOps Command Center. Led a Node 24 CI/toolchain migration across 20+ shared UI packages and published native arm64 Cypress images, cutting local image-build time by 80%.",
  },
  {
    role: "Software Engineering Intern, Frontend Infrastructure",
    company: "Kinaxis",
    startDate: "Jan 2026",
    endDate: "Apr 2026",
    description:
      "Led the yarn/lerna → pnpm/turborepo migration in the frontend monorepo, cutting CI install times by 55% and improving build performance by 60%. Refactored base React components in the enterprise UI library for 60+ developers and automated E2E Storybook versioning + publishing with Copilot Agent Skills and Node.js, eliminating manual release steps.",
  },
  {
    role: "Technical Lead (Full Stack)",
    company: "Carleton Blueprint, Technology For Non-Profits",
    startDate: "Oct 2025",
    endDate: "Apr 2026",
    description:
      "Technical lead for a team of 5, delivering a full-stack Next.js platform for a nonprofit of 200+ members. Architected a Better Auth + Prisma session layer, integrated Stripe checkout via Strapi/GraphQL (designed to replace manual invoicing, with ~$6,000 in projected annual billing), and migrated from Prisma Postgres to Supabase, cutting query latency by 30%.",
  },
  {
    role: "Software Developer Intern",
    company: "Parliament of Canada (House of Commons)",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    description:
      "Built and debugged features within the Members of Parliament Onboarding Application in ServiceNow,  including table views for simpler model mutations.",
  },
  {
    role: "Software Developer Intern",
    company: "Ericsson",
    startDate: "Sep 2024",
    endDate: "May 2025",
    description:
      "Designed and built the team's first performance analytics dashboard from scratch, surfacing commit bottlenecks that improved sprint planning visibility for 20+ developers. Structured the Node.js/Gerrit API integration with automated Bash/Python scripts, reducing query time by 50-75%.",
  },
  {
    role: "Software Developer Intern",
    company: "Parliament of Canada (House of Commons)",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    description:
      "Contributed to the development and testing of the Security Clearance Application in ServiceNow for verifying parliamentary staff candidates, reducing client-side defects by 50%.",
  },
];

export function Experience() {
  return (
    <section className="w-full mt-8">
      <h2 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-8">
        Experience
      </h2>
      <div>
        {entries.map((entry, index) => (
          <div
            key={`${entry.company}-${index}`}
            className="flex items-stretch gap-5 pb-9"
          >
            {/* Date column */}
            <div className="w-[80px] shrink-0 text-right pt-[3px]">
              <p className="text-[13px] text-muted-foreground leading-snug">
                {entry.startDate}
                {entry.endDate && (
                  <>
                    <br />- {entry.endDate}
                  </>
                )}
              </p>
            </div>

            {/* Connector column */}
            <div className="w-4 shrink-0 flex flex-col items-center">
              <div className="w-[7px] h-[7px] rounded-full bg-muted-foreground/40 shrink-0 mt-[3px]" />
              {index !== entries.length - 1 && (
                <div className="w-px flex-1 bg-border mt-1" />
              )}
            </div>

            {/* Content column */}
            <div className="flex-1 pb-1">
              <p className="text-sm font-semibold text-foreground leading-snug">
                {entry.role}
              </p>
              <p className="text-[13px] text-muted-foreground mt-0.5 mb-2">
                {entry.company}
              </p>
              <p className="text-sm text-muted-foreground/80 leading-relaxed">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
