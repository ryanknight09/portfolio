import React from "react";
import styled from "styled-components";
import { ReversedSection } from "../../styledComponents";

const StyledPic = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  margin-top: 25px;
  border-radius: 8px;

  .img {
    max-width: 100%;
    height: auto;
    z-index: 1;
   border-radius: 16px;

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
