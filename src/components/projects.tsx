import { cn } from "@/lib/utils";
import Link from "next/link";

interface ProjectEntry {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: ProjectEntry[] = [
  {
    name: "JOCA - Community Website (CUBlueprint)",
    description:
      "Community website for the Jamaican Ottawa Community Association. Includes member registration, elections voting, and recurring billing via Stripe.",
    tags: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "Apollo GraphQL",
      "Strapi",
      "Supabase",
    ],
    liveUrl: "https://joca-bay.vercel.app/",
    githubUrl: "https://github.com/Carleton-Blueprint/JOCA",
  },
  {
    name: "RBAC Fitness Club",
    description:
      "Fitness club management application. Includes OAuth 2.0 authentication, role-based access control, and member tracking features including weight logging.",
    tags: ["Next.js", "TypeScript", "Tailwind", "BetterAuth", "Prisma", "GCP"],
    liveUrl: "https://www.fitnessmgmt.tech/",
    githubUrl: "https://github.com/henrylee746/fitness-mgmt",
  },
  {
    name: "Jenkins Contributor Spotlight - Open Source Contributor",
    description:
      "Webpage listing top contributors to the Jenkins project. Currently contributing to this project with merged PR's.",
    tags: ["React", "Material-UI", "Gatsby.js"],
    liveUrl: "https://contributors.jenkins.io/",
    githubUrl: "https://github.com/jenkins-infra/contributor-spotlight",
  },
];

export function Projects() {
  return (
    <section className="w-full mt-8">
      <h2 className="text-[11px] font-semibold tracking-widest uppercase text-muted-foreground mb-4">
        Projects
      </h2>
      <div>
        {projects.map((project, index) => (
          <div
            key={project.name}
            className={cn(
              "py-[18px] border-t border-border",
              index === projects.length - 1 && "border-b border-border",
            )}
          >
            {/* Header row */}
            <div className="flex justify-between items-start mb-1.5">
              <h3 className="text-[13px] font-semibold text-foreground">
                {project.name}
              </h3>
              <div className="flex gap-3 shrink-0 ml-4">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    ↗ Live
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-xs text-muted-foreground/80 leading-relaxed mb-2.5">
              {project.description}
            </p>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] bg-muted text-muted-foreground rounded-full border border-border px-2 py-0.5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
