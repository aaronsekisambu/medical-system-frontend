import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonDanger4 from "./MaterialButtonDanger4";

function MaterialCardWithImageAndTitle14(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Blood Sugar Test</TitleStyle>
          <SubtitleStyle>Short Description......</SubtitleStyle>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/stretcher.png")}
        ></CardItemImagePlace>
      </CardBody>
      <LoremIpsum1Stack>
        <LoremIpsum1>₹ 499</LoremIpsum1>
        <Text1>₹ 599</Text1>
      </LoremIpsum1Stack>
      <MaterialButtonDanger4
        style={{
          top: 119,
          left: 18,
          width: 88,
          height: 18,
          position: "absolute"
        }}
      ></MaterialButtonDanger4>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-wrap: nowrap;
  border-radius: 2px;
  border-color: #CCC;
  border-width: 1px;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  position: relative;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent = styled.div`
  flex: 1 1 0%;
  padding: 16px;
  padding-top: 24px;
  flex-direction: column;
  display: flex;
`;

const TitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  padding-bottom: 12px;
  font-size: 24px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: rgba(29,32,162,1);
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

const CardItemImagePlace = styled.img`
  width: 100%;
  height: 80px;
  background-color: #ccc;
  margin: 16px;
`;

const LoremIpsum1 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  width: 101px;
  height: 15px;
  color: rgba(0,0,0,1);
  position: absolute;
  font-size: 16px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
`;

const Text1 = styled.span`
  font-family: Roboto;
  top: 0px;
  left: 58px;
  width: 101px;
  height: 15px;
  color: rgba(155,155,155,1);
  position: absolute;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  text-decoration: line-through;
`;

const LoremIpsum1Stack = styled.div`
  top: 102px;
  left: 18px;
  width: 159px;
  height: 15px;
  position: absolute;
`;

export default MaterialCardWithImageAndTitle14;
