import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialToast11(props) {
  return (
    <Container {...props}>
      <Text1 numberOfLines={1}>We would love to hear from you !</Text1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #323232;
  opacity: 1;
  justify-content: center;
  padding-right: 24px;
  padding-left: 24px;
  min-width: 288px;
  border-radius: 2px;
  flex-direction: column;
`;

const Text1 = styled.span`
  font-family: Roboto;
  color: rgba(201,186,186,1);
  flex-direction: column;
  align-self: center;
  justify-content: space-between;
  font-size: 14px;
`;

export default MaterialToast11;
