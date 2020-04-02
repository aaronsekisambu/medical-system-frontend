import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialHeader116(props) {
  return (
    <Container {...props}>
      <LeftIconButtonStackRow>
        <LeftIconButtonStack>
          <LeftIconButton>
            <ButtonOverlay></ButtonOverlay>
          </LeftIconButton>
          <MaterialCommunityIconsIcon
            name="reorder-horizontal"
            style={{
              left: 10,
              position: "absolute",
              color: "rgba(255,255,255,1)",
              fontSize: 35,
              top: 3
            }}
          ></MaterialCommunityIconsIcon>
        </LeftIconButtonStack>
        <TextWrapper1>
          <Title numberOfLines={1}>Welcome to Griha Seva</Title>
        </TextWrapper1>
      </LeftIconButtonStackRow>
      <LeftIconButtonStackRowFiller></LeftIconButtonStackRowFiller>
      <RightIconButton>
        <ButtonOverlay>
          <MaterialCommunityIconsIcon
            name="dots-vertical"
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: 24
            }}
          ></MaterialCommunityIconsIcon>
        </ButtonOverlay>
      </RightIconButton>
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

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const LeftIconButton = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  padding: 11px;
  border: none;
`;

const LeftIconButtonStack = styled.div`
  width: 45px;
  height: 38px;
  position: relative;
`;

const TextWrapper1 = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 21px;
  margin-top: 14px;
`;

const Title = styled.span`
  font-family: Roboto;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
`;

const LeftIconButtonStackRow = styled.div`
  height: 38px;
  flex-direction: row;
  margin-left: 5px;
  margin-top: 5px;
  display: flex;
`;

const LeftIconButtonStackRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconButton = styled.div`
  align-items: center;
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-right: 5px;
  margin-top: 5px;
  border: none;
`;

export default MaterialHeader116;
