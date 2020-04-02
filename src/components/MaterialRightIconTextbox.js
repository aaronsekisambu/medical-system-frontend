import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialRightIconTextbox(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder="Label"></InputStyle>
      <MaterialCommunityIconsIcon
        name="eye"
        style={{
          color: "#616161",
          fontFamily: "Roboto",
          fontSize: 24,
          paddingRight: 8
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  padding-top: 14px;
  padding-right: 16px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialRightIconTextbox;
