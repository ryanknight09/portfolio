import React from "react";
import styled from "styled-components";
import BitMiner from "../../../assets/bit-miner.png";

const FlexContainer = styled.div`
  padding: 40px 0;
  display: flex;
  color: white;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
  }

  h3 {
    font-family: futura-medium;
    letter-spacing: 0.1rem;
    font-size: 20px;
    margin: 0;
  }

  p {
    max-width: 550px;
    font-family: Helvetica;
    letter-spacing: 0.05rem;
    line-height: 24px;
  }
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 225px;

  li {
    font-family: "Courier";
    font-size: 16px;
  }
`;

const StyledPic = styled.div`
  position: relative;
  width: 400px;

  .wrapper {
    display: block;
    position: relative;
    width: 100%;

    .img {
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 97%;
      border: 2px solid #b30000;
      top: -15px;
      left: -15px;
      z-index: 2;
    }
  }
`;

const ReversedSection = styled.div`
  margin-left: ${(props) => props.marginLeft && "50px"};

  @media (max-width: 900px) {
    margin: 0;
    padding-top: 10px;
  }
`;

const Pic = ({ marginLeft }) => {
  return (
    <ReversedSection marginLeft={marginLeft}>
      <StyledPic>
        <div className="wrapper">
          <img className="img" src={BitMiner} alt="Headshot" />
        </div>
      </StyledPic>
    </ReversedSection>
  );
};

const Text = ({ marginLeft }) => {
  return (
    <ReversedSection marginLeft={marginLeft}>
      <h3>Bitcoin Miner</h3>
      <StyledUl>
        <li>React</li>
        <li>react Testing Libray</li>
        <li>Jss</li>
      </StyledUl>
      <p>
        A fun web app to showcase React. The number of coins "mined" is run
        against the real time btc price, fetched from an external api on a five
        second interval.
      </p>
    </ReversedSection>
  );
};

const FeatureOne = ({ reversed }) => {
  return (
    <FlexContainer reversed>
      {reversed ? (
        <>
          <Pic />
          <Text marginLeft />
        </>
      ) : (
        <>
          <Text />
          <Pic marginLeft />
        </>
      )}
    </FlexContainer>
  );
};

export default FeatureOne;
