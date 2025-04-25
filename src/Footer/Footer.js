import React from "react";
import Section from "../Components/Atoms/Section";
import Row from "../Components/Atoms/Row";
import Column from "../Components/Atoms/Column";
import Text from "../Components/Atoms/Text";
import styled, { useTheme } from "styled-components";
import { device } from "../Components/Atoms/Devices";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

const Footer = () => {
  const theme = useTheme();

  return (
    <Section
      pt="40px"
      ptTablet="50px"
      ptMobile="30px"
      pb="30px"
      pbTablet="20px"
      backgroundColor={theme.colors.primary}
    >
      <Row justify="flex-end">
        <Column
          width="20%"
          widthTablet="95%"
          widthMobile="90%"
          marginRight="30px"
          marginTopTablet="15px"
        >
          <Text size="14px" align="right" color={theme.colors.white}>
            © 2022 TecFox GmbH
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default Footer;
