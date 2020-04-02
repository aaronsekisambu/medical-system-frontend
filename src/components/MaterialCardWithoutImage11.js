import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage11(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <TitleStyle>Confirmed Delivery Address</TitleStyle>
        <SubtitleStyle>
          John Doe{"\n"}1234 Main Ave, 5th Cross,{"\n"}Bhubaneswar, Orissa{"\n"}
          Pin code - 750017{"\n"}Phone - 1234567890
        </SubtitleStyle>
      </BodyContent>
      <Body2></Body2>
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

const TitleStyle = styled.span`
  font-family: Roboto;
  color: rgba(65,117,5,1);
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

const Body2 = styled.div`
  padding: 16px;
  padding-top: 8px;
`;

export default MaterialCardWithoutImage11;
