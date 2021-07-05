import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  height: 100vh;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: futura-bold;
    color: #4b4b4b;
    margin: 0 0 0 5px;
  }

  h2 {
    font-size: clamp(40px, 5vw, 80px);
    font-family: futura-bold;
    color: white;
    margin: 0;
  }

  h3 {
    font-size: clamp(30px, 3vw, 70px);
    font-family: futura-bold;
    color: #e0e0e0;
    margin: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    margin-right: auto;
  }
`;

const ContactLink = styled.a`
  text-decoration: none;
  color: #b30000;
  height: 40px;
  width: 111px;
  border: 2px solid #b30000;
  font-family: futura-medium;
  padding: 0.5rem 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
`;

const ContactButton = styled.button`
  text-decoration: none;
  color: #b30000;
  height: 40px;
  width: 111px;
  border: 2px solid #b30000;
  font-family: futura-medium;
  padding: 0.5rem 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
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
      </FlexContainer>
      <div>
        <ContactLink>get in touch</ContactLink>
      </div>
    </StyledSection>
  );
};

export default Me;
