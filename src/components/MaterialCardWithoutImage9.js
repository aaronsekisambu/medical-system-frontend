import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage9(props) {
  return (
    <Container {...props}>
      <Body2>
        <BodyText>
          Confirmed Schedule : {"\n"}05-02-2020 08:30 {"\n"}06-02-2020 08:30{" "}
          {"\n"}08-02-2020 08:30 {"\n"}10-02-2020 14:30 {"\n"}10-02-2020 12:30
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
  color: rgba(65,117,5,1);
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
`;

export default MaterialCardWithoutImage9;
