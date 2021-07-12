import React from "react";
import { ReversedSection } from "../../styledComponents";
import styled from "styled-components";

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 225px;

  li {
    font-family: var(--special-font);
    font-size: 16px;
  }
`;

const Anchor = styled.a`
  margin-right: 20px;
`;

const TextContent = ({ marginLeft, content }) => {
  const { title, stack, description, gitLink, hostedLink } = content;

  return (
    <ReversedSection marginLeft={marginLeft}>
      <h3>{title}</h3>
      <StyledUl>
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </StyledUl>
      <p>{description}</p>
      <Anchor href={gitLink} target="_blank" rel="noopener noreferrer">
        <img
          src="https://img.icons8.com/ios-filled/35/000000/github.png"
          alt="github-link"
        />
      </Anchor>
      {hostedLink && (
        <Anchor href={hostedLink} target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-filled/35/000000/external.png"
            alt="to-site"
          />
        </Anchor>
      )}
    </ReversedSection>
  );
};

export default TextContent;
