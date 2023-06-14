import React from "react";
import styled from "styled-components";
import { ContactButton } from "../styledComponents";

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  animation: blurr_to_clear 1.5s ease;

  h1 {
    font-family: var(--bold-font);
    color: #4b4b4b;
    margin: 0;
    animation: left_to_right 2s ease;
  }

  h2 {
    font-size: clamp(40px, 6vw, 75px);
    font-family: var(--bold-font);
    color: white;
    margin: 0;
    animation: right_to_left 3s ease;
    white-space: nowrap;
  }

  h3 {
    font-size: clamp(30px, 4vw, 75px);
    font-family: var(--bold-font);
    color: var(--white);
    margin: 0;
    animation: left_to_right 2.5s ease;
  }

  p {
    ${({ theme }) => theme.mixins.pLetterAttrs}
    ${({ theme }) => theme.mixins.fadeIn}
  }

  a {
    color: white;
    text-decoration: none;
  }

  button {
    ${({ theme }) => theme.mixins.fadeIn}
  }

  @keyframes blurr_to_clear {
    from {
      filter: blur(3px);
    }
    to {
      filter: blur(0px);
    }
  }

  @keyframes right_to_left {
    from {
      margin-left: 100%;
    }
    to {
      margin-left: 0;
    }
  }

  @keyframes left_to_right {
    from {
      margin-left: -100%;
    }
    to {
      margin-left: 0;
    }
  }
`;

const FlexContainer = styled.div`
  margin: auto;
`;

const Me = () => {
  return (
    <StyledSection>
      <FlexContainer>
        <div>
          <h1>Hi. I am</h1>
        </div>
        <div>
          <h2>Ryan Knight,</h2>
        </div>
        <div>
          <h3>a front-end developer</h3>
        </div>
        <div>
          <p>
            I am an experienced multidisciplinary frontend engineer working on software teams to solve tough problems and create awesome user experiences.
            My skill set spans across the entire product development stack, with a high emphasis on the front end.
            I specialize in new product development for startups and established companies.
            I am currently interested in and work with React, GraphQL (With Apollo), Styled-Components, Node.js, Vite, and Electron js to name a few.
            Javascript is my jam, but I also love to learn new languages and frameworks.
            I'll use whatever tech necessary to get the job done in the best way possible.
            I am a graduate of Eastern Washington Universtity with a BS in Computer Science.
            I discovered my passion for writing web applications from old friends who showed my first line of code in college. I love that I get to build apps professionally every day.
          </p>
        </div>
        <div>
          <ContactButton>
            <a
              href="https://www.linkedin.com/in/ryan-knight09/"
              target="_blank"
              rel="noopener noreferrer"
            >
              get in touch
            </a>
          </ContactButton>
        </div>
      </FlexContainer>
    </StyledSection>
  );
};

export default Me;
