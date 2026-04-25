import styled from "styled-components";

const Placeholder = styled.div`
  height: ${(props) => props.height || "10px"};
  width: ${(props) => props.width || "10px"};
`;

export default Placeholder;
