import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage4(props) {
  return (
    <Container {...props}>
      <Body2>
        <BodyText>
          CARD{"\n"}Master Card, Amex, Maestro{"\n"}
          {"\n"}NET BANKING{"\n"}All Indian Banks{"\n"}
          {"\n"}WALLET{"\n"}Amazon Pay, PhonePe{"\n"}
          {"\n"}UPI/QR{"\n"}Instant payment using UPI{"\n"}
          {"\n"}PAY LATER{"\n"}Pay later using simpl
        </BodyText>
      </Body2>
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

const Body2 = styled.div`
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

export default MaterialCardWithoutImage4;
