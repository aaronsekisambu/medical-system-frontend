import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle6(props) {
  return (
    <Container {...props}>
      <CardBody>
        <CardItemImagePlace
          src={require("../assets/images/pill.png")}
        ></CardItemImagePlace>
        <Rect>
          <TitleStyle>Medicine</TitleStyle>
          <SubtitleStyle>Attended - 13-Jan-2020</SubtitleStyle>
        </Rect>
      </CardBody>
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

const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
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
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

export default MaterialCardWithImageAndTitle6;
