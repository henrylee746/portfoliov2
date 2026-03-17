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
    startDate: "Inc. May 2026",
    description: "Starting May 2026 - working on the Nokia NSP platform.",
  },
  {
    role: "Software Engineering Intern, Frontend/UI Platform",
    company: "Kinaxis",
    startDate: "Jan 2026",
    endDate: "Present",
    description:
      "Contributed to the yarn/lerna → pnpm/turborepo migration in the monorepo, improving build performance by 30%. Refactored multiple base React components in the enterprise's UI library to support consistent interface patterns.",
  },
  {
    role: "Technical Project Lead (Full Stack)",
    company: "Carleton Blueprint, Technology For Non-Profits",
    startDate: "Oct 2025",
    endDate: "Present",
    description:
      "Technical lead for a team of 4, delivering a full-stack platform for a nonprofit of 200+ members. Led architectural decisions, provided technical guidance, and contributed to the development across the stack.",
  },
  {
    role: "Software Developer Intern, Digital Experience",
    company: "Parliament of Canada (House of Commons)",
    startDate: "Sep 2025",
    endDate: "Dec 2025",
    description:
      "Built and debugged features within the Members of Parliament Onboarding Application,  including table views for simpler model mutations.",
  },
  {
    role: "Software Developer Intern",
    company: "Ericsson",
    startDate: "Sep 2024",
    endDate: "May 2025",
    description:
      "Developed an internal tool that gave a first-time solution to the team's performance analytics. Reduced Gerrit API query time by 50-75% compared to the previous attempted solution.",
  },
  {
    role: "Software Developer Intern, Security Accreditation",
    company: "Parliament of Canada (House of Commons)",
    startDate: "Jan 2024",
    endDate: "Apr 2024",
    description:
      "Developed and tested the Security Screening form for verifying parliamentary staff candidates, reducing client-side defects by 50%.",
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
              <p className="text-xs text-muted-foreground leading-snug">
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
              <p className="text-[13px] font-semibold text-foreground leading-snug">
                {entry.role}
              </p>
              <p className="text-xs text-muted-foreground mt-0.5 mb-2">
                {entry.company}
              </p>
              <p className="text-xs text-muted-foreground/80 leading-relaxed">
                {entry.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
