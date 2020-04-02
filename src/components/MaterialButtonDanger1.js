import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonDanger1(props) {
  return (
    <Container {...props}>
      <Caption>{props.text1 || "Buy it again"}</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #F44336;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 88px;
  border-radius: 2px;
  box-shadow: 5px 5px 5px  0.35px #000 ;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: #fff;
  font-size: 14px;
  text-align: left;
`;

export default MaterialButtonDanger1;
