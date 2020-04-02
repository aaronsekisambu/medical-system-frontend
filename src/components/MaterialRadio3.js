import React, { Component } from "react";
import styled, { css } from "styled-components";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function MaterialRadio3(props) {
  return (
    <Container {...props}>
      <IoniconsIcon
        name={props.selected ? "radiobox-marked" : "ios-radio-button-on"}
        style={{
          color: "#ed5e07",
          fontFamily: "Roboto",
          fontSize: 23,
          lineHeight: "24px"
        }}
      ></IoniconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  flex-direction: column;
`;

export default MaterialRadio3;
