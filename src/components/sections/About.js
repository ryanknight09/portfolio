import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  background: papayawhip;
  padding: 100px 0px;
  margin: 0px auto;
`;

const About = () => {
  return (
    <StyledSection id="about">
      <p>The quick brown fox jumps over the lazy dog.</p>
    </StyledSection>
  );
};

export default About;
