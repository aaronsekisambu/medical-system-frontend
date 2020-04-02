import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialToast3(props) {
  return (
    <Container {...props}>
      <Text1>Multiline Text added to the toast of BuilderX</Text1>
      <Button>
        <ButtonOverlay>
          <ButtonText>UNDO</ButtonText>
        </ButtonOverlay>
      </Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #323232;
  flex-direction: row;
  align-items: center;
  opacity: 1;
  justify-content: space-between;
  padding: 24px;
  min-width: 288px;
  border-radius: 2px;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Text1 = styled.span`
  font-family: Roboto;
  color: rgba(255,255,255,1);
  font-size: 14px;
  line-height: 20px;
`;

const Button = styled.div`
  margin-left: 24px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ButtonText = styled.span`
  font-family: Roboto;
  color: #4CAF50;
  font-size: 14px;
`;

export default MaterialToast3;
