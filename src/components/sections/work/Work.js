import React from "react";
import styled from "styled-components";
import Feature from "./Feature";
import { useMediaQuery, useIsInViewport } from "../../../hooks";
import { bitMiner, portfolioV1 } from "../../../assets/";

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
        content={content["portfolioV1"]}
        img={portfolioV1}
      />
      <Feature content={content["bitMiner"]} img={bitMiner} />
    </StyledSection>
  );
};

export default Work;

const content = {
  portfolioV1: {
    title: "Portfolio V1",
    stack: ["React", "React-Router, HashLink, Styled-Components"],
    description: `A fully responsive, single page, smooth scroller portfolio! Other than it a being a fancy pants resume,
                  this project is to showcase native html / css skills using NO style libraries.`,
    gitLink: "",
    hostedLink: "",
  },
  bitMiner: {
    title: "Bitcoin Miner",
    stack: ["React", "React Testing Library", "Jss"],
    description: `A fun web app to showcase React. 
                  The number of coins "mined" is run against the real time btc price, 
                  fetched from an external api on a five second interval.`,
    gitLink: "",
    hostedLink: "",
  },
};
