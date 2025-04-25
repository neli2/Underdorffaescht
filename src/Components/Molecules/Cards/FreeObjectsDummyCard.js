import React from "react";
import styled, { useTheme } from "styled-components";
import Row from "../../Atoms/Row";
import Column from "../../Atoms/Column";
import Image from "../../Atoms/Image";
import DummyHouse from "../../../Assets/dummy_house2.png";
import Text from "../../Atoms/Text";
import { useTranslation } from "react-i18next";
import { getFormattedDate } from "../../../utils";

const CardContainer = styled.button`
  margin: 10px auto 30px auto;
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

const FreeObjectsDummyCard = ({ data, onclick }) => {
  const imgUrl = data.previewImgUrl === "" ? DummyHouse : data.previewImgUrl;
  const { t } = useTranslation();
  const theme = useTheme();

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
            {t("Home.AnnouncedAt")}
            {getFormattedDate(data.timestamp)}
          </Text>
        </Column>
      </Row>
      <CardContainer
        aria-label="Link zum Originalinserat"
        onClick={() => {
          onclick();
        }}
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
          >
            <Row justify="space-between" isRow={true}>
              <Column
                width="80%"
                widthTablet="70%"
                marginTop="25px"
                marginTopMobile="20px"
              >
                <Text
                  align="left"
                  size="20px"
                  sizeTablet="16px"
                  sizeMobile="14px"
                  weightMobile="bold"
                >
                  {data.description === ""
                    ? t("Home.DummyDescr")
                    : data.description}
                </Text>
              </Column>
              <Column
                width="20%"
                widthTablet="30%"
                textAlign="right"
                marginTop="22px"
                marginTopMobile="5px"
              >
                <Text
                  align="right"
                  alignMobile="left"
                  size="18px"
                  sizeTablet="16px"
                  sizeMobile="14px"
                  display="inline"
                  weight="500"
                >
                  {t("Home.Price")}
                  {data.price}
                </Text>
              </Column>
            </Row>

            <Text
              align="left"
              size="14px"
              marginTop="5px"
              marginTopTablet="10px"
              marginTopMobile="0px"
            >
              {t("Home.Rooms")}
              {data.rooms === "" ? "*" : data.rooms}
            </Text>

            <Text align="left" size="14px" displayMobile="none">
              {t("Home.Size")}*
            </Text>

            <Text align="left" size="14px" displayMobile="none">
              {t("Home.Address")}*
            </Text>

            <Row justify="space-between" isRow={true} isRowOnMobile={true}>
              <Column width="30%" widthTablet="30%" widthMobile="0%">
                <Text
                  align="left"
                  size="14px"
                  display="inline"
                  displayMobile="none"
                >
                  {t("Home.AvailableFrom")}*
                </Text>
              </Column>
              <Column
                width="70%"
                widthTablet="70%"
                textAlign="right"
                marginTopTablet="10px"
                marginTopMobile="20px"
              >
                <Text
                  align="right"
                  size="18px"
                  sizeTablet="16px"
                  sizeMobile="13px"
                  display="inline"
                  color={theme.colors.primary}
                >
                  <b>{t("Home.BecomePro")}</b>
                  {" ->"}
                </Text>
              </Column>
            </Row>
          </Column>
        </Row>
      </CardContainer>
    </>
  );
};

export default FreeObjectsDummyCard;
