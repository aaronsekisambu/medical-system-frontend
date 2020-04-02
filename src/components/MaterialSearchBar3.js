import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialSearchBar3(props) {
  return (
    <Container {...props}>
      <Rect1>
        <LeftIconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="arrow-left"
              style={{
                backgroundColor: "transparent",
                color: "#000",
                fontFamily: "Roboto",
                fontSize: 24,
                opacity: 0.6
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </LeftIconButton>
        <InputStyleStack>
          <InputStyle placeholder="Search"></InputStyle>
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
        </InputStyleStack>
      </Rect1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #3F51B5;
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
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  flex: 1 1 0%;
  margin-bottom: 4px;
  margin-top: 4px;
  margin-left: 4px;
  margin-right: 4px;
  display: flex;
`;

const LeftIconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-left: 5px;
  margin-top: 5px;
  border: none;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  width: 257px;
  height: 48px;
  color: #000;
  position: absolute;
  align-self: flex-start;
  padding-right: 5px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
`;

const RightIconButton = styled.div`
  top: 1px;
  position: absolute;
  align-items: center;
  right: 0px;
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const InputStyleStack = styled.div`
  width: 290px;
  height: 48px;
  margin-left: 27px;
  margin-top: 4px;
  position: relative;
`;

export default MaterialSearchBar3;
