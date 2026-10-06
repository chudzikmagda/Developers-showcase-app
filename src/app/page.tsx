import type { Metadata } from "next";
import { JSX } from "react";
import styled from "styled-components";

import { buildSeoMetadata, SITE_URL } from "../shared/utils/seo.utils";
import AboutMe from "./_components/layout/AboutMe/AboutMe";
import AfterWork from "./_components/layout/AfterWork/AfterWork";
import Intro from "./_components/layout/Intro/Intro";
import Projects from "./_components/layout/Projects/Projects";

export const metadata: Metadata = buildSeoMetadata({
  title: "Magda Chudzik - Software Engineer and UI/UX Designer",
  description:
    "Software engineer and UI/UX designer with extensive experience in crafting modern, responsive and scalable digital interfaces. I blend deep technical expertise with strong design skills, creating intuitive, visually refined and performance‑driven user experiences.",
  url: SITE_URL,
  imageUrl: "/images/magdachudzik.webp",
  keywords:
    "software engineer, UI designer, frontend developer, technical physicist, modern web development, responsive UI, scalable interfaces, intuitive design, JavaScript, TypeScript, Angular, React, Next.js, Nx, HTML, CSS, Sass, BEM, Bootstrap, WordPress, Node.js, Nest.js, Express.js, AI-assisted development, GitHub Copilot, Cursor IDE, Gemini AI, prompt engineering, Playwright, Cypress, Jasmine, Jest, Figma, Adobe Photoshop, Adobe Illustrator, Adobe InDesign, interaction design, digital design, performance-optimized UI, design systems, user-friendly interfaces, modern web applications, hybrid designer-developer",
});

export default function Home(): JSX.Element {
  return (
    <Container>
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <AfterWork></AfterWork>
    </Container>
  );
}

const Container = styled.div`
  background-color: var(--secondary-color);
  min-height: 100vh;
`;
