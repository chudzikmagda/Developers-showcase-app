import { JSX } from "react";

import ProjectSection from "@/app/_components/layout/ProjectSection/ProjectSection";
import { projectsData } from "@/shared/data/projects.data";
import { Project } from "@/shared/types/projects.types";

import {
  H3Heading,
  SectionsWrapper,
  SectionWrapper,
  TextWrapper,
} from "./projects.styles";

const Projects = (): JSX.Element => {
  return (
    <SectionWrapper id="projects">
      <TextWrapper>
        <H3Heading>Featured projects</H3Heading>
      </TextWrapper>
      <SectionsWrapper>
        {projectsData
          .filter((project: Project) => project.featured)
          .map((project: Project) => (
            <ProjectSection key={project.id} project={project} />
          ))}
      </SectionsWrapper>
    </SectionWrapper>
  );
};

export default Projects;
