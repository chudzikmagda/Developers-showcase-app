import Image from "next/image";
import { JSX } from "react";

import {
  ImagesWrapper,
  InfoLabel,
  InfoParagraph,
  InfoSection,
  MobileImageItem,
  MobileImagesWrapper,
  PageWrapper,
  ShowcaseContainer,
  ShowcaseImageFrame,
  ShowcaseImageWrapper,
  ShowcaseLabel,
  TagsRow,
  Title,
} from "./projectShowcase.styles";
import { ProjectShowcaseProps } from "./projectShowcase.types";
import Button from "@/components/ui/Button/Button";
import { ButtonSize, ButtonVersion } from "@/components/ui/Button/button.types";
import Tag from "@/components/ui/Tag/Tag";
import { TagColorMode, TagContentMode } from "@/shared/types/tag.types";
import { getTechnologyTag } from "@/shared/utils/technologies.utils";

const ProjectShowcase = ({
  title,
  technologies,
  showcaseImages,
  showcaseMobileImages,
  implementationDate,
  description,
  projectRange,
  liveDemoURL,
}: ProjectShowcaseProps): JSX.Element => {
  return (
    <PageWrapper>
      <ShowcaseContainer>
        <ShowcaseLabel>Project</ShowcaseLabel>
        <Title>{title}</Title>
        <TagsRow>
          {technologies.map((tech) => {
            const tagData = getTechnologyTag(tech);
            return tagData ? (
              <Tag key={String(tech)} {...tagData} />
            ) : (
              <Tag
                key={String(tech)}
                label={String(tech)}
                colorMode={TagColorMode.DARK}
                contentMode={TagContentMode.TEXT_ONLY}
              />
            );
          })}
        </TagsRow>
        <InfoSection>
          <div>
            <InfoLabel>project range:</InfoLabel>
            <InfoParagraph>{projectRange}</InfoParagraph>
          </div>
          <div>
            <InfoLabel>description:</InfoLabel>
            <InfoParagraph>{description}</InfoParagraph>
          </div>
          <div>
            <InfoLabel>year:</InfoLabel>
            <InfoParagraph>{implementationDate}</InfoParagraph>
          </div>
          {liveDemoURL && (
            <div>
              <InfoLabel>Live demo:</InfoLabel>
              <InfoParagraph>
                <Button
                  label={liveDemoURL}
                  size={ButtonSize.SMALL}
                  version={ButtonVersion.PRIMARY}
                  hasArrow={false}
                  href={liveDemoURL}
                />
              </InfoParagraph>
            </div>
          )}
        </InfoSection>
        <ImagesWrapper>
          {showcaseImages.map((img, index) => (
            <ShowcaseImageWrapper key={img.src}>
              <ShowcaseImageFrame>
                <Image
                  src={img.src}
                  alt={img.alt ?? `${title} showcase image ${index + 1}`}
                  width={1200}
                  height={675}
                  sizes="(max-width: 768px) 100vw, 1200px"
                  style={{ width: "100%", height: "auto" }}
                />
              </ShowcaseImageFrame>
            </ShowcaseImageWrapper>
          ))}
          {showcaseMobileImages && (
            <MobileImagesWrapper>
              {showcaseMobileImages.map((img, index) => (
                <MobileImageItem key={img.src}>
                  <ShowcaseImageFrame>
                    <Image
                      src={img.src}
                      alt={img.alt ?? `${title} showcase image ${index + 1}`}
                      width={1200}
                      height={675}
                      sizes="(max-width: 768px) 100vw, 1200px"
                      style={{ width: "100%", height: "auto" }}
                    />
                  </ShowcaseImageFrame>
                </MobileImageItem>
              ))}
            </MobileImagesWrapper>
          )}
        </ImagesWrapper>
      </ShowcaseContainer>
    </PageWrapper>
  );
};

export default ProjectShowcase;
