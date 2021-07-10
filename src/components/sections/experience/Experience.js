import React from "react";
import styled from "styled-components";
import { jobs } from "./Content";
import SelectButtons from "./SelectButtons";
import ExperienceContent from "./ExperienceContent";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};

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
  const [job, setJob] = React.useState(jobs["StorageCraft"]);
  const buttons = ["StorageCraft", "Exact Sciences", "Eastern Washington"];

  const handleButtonClick = (e) => {
    setJob(jobs[e.target.name]);
  };

  return (
    <StyledSection id="experience">
      <h2>experience</h2>
      <FlexContainer>
        <SelectButtons buttons={buttons} onClick={handleButtonClick} />
        <ExperienceContent job={job} />
      </FlexContainer>
    </StyledSection>
  );
};

export default Experience;
