import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialChipBasic3(props) {
  return (
    <Container {...props}>
      <ChipText>Example Chip</ChipText>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgb(230,230,230);
  align-items: center;
  justify-content: center;
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 50px;
  flex-direction: column;
`;

const ChipText = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,0.87);
  font-size: 13px;
`;

export default MaterialChipBasic3;
