import React from "react";
import styled from "styled-components";
import Content from "./Content";

const StyledExperience = styled.div`
  max-width: 600px;
  height: max-content;
  padding: 0 25px;
  color: #ffffff;
  border-left: 2px solid #b30000;
  min-height: 410px;

  @media (max-width: 900px) {
    border-left: none;
    padding: 25px 0;
  }

  h3 {
    font-family: var(--medium-font);
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.15rem;
    margin: 0;
  }

  ul {
    font-family: var(--paragraph-font);
    letter-spacing: 0.05rem;
    line-height: 24px;

    li {
      padding: 6px 0;
    }
  }
`;

const ExperienceContent = ({ job }) => {
  const { title, time, items } = job;

  return (
    <StyledExperience>
      <Content title={title} time={time} items={items} />
    </StyledExperience>
  );
};

export default ExperienceContent;
