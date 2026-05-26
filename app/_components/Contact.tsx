"use client";

import { memo, useState, FormEvent } from "react";

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
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* Left — contact info */}
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            Let&apos;s build something together
          </h2>
          <p className="text-white/80">
            Have a project or opportunity? Reach out and I&apos;ll get back to you.
          </p>
          <address className="space-y-3 text-sm text-white/80 not-italic">
            <p>
              <span className="text-white/60">Email:</span>{" "}
              <a className="hover:text-white transition" href="mailto:lucaspmluz@hotmail.com">
                lucaspmluz@hotmail.com
              </a>
            </p>
            <p>
              <span className="text-white/60">LinkedIn:</span>{" "}
              <a
                className="hover:text-white transition"
                href="https://www.linkedin.com/in/lucas-luz"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/lucas-luz
              </a>
            </p>
            <p>
              <span className="text-white/60">GitHub:</span>{" "}
              <a
                className="hover:text-white transition"
                href="https://github.com/Luz-lucas"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Luz-lucas
              </a>
            </p>
          </address>
        </div>

        {/* Right — form or success state */}
        {sent ? (
          <div className="rounded-2xl border border-white/20 p-6 flex flex-col justify-center gap-3">
            <span className="text-2xl">✓</span>
            <p className="text-white font-medium">Message sent.</p>
            <p className="text-sm text-white/60">I&apos;ll get back to you soon.</p>
            <button
              onClick={() => setSent(false)}
              className="mt-2 text-xs text-white/40 hover:text-white/70 transition w-fit"
            >
              Send another
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/20 bg-transparent p-6 space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full rounded-lg bg-black/40 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-lg bg-black/40 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full rounded-lg bg-black/40 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Message"
              required
              className="w-full rounded-lg bg-black/40 border border-white/20 px-4 py-3 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 resize-y min-h-[120px]"
            />
            {error && (
              <p className="text-xs text-red-400">{error}</p>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full md:w-auto px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-white/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? "Sending..." : "Send message"}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}

export const Contact = memo(ContactComponent);
