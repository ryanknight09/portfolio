import React, { useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  display: none;
  box-sizing: border-box;
  @media (max-width: 750px) {
    display: block;
  }
`;

const MenuIcon = styled.div`
  cursor: pointer;
  content: url("https://img.icons8.com/ios/50/000000/menu--v3.png");

  &:hover {
    content: url("https://img.icons8.com/pastel-glyph/50/000000/double-left.png");
  }
`;

const MeneButton = styled.button`
  z-index: 10;
  background: transparent;
  position: relative;
  border: none;
  :active {
    transform: var(--button-down);
  }
`;

const StyledAside = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9;
  right: 0;
  padding: 50px 10px;
  width: 70%;
  height: 100vh;
  opacity: 0.95;
  background-color: rgba(75, 75, 75, 0.3);
  box-shadow: -10px 0px 30px -15px black;
  transform: translateX(${(props) => (props.showMenu ? 0 : "100vw")});
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const ResponsiveLinks = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <StyledMenu>
      <MeneButton onClick={() => setOpenMenu(!openMenu)}>
        <MenuIcon />
      </MeneButton>

      <StyledAside showMenu={openMenu} />
    </StyledMenu>
  );
};
export default ResponsiveLinks;
