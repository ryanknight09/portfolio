import React from "react";
import styled from "styled-components";
import { ReversedSection } from "../../styledComponents";

const StyledPic = styled.div`
  position: relative;
  width: 400px;
  margin-top: 25px;

  .wrapper {
    display: block;
    position: relative;
    width: 100%;

    .img {
      width: 100%;
      height: 100%;
      z-index: 1;
      filter: grayscale(100%);
    }

    &:after {
      content: "";
      position: absolute;
      width: 100%;
      height: 97%;
      border: var(--red-border);
      top: -15px;
      left: -15px;
      z-index: 2;
    }
  }
`;

const Pic = ({ marginLeft, src }) => {
  return (
    <ReversedSection marginLeft={marginLeft}>
      <StyledPic>
        <div className="wrapper">
          <img className="img" src={src} alt="headshot" />
        </div>
      </StyledPic>
    </ReversedSection>
  );
};

export default Pic;
