import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialIconTextbox3 from "./MaterialIconTextbox3";

function MaterialCardWithoutImage8(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <TitleStyle>Add New Apartment</TitleStyle>
      </BodyContent>
      <MaterialIconTextbox3
        style={{
          top: 76,
          left: 9,
          width: 342,
          height: 43,
          position: "absolute"
        }}
      ></MaterialIconTextbox3>
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

const BodyContent = styled.div`
  justify-content: center;
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

export default MaterialCardWithoutImage8;
