"use client";

import { memo } from "react";
import {
  Code2,
  Database,
  GitBranch,
  Layers,
  Palette,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type SkillGroup = {
  title: string;
  description: string;
  Icon: LucideIcon;
  items: string[];
};

const SKILL_GROUPS: SkillGroup[] = [
  {
    title: "Frontend Development",
    description: "Building responsive interfaces with modern React and TypeScript.",
    Icon: Code2,
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Next.js"],
  },
  {
    title: "Styling & UI",
    description: "Crafting polished designs with utility-first CSS and design systems.",
    Icon: Palette,
    items: ["TailwindCSS", "Styled Components", "CSS Grid", "Flexbox", "Responsive Design", "Figma"],
  },
  {
    title: "State & Architecture",
    description: "Managing complex state with modern React paradigms.",
    Icon: Layers,
    items: ["Redux", "Context API", "React Hooks", "Custom Hooks", "Component Design", "Clean Code"],
  },
  {
    title: "Full-Stack Foundations",
    description: "Expanding beyond the frontend with Node.js and databases.",
    Icon: Database,
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Socket.io"],
  },
  {
    title: "Tools & Workflow",
    description: "Modern tooling for efficient development and deployment.",
    Icon: GitBranch,
    items: ["Git", "GitHub", "VS Code", "npm/yarn", "Vite", "Vercel"],
  },
  {
    title: "Performance & Quality",
    description: "Fast, reliable apps through optimization and testing.",
    Icon: Zap,
    items: ["Jest", "React Testing Library", "Lighthouse", "Web Vitals", "Accessibility", "SEO"],
  },
];

function SkillsComponent() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div
        aria-hidden
        className="absolute -left-48 top-1/4 -z-10 h-96 w-96 rounded-full bg-red-900/10 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            index="03"
            eyebrow="Skills"
            title={
              <>
                My <span className="text-gradient-red">toolbox</span>
              </>
            }
            description="The technologies and practices I use to turn ideas into products."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={(i % 3) * 0.1}>
              <article className="card-glow group h-full space-y-4 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm transition-colors duration-300 hover:border-red-500/50">
                <span className="inline-flex rounded-xl border border-red-500/20 bg-red-500/10 p-2.5 text-red-500 transition-transform duration-300 group-hover:scale-110">
                  <group.Icon className="h-5 w-5" />
                </span>
                <div className="space-y-2">
                  <h3 className="font-display text-base font-semibold text-white">
                    {group.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/50">
                    {group.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/60 transition-colors duration-300 hover:border-red-500/50 hover:text-red-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Skills = memo(SkillsComponent);
