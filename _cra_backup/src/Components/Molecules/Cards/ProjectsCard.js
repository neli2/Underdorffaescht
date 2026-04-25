import React from "react";
import styled, { useTheme } from "styled-components";
import Row from "../../Atoms/Row";
import Column from "../../Atoms/Column";
import Image from "../../Atoms/Image";
import DummyHouse from "../../../Assets/dummy_house2.png";
import Text from "../../Atoms/Text";
import { device } from "../../Atoms/Devices";
import { useTranslation } from "react-i18next";

const CardContainer = styled.a`
  margin-bottom: 30px;
  margin-top: 10px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 0px 7px 2px rgba(135, 135, 135, 0.3);
  border-radius: 15px;
  display: block;
  width: 100%;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: 300ms all;

  &:hover {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  height: 50px;

  @media ${device.mobile} {
    height: 100%;
  }
`;

const ProjectCard = ({ data }) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const imgUrl = data.previewImgUrl === "" ? DummyHouse : data.previewImgUrl;
  return (
    <>
      <Row justify="center" isRow={true} isRowOnMobile={true}>
        <Column width="98%">
          <Text
            size="14px"
            sizeTablet="16px"
            sizeMobile="14px"
            color={theme.colors.grey}
            align="right"
            marginRight="10px"
          >
            {t("Projects.OccupiedAt")}
            {data.occupiedAt}
          </Text>
        </Column>
      </Row>
      <CardContainer
        aria-label="Link zum Originalinserat"
        href={data.link}
        target="_blank"
      >
        <Row justify="center" isRow={true} isRowOnMobile={true}>
          <Column
            width="15%"
            widthTablet="15%"
            widthMobile="30%"
            marginTop="20px"
            marginBottom="20px"
          >
            <Image width="110px" height="110px" src={imgUrl} alt="Vorschau" />
          </Column>
          <Column
            width="75%"
            widthTablet="75%"
            widthMobile="60%"
            marginLeft="20px"
            marginTop="30px"
            marginBottom="20px"
          >
            <Text
              align="left"
              size="20px"
              sizeTablet="16px"
              sizeMobile="14px"
              weightMobile="bold"
            >
              {data.title}
            </Text>

            <TextContainer>
              <Text
                align="left"
                size="14px"
                marginTop="5px"
                marginTopMobile="3px"
              >
                {data.description}
              </Text>
            </TextContainer>

            <Row justify="right" isRow={true} isRowOnMobile={true}>
              <Column
                width="100%"
                widthTablet="70%"
                textAlign="right"
                marginTopTablet="10px"
                marginTopMobile="5px"
                marginBottomMobile="5px"
              >
                <Text
                  align="right"
                  size="16px"
                  sizeMobile="13px"
                  display="inline"
                  color={theme.colors.primary}
                >
                  <b>{data.provider}</b>
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </CardContainer>
    </>
  );
};

export default ProjectCard;
