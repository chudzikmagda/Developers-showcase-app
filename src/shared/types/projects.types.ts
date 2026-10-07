import { Image } from "./image.types";
import { Technology } from "./technologies.types";

export enum ProjectId {
  THE_SOFTWARE_ENGINEER_PORTFOLIO = "the-software-engineer-portfolio-1",
  PHOTOGRAPHERS_PORTFOLIO = "photographers-portfolio-2",
  BOOKWORM = "bookworm-3",
  WORKSPACE_OF_TOMORROW = "workspace-of-tomorrow-4",
  WEATHER_APP = "weather-app-5",
}

export interface Project {
  id: ProjectId;
  title: string;
  description: string;
  featured: boolean;
  listImage: Image;
  showcaseImages: Image[];
  projectRange: string;
  implementationDate: string;
  technologies: Technology[];
  detailsUrl: string;
  liveDemoURL?: string;
  showcaseMobileImages?: Image[];
}
