# Lucas Pereira — Portfolio

Personal portfolio of **Lucas Pereira**, frontend developer and Software Engineering student from Minas Gerais, Brazil.

Dark, red-accented single-page experience built with the modern React stack — animated hero, live GitHub project feed, interactive FAQ, and a working contact form.

## ✨ Features

- **Live GitHub projects** — repositories fetched server-side with ISR (revalidated hourly), sorted by stars
- **Motion design** — scroll-reveal animations, flip-word hero, animated timeline and accordion powered by [Motion](https://motion.dev)
- **Fully responsive** — mobile navigation, fluid typography, adaptive grids
- **Accessible** — semantic landmarks, `aria` attributes, `prefers-reduced-motion` support
- **SEO-ready** — Open Graph / Twitter metadata, security headers
- **Contact form** — powered by FormSubmit, no backend or API keys required

## 🛠 Tech Stack

| Layer     | Technology                              |
| --------- | --------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| UI        | [React 19](https://react.dev) + TypeScript |
| Styling   | [Tailwind CSS v4](https://tailwindcss.com) |
| Animation | [Motion](https://motion.dev)             |
| Icons     | [Lucide](https://lucide.dev)             |
| Fonts     | Space Grotesk · Inter · JetBrains Mono (via `next/font`) |
| Analytics | Vercel Analytics + Speed Insights        |

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## ⚙️ Environment Variables

Everything works with zero configuration. Optional variables:

| Variable                      | Purpose                                              |
| ----------------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub username for the projects feed (default: `Luz-Lucas`) |
| `GITHUB_TOKEN`                | Optional token to raise the GitHub API rate limit    |

## ☁️ Deploy on Vercel

This project is ready to deploy on [Vercel](https://vercel.com) out of the box:

1. Import the repository at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Next.js** (auto-detected) — no extra configuration needed
3. Deploy 🎉

## 📬 Contact

- **Email:** [lucaspmluz@hotmail.com](mailto:lucaspmluz@hotmail.com)
- **LinkedIn:** [linkedin.com/in/lucas-luz](https://www.linkedin.com/in/lucas-luz)
- **GitHub:** [github.com/Luz-Lucas](https://github.com/Luz-Lucas)

---

© Lucas Pereira — built with ❤️ and Next.js
