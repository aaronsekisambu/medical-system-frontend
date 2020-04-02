import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialIconTextButtonsFooter(props) {
  return <Container {...props}></Container>;
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-direction: row;
  box-shadow: 0px -2px 1.2px  0.2px #111 ;
`;

export default MaterialIconTextButtonsFooter;
