import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle17(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Comprehensive Full Body Checkup</TitleStyle>
          <SubtitleStyle>
            Scheduled - 25-JAN-2020{"\n"}Time - 08:30
          </SubtitleStyle>
        </BodyContent>
        <CardItemImagePlace
          src={require("../assets/images/vaccine.png")}
        ></CardItemImagePlace>
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

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
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

export default MaterialCardWithImageAndTitle17;
