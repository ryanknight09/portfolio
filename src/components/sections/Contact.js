import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  padding: var(--section-padding);
  padding: 100px 0px;
  margin: 0px auto;
`;

const Contact = () => {
  return <StyledSection id="contact">I'm a Contact</StyledSection>;
};

export default Contact;
