"use client";

import { memo } from "react";

const SKILL_GROUPS = [
  {
    title: "Front-End Development",
    description: "Building responsive interfaces using modern React and TypeScript.",
    items: ["React", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "JSX"],
  },
  {
    title: "Styling & UI Frameworks",
    description: "Crafting designs with utility-first CSS and frameworks.",
    items: ["TailwindCSS", "Bootstrap", "Styled Components", "CSS Grid", "Flexbox", "Responsive Design"],
  },
  {
    title: "State Management & Hooks",
    description: "Managing complex state using modern React paradigms.",
    items: ["Redux", "Context API", "React Hooks", "Custom Hooks", "useEffect", "useReducer"],
  },
  {
    title: "Full-Stack Foundations",
    description: "Expanding beyond frontend via Node.js and databases.",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL", "Socket.io"],
  },
  {
    title: "Developer Tools & Workflow",
    description: "Utilizing modern tooling for efficient development and deployment.",
    items: ["Git", "VS Code", "Figma", "npm/yarn", "Vite", "Webpack"],
  },
  {
    title: "Performance & Quality",
    description: "Ensuring fast, reliable apps through optimization and testing.",
    items: ["React Testing Library", "Jest", "Lighthouse", "Web Vitals", "Accessibility (a11y)", "Performance Optimization"],
  },
];

function SkillsComponent() {
  return (
    <section id="skills" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">My skills</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Front-end expertise with full-stack foundations</h2>
          <p className="text-white/80 max-w-2xl mx-auto lg:mx-0">
            Proficient in React and TypeScript, with growing full-stack capabilities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-white/20 bg-transparent p-6 space-y-4"
            >
              <h3 className="text-lg font-semibold">{group.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{group.description}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Skills = memo(SkillsComponent);
