import styled from "styled-components";
import { device } from "./Devices";

const Row = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || "space-between"};
  flex-direction: ${(props) => props.flexDirection || "row"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  flex-wrap: ${(props) => props.flexWrap || "wrap"};

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.isRow ? "row" : "column")};
    margin: auto;
    align-self: center;
  }

  @media ${device.mobile} {
    flex-direction: ${(props) => (props.isRowOnMobile ? "row" : "column")};
  }
`;

export default Row;
