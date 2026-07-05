import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatedBackground } from "@/components/AnimatedBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-luz-lucas.vercel.app"),
  title: {
    default: "Lucas Pereira | Frontend Developer",
    template: "%s | Lucas Pereira",
  },
  description:
    "Frontend developer and Software Engineering student from Minas Gerais, Brazil. Building responsive, performant web experiences with React, TypeScript and Next.js.",
  keywords: [
    "Lucas Pereira",
    "Frontend Developer",
    "React",
    "TypeScript",
    "Next.js",
    "Software Engineer",
    "Brazil",
  ],
  authors: [{ name: "Lucas Pereira", url: "https://github.com/Luz-Lucas" }],
  openGraph: {
    title: "Lucas Pereira | Frontend Developer",
    description:
      "Frontend developer building responsive, performant web experiences with React, TypeScript and Next.js.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Lucas Pereira | Frontend Developer",
    description:
      "Frontend developer building responsive, performant web experiences with React, TypeScript and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        <AnimatedBackground />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
