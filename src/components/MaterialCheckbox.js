import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialCheckbox(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
        style={{
          color: "rgba(255,255,255,1)",
          fontFamily: "Roboto",
          fontSize: 28,
          lineHeight: "28px"
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

export default MaterialCheckbox;
