import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-size: 14px;
  border: 1px solid #949494;
  resize: none;
  height: ${(props) => props.height || "119px"};
  width: ${(props) => props.width || "600px"};
  padding: ${(props) => props.padding || "5px"};
  margin: ${(props) => props.margin || "0px"};

`;

export default StyledTextArea;