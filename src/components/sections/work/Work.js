import React from "react";
import styled from "styled-components";
import Feature from "./Feature";
import { useMediaQuery, useIsInViewport } from "../../../hooks";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};
  ${({ theme, isInViewPort }) => isInViewPort && theme.mixins.fadeIn}

  h2 {
    ${({ theme }) => theme.mixins.h2};
  }
`;

const Work = () => {
  const matches = useMediaQuery("(max-width: 900px)");
  const { elementRef, isInViewPort } = useIsInViewport();

  return (
    <StyledSection ref={elementRef} id="work" isInViewPort={isInViewPort}>
      <h2>Things I've Built</h2>
      <Feature reversed={!matches} />
      <Feature />
    </StyledSection>
  );
};

export default Work;
