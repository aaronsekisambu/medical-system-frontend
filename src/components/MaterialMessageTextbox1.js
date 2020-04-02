import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialMessageTextbox1(props) {
  return (
    <Container {...props}>
      <Label
        style={{
          color: props.error
            ? "red"
            : props.success
            ? "green"
            : "rgba(0,0,0,0.6)"
        }}
      >
        Label
      </Label>
      <InputStyle
        placeholder="Input"
        style={{
          borderBottomColor: props.error
            ? "red"
            : props.success
            ? "green"
            : "#D9D5DC"
        }}
      ></InputStyle>
      {props.error ? (
        <Helper1 style={{ color: props.error ? "red" : "transparent" }}>
          Error message
        </Helper1>
      ) : null}
      {props.success ? (
        <Helper2 style={{ color: props.success ? "green" : "transparent" }}>
          Success message
        </Helper2>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: transparent;
  flex-direction: column;
`;

const Label = styled.span`
  font-family: Roboto;
  padding-top: 16px;
  font-size: 12px;
  text-align: left;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  width: 375px;
  flex: 1 1 0%;
  color: #000;
  align-self: stretch;
  padding-top: 8px;
  padding-bottom: 8px;
  border-color: #D9D5DC;
  border-bottom-width: 1px;
  border-bottom-color: props.error ?
    "red" : props.success ?
    "green" : "#D9D5DC";
  font-size: 16px;
  line-height: 16px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Helper1 = styled.span`
  font-family: Roboto;
  padding-top: 8px;
  font-size: 12px;
  text-align: left;
`;

const Helper2 = styled.span`
  font-family: Roboto;
  padding-top: 8px;
  font-size: 12px;
  text-align: left;
`;

export default MaterialMessageTextbox1;
