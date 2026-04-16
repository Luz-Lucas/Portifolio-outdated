"use client";

import { memo } from "react";

const FAQS = [
  {
    question: "How do you balance college with work at CP2?",
    answer: "Using Agile methodologies, strict time management, and sprint planning helps me efficiently handle coursework and real-world projects.",
  },
  {
    question: "What's your React experience?",
    answer: "Proficient in React hooks, Context API, and Redux, demonstrated through complex projects like e-commerce dashboards and task managers.",
  },
  {
    question: "What is your full-stack approach?",
    answer: "My focus is front-end, but I integrate React with Node.js/Express and databases (MongoDB/PostgreSQL) to build complete applications.",
  },
  {
    question: "How did you achieve a 100/100 Lighthouse score?",
    answer: "By prioritizing code splitting, lazy loading, optimized images, efficient CSS, and smooth animations while meeting accessibility standards.",
  },
];

function FaqComponent() {
  return (
    <section id="faq" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl space-y-10">
        <div className="space-y-3 text-center lg:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">FAQ</p>
          <h2 className="text-3xl md:text-4xl font-semibold">Questions about my work & approach</h2>
          <p className="text-white/80 max-w-2xl mx-auto lg:mx-0">
            A quick overview of my experience, technical skills, and development philosophy.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-white/20 bg-transparent p-6 space-y-3"
            >
              <h3 className="text-lg font-semibold">{faq.question}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export const Faq = memo(FaqComponent);
