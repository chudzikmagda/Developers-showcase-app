import { JSX } from "react";

import ProjectSection from "@/app/_components/layout/ProjectSection/ProjectSection";
import { projectsData } from "@/shared/data/projects.data";
import { Project } from "@/shared/types/projects.types";

import {
  H2Heading,
  SectionWrapper,
  TextWrapper,
  SectionsWrapper,
} from "./projects.styles";

const Projects = (): JSX.Element => {
  return (
    <SectionWrapper id="projects">
      <TextWrapper>
        <H2Heading>Featured projects</H2Heading>
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
