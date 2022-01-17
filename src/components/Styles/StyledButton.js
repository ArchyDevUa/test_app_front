import styled from "styled-components";

const StyledButton = styled.button`
  height: ${(props) => props.height || "21px"};
  width: ${(props) => props.width || "74px"};
  padding: ${(props) => props.padding || "0px"};
  margin: ${(props) => props.margin || "0px"};
  background: #54c1ff;
  border: 1px solid #34b6ff;
  border-radius: 2px;
  color: #fff;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  &:hover {
    cursor:pointer;
  }
`;

export default StyledButton;
