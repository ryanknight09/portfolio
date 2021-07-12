import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useIsInViewport } from "../../../hooks";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};
  ${({ theme, isInViewPort }) => isInViewPort && theme.mixins.fadeIn}

  h2 {
    ${({ theme }) => theme.mixins.h2};
  }
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 2fr));
  gap: 20px;
  padding: 20px 0;
`;

const Projects = () => {
  const { elementRef, isInViewPort } = useIsInViewport();

  return (
    <StyledSection ref={elementRef} id="projects" isInViewPort={isInViewPort}>
      <h2>other interesting endeavors...</h2>
      <StyledCards>
        {cards.map((card) => (
          <ProjectCard key={card} />
        ))}
      </StyledCards>
    </StyledSection>
  );
};

export default Projects;

const cards = [1, 2, 3, 4, 5, 6];
