import React, { Fragment } from "react";
import names from "../assets/images/healthcare-and-medical1.png";

const SideNavigation = props => {
  return (
    <Fragment>
      <div className="sidenav">
        <div className="sidenav-img">
          <img src={names} alt="" />
          <p style={{ textAlign: "center" }}>Harsh Kumar</p>
        </div>
        <a href="#about">Your Orders</a>
        <a href="#services">Your Treatment Plan</a>
        <a href="#clients">Your Profile</a>
        <a href="#contact">About us</a>
        <a href="#contact">Contact us</a>
      </div>
      <style jsx>{`
        .sidenav {
          width: 220px;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          background-color: #ff5e0073;
          overflow-x: hidden;
          padding-top: 20px;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
        }
        .sidenav-img {
          border-bottom: 0.5px solid #e2dede;
          padding-bottom: 1em;
          margin-bottom: 1em;
        }

        .sidenav-img img {
          width: 30px;
          border-radius: 300px;
          border-top: 0.5px solid #ed5e07;
          border-bottom: 0.5px solid #ed5e07;
          padding: 15px;
          margin-left: 4.5em;
          text-align: center;
        }
        .sidenav a {
          padding: 6px 8px 6px 16px;
          text-decoration: none;
          font-size: 15px;
          color: #818181;
          display: block;
          border-bottom: 0.5px solid #e2dede;
          padding: 1em 1em;
        }

        .sidenav a:hover {
          color: #ed5e07;
        }

        @media screen and (max-height: 450px) {
          .sidenav {
            padding-top: 15px;
          }
          .sidenav a {
            font-size: 18px;
          }
        }
      `}</style>
    </Fragment>
  );
};

export default SideNavigation;
