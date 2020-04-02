import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle18(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Delivery Address</TitleStyle>
          <SubtitleStyle>
            John Doe{"\n"}1234 Main Ave, 5th Cross,{"\n"}Bhubaneswar, Orissa
            {"\n"}Pin code - 750017{"\n"}Phone - 1234567890
          </SubtitleStyle>
        </BodyContent>
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
  color: rgba(65,117,5,1);
  padding-bottom: 12px;
  font-size: 24px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: rgba(0,0,0,1);
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

export default MaterialCardWithImageAndTitle18;
