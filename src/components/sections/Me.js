import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: futura-bold;
    color: #4b4b4b;
    margin: 0 0 0 5px;
  }

  h2 {
    font-size: clamp(40px, 6vw, 75px);
    font-family: futura-bold;
    color: white;
    margin: 0;
  }

  h3 {
    font-size: clamp(30px, 4vw, 75px);
    font-family: futura-bold;
    color: white;
    margin: 0;
  }

  p {
    max-width: 500px;
    font-family: Helvetica;
    color: #ffffff;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.1rem;
  }
`;

const FlexContainer = styled.div`
  margin: auto;
`;

const ContactButton = styled.button`
  background-color: transparent;
  border: 2px solid #b30000;
  color: #b30000;
  font-family: futura-medium;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 35px;
  font-size: 16px;
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
