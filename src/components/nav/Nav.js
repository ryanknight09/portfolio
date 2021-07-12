import React from "react";
import styled from "styled-components";
import useShowNav from "../../hooks/useShowNav";
import logo from "../../assets/logo.svg";
import { useMediaQuery } from "../../hooks";
import Links from "./Links";
import ResponsiveLinks from "./ResponsiveLinks";

const StyledHeader = styled.header`
  box-sizing: border-box;
  z-index: 11;
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
    showNav ? "" : "0 10px 30px -10px var(--shadow-box);"};
`;

const StyledNav = styled.nav`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const links = [
  {
    to: "/#about",
    text: "about",
  },
  {
    to: "/#experience",
    text: "experience",
  },
  {
    to: "/#work",
    text: "work",
  },
];

const Nav = () => {
  const showNav = useShowNav();
  const showHamburger = useMediaQuery("(max-width: 750px)");

  return (
    <StyledHeader showNav={showNav}>
      <StyledNav>
        <img src={logo} alt="logo" />
        {showHamburger ? (
          <ResponsiveLinks links={links} />
        ) : (
          <Links links={links} />
        )}
      </StyledNav>
    </StyledHeader>
  );
};

export default Nav;
