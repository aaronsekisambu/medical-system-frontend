import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function MaterialHeader11(props) {
  return (
    <Container {...props}>
      <LeftIconButtonRow>
        <LeftIconButton>
          <ButtonOverlay>
            <EntypoIcon
              name="home"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></EntypoIcon>
          </ButtonOverlay>
        </LeftIconButton>
        <TextWrapper>
          <Title numberOfLines={1}>Payment details</Title>
        </TextWrapper>
        <EntypoIcon
          name="chevron-small-left"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 28,
            marginLeft: -180,
            marginTop: 11
          }}
        ></EntypoIcon>
      </LeftIconButtonRow>
      <LeftIconButtonRowFiller></LeftIconButtonRowFiller>
      <RightIconButton>
        <ButtonOverlay></ButtonOverlay>
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
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 51px;
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

const LeftIconButtonRow = styled.div`
  height: 46px;
  flex-direction: row;
  margin-left: 5px;
  margin-top: 5px;
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
  margin-right: 5px;
  margin-top: 5px;
  border: none;
`;

export default MaterialHeader11;
