import React from "react";
import styled from "styled-components";
import { ReversedSection } from "../../styledComponents";

const Anchor = styled.a`
  margin-right: 20px;
`;

const Extra = styled.li`
 font-family: var(--special-font);
 font-size: 16px;
 margin: 1rem;
`

const TextContent = ({ marginLeft, content }) => {
  const { title, stack, description, gitLink, hostedLink, extra } = content;

  return (
    <ReversedSection marginLeft={marginLeft}>
      <h3>{title}</h3>
      <Extra>{stack.join(', ')}</Extra>
      {extra && <Extra>{extra}</Extra>}
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
