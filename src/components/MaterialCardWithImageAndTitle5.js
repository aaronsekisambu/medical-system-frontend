import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle5(props) {
  return (
    <Container {...props}>
      <Button>
        <ButtonOverlay>
          <CardItemImagePlace
            src={require("../assets/images/healthcare-and-medical.png")}
          ></CardItemImagePlace>
          <Rect>
            <TitleStyle>Sponging</TitleStyle>
            <SubtitleStyle>Cancelled 25-Jan-2020</SubtitleStyle>
          </Rect>
        </ButtonOverlay>
      </Button>
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
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Button = styled.div`
  flex-direction: row;
  justify-content: space-between;
  border: none;
`;

const CardItemImagePlace = styled.img`
  width: 100%;
  height: 80px;
  background-color: #ccc;
  margin: 16px;
`;

const Rect = styled.div`
  flex: 1 1 0%;
  padding: 16px;
  padding-top: 24px;
  border-color: #000000;
  border-width: 0px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const TitleStyle = styled.span`
  font-family: Roboto;
  color: rgba(208,2,27,1);
  padding-bottom: 12px;
  font-size: 24px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  width: 143px;
  height: 16px;
  color: rgba(208,2,27,1);
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

export default MaterialCardWithImageAndTitle5;
