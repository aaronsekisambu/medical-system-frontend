import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialStackedLabelTextbox(props) {
  return (
    <Container {...props}>
      <InputStyle placeholder="Enter OTP"></InputStyle>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
  flex-direction: column;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

export default MaterialStackedLabelTextbox;
