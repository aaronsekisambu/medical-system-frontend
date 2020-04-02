import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithImageAndTitle3(props) {
  return (
    <Container {...props}>
      <CardBody>
        <BodyContent>
          <TitleStyle>Previous Orders</TitleStyle>
          <SubtitleStyle>Injections i.v. drip</SubtitleStyle>
          <InjectionsIvDrip>Category - Injectibles</InjectionsIvDrip>
        </BodyContent>
      </CardBody>
      <ImageStack>
        <Image
          src={require("../assets/images/—Pngtree—calendar_vector_icon_3718057.png")}
        ></Image>
        <Image2
          src={require("../assets/images/healthcare-and-medical.png")}
        ></Image2>
      </ImageStack>
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

const InjectionsIvDrip = styled.span`
  font-family: Roboto;
  color: #000;
  opacity: 0.5;
  font-size: 14px;
  line-height: 16px;
`;

const Image = styled.img`
  top: 0px;
  left: 0px;
  width: 92px;
  height: 80px;
  position: absolute;
  object-fit: cover;
`;

const Image2 = styled.img`
  top: 5px;
  left: 88px;
  width: 65px;
  height: 71px;
  position: absolute;
  object-fit: contain;
`;

const ImageStack = styled.div`
  top: 10px;
  left: 168px;
  width: 153px;
  height: 80px;
  position: absolute;
`;

export default MaterialCardWithImageAndTitle3;
