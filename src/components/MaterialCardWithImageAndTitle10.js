import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle10(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle></TitleStyle>
          <SubtitleStyle>
            Order date : 25-Jan-2020{"\n"}Order # : 04392385280564280653{"\n"}
            Order total : ₹ 999.00
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

export default MaterialCardWithImageAndTitle10;
