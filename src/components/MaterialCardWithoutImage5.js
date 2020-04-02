import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage5(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <TitleStyle>Title goes here</TitleStyle>
        <SubtitleStyle>Subtitle here</SubtitleStyle>
      </BodyContent>
      <Body2>
        <BodyText>
          BuilderX is a screen design tool which codes React Native for you
          which design without boundaries, the code is generated simultaneously.
          Save your designed components as symbol and then simply add it to your
          design next time.Live preview works on real device. Shout out to the
          Expo team to make it happen.
        </BodyText>
      </Body2>
      <ActionBody>
        <ActionButton1>
          <ButtonOverlay>
            <ActionText1>ACTION 1</ActionText1>
          </ButtonOverlay>
        </ActionButton1>
        <ActionButton2>
          <ButtonOverlay>
            <ActionText2>ACTION 2</ActionText2>
          </ButtonOverlay>
        </ActionButton2>
      </ActionBody>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: #FFF;
  flex-wrap: nowrap;
  border-radius: 2px;
  border-color: #CCC;
  border-width: 1px;
  overflow: hidden;
  flex-direction: column;
  border-style: solid;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const BodyContent = styled.div`
  justify-content: center;
  padding: 16px;
  padding-top: 24px;
  flex-direction: column;
  display: flex;
`;

const TitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  padding-bottom: 12px;
  font-size: 24px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

const Body2 = styled.div`
  padding: 16px;
  padding-top: 8px;
  flex-direction: column;
  display: flex;
`;

const BodyText = styled.span`
  font-family: Arial;
  color: #424242;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
`;

const ActionBody = styled.div`
  flex-direction: row;
  padding: 8px;
  display: flex;
`;

const ActionButton1 = styled.div`
  height: 36px;
  padding: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ActionText1 = styled.span`
  font-family: Arial;
  color: #000;
  opacity: 0.9;
  font-size: 14px;
`;

const ActionButton2 = styled.div`
  height: 36px;
  padding: 8px;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ActionText2 = styled.span`
  font-family: Arial;
  color: #000;
  opacity: 0.9;
  font-size: 14px;
`;

export default MaterialCardWithoutImage5;
