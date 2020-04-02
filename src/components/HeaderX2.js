import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function HeaderX2(props) {
  return (
    <Container {...props}>
      <Group>
        <IconRow>
          <EntypoIcon
            name="home"
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 25,
              width: 26,
              height: 25,
              marginTop: 3
            }}
          ></EntypoIcon>
          <GrihaSeva>Griha Seva</GrihaSeva>
          <IoniconsIcon
            name={props.icon3Name || "ios-notifications"}
            style={{
              color: "rgba(255,255,255,1)",
              fontSize: 33,
              height: 33,
              width: 21,
              marginLeft: 185
            }}
          ></IoniconsIcon>
        </IconRow>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(22,21,20,1);
  flex-direction: column;
`;

const Group = styled.div`
  width: 360px;
  height: 55px;
  background-color: #ed5e07;
  flex-direction: row;
  display: flex;
  margin-top: 25px;
`;

const GrihaSeva = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 18px;
  font-weight: regular;
  font-style: normal;
  margin-left: 20px;
  margin-top: 6px;
`;

const IconRow = styled.div`
  height: 33px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 13px;
  margin-left: 10px;
  margin-top: 12px;
`;

export default HeaderX2;
