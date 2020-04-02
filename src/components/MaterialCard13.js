import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialChipBasic1 from "./MaterialChipBasic1";
import MaterialChipBasic2 from "./MaterialChipBasic2";

function MaterialCard13(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Previously placed orders</TitleStyle>
          <SubtitleStyle>Injection i.v drip</SubtitleStyle>
        </BodyContent>
      </CardBody>
      <MaterialChipBasic1
        style={{
          top: 85,
          left: 17,
          width: 116,
          height: 29,
          position: "absolute"
        }}
      ></MaterialChipBasic1>
      <MaterialChipBasic2
        style={{
          top: 85,
          left: 146,
          width: 122,
          height: 29,
          position: "absolute"
        }}
      ></MaterialChipBasic2>
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
  flex-direction: row;
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
  font-weight: 400;
  font-style: normal;
  text-align: left;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

export default MaterialCard13;
