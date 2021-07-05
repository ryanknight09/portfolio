import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  // padding: 100px 0px;
  margin: 0px auto;
  display: flex;

  p {
    font-family: futura-bold;
  }
`;

const About = () => {
  return (
    <StyledSection id="about">
      <p>The quick brown fox jumps over the lazy dog.</p>
    </StyledSection>
  );
};

export default About;
