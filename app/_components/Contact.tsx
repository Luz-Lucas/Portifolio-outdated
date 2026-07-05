"use client";

import { memo, useState, type FormEvent } from "react";
import { CheckCircle2, Github, Linkedin, Mail, Send } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const CHANNELS = [
  {
    label: "Email",
    value: "lucaspmluz@hotmail.com",
    href: "mailto:lucaspmluz@hotmail.com",
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/lucas-luz",
    href: "https://www.linkedin.com/in/lucas-luz",
    Icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "github.com/Luz-Lucas",
    href: "https://github.com/Luz-Lucas",
    Icon: Github,
  },
] as const;

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-sm text-white placeholder:text-white/25 backdrop-blur-sm transition-colors duration-300 focus:border-red-500/60 focus:outline-none focus:ring-1 focus:ring-red-500/30";

function ContactComponent() {
  const [isLoading, setIsLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formsubmit.co/ajax/lucaspmluz@hotmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          _captcha: "false",
          _template: "table",
        }),
      });

      const result = await res.json();
      if (result.success === "true" || result.success === true) {
        setSent(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-28">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 -z-10 h-96 w-[640px] -translate-x-1/2 rounded-full bg-red-600/10 blur-[130px]"
      />

      <div className="mx-auto w-full max-w-6xl space-y-14">
        <Reveal>
          <SectionHeading
            index="06"
            eyebrow="Contact"
            align="center"
            title={
              <>
                Let&apos;s build something{" "}
                <span className="text-gradient-red">together</span>
              </>
            }
            description="Have a project or opportunity in mind? My inbox is always open."
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          {/* Channels */}
          <Reveal className="space-y-4 lg:col-span-2">
            {CHANNELS.map(({ label, value, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="card-glow group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm transition-colors duration-300 hover:border-red-500/50"
              >
                <span className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-red-500 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
                    {label}
                  </p>
                  <p className="truncate text-sm text-white/80 transition-colors group-hover:text-red-400">
                    {value}
                  </p>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm">
              <p className="font-mono text-xs leading-relaxed text-white/40">
                <span className="text-red-500">$</span> response_time{" "}
                <span className="text-white/60">&lt; 24h</span>
                <br />
                <span className="text-red-500">$</span> timezone{" "}
                <span className="text-white/60">GMT-3 (Brazil)</span>
              </p>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.15} className="lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center gap-5 rounded-2xl border border-red-500/40 bg-red-500/[0.06] p-12 text-center backdrop-blur-sm">
                <CheckCircle2 className="h-14 w-14 text-red-500" />
                <div>
                  <p className="font-display text-2xl font-bold text-white">
                    Message sent!
                  </p>
                  <p className="mt-2 text-sm text-white/60">
                    Thanks for reaching out — I&apos;ll get back to you soon.
                  </p>
                </div>
                <button
                  onClick={() => setSent(false)}
                  className="font-mono text-xs uppercase tracking-widest text-red-400 transition-colors hover:text-red-300"
                >
                  Send another →
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm md:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      placeholder="Your name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-subject"
                    className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="subject"
                    placeholder="What's this about?"
                    required
                    className={inputClass}
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[11px] uppercase tracking-[0.25em] text-white/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className={`${inputClass} min-h-[140px] resize-y`}
                  />
                </div>

                {error && (
                  <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-xs font-medium text-red-400">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 font-mono text-sm font-semibold tracking-wider text-white shadow-lg shadow-red-600/25 transition-all duration-300 hover:bg-red-500 hover:shadow-red-500/40 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export const Contact = memo(ContactComponent);
