import { Project, ProjectId } from "../types/projects.types";
import { Technology } from "../types/technologies.types";

export const projectsData: Project[] = [
  {
    id: ProjectId.THE_SOFTWARE_ENGINEER_PORTFOLIO,
    title: "Software engineer showcase",
    description:
      "An interactive web application engineered with Next.js 16, React 19, and GSAP. Features custom styling with styled-components, Turbopack integration, and React Compiler optimizations.",
    featured: true,
    listImage: {
      src: "/images/projects/dev-portfolio/listing.webp",
      alt: "Software engineer portfolio preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/dev-portfolio/mockup1.webp",
        alt: "Software engineer portfolio mockup 1",
      },
      {
        src: "/images/projects/dev-portfolio/mockup2.webp",
        alt: "Software engineer portfolio mockup 2",
      },
      {
        src: "/images/projects/dev-portfolio/mockup3.webp",
        alt: "Software engineer portfolio mockup 3",
      },
      {
        src: "/images/projects/dev-portfolio/mockup4.webp",
        alt: "Software engineer portfolio mockup 4",
      },
    ],
    showcaseMobileImages: [
      {
        src: "/images/projects/dev-portfolio/mockup-mobile-1.webp",
        alt: "Software engineer portfolio mockup 1",
      },
      {
        src: "/images/projects/dev-portfolio/mockup-mobile-2.webp",
        alt: "Software engineer portfolio mockup 2",
      },
      {
        src: "/images/projects/dev-portfolio/mockup-mobile-3.webp",
        alt: "Software engineer portfolio mockup 3",
      },
    ],
    projectRange: "Frontend development, UI/UX design,.",
    implementationDate: "2026",
    technologies: [
      Technology.NEXT_JS,
      Technology.REACT,
      Technology.TYPESCRIPT,
      Technology.STYLED_COMPONENTS,
      Technology.SASS,
    ],
    detailsUrl: "/projects/dev-portfolio",
    liveDemoURL: "https://dev.magdachudzik.pl",
  },
  {
    id: ProjectId.PHOTOGRAPHERS_PORTFOLIO,
    title: "Fine art photography showcase",
    description:
      "A responsive, highly visual web platform built with React 19, Vite, and SASS. Features localized content (i18next), lightbox viewports, dynamic gallery metadata generation, and SEO/analytics integration.",
    featured: true,
    listImage: {
      src: "/images/projects/photo-portfolio/listing.webp",
      alt: "Photographer portfolio preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/photo-portfolio/mockup1.webp",
        alt: "Photographer portfolio mockup 1",
      },
      {
        src: "/images/projects/photo-portfolio/mockup2.webp",
        alt: "Photographer portfolio mockup 2",
      },
      {
        src: "/images/projects/photo-portfolio/mockup3.webp",
        alt: "Photographer portfolio mockup 3",
      },
      {
        src: "/images/projects/photo-portfolio/mockup4.webp",
        alt: "Photographer portfolio mockup 4",
      },
    ],
    showcaseMobileImages: [
      {
        src: "/images/projects/photo-portfolio/mockup-mobile-1.webp",
        alt: "Photographer portfolio mockup 1",
      },
      {
        src: "/images/projects/photo-portfolio/mockup-mobile-2.webp",
        alt: "Photographer portfolio mockup 2",
      },
      {
        src: "/images/projects/photo-portfolio/mockup-mobile-3.webp",
        alt: "Photographer portfolio mockup 3",
      },
    ],
    projectRange: "UI/UX design, frontend development, SEO.",
    implementationDate: "2023",
    technologies: [Technology.REACT, Technology.TYPESCRIPT, Technology.SASS],
    detailsUrl: "/projects/photographers-portfolio",
    liveDemoURL: "https://magdachudzik.pl",
  },
  {
    id: ProjectId.BOOKWORM,
    title: "Bookworm app",
    description:
      "A client-side web application built with Angular and SCSS that enables users to organize reading habits, track personal progress, and manage personal book collections.",
    featured: false,
    listImage: {
      src: "/images/projects/bookworm/listing.webp",
      alt: "Bookworm app preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/bookworm/mockup1.webp",
        alt: "Bookworm app mockup 1",
      },
      {
        src: "/images/projects/bookworm/mockup2.webp",
        alt: "Bookworm app mockup 2",
      },
      {
        src: "/images/projects/bookworm/mockup3.webp",
        alt: "Bookworm app mockup 3",
      },
      {
        src: "/images/projects/bookworm/mockup4.webp",
        alt: "Bookworm app mockup 4",
      },
    ],
    projectRange: "Frontend development, UI/UX design,.",
    implementationDate: "2022",
    technologies: [Technology.ANGULAR, Technology.TYPESCRIPT, Technology.SASS],
    detailsUrl: "/projects/bookworm",
  },
  {
    id: ProjectId.WEATHER_APP,
    title: "Weather app",
    description:
      "Check the current weather as well as the forecast for the next 16 days in a selected town by using geolocation.",
    featured: false,
    listImage: {
      src: "/images/projects/weather-app/listing.webp",
      alt: "Weather app preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/weather-app/mockup1.webp",
        alt: "Weather app mockup 1",
      },
    ],
    projectRange: "Frontend development, UI/UX design,.",
    implementationDate: "2022",
    technologies: [Technology.ANGULAR, Technology.TYPESCRIPT, Technology.SASS],
    detailsUrl: "/projects/weather-app",
  },
  {
    id: ProjectId.WORKSPACE_OF_TOMORROW,
    title: "Workspace of tomorrow",
    description:
      'The website "Workspace of tomorrow" aims at showing how the office work will change in the future. I have created this website for Nowy Styl which is an European leader in the office furniture sector.',
    featured: true,
    listImage: {
      src: "/images/projects/workspace-of-tomorrow/listing.webp",
      alt: "Workspace of tomorrow preview",
    },
    showcaseImages: [
      {
        src: "/images/projects/workspace-of-tomorrow/mockup1.webp",
        alt: "Workspace of tomorrow mockup 1",
      },
      {
        src: "/images/projects/workspace-of-tomorrow/mockup2.webp",
        alt: "Workspace of tomorrow mockup 2",
      },
      {
        src: "/images/projects/workspace-of-tomorrow/mockup3.webp",
        alt: "Workspace of tomorrow mockup 3",
      },
      {
        src: "/images/projects/workspace-of-tomorrow/mockup4.webp",
        alt: "Workspace of tomorrow mockup 4",
      },
    ],
    projectRange:
      "Layout design (Figma), frontend development, Wordpress theme implementation.",
    implementationDate: "2021",
    technologies: [Technology.JAVASCRIPT, Technology.HTML, Technology.CSS],
    detailsUrl: "/projects/workspace-of-tomorrow",
  },
];
