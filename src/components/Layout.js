import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Layout = ({ children }) => {
  const links = [
    {
      to: "/#about",
      text: "About",
    },
    {
      to: "/#experience",
      text: "Experience",
    },
    {
      to: "/#work",
      text: "Work",
    },
    {
      to: "/#contact",
      text: "Contact",
    },
  ];

  return (
    <StyledLayout>
      <Nav links={links} />
      <div id="content">{children}</div>
    </StyledLayout>
  );
};

export default Layout;

const StyledLayout = styled.div`
  min-height: 100vh;
  width: 100%;
`;
