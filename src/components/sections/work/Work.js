import React from "react";
import styled from "styled-components";
import FeatureOne from "./FeatureOne";
import useMediaQuery from "../../../hooks/useMediaQuery";

const StyledSection = styled.section`
  padding: 100px 0;
  max-width: 1000px;

  h2 {
    font-family: futura-bold;
    color: #b30000;
  }
`;

const Work = () => {
  const matches = useMediaQuery("(max-width: 900px)");

  console.log({ matches });
  return (
    <StyledSection id="work">
      <h2>Things I've Built</h2>
      <FeatureOne reversed={!matches} />
      <FeatureOne />
    </StyledSection>
  );
};

export default Work;
