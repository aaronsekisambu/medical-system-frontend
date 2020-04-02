import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function ScrollViewEntry(props) {
  return (
    <Container {...props}>
      <Text2>SpaceX goes to Mars: To setup establishment by 2040</Text2>
      <Text2Filler></Text2Filler>
      <Rect2>
        <IconRow>
          <IoniconsIcon
            name="ios-globe"
            style={{
              color: "grey",
              fontSize: 18
            }}
          ></IoniconsIcon>
          <Text3>SPACE.com</Text3>
          <EvilIconsIcon
            name="clock"
            style={{
              color: "grey",
              fontSize: 18,
              marginLeft: 44
            }}
          ></EvilIconsIcon>
          <Text4>Oct 5, 2019</Text4>
        </IconRow>
      </Rect2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text2 = styled.span`
  font-family: Arial;
  width: 320px;
  height: 56px;
  color: #121212;
  font-size: 16px;
  line-height: 20px;
  margin-top: 9px;
  margin-left: 22px;
`;

const Text2Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect2 = styled.div`
  width: 274px;
  height: 20px;
  flex-direction: row;
  display: flex;
  margin-bottom: 15px;
  margin-left: 22px;
`;

const Text3 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 14px;
  margin-left: 17px;
  margin-top: 2px;
`;

const Text4 = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 14px;
  margin-left: 21px;
  margin-top: 2px;
`;

const IconRow = styled.div`
  height: 18px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 25px;
  margin-top: 1px;
`;

export default ScrollViewEntry;
