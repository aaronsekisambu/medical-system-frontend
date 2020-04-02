import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function MaterialSearchBarWithBackground(props) {
  return (
    <Container {...props}>
      <Rect>
        <LeftIconButtonStack>
          <LeftIconButton>
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
          </LeftIconButton>
          <InputStyle placeholder="Search all Orders"></InputStyle>
        </LeftIconButtonStack>
        <LeftIconButtonStackFiller></LeftIconButtonStackFiller>
        <RightIconButton>
          <ButtonOverlay></ButtonOverlay>
        </RightIconButton>
      </Rect>
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
const Rect = styled.div`
  width: 375px;
  height: 56px;
  background-color: transparent;
  flex-direction: row;
  align-items: center;
  display: flex;
`;

const LeftIconButton = styled.div`
  top: 1px;
  left: 0px;
  position: absolute;
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  top: 0px;
  left: 42px;
  width: 263px;
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

const LeftIconButtonStack = styled.div`
  width: 305px;
  height: 48px;
  margin-left: -4px;
  margin-top: 4px;
  position: relative;
`;

const LeftIconButtonStackFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconButton = styled.div`
  align-items: center;
  padding: 11px;
  margin-right: 5px;
  margin-top: 5px;
  border: none;
`;

export default MaterialSearchBarWithBackground;
