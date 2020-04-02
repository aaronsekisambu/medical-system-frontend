import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage10(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <TextInput placeholder="Delivery Address"></TextInput>
      </BodyContent>
      <Rect>
        <BodyText>
          John Doe{"\n"}1234 Main Ave, 5th Cross,{"\n"}Bhubaneswar, Orissa{"\n"}
          Pin code - 750017{"\n"}Phone - 1234567890
        </BodyText>
      </Rect>
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

const BodyContent = styled.div`
  justify-content: center;
  padding: 16px;
  padding-top: 24px;
  flex-direction: column;
  display: flex;
`;

const TextInput = styled.input`
  font-family: Roboto;
  width: 178px;
  height: 36px;
  color: #000;
  padding-bottom: 12px;
  font-size: 24px;
  border: none;
  background: transparent;
`;

const Rect = styled.div`
  padding: 16px;
  padding-top: 8px;
  flex-direction: column;
  display: flex;
`;

const BodyText = styled.span`
  font-family: Arial;
  color: #424242;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
`;

export default MaterialCardWithoutImage10;
