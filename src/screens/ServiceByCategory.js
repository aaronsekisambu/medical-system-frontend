import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { get_categories } from "../redux/action-creators/categories";
import {
  decode_token,
  avatarToText,
  calculateDiscount,
  convertTextToSlug
} from "../helpers/users";
import { get_single_user } from "../redux/action-creators";
import { get_service_by_category } from "../redux/action-creators/services";

class ServiceByCategory extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const {
      get_categories,
      history,
      get_service_by_category,
      get_single_user,
      match: {
        params: { id }
      }
    } = this.props;
    const token = localStorage.getItem("token");
    const user_id = decode_token(token);
    if (!token) {
      history.push("/login");
      this.setState({
        no_account: "Invalid credentials please create account or login"
      });
    }
    get_categories(token);
    get_single_user(token, user_id.userId);
    get_service_by_category(id, token);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  showHideTabs = e => {
    const { clickHamburger } = this.state;
    e.preventDefault();
    this.setState({ clickHamburger: !clickHamburger });
  };
  render() {
    const {
      user,
      categories,
      service_by_category,
      service_by_category_error,
      match: {
        params: { type, id }
      }
    } = this.props;
    const { width, clickHamburger } = this.state;
    return (
      <Fragment>
        {user ? (
          <Navigation
            menu="menu"
            orders="Your orders"
            plan="Treatment plan"
            about="About us"
            contact="Contact us"
            showTabs={this.showHideTabs}
            clickHamburger={clickHamburger}
            width={width}
            user_name={`${user.user.first_name} ${user.user.last_name}`}
            profile_image={user.user.profile_image}
            page="HamburgerGrihaSeva"
          />
        ) : null}
        <div
          className="main"
          style={{ marginTop: clickHamburger && width <= 425 ? "13em" : "3em" }}
        >
          {service_by_category ? (
            service_by_category.services.length === 0 ? (
              <div style={{ color: "grey", fontWeight: "bolder" }}>
                This category has no service <br /> Check in again after 30 mins
                from now
              </div>
            ) : (
              service_by_category.services.map(service => (
                <section className="card-section" key={service.id}>
                  <div className="one-card">
                    <Link
                      to={`/ServiceByCategory/${convertTextToSlug(
                        type
                      )}/${id}/${convertTextToSlug(service.title)}/${
                        service.id
                      }`}
                    >
                      <div className="card-info">
                        <h4 className="card-info-title">{service.title}</h4>
                        <p>
                          <span className="price-now">
                            ₹
                            {calculateDiscount(service.price, service.discount)}
                          </span>
                          <span className="old-price"> ₹ {service.price}</span>
                        </p>
                        <div className="card-discount">
                          {service.discount}% off
                        </div>
                      </div>
                    </Link>
                    <div className="card-image">
                      {service.icon ? (
                        <img src={service.icon} alt="" />
                      ) : (
                        avatarToText(service.title)
                      )}
                      <Link
                        to={`/ServiceByCategory/${convertTextToSlug(
                          type
                        )}/${id}/${convertTextToSlug(service.title)}/${
                          service.id
                        }/confirmAddress`}
                      >
                        <p className="order-now">Order Now</p>
                      </Link>
                    </div>
                  </div>
                </section>
              ))
            )
          ) : null}
          <div className="footer">
            <div className="footer-items">
              {categories
                ? categories.categories.map(category => (
                    <div className="item-card" key={category.id}>
                      {category.icon ? (
                        <img src={category.icon} alt="" />
                      ) : (
                        <div className="avatar-text">
                          {avatarToText(category.type)}
                        </div>
                      )}
                      <div className="item-card-info">
                        <h4>{category.type}</h4>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
          }
          .footer-items {
            display: flex;
            margin: 0 0.2em;
            overflow-x: auto;
            justify-content: center;
          }
          .item-card {
            background: white;
            -webkit-box-shadow: 0px 0px 4px 0px #777;
            -moz-box-shadow: 0px 0px 4px 0px #777;
            box-shadow: 0px 0px 4px 0px #777;
            width: 100px;
            margin: 0.2em;
            border-radius: 5px;
          }

          .item-card img {
            width: 100px;
            height: 200px;
            object-fit: cover;
          }
          .item-card:hover {
            transform: scale(1.05)
          }
          .item-card-info{
            background-color: #01738c;
            color: white;
            text-align: center;
            text-transform: capitalize;
            padding: 1px;
            font-size: 8px;
          }

          .avatar-text {
            border-radius: 300px;
            text-align: center;
            padding: 0.5em 1em;
            color: black;
            font-size: 16px;
            text-transform: uppercase;
            font-weight: bolder;
          }
        .footer {
          position: fixed;
          left: 0;
          bottom: 0;
          padding: .3em 0;
          width: 100%;
          border-top: 5px solid #ed5e07;
          background-color: #f1f1f1;
          color: white;
          text-align: center;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
        }
        .card-section {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          justify-content: center;
        }
        .card-info-title {
          font-size: 25px;
          padding: 0;
          margin: 0;
        }
        .order-now {
          margin: 0;
          background: green;
          border-radius: 5px;
          color: white;
          padding: .3em .4em;
          font-size: 15px;
          text-align: center;
          cursor: pointer;
        }
        .price-now {
          padding; 0;
          margin: 0;
          font-weight: bold;
          text-align: left;
        }
        .card-discount {
          background: orange;
          border-radius: 4px;
          color:white;
          padding: .2em .4em;
          cursor: pointer;
        }
        .old-price {
          padding: 0;
          padding-left: 1em;
          margin: 0;
          text-decoration: line-through;
        }
        .one-card {
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          margin: 0.2em;
          border-radius: 5px;
        }
        .card-image {
          float: right;
          padding: 0 1em .5em 0;
        }
        .card-image img {
          width: 100px;
          margin: 0.4em;
        }
        .card-info {
          color: black;
          text-align: center;
          padding: 1em;
          font-size: 15px;
          float: left;
        }

        .main {
          /* margin: 46px;  */
          font-size: 28px; 
          /* padding: 0 10px 0; */
        }
      `}</style>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories.new_categories,
  categories_error: state.categories.new_categories_error,
  user: state.authentication.single_user,
  service_by_category: state.services.service_category,
  service_by_category_error: state.services.service_category_error
});
export default connect(mapStateToProps, {
  get_categories,
  get_single_user,
  get_service_by_category
})(ServiceByCategory);
