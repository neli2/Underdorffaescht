import styled from "styled-components";

const Background = styled.section`
  position: relative;
  height: auto;
  width: 100%;
  padding: ${(props) => props.padding || "0px"};
  padding-top: ${(props) => props.pt || "0px"};
  padding-bottom: ${(props) => props.pb || "0px"};
  padding-left: ${(props) => props.pl || "0px"};
  padding-right: ${(props) => props.pr || "0px"};
  background: ${(props) => props.backgroundColor || "transparent"};
  background-image: url(${(props) => props.backgroundImage || "transparent"});
  background-repeat: no-repeat;
  background-position: top;
  background-size: ${(props) => props.backgroundSize || "cover"};
  margin: auto;
  border-radius: ${(props) => props.boarderRadius || "0px"};
  box-shadow: ${(props) => props.boxShadow || "none"};
`;

export default Background;
