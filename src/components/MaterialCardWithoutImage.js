import React, { Component } from "react";
import styled, { css } from "styled-components";

function MaterialCardWithoutImage(props) {
  return (
    <Container {...props}>
      <BodyContent>
        <TitleStyle>Description</TitleStyle>
      </BodyContent>
      <Button>
        <ButtonOverlay>
          <BodyText>
            OrangeCross operates “ Nursing Stations ” in large
            apartments/condominiums under the brand name of “ Griha Seva”. The
            model is designed to improve access of Nursing care by large number
            of families living in a gated community. Currently most of such
            communities do not have primary health care provider within their
            immediate reach. Every time they have to depend on the hospitals to
            get basic........
          </BodyText>
        </ButtonOverlay>
      </Button>
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

const Button = styled.div`
  padding: 16px;
  padding-top: 8px;
  overflow: visible;
  flex-direction: column;
  display: flex;
  border: none;
`;

const BodyText = styled.span`
  font-family: Arial;
  color: #424242;
  flex-wrap: wrap;
  font-size: 14px;
  line-height: 20px;
`;

export default MaterialCardWithoutImage;
