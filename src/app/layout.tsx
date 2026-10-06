import type { Metadata } from "next";
import { NextFont } from "next/dist/compiled/@next/font";
import { Montserrat } from "next/font/google";
import { JSX } from "react";

import StyledComponentsRegistry from "./registry";
import Footer from "../components/layouts/Footer/Footer";
import Header from "../components/layouts/Header/Header";
import { buildSeoMetadata, SITE_URL } from "../shared/utils/seo.utils";
import "./../css/global.css";

const montserrat: NextFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  ...buildSeoMetadata({
    title: "Magda Chudzik - Software Engineer and UI/UX Designer",
    description:
      "Software engineer and UI/UX designer with extensive experience in crafting modern, responsive and scalable digital interfaces. I blend deep technical expertise with strong design skills, creating intuitive, visually refined and performance‑driven user experiences.",
    url: SITE_URL,
    imageUrl: "/images/magdachudzik.webp",
    keywords:
      "software engineer, UI designer, frontend developer, technical physicist, modern web development, responsive UI, scalable interfaces, intuitive design, JavaScript, TypeScript, Angular, React, Next.js, Nx, HTML, CSS, Sass, BEM, Bootstrap, WordPress, Node.js, Nest.js, Express.js, AI-assisted development, GitHub Copilot, Cursor IDE, Gemini AI, prompt engineering, Playwright, Cypress, Jasmine, Jest, Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, interaction design, digital design, performance-optimized UI, design systems, user-friendly interfaces, modern web applications, hybrid designer-developer",
  }),
  icons: {
    icon: "/images/favicon.svg",
    shortcut: "/images/favicon.svg",
    apple: "/images/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <head></head>
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <Header></Header>
          <main>{children}</main>
          <Footer></Footer>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
