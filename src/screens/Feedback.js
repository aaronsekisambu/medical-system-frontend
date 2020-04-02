import React, { Component } from "react";
import styled, { css } from "styled-components";
import HeaderX from "../components/HeaderX";
import MaterialHeader112 from "../components/MaterialHeader112";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import FeatherIcon from "react-native-vector-icons/dist/Feather";
import FontAwesomeIcon from "react-native-vector-icons/dist/FontAwesome";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import MaterialButtonDanger25 from "../components/MaterialButtonDanger25";
import EvilIconsIcon from "react-native-vector-icons/dist/EvilIcons";

function Feedback(props) {
  return (
    <Root>
      <HeaderXStack>
        <HeaderX
          style={{
            top: 0,
            left: 1,
            height: 80,
            position: "absolute",
            right: 0,
            boxShadow: "1px 7px 5px  0.1px rgba(0,0,0,1) "
          }}
        ></HeaderX>
        <MaterialHeader112
          style={{
            top: 24,
            left: 0,
            width: 361,
            height: 56,
            position: "absolute"
          }}
        ></MaterialHeader112>
      </HeaderXStack>
      <ScrollArea>
        <Rect12StackRow>
          <Rect12Stack>
            <Rect12>
              <TextInput7 placeholder="Harsh"></TextInput7>
            </Rect12>
            <IoniconsIcon
              name="ios-person"
              style={{
                top: 6,
                left: 21,
                position: "absolute",
                color: "rgba(0,0,0,1)",
                fontSize: 22,
                height: 22,
                width: 17
              }}
            ></IoniconsIcon>
          </Rect12Stack>
          <Rect13Stack>
            <Rect13>
              <TextInput8 placeholder="Kumar"></TextInput8>
            </Rect13>
            <IoniconsIcon
              name="ios-person"
              style={{
                top: 6,
                left: 17,
                position: "absolute",
                color: "rgba(0,0,0,1)",
                fontSize: 22,
                height: 22,
                width: 17
              }}
            ></IoniconsIcon>
          </Rect13Stack>
        </Rect12StackRow>
        <Password1Stack>
          <Password1>
            <PasswordInput2 placeholder="harsh@kumar.com"></PasswordInput2>
          </Password1>
          <FeatherIcon
            name="mail"
            style={{
              top: 7,
              left: 17,
              position: "absolute",
              color: "rgba(0,0,0,1)",
              fontSize: 22,
              height: 22,
              width: 17
            }}
          ></FeatherIcon>
        </Password1Stack>
        <Rect11Stack>
          <Rect11>
            <TextInput6 placeholder="1234567890"></TextInput6>
          </Rect11>
          <FeatherIcon
            name="phone"
            style={{
              top: 8,
              left: 16,
              position: "absolute",
              color: "rgba(0,0,0,1)",
              fontSize: 22,
              height: 22,
              width: 17
            }}
          ></FeatherIcon>
        </Rect11Stack>
        <Form1Stack>
          <Form1>
            <EmailColumn>
              <Email>
                <EmailInput
                  placeholder="Male"
                  secureTextEntry={false}
                ></EmailInput>
              </Email>
              <PasswordStack>
                <Password>
                  <PasswordInput placeholder="23/08/1990"></PasswordInput>
                </Password>
                <FontAwesomeIcon
                  name="calendar"
                  style={{
                    top: 4,
                    left: 17,
                    position: "absolute",
                    color: "rgba(0,0,0,1)",
                    fontSize: 24,
                    height: 24,
                    width: 18
                  }}
                ></FontAwesomeIcon>
              </PasswordStack>
              <Rect6Stack>
                <Rect6>
                  <TextInput placeholder="Orissa"></TextInput>
                </Rect6>
                <EntypoIcon
                  name="location"
                  style={{
                    top: 4,
                    left: 17,
                    position: "absolute",
                    color: "rgba(0,0,0,1)",
                    fontSize: 24,
                    height: 24,
                    width: 18
                  }}
                ></EntypoIcon>
              </Rect6Stack>
              <Rect7Stack>
                <Rect7>
                  <TextInput2 placeholder="Bhubaneswar"></TextInput2>
                </Rect7>
                <EntypoIcon
                  name="location-pin"
                  style={{
                    top: 4,
                    left: 17,
                    position: "absolute",
                    color: "rgba(0,0,0,1)",
                    fontSize: 24,
                    height: 24,
                    width: 18
                  }}
                ></EntypoIcon>
              </Rect7Stack>
            </EmailColumn>
            <EmailColumnFiller></EmailColumnFiller>
            <Rect8Column>
              <Rect8>
                <TextInput3 placeholder="750017"></TextInput3>
              </Rect8>
              <Rect9>
                <MaterialCommunityIconsIcon
                  name="hospital-building"
                  style={{
                    color: "rgba(0,0,0,1)",
                    fontSize: 22,
                    marginLeft: 19,
                    alignSelf: "center"
                  }}
                ></MaterialCommunityIconsIcon>
                <TextInput4 placeholder="Prestige Hometown"></TextInput4>
              </Rect9>
              <Rect10>
                <Icon14Row>
                  <MaterialCommunityIconsIcon
                    name="hospital-building"
                    style={{
                      color: "rgba(0,0,0,1)",
                      fontSize: 22,
                      marginTop: 4
                    }}
                  ></MaterialCommunityIconsIcon>
                  <TextInput5 placeholder="Flat 207, Floor 2nd, Prestige HomeTown, Bhubaneswar, Orissa, 750017"></TextInput5>
                </Icon14Row>
              </Rect10>
            </Rect8Column>
          </Form1>
          <FontAwesomeIcon
            name="transgender-alt"
            style={{
              top: 0,
              left: 17,
              position: "absolute",
              color: "rgba(0,0,0,1)",
              fontSize: 24,
              height: 24,
              width: 18
            }}
          ></FontAwesomeIcon>
          <MaterialCommunityIconsIcon
            name="format-list-numbers"
            style={{
              top: 231,
              left: 18,
              position: "absolute",
              color: "rgba(0,0,0,1)",
              fontSize: 24,
              height: 24,
              width: 18
            }}
          ></MaterialCommunityIconsIcon>
        </Form1Stack>
        <EntypoIcon
          name="chevron-with-circle-down"
          style={{
            color: "rgba(0,0,0,1)",
            fontSize: 22,
            height: 22,
            width: 17,
            marginTop: 34,
            marginLeft: 287,
            flex: "0 0 auto"
          }}
        ></EntypoIcon>
        <MaterialButtonDanger25
          style={{
            width: 100,
            height: 36,
            backgroundColor: "#ed5e07",
            marginTop: 85,
            marginLeft: 130,
            flex: "0 0 auto"
          }}
        ></MaterialButtonDanger25>
      </ScrollArea>
      <Icon20Stack>
        <EvilIconsIcon
          name="envelope"
          style={{
            left: 0,
            position: "absolute",
            color: "rgba(255,255,255,1)",
            fontSize: 33,
            top: 0
          }}
        ></EvilIconsIcon>
        <EvilIconsIcon
          name="envelope"
          style={{
            left: 0,
            position: "absolute",
            color: "rgba(255,255,255,1)",
            fontSize: 33,
            top: 0
          }}
        ></EvilIconsIcon>
      </Icon20Stack>
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

const HeaderXStack = styled.div`
  height: 80px;
  margin-left: -1px;
  position: relative;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  width: 359px;
  height: 660px;
  flex-direction: column;
  align-items: "undefined";
  justify-content: "undefined";
  background-color: rgba(230, 230, 230,1);
  display: flex;
`;

const Rect12 = styled.div`
  left: 0px;
  width: 139px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  bottom: 0px;
  opacity: 1;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
`;

const TextInput7 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-top: 2px;
  margin-left: 62px;
  margin-right: 16px;
  border: none;
  background: transparent;
`;

const Rect12Stack = styled.div`
  width: 139px;
  height: 35px;
  position: relative;
`;

const Rect13 = styled.div`
  left: 0px;
  width: 128px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  bottom: 0px;
  opacity: 1;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const TextInput8 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 62px;
  margin-right: 16px;
  border: none;
  background: transparent;
`;

const Rect13Stack = styled.div`
  width: 128px;
  height: 35px;
  margin-left: 12px;
  position: relative;
`;

const Rect12StackRow = styled.div`
  height: 35px;
  flex-direction: row;
  display: flex;
  margin-top: 35px;
  margin-left: 40px;
  margin-right: 40px;
  flex: 0 0 auto;
`;

const Password1 = styled.div`
  left: 0px;
  width: 278px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  bottom: 0px;
  opacity: 1;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const PasswordInput2 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 62px;
  margin-right: 16px;
  border: none;
  background: transparent;
`;

const Password1Stack = styled.div`
  width: 278px;
  height: 35px;
  margin-top: 22px;
  margin-left: 41px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Rect11 = styled.div`
  left: 0px;
  width: 278px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  bottom: 0px;
  opacity: 1;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const TextInput6 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 62px;
  margin-right: 16px;
  border: none;
  background: transparent;
`;

const Rect11Stack = styled.div`
  width: 278px;
  height: 35px;
  margin-top: 18px;
  margin-left: 41px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Form1 = styled.div`
  top: 15px;
  left: 0px;
  width: 278px;
  height: 230px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const Email = styled.div`
  height: 36px;
  background-color: rgba(253,186,146,1);
  opacity: 1;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const EmailInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 61px;
  margin-right: 17px;
  border: none;
  background: transparent;
`;

const Password = styled.div`
  width: 278px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  bottom: 0px;
  opacity: 1;
  border-radius: 5px;
  left: 0px;
  flex-direction: column;
  display: flex;
`;

const PasswordInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-top: 2px;
  margin-left: 62px;
  margin-right: 16px;
  border: none;
  background: transparent;
`;

const PasswordStack = styled.div`
  width: 278px;
  height: 35px;
  margin-top: 24px;
  position: relative;
`;

const Rect6 = styled.div`
  width: 278px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  opacity: 1;
  border-radius: 5px;
  left: 0px;
  top: 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const TextInput = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 61px;
  margin-right: 17px;
  border: none;
  background: transparent;
`;

const Rect6Stack = styled.div`
  width: 278px;
  height: 35px;
  margin-top: 23px;
  position: relative;
`;

const Rect7 = styled.div`
  width: 278px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  position: absolute;
  bottom: 0px;
  opacity: 1;
  border-radius: 5px;
  left: 0px;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const TextInput2 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 62px;
  margin-right: 17px;
  border: none;
  background: transparent;
`;

const Rect7Stack = styled.div`
  width: 278px;
  height: 35px;
  margin-top: 25px;
  position: relative;
`;

const EmailColumn = styled.div`
  flex-direction: column;
  margin-top: -21px;
  display: flex;
`;

const EmailColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const Rect8 = styled.div`
  height: 35px;
  background-color: rgba(253,186,146,1);
  opacity: 1;
  border-radius: 5px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const TextInput3 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 61px;
  margin-right: 18px;
  border: none;
  background: transparent;
`;

const Rect9 = styled.div`
  width: 278px;
  height: 35px;
  background-color: rgba(253,186,146,1);
  opacity: 1;
  border-radius: 5px;
  flex-direction: row;
  display: flex;
  margin-bottom: 16px;
  align-self: center;
`;

const TextInput4 = styled.input`
  font-family: Arial;
  height: 30px;
  color: rgba(255,255,255,1);
  flex: 1 1 0%;
  margin-right: 18px;
  margin-left: 9px;
  align-self: center;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
`;

const Rect10 = styled.div`
  height: 35px;
  background-color: rgba(253,186,146,1);
  opacity: 1;
  border-radius: 5px;
  flex-direction: row;
  display: flex;
`;

const TextInput5 = styled.input`
  font-family: Arial;
  width: 218px;
  height: 30px;
  color: rgba(255,255,255,1);
  margin-left: 9px;
  border: none;
  background: transparent;
`;

const Icon14Row = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: -1px;
  margin-left: 19px;
  margin-top: 2px;
`;

const Rect8Column = styled.div`
  flex-direction: column;
  margin-bottom: -123px;
  display: flex;
`;

const Form1Stack = styled.div`
  width: 278px;
  height: 255px;
  margin-top: 29px;
  margin-left: 41px;
  flex: 0 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const Icon20Stack = styled.div`
  width: 25px;
  height: 33px;
  margin-top: 516px;
  margin-left: 15px;
  position: relative;
`;

export default Feedback;
