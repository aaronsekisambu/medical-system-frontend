import React, { Fragment, Component } from "react";
import { avatarToText } from "../helpers/users";
import { Link, withRouter } from "react-router-dom";

class Navigation extends Component {
  showYourOrders = e => {
    const { history } = this.props;
    e.preventDefault();
    history.push("/YourOrders/");
  };
  render() {
    const {
      menu,
      home,
      contact,
      about,
      notifications,
      steps,
      plan,
      orders,
      details,
      showTabs,
      clickHamburger,
      width,
      user_name,
      profile_image,
      page,
      match: { url }
    } = this.props;
    return (
      <Fragment>
        <section
          className="navigation"
          style={{
            flexDirection: clickHamburger && width <= 425 ? "column" : "row",
            flexWrap: clickHamburger && width <= 425 ? "wrap" : "no-wrap"
          }}
        >
          <div className="menu">
            <Link to={`${!page ? url : `/${page}`}`} className="page">
              <i className="zmdi zmdi-caret-left-circle"></i>
            </Link>
            <i className={`zmdi zmdi-${menu}`} onClick={e => showTabs(e)}></i>
          </div>
          {clickHamburger ? (
            <div className="navbar">
              <div className={home ? "menu-items" : "hide-it"}>
                {width <= 425 ? <i className={`zmdi zmdi-${home}`}></i> : null}
              </div>
              <div
                className={orders ? "menu-items" : "hide-it"}
                onClick={e => this.showYourOrders(e)}
              >
                {width <= 425 ? <i className="zmdi zmdi-mail-send"></i> : null}
                {orders}
              </div>
              <div className={plan ? "menu-items" : "hide-it"}>
                {width <= 425 ? (
                  <i className="zmdi zmdi-format-list-numbered"></i>
                ) : null}
                {plan}
              </div>
              <div className={about ? "menu-items" : "hide-it"}>
                {width <= 425 ? <i className="zmdi zmdi-info"></i> : null}
                {about}
              </div>
              <div className={contact ? "menu-items" : "hide-it"}>
                {width <= 425 ? (
                  <i className="zmdi zmdi-smartphone-info"></i>
                ) : null}
                {contact}
              </div>
              <div className={details ? "menu-items" : "hide-it"}>
                {width <= 425 ? (
                  <i className="zmdi zmdi-chevron-left"></i>
                ) : null}
                {details}
              </div>
              <div className={steps ? "menu-items" : "hide-it"}>
                <span>{steps}</span>
              </div>
              <div className={notifications ? "menu-items" : "hide-it"}>
                {width <= 425 ? (
                  <i className={`zmdi zmdi-${notifications}`}></i>
                ) : null}
                {notifications}
              </div>
            </div>
          ) : null}
          <div className="avatar-img">
            <p style={{ textAlign: "center" }}>{user_name}</p>
            {profile_image ? (
              <img src={profile_image} alt="" />
            ) : (
              <span>{avatarToText(user_name)}</span>
            )}
          </div>
        </section>
        <style jsx>
          {`
            a.page {
              color: white;
              text-transform: none;
              padding: 0 1em;
            }
            a.page:hover {
              transform: scale(1.5);
              color: #00ffae;
            }
            .hide-it {
              display: none;
            }
            .navigation {
              display: flex;
              overflow: hidden;
              background-color: #ed5e07;
              position: fixed;
              padding: 0 1em;
              top: 0;
              width: 100%;
              z-index: 1;
              justify-content: space-between;
            }
            .menu {
              padding: 1em 0;
              color: white;
              font-size: 20px;
              z-index: 1;
            }
            .menu-items {
              padding: 1.5em 0.5em;
              color: white;
              font-size: 15px;
              background: transparent;
            }
            .menu-items:hover {
              background: #004c34;
            }
            .notifications {
              width: 50%;
              padding: 1em 0;
              color: white;
              font-size: 20px;
            }
            .backward,
            .steps,
            .chevron-details {
              padding: 1em 0;
              color: white;
              font-size: 20px;
            }

            .navbar {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
            }
            .avatar-img {
              display: flex;
              padding: 1em;
              color: white;
            }
            .avatar-img p {
              padding: 0.5em 0 0;
              margin: 0;
              font-weight: bolder;
            }
            .avatar-img span {
              width: 20px;
              border-radius: 300px;
              font-weight: bolder;
              background: #05768a;
              padding: 10px;
              margin: 0 1em;
              text-align: center;
            }

            .avatar-img img {
              width: 20px;
              border-radius: 300px;
              border-top: 0.5px solid white;
              border-bottom: 0.5px solid white;
              padding: 10px;
              margin: 0 1em;
              text-align: center;
            }
            .nav-items a {
              padding: 6px 8px 6px 16px;
              text-decoration: none;
              font-size: 15px;
              color: #818181;
              display: block;
              border-bottom: 0.5px solid #e2dede;
              padding: 1em 1em;
            }

            .nav-items a:hover {
              color: #ed5e07;
            }
            @media all and (max-width: 425px) and (min-width: 320px) {
              .navigation {
                display: flex;
                flex-direction: column;
              }
              .menu-items {
                width: 50%;
                font-size: 16.5px;
                padding: 1em 0.5em;
              }
              .menu-items i {
                margin: 0 1em;
              }
              .navbar {
                justify-content: center;
              }
              .avatar-img {
                justify-content: space-between;
              }
            }
          `}
        </style>
      </Fragment>
    );
  }
}

export default withRouter(Navigation);
