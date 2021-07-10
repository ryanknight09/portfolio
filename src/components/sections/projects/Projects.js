import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: var(--section-padding);
  margin: 0px auto;
`;

const Projects = () => {
  return (
    <StyledSection id="projects">
      <h2>Things Iv Built</h2>
    </StyledSection>
  );
};

export default Projects;
