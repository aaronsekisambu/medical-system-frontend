import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage2(props) {
  return (
    <Container {...props}>
      <Body2>
        <BodyText>
          8:00 AM - 9:00 AM{"\n"}
          {"\n"}9:00 AM - 10:00 AM{"\n"}
          {"\n"}10:00 AM - 11:00 AM{"\n"}
          {"\n"}11:00 AM - 12:00 PM{"\n"}
          {"\n"}12:00 PM - 1:00 PM{"\n"}
          {"\n"}1:00 PM - 2:00 PM{"\n"}
          {"\n"}2:00 PM - 3:00 PM{"\n"}
          {"\n"}3:00 PM - 4:00 PM{"\n"}
          {"\n"}4:00 PM - 5:00 PM
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

export default MaterialCardWithoutImage2;
