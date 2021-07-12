import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";
import { useIsInViewport } from "../../../hooks";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};
  ${({ theme, isInViewPort }) => isInViewPort && theme.mixins.fadeIn}

  h2 {
    ${({ theme }) => theme.mixins.h2};
  }
`;

const StyledCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(275px, 2fr));
  gap: 20px;
  padding: 20px 0;
`;

const Projects = () => {
  const { elementRef, isInViewPort } = useIsInViewport();

  return (
    <StyledSection ref={elementRef} id="projects" isInViewPort={isInViewPort}>
      <h2>other interesting endeavors...</h2>
      <StyledCards>
        {cards.map((card) => (
          <ProjectCard key={card} content={card} />
        ))}
      </StyledCards>
    </StyledSection>
  );
};

export default Projects;

const cards = [
  {
    gitLink: "https://github.com/ryanknight09/RGB_Color_Game",
    title: "RGB Color Game",
    description:
      "This is an interactive WebApp game that is designed to teach new developers how to recognize colors in an RGB value set.",
    stacks: ["Css", "Html", "vanilla Js"],
  },
  {
    gitLink: "https://github.com/ryanknight09/DirectoryLogger-C-sharp",
    title: "Directory Logger",
    description:
      "A native windows app to watch file changes on a specified drive location. It persists events, and can be written out to a log file.",
    stacks: ["C#"],
  },
  {
    gitLink: "https://github.com/ryanknight09/Computer-Architecture",
    title: "Computer Architecture",
    description:
      "Bits of assembly code and simple logic unit designs with Varilog. Files are in .txt copy and pasting into an online Varilog editor will suffice.",
    stacks: ["Assembly language"],
  },
  {
    gitLink: "https://github.com/ryanknight09/HappyCamper",
    title: "Happy Camper",
    description:
      "Front end web / Node.js express back end project for fun! Essentially a yelp for camping",
    stacks: ["Mongo db", "Vanilla Js", "Css", "Node"],
  },
  {
    gitLink: "https://github.com/ryanknight09/Algorithm_Analysis",
    title: "Algorithm Analysis",
    description:
      "This project runs sorting routines to show algorithm optimizations",
    stacks: ["Java"],
  },
];
