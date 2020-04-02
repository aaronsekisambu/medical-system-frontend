import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialButtonDanger16(props) {
  return (
    <Container {...props}>
      <Caption>Feedback</Caption>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-right: 16px;
  padding-left: 16px;
  min-width: 88px;
  border-radius: 2px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

const Caption = styled.span`
  font-family: Roboto;
  color: rgba(9,67,134,1);
  font-size: 14px;
`;

export default MaterialButtonDanger16;
