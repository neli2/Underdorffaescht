import styled, { keyframes } from "styled-components";

const spin = () => keyframes`
    0% {
        transform : rotate(0deg)
    }
    100% {
        transform : rotate(360deg)
    }
`;

const Spinner = styled.div`
  border: 5px solid ${(props) => props.color || props.theme.colors.middlegrey};
  border-radius: 50%;
  border-top: 5px solid
    ${(props) => props.backgroundColor || props.theme.colors.primary};
  width: 30px;
  height: 30px;
  animation: ${(props) => spin()} 1s linear infinite;
`;

export default Spinner;
