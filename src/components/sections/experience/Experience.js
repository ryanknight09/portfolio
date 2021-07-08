import React from "react";
import styled from "styled-components";
import Content, { jobs } from "./Content";

const StyledSection = styled.section`
  padding: 100px 0;
  max-width: 900px;

  h2 {
    font-family: futura-bold;
    color: #b30000;
  }

  img {
    width: 325px;
    height: auto;
  }

  p {
    font-family: Helvetica;
    color: #ffffff;
    max-width: 600px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1rem;

    a {
      color: #4b4b4b;
      text-decoration: none;

      &:hover {
        border-bottom: 2px solid #4b4b4b;
      }
    }
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 20px 2px;
  background-color: transparent;
  text-align: left;
  font-family: "Courier";
  font-size: 16px;
  border: none;
  color: white;
  height: 40px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(75, 75, 75, 0.1);
  }

  :active {
    transform: translateY(3px);
  }
`;

const StyledList = styled.div`
  @media (max-width: 900px) {
    overflow-x: auto;
  }

  ul {
    list-style-type: none;
    padding: 0;
    color: white;
    max-width: 225px;
    margin: unset;
    display: block;
    white-space: nowrap;

    button {
      margin-bottom: 15px;
    }

    @media (max-width: 900px) {
      display: flex;

      li {
        border-bottom: 2px solid rgb(179, 0, 0);
      }
    }
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
    font-family: futura-medium;
    font-size: 25px;
    font-weight: 400;
    letter-spacing: 0.15rem;
    margin: 0;
  }

  p {
    margin: 5px;
    font-family: Courier;
  }

  ul {
    font-family: Helvetica;
    letter-spacing: 0.05rem;
    line-height: 24px;

    li {
      padding: 6px 0;
    }
  }
`;

const ListView = ({ buttons, onClick }) => {
  return (
    <StyledList>
      <ul>
        {buttons.map((text) => (
          <li key={text}>
            <Button
              name={text.split(" ")[0]}
              onClick={(e) => onClick(jobs[e.target.name])}
            >
              {text}
            </Button>
          </li>
        ))}
      </ul>
    </StyledList>
  );
};

const Experience = () => {
  const [job, setJob] = React.useState(jobs["StorageCraft"]);
  const buttons = ["StorageCraft", "Exact Sciences", "Eastern Washington"];

  return (
    <StyledSection id="experience">
      <h2>experience</h2>
      <FlexContainer>
        <ListView buttons={buttons} onClick={setJob} />
        <StyledExperience>
          <Content title={job.title} time={job.time} items={job.items} />
        </StyledExperience>
      </FlexContainer>
    </StyledSection>
  );
};

export default Experience;
