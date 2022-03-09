import React from "react";
import styled from "styled-components";
import { jobs } from "./Content";
import SelectButtons from "./SelectButtons";
import ExperienceContent from "./ExperienceContent";
import { useIsInViewport } from "../../../hooks";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};
  ${({ theme, isInViewPort }) => isInViewPort && theme.mixins.fadeIn}

  h2 {
    ${({ theme }) => theme.mixins.h2};
  }

  p {
    ${({ theme }) => theme.mixins.pLetterAttrs};
  }
`;

const FlexContainer = styled.div`
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;

    button {
      margin: 0;
    }
  }
`;

const Experience = () => {
  const { elementRef, isInViewPort } = useIsInViewport();
  const [job, setJob] = React.useState(jobs["StorageCraft"]);
  const buttons = ["EvolveMEP","StorageCraft", "Exact Sciences", "Eastern Washington"];

  const handleButtonClick = (e) => {
    setJob(jobs[e.target.name]);
  };

  return (
    <StyledSection ref={elementRef} id="experience" isInViewPort={isInViewPort}>
      <h2>experience</h2>
      <FlexContainer>
        <SelectButtons buttons={buttons} onClick={handleButtonClick} />
        <ExperienceContent job={job} />
      </FlexContainer>
    </StyledSection>
  );
};

export default Experience;
