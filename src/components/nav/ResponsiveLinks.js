import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useGlobalContext } from "../../GlobalStateContext";
import { HashLink } from "react-router-hash-link";
import { resume } from "../../assets";
import { useMediaQuery } from "../../hooks";

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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 9;
  right: 0;
  padding: 0px 10px;
  width: 70%;
  height: 100vh;
  opacity: 0.95;
  box-shadow: -10px 0px 30px -15px var(--shadow-box);
  transform: translateX(${(props) => (props.showMenu ? 0 : "100vw")});
  visibility: ${(props) => (props.showMenu ? "visible" : "hidden")};
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  ul {
    padding: 0;
    list-style: none;
    text-align: center;
  }

  li {
    margin: auto;
    padding: 25px 0;
    font-size: 24px;

    a {
      color: #4b4b4b;
      font-family: var(--medium-bold);
      font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.15rem;

      &:hover {
        border-bottom: 2px solid #4b4b4b;
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
  padding: 0.5rem 1.5rem 12px 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  transform: var(--button-down);
`;

const ResponsiveLinks = ({ links }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const { globalState, setGlobalState } = useGlobalContext();
  const unBlurOnExpand = useMediaQuery("(min-width: 750px)");

  useEffect(() => {
    if (unBlurOnExpand) {
      setGlobalState({ ...globalState, blurMainBackground: false });
    }

    if (openMenu) {
      document.documentElement.style.overflow = "hidden";
    }
    return () => {
      document.documentElement.style.overflow = "auto";
    };
  }, [openMenu, unBlurOnExpand, globalState, setGlobalState]);

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    setGlobalState({ ...globalState, blurMainBackground: !openMenu });
  };

  return (
    <StyledMenu>
      <MeneButton onClick={handleMenuClick}>
        <MenuIcon />
      </MeneButton>
      <StyledAside showMenu={openMenu}>
        <ul>
          {links.map(({ to, text }) => (
            <li key={to} onClick={handleMenuClick}>
              <HashLink smooth to={to}>
                {text}
              </HashLink>
            </li>
          ))}
          <li>
            <Resume href={resume} target="_blank" rel="noopener noreferrer">
              resum&eacute;
            </Resume>
          </li>
        </ul>
      </StyledAside>
    </StyledMenu>
  );
};
export default ResponsiveLinks;
