import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialSearchBar(props) {
  return (
    <Container {...props}>
      <Rect1>
        <LeftIconButtonRow>
          <LeftIconButton>
            <ButtonOverlay>
              <FeatherIcon
                name="search"
                style={{
                  backgroundColor: "transparent",
                  color: "#000",
                  fontFamily: "Roboto",
                  fontSize: 24,
                  opacity: 0.6
                }}
              ></FeatherIcon>
            </ButtonOverlay>
          </LeftIconButton>
          <InputStyle placeholder="Search medical services"></InputStyle>
        </LeftIconButtonRow>
        <LeftIconButtonRowFiller></LeftIconButtonRowFiller>
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
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #3F51B5;
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 1.2px  0.2px #111 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect1 = styled.div`
  width: 367px;
  height: 51px;
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  align-self: center;
  display: flex;
`;

const LeftIconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-top: 2px;
  border: none;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  width: 257px;
  height: 48px;
  color: #000;
  align-self: flex-start;
  padding-right: 5px;
  font-size: 16px;
  line-height: 16px;
  margin-left: 15px;
  border: none;
  background: transparent;
`;

const LeftIconButtonRow = styled.div`
  height: 48px;
  flex-direction: row;
  margin-left: 11px;
  margin-top: -8px;
  display: flex;
`;

const LeftIconButtonRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconButton = styled.div`
  align-items: center;
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-right: 15px;
  margin-top: -6px;
  border: none;
`;

export default MaterialSearchBar;
