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
            I am currently residing in Salt lake City, Utah where I write
            Javascript, React, and Graphql api's. I am currently working for
            Storage Craft Technologies focusing on cloud backup and and recovery
            services.
          </p>
        </div>
        <div>
          <ContactButton>get in touch</ContactButton>
        </div>
      </FlexContainer>
    </StyledSection>
  );
};

export default Me;
