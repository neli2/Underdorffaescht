import styled from "styled-components";
import { device } from "./Devices";

export const TextButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Icon = styled.img`
  display: inline-block;
  margin: 0px 10px;
  box-shadow: 0px 0px 7px 2px rgba(135, 135, 135, 0.3);
  border-radius: 5px;
  width: 130px;
  height: 39px;

  @media ${device.mobile} {
    margin: 0px 5px;
  }
`;

const Icon2 = styled.img`
  height: ${(props) => props.size || "20px"};
  width: ${(props) => props.size || "20px"};
  display: inline-block;
  opacity: ${(props) => props.opacity || "1.0"};
`;

const Link = styled.a`
  margin: 5px;
`;

export const ButtonWithIcon = styled.button`
  border: 0;
  cursor: pointer;
  align-items: center;
  background-color: #ffffff;
  width: fit-content;
`;

export const ButtonWithRoundIcon = styled.button`
  border: 0;
  border-radius: 25px;
  cursor: pointer;
  align-items: center;
  background-color: #ffffff;
  width: 40px;
  height: 40px;
  box-shadow: 0px 0px 7px 2px rgba(135, 135, 135, 0.3);
  padding: 0px;
  margin: ${(props) => props.margin || "inherit"};
`;

export const IconLinkButton = ({ link, icon, alt }) => {
  return (
    <Link href={link}>
      <Icon src={icon} alt={alt} />
    </Link>
  );
};

export const IconButton = ({ onClick, icon, opacity, size }) => {
  return (
    <ButtonWithIcon onClick={onClick}>
      <Icon2 src={icon} opacity={opacity} size={size} />
    </ButtonWithIcon>
  );
};

export const RoundIconButton = ({ onClick, icon, opacity, margin }) => {
  return (
    <ButtonWithRoundIcon onClick={onClick} margin={margin}>
      <Icon2 src={icon} opacity={opacity} size="40px" />
    </ButtonWithRoundIcon>
  );
};
