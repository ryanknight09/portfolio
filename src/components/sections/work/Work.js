import React from "react";
import styled from "styled-components";
import Feature from "./Feature";
import { useMediaQuery, useIsInViewport } from "../../../hooks";
import BitMiner from "../../../assets/bit-miner.png";

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
      <Feature
        reversed={!matches}
        content={content["bitMiner"]}
        img={BitMiner}
      />
      <Feature content={content["bitMiner"]} img={BitMiner} />
    </StyledSection>
  );
};

export default Work;

const content = {
  bitMiner: {
    title: "Bitcoin Miner",
    stack: ["React", "React Testing Library", "Jss"],
    description: `A fun web app to showcase React. 
                  The number of coins "mined" is run against the real time btc price, 
                  fetched from an external api on a five second interval.`,
  },
};
