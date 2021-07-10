import styled from "styled-components";

const ContactButton = styled.button`
  background-color: transparent;
  border: var(--red-border);
  color: var(--main-red);
  font-family: var(--medium-font);
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  font-weight: 900;
  letter-spacing: 0.1rem;
  margin-top: 35px;
  font-size: 16px;

  :active {
    transform: var(--button-down);
  }
`;

export default ContactButton;
