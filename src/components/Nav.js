import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import useShowNav from "../hooks/useShowNav";
import logo from "../assets/logo.svg";
import { resume } from "../assets";

const StyledHeader = styled.header`
  box-sizing: border-box;
  z-index: 15;
  position: fixed;
  width: 100%;
  height: 100px;
  top: ${({ showNav }) => (showNav ? "0px" : "-100px")};
  padding: 0px 50px;
  display: flex;
  transition: top 0.8s;
  align-items: center;
  backdrop-filter: blur(10px);
  box-shadow: ${({ showNav }) =>
    showNav ? "" : "0 10px 30px -10px rgba(2, 12, 27, 0.7);"};
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

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

const Resume = styled.a`
  text-decoration: none;
  color: var(--main-red);
  height: 40px;
  width: 111px;
  border: var(--red-border);
  font-family: var(--medium-font);
  padding: 0.5rem 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-left: 15px;
`;

const Nav = ({ links }) => {
  const showNav = useShowNav();

  return (
    <StyledHeader showNav={showNav}>
      <StyledNav>
        <img src={logo} alt="logo" />
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
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
