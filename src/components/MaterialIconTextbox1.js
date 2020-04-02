import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function MaterialIconTextbox1(props) {
  return (
    <Container {...props}>
      <FeatherIcon
        name="phone"
        style={{
          color: "#616161",
          fontFamily: "Roboto",
          fontSize: 24,
          paddingLeft: 8
        }}
      ></FeatherIcon>
      <InputStyle placeholder="Mobile number"></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  margin-left: 16px;
  padding-top: 14px;
  padding-right: 5px;
  padding-bottom: 8px;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialIconTextbox1;
