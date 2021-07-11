import React from "react";
import styled from "styled-components";

const StyledList = styled.div`
  @media (max-width: 900px) {
    overflow-x: auto;

    ::-webkit-scrollbar {
      height: 5px;
    }

    ::-webkit-scrollbar-track {
      height: 3px;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0;
      background-color: rgb(179, 0, 0);
      cursor: pointer;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
    color: var(--white);
    max-width: 225px;
    margin: unset;
    display: block;
    white-space: nowrap;

    button {
      margin-bottom: 15px;
    }

    @media (max-width: 900px) {
      display: flex;

      li {
        // border-bottom: 2px solid rgb(179, 0, 0);
      }
    }
  }
`;

const Button = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 20px 2px;
  background-color: transparent;
  text-align: left;
  font-family: var(--special-font);
  font-size: 16px;
  border: none;
  color: var(--white);
  height: 40px;
  cursor: pointer;

  &:hover {
    box-shadow: inset 0 0 100px 100px rgba(75, 75, 75, 0.1);
  }

  :active {
    transform: var(--button-down);
  }
`;

const SelectButtons = ({ buttons, onClick }) => {
  return (
    <StyledList>
      <ul>
        {buttons.map((text) => (
          <li key={text}>
            <Button name={text.split(" ")[0]} onClick={onClick}>
              {text}
            </Button>
          </li>
        ))}
      </ul>
    </StyledList>
  );
};

export default SelectButtons;
