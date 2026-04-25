import styled from "styled-components";
import { device } from "../../Components/Atoms/Devices";

export const TitleH1 = styled.h1`
  font-size: 60px;
  font-weight: 500;
  font-family: Papyrus;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50px;
  text-align: center;

  @media ${device.tablet} {
    width: 90%;
    font-size: 50px;
    font-weight: 500;
    top: 120px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    font-weight: 1000;
    margin-bottom: 30px;
    margin-top: 0px;
  }
`;

export const SubtitleH1 = styled.h1`
  font-size: ${(props) => props.size || "32px"};
  font-weight: 500;
  font-family: Arial;
  margin: auto;
  font-weight: ${(props) => props.weight || "normal"};
  margin-top: ${(props) => props.marginTop || "0px"};
  margin-bottom: ${(props) => props.marginBottom || "0px"};
  text-align: center;
  color: ${(props) => props.color || props.theme.colors.black};

  @media ${device.tablet} {
    width: 90%;
    font-size: 26px;
    margin-top: ${(props) => props.marginTopTablet || "0px"};
    margin-bottom: ${(props) => props.marginBottomTablet || "0px"};
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-top: ${(props) => props.marginTopMobile || "0px"};
    margin-bottom: ${(props) => props.marginBottomMobile || "0px"};
  }
`;

export const SubtitleH2 = styled.h2`
  font-size: 24px;
  font-weight: bold;
  font-family: Arial;
  margin: auto;
  margin-top: ${(props) => props.marginTop || "20px"};
  text-align: ${(props) => props.align || "center"};
  color: ${(props) => props.theme.colors.black};

  @media ${device.tablet} {
    width: 90%;
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
  }
`;

export const SubtitleSmall = styled.p`
  font-size: 24px;
  font-weight: 450;
  font-family: Arial;
  margin: auto;
  margin-top: 20px;
  text-align: center;
  color: ${(props) => props.theme.colors.black};

  @media ${device.tablet} {
    width: 90%;
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;
