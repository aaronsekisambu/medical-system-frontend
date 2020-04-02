import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage3(props) {
  return (
    <Container {...props}>
      <Body2>
        <BodyText>
          MRP Total : ₹ 1099.00{"\n"}Discount : 10%{"\n"}Quantity : 5{"\n"}MRP
          Total : ₹ 5495.00 {"\n"}To be Paid : ₹ 4945.00
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

export default MaterialCardWithoutImage3;
