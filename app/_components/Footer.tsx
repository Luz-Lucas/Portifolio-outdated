"use client";

import { memo } from "react";
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/Luz-Lucas", Icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/lucas-luz", Icon: Linkedin },
  { label: "Email", href: "mailto:lucaspmluz@hotmail.com", Icon: Mail },
] as const;

function FooterComponent() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 px-6 py-12">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="font-mono text-sm font-semibold tracking-widest text-white">
            <span className="text-red-500">&lt;</span>
            lucas.luz
            <span className="text-red-500">/&gt;</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6" aria-label="Footer navigation">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs uppercase tracking-widest text-white/50 transition-colors duration-300 hover:text-red-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-white/50 transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-red-400"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-white/40 md:flex-row">
          <p className="flex items-center gap-1.5 font-mono">
            © {year} Lucas Pereira — built with
            <Heart className="h-3 w-3 fill-red-500 text-red-500" />
            and Next.js
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 font-mono uppercase tracking-widest transition-colors duration-300 hover:text-red-400"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export const Footer = memo(FooterComponent);
