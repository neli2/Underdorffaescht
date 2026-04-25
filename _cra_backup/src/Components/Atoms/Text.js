import styled from "styled-components";
import { device } from "./Devices";

const Text = styled.p`
  font-size: ${(props) => props.size || "inherit"};
  font-family: Arial;
  margin-top: ${(props) => props.marginTop || "auto"};
  margin-bottom: ${(props) => props.marginBottom || "auto"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  margin-right: ${(props) => props.marginRight || "auto"};
  text-transform: ${(props) => props.transform || "inherit"};
  font-weight: ${(props) => props.weight || "inherit"};
  text-align: ${(props) => props.align || "center"};
  display: ${(props) => props.display || "inherit"};
  color: ${(props) => props.color || props.theme.colors.black};
  width: ${(props) => props.width || "100%"};
  text-decoration: ${(props) => (props.border ? "underline" : "none")};
  text-underline-offset: 10px;
  text-decoration-thickness: 2.5px;
  text-decoration-color: ${(props) => props.theme.colors.primary};
  max-width: ${(props) => props.maxWidth || "100%"};
  padding-bottom: ${(props) => (props.border ? "6px" : 0)};
  vertical-align: ${(props) => props.vAlign || "top"};
  line-height: ${(props) => props.lineHeight || "normal"};

  @media ${device.tablet} {
    font-size: ${(props) => props.sizeTablet || props.size};
    margin-top: ${(props) => props.marginTopTablet || props.marginTop};
    margin-bottom: ${(props) => props.marginBottomTablet || props.marginBottom};
    text-align: ${(props) => props.alignTablet || props.align || "center"};
    display: ${(props) => props.displayTablet || props.display || "inherit"};
    vertical-align: ${(props) => props.vAlignTablet || props.vAlign || "top"};
    line-height: ${(props) =>
      props.lineHeightTablet || props.lineHeight || "normal"};
  }

  @media ${device.mobile} {
    width: ${(props) => props.widthMobile || "100%"};
    font-size: ${(props) => props.sizeMobile || props.size};
    margin-top: ${(props) => props.marginTopMobile || props.marginTopTablet};
    margin-bottom: ${(props) =>
      props.marginBottomMobile || props.marginBottomTablet};
    text-align: ${(props) => props.alignMobile || props.align || "center"};
    display: ${(props) =>
      props.displayMobile || props.displayTablet || props.display || "inherit"};
    font-weight: ${(props) => props.weightMobile || props.weight || "inherit"};
    vertical-align: ${(props) =>
      props.vAlignMobile || props.vAlignTablet || props.vAlign || "top"};
    line-height: ${(props) =>
      props.lineHeightMobile ||
      props.lineHeightTablet ||
      props.lineHeight ||
      "normal"};
  }
`;

export default Text;
