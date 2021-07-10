import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Resume } from "../../components/styledComponents";
import { resume } from "../../assets";

const StyledLinks = styled.div`
  display: flex;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
    height: 24px;
  }

  li {
    margin: 0 5px;
    position: relative;

    a {
      color: var(--white);
      padding: 10px;
      font-family: var(--medium-font);
      text-decoration: none;
      letter-spacing: 0.15rem;

      &:hover {
        border-bottom: 2px solid var(--white);
      }
    }
  }
`;

const Linkes = ({ links }) => {
  return (
    <StyledLinks>
      <ul>
        {links.map(({ to, text }) => (
          <li key={to}>
            <HashLink smooth to={to}>
              {text}
            </HashLink>
          </li>
        ))}
      </ul>
      <div>
        <Resume href={resume} target="_blank" rel="noopener noreferrer">
          resum&eacute;
        </Resume>
      </div>
    </StyledLinks>
  );
};

export default Linkes;
