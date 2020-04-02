import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialHeader4(props) {
  return (
    <Container {...props}>
      <LeftIconButtonRow>
        <LeftIconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="menu"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </LeftIconButton>
        <TextWrapper>
          <Title numberOfLines={1}>Title</Title>
        </TextWrapper>
      </LeftIconButtonRow>
      <LeftIconButtonRowFiller></LeftIconButtonRowFiller>
      <RightIconsWrapper>
        <IconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="magnify"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </IconButton>
        <IconButton2>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="heart"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </IconButton2>
        <IconButton3>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="refresh"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </IconButton3>
        <IconButton4>
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
        </IconButton4>
      </RightIconsWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #3F51B5;
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
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  align-self: flex-end;
  margin-left: 27px;
  margin-bottom: 14px;
`;

const Title = styled.span`
  font-family: Roboto;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
`;

const LeftIconButtonRow = styled.div`
  flex-direction: row;
  margin-left: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
`;

const LeftIconButtonRowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconsWrapper = styled.div`
  flex-direction: row;
  align-items: center;
  margin-right: 5px;
  margin-top: 5px;
  display: flex;
`;

const IconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const IconButton2 = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const IconButton3 = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const IconButton4 = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

export default MaterialHeader4;
