import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function MaterialHeader1(props) {
  return (
    <Container {...props}>
      <LeftIconButtonRow>
        <Link to="/Untitled5">
          <LeftIconButton>
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
          </LeftIconButton>
        </Link>
        <TextWrapper>
          <Title numberOfLines={1}>Injectibles</Title>
        </TextWrapper>
        <MaterialCommunityIconsIcon
          name="home"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 35,
            marginLeft: -180,
            marginTop: 4
          }}
        ></MaterialCommunityIconsIcon>
      </LeftIconButtonRow>
      <LeftIconButtonRowFiller></LeftIconButtonRowFiller>
      <RightIconButton>
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
  margin-left: 43px;
  border: none;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 7px;
  margin-top: 12px;
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
  margin-left: 15px;
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
  flex-direction: column;
  display: flex;
  margin-right: 5px;
  border: none;
`;

export default MaterialHeader1;
