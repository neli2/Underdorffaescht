import styled from "styled-components";
import { device } from "./Devices";

const Image = styled.img`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "block"};
  margin-left: ${(props) => props.marginLeft || "auto"};
  margin-right: ${(props) => props.marginRight || "auto"};
  max-height: 100%;
  max-width: 100%;

  @media ${device.tablet} {
    width: ${(props) => props.widthTablet || props.width || "auto"};
    height: ${(props) => props.heightTablet || props.height || "auto"};
    display: ${(props) => props.displayTablet || "block"};
  }

  @media ${device.mobile} {
    width: ${(props) =>
      props.widthMobile || props.widthTablet || props.width || "auto"};
    height: ${(props) =>
      props.heightMobile || props.heightTablet || props.height || "auto"};
    display: ${(props) => props.displayMobile || "block"};
  }
`;

export default Image;
