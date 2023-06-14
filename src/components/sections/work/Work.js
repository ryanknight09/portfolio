import React from "react";
import styled from "styled-components";
import { bitMiner, portfolio, spot1, spot2, spot3, spot4, spot5, spot6, spot7 } from "../../../assets/";
import { useIsInViewport } from "../../../hooks";
import Feature from "./Feature";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};
  ${({ theme, isInViewPort }) => isInViewPort && theme.mixins.fadeIn}

  h2 {
    ${({ theme }) => theme.mixins.h2};
  }
`;

const Work = () => {
  const { elementRef, isInViewPort } = useIsInViewport();

  return (
    <StyledSection ref={elementRef} id="work" isInViewPort={isInViewPort}>
      <h2>Things I've Built</h2>
      <Feature
        content={content["spotifyClone"]}
        imgs={[spot1, spot2, spot3, spot4, spot5, spot6, spot7]}
      />
      <Feature
        content={content["portfolioV1"]}
        imgs={[portfolio]}
      />
      <Feature content={content["bitMiner"]} imgs={[bitMiner]} />
    </StyledSection>
  );
};

export default Work;

const content = {
  spotifyClone: {
    title: "Spotify Clone",
    extra: 'UNABLE TO HOST DUE TO SPOTIFY ATTRIBUTION. I would love to showcase this to you during an interview!',
    stack: ["React", "React Query", "Spotify API", "MUI-V5", "Typescript", "Nx Dev", "Firebase"],
    description: `Clone of the Spotify App. This app displays the logged in users profile, with top songs, followers, artists and more. 
    Also, any song is playable with the web player.`,
    gitLink: "https://github.com/ryanknight09/spotify",
    hostedLink: "",
  },
  portfolioV1: {
    title: "Portfolio V1",
    stack: ["React", "React-Router, HashLink, Styled-Components"],
    description: `A fully responsive, single page, smooth scroller portfolio! Other than it a being a fancy pants resume,
                  this project is to showcase native html / css skills using NO style libraries.`,
    gitLink: "https://github.com/ryanknight09/portfolio",
    hostedLink: "",
  },
  bitMiner: {
    title: "Bitcoin Miner",
    stack: ["React", "React Testing Library", "Jss"],
    description: `A fun web app to showcase React. 
                  The number of coins "mined" is run against the real time btc price, 
                  fetched from an external api on a five second interval.`,
    gitLink: "https://github.com/ryanknight09/bitcoin-miner",
    hostedLink: "https://bitcoin-miner-c247a.web.app/",
  },
};
