import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function MaterialHeader12(props) {
  return (
    <Container {...props}>
      <Icon1Row>
        <MaterialCommunityIconsIcon
          name="home"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 35,
            marginTop: 4
          }}
        ></MaterialCommunityIconsIcon>
        <Link to="/Untitled5">
          <LeftIconButton1>
            <ButtonOverlay>
              <EntypoIcon
                name="chevron-left"
                style={{
                  backgroundColor: "transparent",
                  color: "#FFFFFF",
                  fontFamily: "Roboto",
                  fontSize: 24
                }}
              ></EntypoIcon>
            </ButtonOverlay>
          </LeftIconButton1>
        </Link>
        <TextWrapper1>
          <Title numberOfLines={1}>Contact us</Title>
        </TextWrapper1>
      </Icon1Row>
      <Icon1RowFiller></Icon1RowFiller>
      <RightIconButton1>
        <ButtonOverlay>
          <IoniconsIcon
            name="md-notifications-outline"
            style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              fontFamily: "Roboto",
              fontSize: 35
            }}
          ></IoniconsIcon>
        </ButtonOverlay>
      </RightIconButton1>
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
const LeftIconButton1 = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-left: 8px;
  border: none;
`;

const TextWrapper1 = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 7px;
  margin-top: 9px;
`;

const Title = styled.span`
  font-family: Roboto;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
`;

const Icon1Row = styled.div`
  height: 46px;
  flex-direction: row;
  margin-left: 15px;
  margin-top: 5px;
  display: flex;
`;

const Icon1RowFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const RightIconButton1 = styled.div`
  align-items: center;
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-right: 5px;
  border: none;
`;

export default MaterialHeader12;
