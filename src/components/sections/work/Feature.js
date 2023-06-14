import React from "react";
import styled from "styled-components";
import Pic from "./Pic";
import TextContent from "./TextContent";

const FlexContainer = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  color: var(--white);

  @media (max-width: 900px) {
    display: flex;
    flex-wrap: wrap;
  }

  h3 {
    font-family: var(--medium-font);
    letter-spacing: 0.1rem;
    font-size: 20px;
    margin: 0;
  }

  p {
    ${({ theme }) => theme.mixins.pLetterAttrs}
  }
`;

const Feature = ({ content, img }) => {
  return (
    <FlexContainer reversed>
      <TextContent content={content} />
      <Pic marginLeft src={img} />
    </FlexContainer>
  );
};

export default Feature;
