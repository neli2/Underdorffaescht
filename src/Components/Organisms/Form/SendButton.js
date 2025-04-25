import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";

export const SendButton = styled.button`
  border: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 10px;
  padding: 12px 20px;
  margin: 20px 0px 0px auto;
  @media screen and (max-width: 768px) {
    padding: 10px 15px;
  }
`;

export const ArrowRight = styled(HiArrowNarrowRight)`
  color: ${(props) => props.theme.colors.white};
  margin-left: 5px;
  font-size: 20px;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Spinner = styled.div`
  border: 3px solid;
  border-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  border-top: 3px solid;
  border-top-color: ${(props) => props.theme.colors.primary};
  width: 16px;
  height: 16px;
  margin: auto;
  -webkit-animation: spin 1.5s linear infinite; /* Safari */
  animation: spin 1.5s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
