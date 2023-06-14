import React from "react";
import styled from "styled-components";
import { useGlobalContext } from "../GlobalStateContext";
import {
  About,
  Experience,
  Layout,
  Me,
  Projects,
  Work,
} from "../components";

const StyledMain = styled.main`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 1600px;
  min-height: 100vh;
  padding: 0px 150px;
  filter: ${(props) => props.blur && "blur(10px)"};

  @media (max-width: 1080px) {
    padding: 0px 100px;
  }
  @media (max-width: 768px) {
    padding: 0px 50px;
  }
  @media (max-width: 380px) {
    padding: 0px 20px;
  }

  @keyframes fadeInFromBlack {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const IndexPage = () => {
  const {
    globalState: { blurMainBackground },
  } = useGlobalContext();

  return (
    <Layout>
      <StyledMain blur={blurMainBackground}>
        <Me />
        <About />
        <Experience />
        <Work />
        <Projects />
      </StyledMain>
    </Layout>
  );
};

export default IndexPage;
