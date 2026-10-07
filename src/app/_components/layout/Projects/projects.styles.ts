import styled from "styled-components";

import { Breakpoints } from "@/shared/types/breakpoints.types";

export const SectionWrapper = styled.section`
  width: 100%;
  background: var(--secondary-color);
  padding: calc(var(--basic-spacer) * 4) var(--basic-spacer);

  @media (min-width: ${Breakpoints.MOBILE}) {
    padding: calc(var(--basic-spacer) * 6);
  }
`;

export const TextWrapper = styled.div`
  max-width: var(--container-max-width);
  margin: 0 auto 2rem;
`;

export const H3Heading = styled.h3`
  margin-bottom: 1rem;
  font-size: clamp(1rem, 1rem + 2vw, calc(1.25rem + 2vmin));
  line-height: 1.3;
  color: var(--primary-text-color);
`;

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  width: 100%;
  max-width: var(--container-max-width);
  margin: 0 auto;
`;
