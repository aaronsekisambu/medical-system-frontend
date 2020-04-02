import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialHeader110(props) {
  return (
    <Container {...props}>
      <TextWrapper1>
        <Title numberOfLines={1}>Welcome to OrangeCross</Title>
      </TextWrapper1>
      <MaterialCommunityIconsIcon
        name="reorder-horizontal"
        style={{
          color: "rgba(255,255,255,1)",
          fontSize: 35,
          marginLeft: -261,
          marginTop: 8
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #ed5e07;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

const TextWrapper1 = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 71px;
  align-self: center;
`;

const Title = styled.span`
  font-family: Roboto;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
`;

export default MaterialHeader110;
