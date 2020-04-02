import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX2 from "../components/HeaderX2";
import MaterialSearchBar from "../components/MaterialSearchBar";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import MaterialCardWithImageAndTitle3 from "../components/MaterialCardWithImageAndTitle3";
import MaterialCardWithImageAndTitle4 from "../components/MaterialCardWithImageAndTitle4";

function Timeline(props) {
  return (
    <Root>
      <HeaderXColumn>
        <HeaderX2
          style={{
            height: 80,
            backgroundColor: "rgba(49,12,12,1)",
            boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
          }}
        ></HeaderX2>
        <MaterialSearchBar
          style={{
            width: 360,
            height: 39,
            backgroundColor: "#ed5e07"
          }}
        ></MaterialSearchBar>
        <Icon2Row>
          <MaterialCommunityIconsIcon
            name="medical-bag"
            style={{
              color: "#ed5e07",
              fontSize: 28
            }}
          ></MaterialCommunityIconsIcon>
          <MaterialCommunityIconsIcon
            name="doctor"
            style={{
              color: "#ed5e07",
              fontSize: 28,
              marginLeft: 91
            }}
          ></MaterialCommunityIconsIcon>
        </Icon2Row>
        <BookLabTests></BookLabTests>
        <OrdersRow>
          <Orders>Orders</Orders>
          <Services>Services</Services>
        </OrdersRow>
      </HeaderXColumn>
      <BodyStack>
        <Body>
          <LoremIpsum>PREVIOUSLY PLACED ORDERS</LoremIpsum>
          <ScrollArea2>
            <MaterialCardWithImageAndTitle3Row>
              <MaterialCardWithImageAndTitle3
                style={{
                  width: 352,
                  height: 95
                }}
              ></MaterialCardWithImageAndTitle3>
              <MaterialCardWithImageAndTitle3
                style={{
                  width: 352,
                  height: 95,
                  marginLeft: 2
                }}
              ></MaterialCardWithImageAndTitle3>
            </MaterialCardWithImageAndTitle3Row>
          </ScrollArea2>
          <UpcomingOrders>UPCOMING ORDERS</UpcomingOrders>
          <ScrollArea3>
            <MaterialCardWithImageAndTitle4Row>
              <MaterialCardWithImageAndTitle4
                style={{
                  width: 352,
                  height: 94
                }}
              ></MaterialCardWithImageAndTitle4>
              <MaterialCardWithImageAndTitle4
                style={{
                  width: 352,
                  height: 94,
                  marginLeft: 1
                }}
              ></MaterialCardWithImageAndTitle4>
            </MaterialCardWithImageAndTitle4Row>
          </ScrollArea3>
          <PopularCategories>POPULAR CATEGORIES</PopularCategories>
        </Body>
        <ScrollArea4>
          <ImageRow>
            <Image
              src={require("../assets/images/healthcare-and-medical_(1)1.png")}
            ></Image>
            <Image2 src={require("../assets/images/pill.png")}></Image2>
            <Image3
              src={require("../assets/images/healthcare-and-medical1.png")}
            ></Image3>
            <Image4 src={require("../assets/images/woman.png")}></Image4>
          </ImageRow>
          <DressingRow>
            <Dressing>Dressing</Dressing>
            <Medicine>Medicine</Medicine>
            <Injectibles>Injectibles</Injectibles>
            <Companionship>Companionship</Companionship>
          </DressingRow>
        </ScrollArea4>
      </BodyStack>
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

const Icon2Row = styled.div`
  height: 28px;
  flex-direction: row;
  display: flex;
  margin-top: 18px;
  margin-left: 108px;
  margin-right: 112px;
`;

const BookLabTests = styled.span`
  font-family: Roboto;
  color: #121212;
  font-weight: regular;
  font-style: normal;
  margin-top: 6px;
  margin-left: 208px;
`;

const Orders = styled.span`
  font-family: Roboto;
  color: #121212;
  font-weight: regular;
  font-style: normal;
`;

const Services = styled.span`
  font-family: Roboto;
  color: #121212;
  font-weight: regular;
  font-style: normal;
  margin-left: 66px;
`;

const OrdersRow = styled.div`
  height: 14px;
  flex-direction: row;
  display: flex;
  margin-top: 6px;
  margin-left: 101px;
  margin-right: 98px;
`;

const HeaderXColumn = styled.div`
  flex-direction: column;
  display: flex;
`;

const Body = styled.div`
  top: 0px;
  left: 1px;
  width: 360px;
  position: absolute;
  bottom: 0px;
  flex-direction: column;
  display: flex;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  margin-top: 10px;
  margin-left: 4px;
`;

const ScrollArea2 = styled.div`
  overflow-x: scroll;
  width: 357px;
  height: 94px;
  flex-direction: row;
  align-items: "undefined";
  justify-content: "undefined";
  background-color: rgba(230, 230, 230,1);
  display: flex;
  margin-top: 3px;
  margin-left: 1px;
`;

const MaterialCardWithImageAndTitle3Row = styled.div`
  height: 95px;
  flex-direction: row;
  display: flex;
  flex: 0 0 auto;
  margin-right: -351px;
  margin-left: 2px;
`;

const UpcomingOrders = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  margin-top: 16px;
  margin-left: 4px;
`;

const ScrollArea3 = styled.div`
  overflow-x: scroll;
  width: 357px;
  height: 94px;
  flex-direction: row;
  align-items: "undefined";
  justify-content: "undefined";
  background-color: rgba(230, 230, 230,1);
  display: flex;
  margin-top: 3px;
  margin-left: 1px;
`;

const MaterialCardWithImageAndTitle4Row = styled.div`
  height: 94px;
  flex-direction: row;
  display: flex;
  flex: 0 0 auto;
  margin-right: -350px;
  margin-left: 2px;
`;

const PopularCategories = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  margin-top: 21px;
  margin-left: 4px;
`;

const ScrollArea4 = styled.div`
  overflow-x: scroll;
  width: 360px;
  height: 93px;
  top: 272px;
  left: 0px;
  background-color: rgba(230, 230, 230,1);
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Image = styled.img`
  width: 100%;
  height: 62px;
  margin-top: 4px;
  object-fit: contain;
`;

const Image2 = styled.img`
  width: 100%;
  height: 62px;
  margin-left: 31px;
  margin-top: 4px;
  object-fit: contain;
`;

const Image3 = styled.img`
  width: 100%;
  height: 64px;
  margin-left: 23px;
  margin-top: 2px;
  object-fit: contain;
`;

const Image4 = styled.img`
  width: 100%;
  height: 67px;
  margin-left: 32px;
  object-fit: contain;
`;

const ImageRow = styled.div`
  height: 67px;
  flex-direction: row;
  display: flex;
  margin-top: 5px;
  margin-left: 20px;
  margin-right: -2px;
  flex: 0 0 auto;
`;

const Dressing = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
`;

const Medicine = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  margin-left: 35px;
`;

const Injectibles = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  margin-left: 33px;
`;

const Companionship = styled.span`
  font-family: Roboto;
  color: #121212;
  font-size: 14px;
  font-weight: regular;
  font-style: normal;
  line-height: 9px;
  margin-left: 18px;
`;

const DressingRow = styled.div`
  height: 18px;
  flex-direction: row;
  display: flex;
  margin-top: 7px;
  margin-left: 22px;
  margin-right: 1px;
  flex: 0 0 auto;
`;

const BodyStack = styled.div`
  width: 361px;
  flex: 1 1 0%;
  margin-bottom: -127px;
  margin-top: 16px;
  margin-left: -1px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

export default Timeline;
