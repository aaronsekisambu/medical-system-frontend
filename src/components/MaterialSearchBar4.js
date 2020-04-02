import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialSearchBar4(props) {
  return (
    <Container {...props}>
      <Rect1>
        <InputStyle placeholder="Choose a Nurse from the list"></InputStyle>
      </Rect1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  padding: 4px;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

const Rect1 = styled.div`
  width: 367px;
  height: 50px;
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  align-self: center;
  display: flex;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  width: 257px;
  height: 28px;
  color: #000;
  align-self: center;
  padding-right: 5px;
  font-size: 16px;
  line-height: 16px;
  margin-left: 26px;
  border: none;
  background: transparent;
`;

export default MaterialSearchBar4;
