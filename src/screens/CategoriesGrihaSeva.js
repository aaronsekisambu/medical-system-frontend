import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX2 from "../components/HeaderX2";
import MaterialSearchBar from "../components/MaterialSearchBar";

function CategoriesGrihaSeva(props) {
  return (
    <Root>
      <HeaderX2
        style={{
          height: 80,
          boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
        }}
        icon2Family="Feather"
        icon2Name="settings"
        icon3Name="md-notifications"
      ></HeaderX2>
      <Body>
        <MaterialSearchBar
          style={{
            width: 360,
            height: 39,
            backgroundColor: "#ed5e07",
            borderColor: "#000000",
            borderWidth: 21,
            marginTop: 10,
            borderStyle: "solid",
            boxShadow: "5px 5px 10px  0px rgba(0,0,0,1) "
          }}
        ></MaterialSearchBar>
        <MaterialSearchBar1Filler></MaterialSearchBar1Filler>
        <Rect92Column>
          <Rect92>
            <Text27>Medicines</Text27>
          </Rect92>
          <Rect91>
            <Text26>MORNING CARE</Text26>
          </Rect91>
          <Rect90>
            <Text25>COMPANIONSHIP</Text25>
          </Rect90>
          <Rect89>
            <Text24>SPECIAL CARE</Text24>
          </Rect89>
          <Rect88>
            <Text22>INJECTIBLES</Text22>
          </Rect88>
          <Rect87>
            <Text23>DRESSING</Text23>
          </Rect87>
        </Rect92Column>
      </Body>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgb(255,255,255);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Body = styled.div`
  width: 360px;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  align-self: center;
`;

const MaterialSearchBar1Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect92 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
`;

const Text27 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 12px;
  margin-top: 6px;
  align-self: center;
`;

const Rect91 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
`;

const Text26 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 10px;
  margin-top: 7px;
  align-self: center;
`;

const Rect90 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text25 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 11px;
  margin-top: 7px;
  align-self: center;
`;

const Rect89 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
`;

const Text24 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 12px;
  margin-top: 7px;
  align-self: center;
`;

const Rect88 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
  margin-bottom: 1px;
`;

const Text22 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 12px;
  margin-top: 7px;
  align-self: center;
`;

const Rect87 = styled.div`
  height: 27px;
  background-color: rgba(21,19,19,0.5);
  flex-direction: column;
  display: flex;
`;

const Text23 = styled.span`
  font-family: System;
  color: rgba(247,252,253,1);
  font-size: 12px;
  margin-top: 7px;
  align-self: center;
`;

const Rect92Column = styled.div`
  flex-direction: column;
  display: flex;
`;

export default CategoriesGrihaSeva;
