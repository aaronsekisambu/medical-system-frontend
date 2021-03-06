import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialCheckboxWithLabel(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={{
          color: "#3F51B5",
          fontFamily: "Roboto",
          fontSize: 28,
          lineHeight: "28px"
        }}
      ></MaterialCommunityIconsIcon>
      <CheckLabel>{props.label || "Show password"}</CheckLabel>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const CheckLabel = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,0.87);
  align-self: flex-start;
  margin-left: 2px;
  font-size: 16px;
  text-align: center;
`;

export default MaterialCheckboxWithLabel;
