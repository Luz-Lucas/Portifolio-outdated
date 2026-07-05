"use client";

import { memo } from "react";
import { Briefcase, GraduationCap, type LucideIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  Icon: LucideIcon;
};

const EXPERIENCES: ExperienceEntry[] = [
  {
    role: "Junior Developer",
    company: "CP2 Junior Company",
    period: "2024 — Present",
    description:
      "Building responsive, client-facing web applications with React and TypeScript in cross-functional teams.",
    highlights: [
      "Developed 5+ client projects using React and TypeScript",
      "Implemented responsive designs improving mobile UX",
      "Participated in Agile ceremonies and code reviews",
    ],
    Icon: Briefcase,
  },
  {
    role: "Software Engineering Student",
    company: "University",
    period: "2022 — Present",
    description:
      "Pursuing a Software Engineering degree alongside extracurricular coding projects.",
    highlights: [
      "Active member of the programming community",
      "Advanced coursework in algorithms and data structures",
      "Led team projects in Agile development courses",
    ],
    Icon: GraduationCap,
  },
];

function ExperienceComponent() {
  return (
    <section id="experience" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute -right-48 bottom-1/4 -z-10 h-96 w-96 rounded-full bg-red-600/10 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-4xl space-y-14">
        <Reveal>
          <SectionHeading
            index="04"
            eyebrow="Experience"
            title={
              <>
                The journey{" "}
                <span className="text-gradient-red">so far</span>
              </>
            }
            description="Combining academic foundations with real-world product work."
          />
        </Reveal>

        {/* Timeline */}
        <div className="relative space-y-10 before:absolute before:left-[19px] before:top-2 before:h-[calc(100%-16px)] before:w-px before:bg-gradient-to-b before:from-red-500/60 before:via-white/10 before:to-transparent md:space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <Reveal key={`${exp.company}-${exp.role}`} delay={i * 0.15}>
              <article className="relative pl-16">
                {/* Timeline node */}
                <span className="absolute left-0 top-1 inline-flex rounded-xl border border-red-500/30 bg-[#0d0d0d] p-2.5 text-red-500">
                  <exp.Icon className="h-4 w-4" />
                </span>

                <div className="card-glow space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-red-500/40 md:p-8">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-0.5 text-sm font-medium text-red-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 font-mono text-[11px] tracking-wider text-white/50">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm leading-relaxed text-white/60">
                    {exp.description}
                  </p>

                  <ul className="space-y-2 border-t border-white/5 pt-4">
                    {exp.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-3 text-sm text-white/50"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Experience = memo(ExperienceComponent);
