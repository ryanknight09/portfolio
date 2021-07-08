import React from "react";
import {
  Layout,
  About,
  Experience,
  Work,
  Projects,
  Contact,
  Me,
} from "../components";
import styled from "styled-components";

const StyledMain = styled.main`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 150px;

  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
`;

const IndexPage = () => {
  return (
    <Layout>
      <StyledMain>
        <Me />
        <About />
        <Experience />
        <Work />
        <Projects />
        <Contact />
      </StyledMain>
    </Layout>
  );
};

export default IndexPage;
