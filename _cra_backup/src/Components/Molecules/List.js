import React from "react";
import styled from "styled-components";

const StyledList = styled.ul`
  list-style-type: ${(props) => props.listStyleType || "disc"};
  }
`;
const StyledListItem = styled.li`
  margin-top: ${(props) => props.marginTop || "5px"};
  margin-bottom: ${(props) => props.marginBottom || "5px"};
  &::marker {
    font-size: ${(props) => props.markerSize || "inherit"};
    color: ${(props) => props.markerColor || props.theme.colors.primary};
  }
`;

export const List = (props) => {
  return (
    <StyledList
      marginLeft={props.marginLeft}
      listStyleType={props.listStyleType}
    >
      {props.list?.map((l, i) => (
        <StyledListItem
          marginTop={props.marginTop}
          marginBottom={props.marginBottom}
          markerSize={props.markerSize}
          markerColor={props.markerColor}
          height={props.height}
          key={i}
        >
          {l}
        </StyledListItem>
      ))}
    </StyledList>
  );
};

const StyledCListItem = styled.div`
  margin-top: ${(props) => props.marginTop || "5px"};
  margin-bottom: ${(props) => props.marginBottom || "5px"};
  margin-left: ${(props) => props.marginLeft || "10px"};
  display: flex;
  align-items: center;
`;

const StyledCListItemText = styled.div`
  margin-left: 15px;
`;

export const CustomList = (props) => {
  return (
    <>
      {props.list?.map((l, i) => (
        <StyledCListItem
          key={i}
          marginTop={props.marginTop}
          marginBottom={props.marginBottom}
          marginLeft={props.marginLeft}
        >
          {props.marker}
          <StyledCListItemText>{l}</StyledCListItemText>
        </StyledCListItem>
      ))}
    </>
  );
};
