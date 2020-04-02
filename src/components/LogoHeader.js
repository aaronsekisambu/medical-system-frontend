import React, { Component } from "react";
import styled, { css } from "styled-components";

function LogoHeader(props) {
  return (
    <Root {...props}>
      <Text5>bx</Text5>
      <Rect8></Rect8>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text5 = styled.span`
  font-family: Arial;
  color: rgba(255,255,255,1);
  font-size: 36px;
  align-self: center;
`;

const Rect8 = styled.div`
  background-color: rgba(5,5,5,1);
  flex: 1 1 0%;
  margin-bottom: 1px;
  margin-top: 2px;
  display: flex;
  flex-direction: column;
`;

export default LogoHeader;
