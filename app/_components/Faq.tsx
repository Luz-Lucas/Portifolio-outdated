"use client";

import { memo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
  {
    question: "How do you balance college with work at CP2?",
    answer:
      "Agile methodologies, strict time management, and sprint planning help me handle coursework and real-world projects efficiently.",
  },
  {
    question: "What's your React experience?",
    answer:
      "Proficient with React hooks, Context API, and Redux — demonstrated through projects like e-commerce dashboards and task managers.",
  },
  {
    question: "What is your full-stack approach?",
    answer:
      "My focus is frontend, but I integrate React with Node.js/Express and databases (MongoDB/PostgreSQL) to build complete applications.",
  },
  {
    question: "Are you open to freelance or full-time roles?",
    answer:
      "Yes — I'm open to junior frontend roles, internships, and freelance projects. Reach out via the contact form below.",
  },
] as const;

function FaqComponent() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-6 py-28">
      <div className="mx-auto w-full max-w-3xl space-y-14">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="FAQ"
            align="center"
            title={
              <>
                Questions &{" "}
                <span className="text-gradient-red">answers</span>
              </>
            }
          />
        </Reveal>

        <div className="space-y-4">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={faq.question} delay={i * 0.08}>
                <article
                  className={`overflow-hidden rounded-2xl border backdrop-blur-sm transition-colors duration-300 ${
                    isOpen
                      ? "border-red-500/40 bg-white/[0.03]"
                      : "border-white/10 bg-white/[0.02] hover:border-white/20"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                  >
                    <h3 className="font-display text-base font-semibold text-white">
                      <span className="mr-3 font-mono text-sm text-red-500/70">
                        0{i + 1}
                      </span>
                      {faq.question}
                    </h3>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`shrink-0 rounded-full border p-1.5 transition-colors duration-300 ${
                        isOpen
                          ? "border-red-500/50 text-red-400"
                          : "border-white/15 text-white/50"
                      }`}
                    >
                      <Plus className="h-4 w-4" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 pl-[3.75rem] text-sm leading-relaxed text-white/60">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export const Faq = memo(FaqComponent);
