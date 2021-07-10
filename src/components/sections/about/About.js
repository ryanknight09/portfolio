import React from "react";
import styled from "styled-components";
import { portraitBackground } from "../../../assets";
import { AboutContent, liItemsOne } from "./content";

const StyledSection = styled.section`
  ${({ theme }) => theme.mixins.sectionAttrs};

  h2 {
    ${({ theme }) => theme.mixins.h2};
  }

  img {
    width: 325px;
    height: auto;
  }

  p {
    ${({ theme }) => theme.mixins.pLetterAttrs}

    a {
      color: #4b4b4b;
      text-decoration: none;

      &:hover {
        border-bottom: 2px solid #4b4b4b;
      }
    }
  }
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  gap: 50px;
  @media (max-width: 800px) {
    display: block;
  }
`;

const StyledLi = styled.li`
  background: url(${(props) => props.icon}) no-repeat left top;
  filter: grayscale(95%);
  :hover {
    filter: none;
  }
  height: 35px;
  padding: 3px 0 0 48px;
  font-family: var(--special-font);
  color: var(--white);
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    :hover {
      filter: none;
    }
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto;
  }
  .wrapper {
    display: block;
    position: relative;
    width: 100%;

    .img {
      width: 100%;
      z-index: 1;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 97%;
      border: var(--red-border);
      top: -15px;
      left: -15px;
      z-index: 2;
    }
  }
`;

const About = () => {
  return (
    <StyledSection id="about">
      <h2>about me</h2>
      <StyledGrid>
        <div>
          <AboutContent />
          <div>
            <p style={{ marginTop: 40 }}>
              These are some of the stacks I work with<strong>:</strong>
            </p>
            <StyledUl>
              {liItemsOne.map((li) => (
                <StyledLi key={li.text} icon={li.icon}>
                  {li.text}
                </StyledLi>
              ))}
            </StyledUl>
          </div>
        </div>
        <StyledPic>
          <div className="wrapper">
            <img className="img" src={portraitBackground} alt="Headshot" />
          </div>
        </StyledPic>
      </StyledGrid>
    </StyledSection>
  );
};

export default About;
