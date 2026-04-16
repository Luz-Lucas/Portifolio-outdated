"use client";

import { memo } from "react";

const EXPERIENCES = [
  {
    role: "Junior Developer",
    company: "CP2 Junior Company",
    period: "2024 - Present",
    description: "Building responsive, client-facing web applications using React and TypeScript in cross-functional teams.",
    highlights: [
      "Developed 5+ client projects using React and TypeScript",
      "Implemented responsive designs improving mobile UX",
      "Participated in Agile ceremonies and code reviews",
    ],
  },
  {
    role: "Software Engineering Student",
    company: "University",
    period: "2022 - Present",
    description: "Pursuing a Software Engineering degree alongside extracurricular coding projects.",
    highlights: [
      "Active member of programming community",
      "Completed advanced coursework in algorithms and data structures",
      "Led team projects in Agile development courses",
    ],
  },
] as const;

function ExperienceComponent() {
  return (
    <section id="experience" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">
            Experience
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Professional journey & education
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto lg:mx-0">
            Combining academic knowledge with real-world experience at CP2.
          </p>
        </div>
        <div className="space-y-6">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.company}
              className="rounded-2xl border border-white/20 bg-transparent p-6 space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-semibold">{exp.role}</h3>
                  <p className="text-white">{exp.company}</p>
                </div>
                <span className="text-sm text-white/60">{exp.period}</span>
              </div>
              <p className="text-white/80 leading-relaxed">
                {exp.description}
              </p>
              <ul className="space-y-2">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2 text-sm text-white/80">
                    <span className="text-white/80 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Experience = memo(ExperienceComponent);
