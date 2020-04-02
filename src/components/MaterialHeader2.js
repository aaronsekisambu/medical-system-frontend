import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { Link } from "react-router-dom";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function MaterialHeader2(props) {
  return (
    <Container {...props}>
      <LeftIconButtonStack>
        <LeftIconButton>
          <ButtonOverlay>
            <MaterialCommunityIconsIcon
              name="view-dashboard"
              style={{
                backgroundColor: "transparent",
                color: "#FFFFFF",
                fontFamily: "Roboto",
                fontSize: 24
              }}
            ></MaterialCommunityIconsIcon>
          </ButtonOverlay>
        </LeftIconButton>
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
      </LeftIconButtonStack>
      <TextWrapper>
        <Title numberOfLines={1}>Griha Seva</Title>
      </TextWrapper>
      <EntypoIcon
        name="home"
        style={{
          color: "rgba(255,255,255,1)",
          fontSize: 26,
          marginLeft: -129,
          marginTop: 14
        }}
      ></EntypoIcon>
      <IoniconsIcon
        name="ios-notifications"
        style={{
          color: "rgba(255,255,255,1)",
          fontSize: 33,
          marginLeft: 218,
          marginTop: 14
        }}
      ></IoniconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(237,94,7,1);
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
  left: 33px;
  position: absolute;
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const LeftIconButton1 = styled.div`
  top: 0px;
  left: 0px;
  position: absolute;
  padding: 11px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const LeftIconButtonStack = styled.div`
  width: 79px;
  height: 46px;
  margin-left: -1px;
  margin-top: 5px;
  position: relative;
`;

const TextWrapper = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 47px;
  margin-top: 18px;
`;

const Title = styled.span`
  font-family: Roboto;
  background-color: transparent;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 600;
  line-height: 18px;
`;

export default MaterialHeader2;
