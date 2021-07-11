import styled from "styled-components";

const ReversedSection = styled.div`
  margin-left: ${(props) => props.marginLeft && "50px"};

  @media (max-width: 900px) {
    margin: 0;
    padding-top: 10px;
  }
`;

export default ReversedSection;
