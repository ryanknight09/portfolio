import styled from "styled-components";

const ReversedSection = styled.div`
  margin-left: ${(props) => props.marginLeft && "50px"};

  a {
    margin-right: 10px;
    &:hover {
      filter: invert(25%);
    }
  }

  @media (max-width: 900px) {
    margin: 0;
    padding-top: 10px;
  }
`;

export default ReversedSection;
