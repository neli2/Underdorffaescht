import React from "react";
import styled, { useTheme } from "styled-components";
import Row from "../../Atoms/Row";
import Column from "../../Atoms/Column";
import Image from "../../Atoms/Image";
import DummyHouse from "../../../Assets/dummy_house2.png";
import Text from "../../Atoms/Text";
import { useTranslation } from "react-i18next";
import { getFormattedDate } from "../../../utils";

const CardContainer = styled.a`
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

const FreeObjectsCard = ({ data }) => {
  const imgUrl = data.previewImgUrl === "" ? DummyHouse : data.previewImgUrl;
  const { t } = useTranslation();
  const theme = useTheme();

  const getDetails = () => {
    var res = [];
    if (data.address !== "") {
      res.push(t("Home.Address") + data.address);
    }
    if (data.rooms !== "") {
      res.push(t("Home.Rooms") + data.rooms);
    }
    if (data.size !== "") {
      res.push(t("Home.Size") + data.size);
    }
    if (data.availableFrom !== "") {
      res.push(t("Home.AvailableFrom") + data.availableFrom);
    }
    return res.join(", ");
  };

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
          >
            <Row justify="space-between" isRow={true}>
              <Column
                width="80%"
                widthTablet="70%"
                marginTop="25px"
                marginLeftMobile="5px"
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
                  size="18px"
                  sizeTablet="16px"
                  sizeMobile="14px"
                  display="inline"
                  weight="500"
                  displayMobile="none"
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
              marginTopMobile="3px"
              display="none"
              displayTablet="none"
              displayMobile="block"
              widthMobile="95%"
            >
              {getDetails()}
            </Text>

            <Text align="left" size="14px" marginTop="5px" displayMobile="none">
              {t("Home.Rooms")}
              {data.rooms !== "" ? data.rooms : "-"}
            </Text>
            <Text align="left" size="14px" displayMobile="none">
              {t("Home.Size")}
              {data.size !== "" ? data.size : "-"}
            </Text>
            <Text align="left" size="14px" displayMobile="none">
              {t("Home.Address")}
              {data.address !== "" ? data.address : "-"}
            </Text>
            {data.price !== "" && (
              <Text
                marginTopMobile="5px"
                align="left"
                sizeMobile="14px"
                display="none"
                displayTablet="none"
                displayMobile="block"
                widthMobile="95%"
              >
                <b>
                  {t("Home.Price")}
                  {data.price}
                </b>
              </Text>
            )}

            <Row justify="space-between" isRow={true} isRowOnMobile={true}>
              <Column width="30%" widthTablet="30%" widthMobile="0%">
                <Text
                  align="left"
                  size="14px"
                  widthMobile="95%"
                  displayMobile="none"
                >
                  {t("Home.AvailableFrom")}
                  {data.availableFrom !== "" ? data.availableFrom : "-"}
                </Text>
              </Column>
              <Column
                width="70%"
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

export default FreeObjectsCard;
