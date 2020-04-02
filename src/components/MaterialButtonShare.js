import React, { Component } from "react";
import styled, { css } from "styled-components";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";

function MaterialButtonShare(props) {
  return (
    <Container {...props}>
      <FontAwesomeIcon
        name="plus"
        style={{
          color: "#fff",
          fontFamily: "Roboto",
          fontSize: 24,
          alignSelf: "center"
        }}
      ></FontAwesomeIcon>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(237,94,7,1);
  align-items: center;
  justify-content: center;
  min-width: 40px;
  min-height: 40px;
  border-radius: 28px;
  flex-direction: column;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

export default MaterialButtonShare;
