import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";

function MaterialButtonHamburger2(props) {
  return (
    <Container {...props}>
      <MaterialCommunityIconsIcon
        name="delete"
        style={{
          color: "#fff",
          fontSize: 24,
          fontFamily: "Roboto"
        }}
      ></MaterialCommunityIconsIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(237,94,7,1);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  box-shadow: 0px 1px 5px  0.35px #000 ;
`;

export default MaterialButtonHamburger2;
