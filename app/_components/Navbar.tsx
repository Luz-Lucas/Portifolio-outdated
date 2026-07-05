"use client";

import { memo, useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "FAQ", href: "#faq", id: "faq" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

function NavbarComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-px w-full origin-left bg-gradient-to-r from-red-500 via-red-600 to-red-800"
        style={{ scaleX: progress }}
      />

      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="group flex items-center gap-2 font-mono text-sm font-semibold tracking-widest text-white"
        >
          <span className="text-red-500 transition-transform duration-300 group-hover:-translate-x-0.5">
            &lt;
          </span>
          lucas.luz
          <span className="text-red-500 transition-transform duration-300 group-hover:translate-x-0.5">
            /&gt;
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 font-mono text-xs tracking-wider transition-colors duration-300 ${
                active === link.id
                  ? "bg-red-500/10 text-red-400"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span className="mr-1 text-red-500/70">0{i + 1}.</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Luz-Lucas"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full border border-white/15 px-5 py-2 font-mono text-xs tracking-wider text-white/80 transition-all duration-300 hover:border-red-500/60 hover:bg-red-500/10 hover:text-white sm:block"
          >
            GitHub ↗
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-lg border border-white/15 p-2 text-white/80 transition hover:border-red-500/60 hover:text-white md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="border-t border-white/10 bg-black/90 backdrop-blur-xl md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/5 py-3 font-mono text-sm tracking-wider text-white/70 transition-colors last:border-0 hover:text-red-400"
              >
                <span className="mr-2 text-red-500/70">0{i + 1}.</span>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export const Navbar = memo(NavbarComponent);
