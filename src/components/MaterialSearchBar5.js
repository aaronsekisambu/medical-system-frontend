import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function MaterialSearchBar5(props) {
  return (
    <Container {...props}>
      <Rect1Stack>
        <Rect1>
          <RightIconButtonFiller></RightIconButtonFiller>
          <RightIconButton>
            <ButtonOverlay>
              <MaterialCommunityIconsIcon
                name="close"
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: 24,
                  opacity: 0.6
                }}
              ></MaterialCommunityIconsIcon>
            </ButtonOverlay>
          </RightIconButton>
        </Rect1>
        <InputStyle1 placeholder="Search all Treatment plans"></InputStyle1>
        <LeftIconButton1>
          <ButtonOverlay>
            <FeatherIcon
              name="search"
              style={{
                backgroundColor: "transparent",
                color: "#ed5e07",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></FeatherIcon>
          </ButtonOverlay>
        </LeftIconButton1>
      </Rect1Stack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  padding: 4px;
  flex-direction: column;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect1 = styled.div`
  top: 1px;
  left: 8px;
  background-color: #FFFFFF;
  position: absolute;
  flex-direction: row;
  align-items: center;
  right: 0px;
  bottom: 0px;
  border-radius: 2px;
  display: flex;
`;

const RightIconButtonFiller = styled.div`
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

const InputStyle1 = styled.input`
  font-family: Roboto;
  top: 0px;
  left: 42px;
  width: 257px;
  height: 48px;
  color: #FFFFFF;
  position: absolute;
  align-self: flex-start;
  padding-right: 5px;
  font-size: 12px;
  line-height: 16px;
  border: none;
  background: transparent;
`;

const LeftIconButton1 = styled.div`
  top: 1px;
  left: 0px;
  position: absolute;
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const Rect1Stack = styled.div`
  flex: 1 1 0%;
  margin-bottom: 4px;
  margin-top: 3px;
  margin-left: -4px;
  margin-right: 4px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default MaterialSearchBar5;
