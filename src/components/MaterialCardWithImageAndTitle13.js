import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialButtonDanger4 from "./MaterialButtonDanger4";

function MaterialCardWithImageAndTitle13(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Comprehensive Full Body Checkup</TitleStyle>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/vaccine.png")}
        ></CardItemImagePlace>
      </CardBody>
      <LoremIpsumStack>
        <LoremIpsum>₹ 1099</LoremIpsum>
        <Text>₹ 1599</Text>
      </LoremIpsumStack>
      <MaterialButtonDanger4
        style={{
          top: 114,
          left: 21,
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
  font-size: 18px;
`;

const CardItemImagePlace = styled.img`
  width: 100%;
  height: 80px;
  background-color: #ccc;
  margin: 16px;
`;

const LoremIpsum = styled.span`
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

const Text = styled.span`
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

const LoremIpsumStack = styled.div`
  top: 97px;
  left: 21px;
  width: 159px;
  height: 15px;
  position: absolute;
`;

export default MaterialCardWithImageAndTitle13;
