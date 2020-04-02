import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialToast4(props) {
  return (
    <Container {...props}>
      <Text1></Text1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #323232;
  flex-direction: row;
  opacity: 1;
  padding-right: 24px;
  padding-left: 24px;
  min-width: 288px;
  border-radius: 2px;
`;

const Text1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;
  font-size: 14px;
  line-height: 20px;
`;

export default MaterialToast4;
