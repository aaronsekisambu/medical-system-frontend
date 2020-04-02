import React, { Component } from "react";
import styled, { css } from "styled-components";
import Icon from "react-native-vector-icons/dist/";

function MaterialChipWithCloseButton(props) {
  return (
    <Container {...props}>
      <ChipText>Example Chip</ChipText>
      <Icon
        name="close-circle"
        style={{
          color: "#9E9E9E",
          fontSize: 24,
          marginLeft: 4,
          marginRight: 4
        }}
      ></Icon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #E0E0E0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 12px;
  border-radius: 50px;
`;

const ChipText = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,0.87);
  font-size: 13px;
`;

export default MaterialChipWithCloseButton;
