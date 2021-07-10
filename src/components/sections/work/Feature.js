import React from "react";
import styled from "styled-components";
import TextContent from "./TextContent";
import Pic from "./Pic";

const FlexContainer = styled.div`
  padding: 40px 0;
  display: flex;
  color: var(--white);

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
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

const Feature = ({ reversed, content, img }) => {
  return (
    <FlexContainer reversed>
      {reversed ? (
        <>
          <Pic src={img} />
          <TextContent marginLeft content={content} />
        </>
      ) : (
        <>
          <TextContent content={content} />
          <Pic marginLeft src={img} />
        </>
      )}
    </FlexContainer>
  );
};

export default Feature;
