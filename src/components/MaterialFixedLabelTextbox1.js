import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialFixedLabelTextbox1(props) {
  return (
    <Container {...props}>
      <InputStyle></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: row;
  padding-left: 16px;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  padding-top: 14px;
  padding-right: 5px;
  padding-bottom: 8px;
  padding-left: 30px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialFixedLabelTextbox1;
