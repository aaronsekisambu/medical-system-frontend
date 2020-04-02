import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle4(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Upcoming Orders</TitleStyle>
          <SubtitleStyle>Sponging</SubtitleStyle>
          <Sponging>Category - Morning Care</Sponging>
        </BodyContent>
      </CardBody>
      <Image1Stack>
        <Image1
          src={require("../assets/images/—Pngtree—calendar_vector_icon_3718057.png")}
        ></Image1>
        <Image2 src={require("../assets/images/stretcher.png")}></Image2>
      </Image1Stack>
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
  position: relative;
  box-shadow: -2px 2px 1.5px  0.1px #000 ;
`;

const CardBody = styled.div`
  flex-direction: row;
  justify-content: space-between;
  display: flex;
`;

const BodyContent = styled.div`
  flex: 1 1 0%;
  padding: 16px;
  padding-top: 24px;
  flex-direction: column;
  display: flex;
`;

const TitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  padding-bottom: 12px;
  font-size: 18px;
`;

const SubtitleStyle = styled.span`
  font-family: Roboto;
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

const Sponging = styled.span`
  font-family: Roboto;
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

const Image1 = styled.img`
  top: 14px;
  left: 0px;
  width: 97px;
  height: 90px;
  position: absolute;
  object-fit: cover;
`;

const Image2 = styled.img`
  top: 0px;
  left: 96px;
  width: 75px;
  height: 115px;
  position: absolute;
  object-fit: contain;
`;

const Image1Stack = styled.div`
  top: -7px;
  left: 166px;
  width: 171px;
  height: 115px;
  position: absolute;
`;

export default MaterialCardWithImageAndTitle4;
