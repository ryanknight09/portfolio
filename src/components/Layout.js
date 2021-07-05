import React from "react";
import Nav from "./Nav";
import styled from "styled-components";

const Layout = ({ children }) => {
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
    {
      to: "/#contact",
      text: "contact",
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
