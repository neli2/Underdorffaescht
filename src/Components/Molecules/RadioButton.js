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

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &:checked + span {
    background-color: ${(props) => props.theme.colors.primary};
  }

  &:checked + span:after {
    display: block;
  }
`;

const Checkmark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: ${(props) => props.theme.colors.lightgrey};
    border-radius: 50%;

    &:hover {
      background-color: ${(props) => props.theme.colors.middlegrey};
    }
    
    &:after {
        content: "";
        position: absolute;
        display: none;
        top: 6px;
        left: 6px;  
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: white;
`;

const RadioButton = ({ id, name, label, checked, onChange }) => {
  return (
    <Label>
      {label}
      <RadioInput
        id={id}
        name={name}
        type="radio"
        checked={checked}
        onChange={(e) => onChange(id)}
      />
      <Checkmark></Checkmark>
    </Label>
  );
};

export default RadioButton;
