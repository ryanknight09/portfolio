import React from "react";
import styled from "styled-components";
import { ReversedSection } from "../../styledComponents";

const StyledPic = styled.div`
  position: relative;
  max-width: 375px;
  width: 100%;
  height: auto;
  margin-top: 25px;

  .img {
    max-width: 100%;
    height: auto;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 98%;
    border: var(--red-border);
    top: -8px;
    left: -8px;
    z-index: 2;
  }
`;

const Pic = ({ marginLeft, src }) => {
  return (
    <ReversedSection marginLeft={marginLeft}>
      <StyledPic>
        <img className="img" src={src} alt="headshot" />
      </StyledPic>
    </ReversedSection>
  );
};

export default Pic;
