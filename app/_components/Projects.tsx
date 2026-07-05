"use client";

import { memo } from "react";
import { ArrowUpRight, ExternalLink, Folder, GitFork, Star } from "lucide-react";
import type { GitHubProject } from "@/lib/github";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type ProjectsProps = {
  projects: GitHubProject[];
};

function ProjectsComponent({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute right-0 top-1/3 -z-10 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Projects"
            align="center"
            title={
              <>
                Things I&apos;ve{" "}
                <span className="text-gradient-red">built</span>
              </>
            }
            description="Pulled live from GitHub — my most notable public repositories."
          />
        </Reveal>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 0.1}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-glow group flex h-full flex-col justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-red-500/50"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <span className="rounded-xl border border-red-500/20 bg-red-500/10 p-2.5 text-red-500">
                        <Folder className="h-5 w-5" />
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-white/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-red-400" />
                    </div>

                    <h3 className="font-display text-lg font-semibold text-white transition-colors duration-300 group-hover:text-red-400">
                      {project.name}
                    </h3>

                    <p className="line-clamp-3 text-sm leading-relaxed text-white/50">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-white/5 pt-4">
                    <span className="inline-flex items-center gap-2 font-mono text-xs text-white/60">
                      <span className="h-2 w-2 rounded-full bg-red-500" />
                      {project.language}
                    </span>
                    <div className="flex items-center gap-4 font-mono text-xs text-white/40">
                      <span className="inline-flex items-center gap-1.5">
                        <Star className="h-3.5 w-3.5" />
                        {project.stars}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <GitFork className="h-3.5 w-3.5" />
                        {project.forks}
                      </span>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center">
              <p className="text-white/50">
                Couldn&apos;t load projects right now — check them directly on
                GitHub below.
              </p>
            </div>
          </Reveal>
        )}

        <Reveal>
          <div className="flex justify-center">
            <a
              href="https://github.com/Luz-Lucas?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-mono text-sm tracking-wider text-white/80 transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-white"
            >
              View all repositories
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export const Projects = memo(ProjectsComponent);
