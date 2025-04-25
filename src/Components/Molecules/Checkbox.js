import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin: 8px 0px;
`;

const CheckboxInput = styled.input`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked + span {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:checked + span:after {
    display: block;
  }
`;

const Checkmark = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: ${(props) => props.theme.colors.lightgrey};

  &:hover {
    background-color: ${(props) => props.theme.colors.middlegrey};
  }

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

const Checkbox = ({ id, name, value, onChange, label }) => {
  return (
    <Label>
      <CheckboxInput
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onChange={(e) => onChange(id)}
      />
      <Checkmark></Checkmark>
      {label}
    </Label>
  );
};

export default Checkbox;
