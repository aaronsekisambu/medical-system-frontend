import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialToast13(props) {
  return (
    <Container {...props}>
      <Text1 numberOfLines={1}>Add New Apartment</Text1>
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
  color: rgba(255,255,255,1);
  align-self: center;
  font-size: 14px;
`;

export default MaterialToast13;
