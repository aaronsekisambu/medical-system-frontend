import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialRadio12(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name={props.selected ? "radiobox-marked" : "radiobox-blank"}
        style={{
          color: "#ed5e07",
          fontFamily: "Roboto",
          fontSize: 23,
          lineHeight: "24px"
        }}
      ></MaterialCommunityIconsIcon>
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

export default MaterialRadio12;
