import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import useShowNav from "../hooks.js/useShowNav";

const StyledHeader = styled.header`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 100px;
  top: ${({ showNav }) => (showNav ? "0px" : "-100px")};
  background-color: grey;
  padding: 0px 50px;
  display: flex;
  transition: top 0.6s;
  align-items: center;
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  background-color: orange;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinks = styled.div`
  display: flex;
  background-color: white;

  ul {
    display: flex;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    margin: 0 5px;
    position: relative;

    a {
      color: black;
      padding: 10px;
    }
  }
`;

const Resume = (
  <a
    className="resume-button"
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Resume
  </a>
);

const Nav = ({ links }) => {
  const showNav = useShowNav();

  return (
    <StyledHeader showNav={showNav}>
      <StyledNav>
        <div>Logo</div>
        <StyledLinks>
          <ul>
            {links.map(({ to, text }) => (
              <li>
                <HashLink smooth to={to}>
                  {text}
                </HashLink>
              </li>
            ))}
          </ul>
          <div>{Resume}</div>
        </StyledLinks>
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;

// const scrollWithOffset = (el, isScrollingUp) => {
//   const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//   const yOffset = isScrollingUp ? -100 : 0;
//   window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
// };

//<HashLink smooth to={to} scroll isScrollingUp={showNav}>
