import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialHeader113 from "../components/MaterialHeader113";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";

function Settings(props) {
  return (
    <Root>
      <MaterialHeader113Column>
        <MaterialHeader113
          style={{
            width: 360,
            height: 56,
            marginTop: 24
          }}
        ></MaterialHeader113>
        <Rect1></Rect1>
      </MaterialHeader113Column>
      <Body>
        <EllipseStack>
          <svg
            viewBox="0 0 859.43 890.30"
            style={{
              top: 12,
              left: 0,
              width: 859,
              height: 890,
              position: "absolute"
            }}
          >
            <ellipse
              strokeWidth={1}
              fill="rgba(255,255,255,1)"
              cx={430}
              cy={445}
              rx={429}
              ry={445}
            ></ellipse>
          </svg>
          <SettingsList>
            <AccountSettings>
              <Expanded>Account Settings</Expanded>
              <SubSettings>
                <EditProfileColumn>
                  <EditProfile>
                    <Text10>Edit Profile</Text10>
                    <Text10Filler></Text10Filler>
                    <IoniconsIcon
                      name="ios-arrow-forward"
                      style={{
                        color: "#ed5e07",
                        fontSize: 30
                      }}
                    ></IoniconsIcon>
                  </EditProfile>
                  <ChangeConnections>
                    <Text11>Change Password</Text11>
                    <Text11Filler></Text11Filler>
                    <IoniconsIcon
                      name="ios-arrow-forward"
                      style={{
                        color: "#ed5e07",
                        fontSize: 30
                      }}
                    ></IoniconsIcon>
                  </ChangeConnections>
                </EditProfileColumn>
                <EditProfileColumnFiller></EditProfileColumnFiller>
                <ProviderSettings>
                  <Text12>Add Address</Text12>
                  <Text12Filler></Text12Filler>
                  <IoniconsIcon
                    name="ios-arrow-forward"
                    style={{
                      color: "#ed5e07",
                      fontSize: 30
                    }}
                  ></IoniconsIcon>
                </ProviderSettings>
              </SubSettings>
            </AccountSettings>
            <Sub2></Sub2>
          </SettingsList>
          <PageName>YOUR PROFILE</PageName>
          <UserInfo>
            <UserName>Harsh{"\n"}Kumar</UserName>
            <UserEmail>harsh@kumar.com</UserEmail>
          </UserInfo>
        </EllipseStack>
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

const Rect1 = styled.div`
  width: 362px;
  height: 24px;
  background-color: rgba(0,0,0,1);
  margin-top: -80px;
`;

const MaterialHeader113Column = styled.div`
  width: 362px;
  flex-direction: column;
  display: flex;
`;

const Body = styled.div`
  width: 360px;
  background-color: #ed5e07;
  flex-direction: column;
  display: flex;
  flex: 1 1 0%;
  align-self: center;
`;

const SettingsList = styled.div`
  width: 358px;
  height: 409px;
  position: absolute;
  bottom: 275px;
  left: 51px;
  flex-direction: column;
  display: flex;
`;

const AccountSettings = styled.div`
  width: 310px;
  height: 165px;
  flex-direction: column;
  display: flex;
  margin-top: 15px;
  align-self: center;
`;

const Expanded = styled.span`
  font-family: Arial;
  color: #121212;
  font-size: 18px;
  font-weight: 700;
  margin-top: -3px;
`;

const SubSettings = styled.div`
  width: 310px;
  height: 118px;
  flex-direction: column;
  display: flex;
  margin-top: 8px;
  align-self: center;
`;

const EditProfile = styled.div`
  width: 290px;
  height: 30px;
  flex-direction: row;
  display: flex;
  align-self: center;
`;

const Text10 = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Text10Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const ChangeConnections = styled.div`
  height: 30px;
  flex-direction: row;
  display: flex;
  margin-top: 11px;
`;

const Text11 = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Text11Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const EditProfileColumn = styled.div`
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
`;

const EditProfileColumnFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: column;
  display: flex;
`;

const ProviderSettings = styled.div`
  width: 290px;
  height: 30px;
  flex-direction: row;
  display: flex;
  align-self: center;
`;

const Text12 = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 6px;
`;

const Text12Filler = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Sub2 = styled.div`
  width: 300px;
  height: 186px;
  margin-top: 24px;
  align-self: center;
`;

const PageName = styled.span`
  font-family: Arial;
  top: 0px;
  left: 85px;
  color: rgba(255,255,255,1);
  position: absolute;
  font-size: 24px;
  font-weight: bold;
`;

const UserInfo = styled.div`
  top: 64px;
  left: 87px;
  height: 125px;
  position: absolute;
  right: 451px;
  flex-direction: column;
  display: flex;
`;

const UserName = styled.span`
  font-family: Arial;
  color: #ed5e07;
  font-size: 30px;
  margin-top: 28px;
  margin-left: 118px;
`;

const UserEmail = styled.span`
  font-family: Arial;
  color: rgba(0,0,0,1);
  font-size: 16px;
  margin-top: 15px;
  margin-left: 118px;
`;

const EllipseStack = styled.div`
  height: 902px;
  margin-top: 34px;
  margin-left: -50px;
  margin-right: -449px;
  position: relative;
`;

export default Settings;
