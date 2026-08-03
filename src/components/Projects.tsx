import Image from "next/image";
import { projects } from "@/data/portfolio";
import SectionHeader from "@/components/ui/SectionHeader";

function ExternalLinkIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

type Project = (typeof projects)[number];

function ProjectLinks({ project }: { project: Project }) {
  if (!project.liveUrl && !project.githubUrl) return null;

  return (
    <div className="flex gap-2">
      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} live demo`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-colors hover:border-cta/40 hover:text-cta"
        >
          <ExternalLinkIcon />
        </a>
      )}
      {project.githubUrl && (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${project.title} source code`}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-500 transition-colors hover:border-primary/40 hover:text-primary-light"
        >
          <GitHubIcon />
        </a>
      )}
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card card-hover overflow-hidden">
      {"image" in project && project.image && (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-white/8">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface-card/80 to-transparent" />
        </div>
      )}
      <div className="p-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary-light">
          {project.role}
        </p>
        <h3 className="mb-3 text-lg font-semibold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <ul className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="badge-primary rounded-md px-2 py-0.5 text-xs font-medium">
              {tag}
            </li>
          ))}
        </ul>
        <ProjectLinks project={project} />
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-shell px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          label="Projects"
          title="Things I've built"
          description="Backend systems, APIs, and full-stack applications — from IoT platforms to web products."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
