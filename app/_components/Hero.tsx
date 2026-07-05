"use client";

import { memo } from "react";
import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { FlipWords } from "./FlipWords";

const WORDS = ["intuitive", "responsive", "performant", "accessible"] as const;

const STACK = [
  "React",
  "TypeScript",
  "Next.js",
  "TailwindCSS",
  "Node.js",
  "PostgreSQL",
  "Git",
  "Figma",
] as const;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Luz-Lucas", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-luz", Icon: Linkedin },
  { label: "Email", href: "mailto:lucaspmluz@hotmail.com", Icon: Mail },
] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] as const },
  },
};

function HeroComponent() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-32"
    >
      {/* Red aura behind the headline */}
      <div
        aria-hidden
        className="animate-aura absolute left-1/2 top-1/2 h-[420px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[130px]"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-4xl space-y-8 text-center"
      >
        {/* Terminal-style location line */}
        <motion.p
          variants={item}
          className="font-mono text-xs tracking-widest text-white/40"
        >
          <span className="text-red-500">~</span>/minas-gerais/brazil{" "}
          <span className="animate-pulse text-red-500">▊</span>
        </motion.p>

        {/* Availability badge */}
        <motion.div variants={item} className="flex justify-center">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2 font-mono text-xs tracking-wider text-white/70 backdrop-blur-sm">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-green-500" />
            Available for new projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={item} className="space-y-6">
          <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white md:text-7xl lg:text-8xl">
            Frontend
            <span className="block text-gradient-red">Developer</span>
          </h1>
          <p className="font-display text-xl font-medium text-white/50 md:text-2xl">
            Crafting{" "}
            <span className="text-red-400">
              <FlipWords words={WORDS} />
            </span>{" "}
            web experiences
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={item}
          className="mx-auto max-w-2xl text-base leading-relaxed text-white/50 md:text-lg"
        >
          I&apos;m Lucas Pereira — Software Engineering student building
          user-centric products with React and TypeScript at CP2 Junior
          Company, on the path to full-stack.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-4 font-mono text-sm font-semibold tracking-wider text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-500 hover:shadow-red-500/40"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-8 py-4 font-mono text-sm font-semibold tracking-wider text-white/80 backdrop-blur-sm transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-white"
          >
            Get in Touch
          </a>
        </motion.div>

        {/* Socials */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 pt-2">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-white/50 transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Tech stack marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 left-0 w-full overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#060606] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#060606] to-transparent" />
        <div className="animate-marquee flex w-max gap-12 py-2">
          {[...STACK, ...STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="font-mono text-xs uppercase tracking-[0.3em] text-white/25"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1.5">
          <div className="animate-scroll-wheel h-1.5 w-1 rounded-full bg-red-500" />
        </div>
      </div>
    </section>
  );
}

export const Hero = memo(HeroComponent);
