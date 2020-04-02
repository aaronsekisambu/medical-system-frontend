import React, { Component } from "react";
import styled, { css } from "styled-components";
import FeatherIcon from "react-native-vector-icons/dist/Feather";

function MaterialSearchBar2(props) {
  return (
    <Container {...props}>
      <Rect1>
        <LeftIconButton>
          <ButtonOverlay>
            <FeatherIcon
              name="search"
              style={{
                backgroundColor: "transparent",
                color: "#ed5e07",
                fontFamily: "Roboto",
                fontSize: 24,
                opacity: 0.6
              }}
            ></FeatherIcon>
          </ButtonOverlay>
        </LeftIconButton>
        <InputStyle placeholder="Search"></InputStyle>
      </Rect1>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #dddddd;
  padding: 4px;
  flex-direction: column;
  box-shadow: 0px 2px 1.2px  0.2px #111 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Rect1 = styled.div`
  width: 367px;
  height: 48px;
  background-color: #FFFFFF;
  flex-direction: row;
  align-items: center;
  border-radius: 2px;
  margin-top: 3px;
  margin-left: 4px;
  display: flex;
`;

const LeftIconButton = styled.div`
  padding: 11px;
  flex-direction: column;
  display: flex;
  margin-left: 9px;
  margin-top: -6px;
  border: none;
`;

const InputStyle = styled.input`
  font-family: Roboto;
  width: 257px;
  height: 24px;
  color: #000;
  align-self: flex-start;
  padding-right: 5px;
  font-size: 16px;
  line-height: 16px;
  margin-left: 6px;
  margin-top: 5px;
  border: none;
  background: transparent;
`;

export default MaterialSearchBar2;
