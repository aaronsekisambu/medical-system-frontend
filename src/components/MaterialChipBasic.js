import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";

function MaterialChipBasic(props) {
  return (
    <Container {...props}>
      <TextInputRow>
        <TextInput placeholder="Bhubaneswar"></TextInput>
        <EntypoIcon
          name="chevron-down"
          style={{
            color: "rgba(255,255,255,1)",
            fontSize: 20,
            marginLeft: 2
          }}
        ></EntypoIcon>
      </TextInputRow>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgb(230,230,230);
  padding-right: 12px;
  padding-left: 12px;
  border-radius: 50px;
  flex-direction: row;
`;

const TextInput = styled.input`
  font-family: Arial;
  width: 77px;
  height: 12px;
  color: rgba(0,0,0,0.87);
  font-size: 13px;
  margin-top: 2px;
  border: none;
  background: transparent;
`;

const TextInputRow = styled.div`
  height: 20px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 48px;
  margin-left: 14px;
  margin-top: 8px;
`;

export default MaterialChipBasic;
