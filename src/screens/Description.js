import React, { Component, Fragment } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { get_categories } from "../redux/action-creators/categories";
import {
  decode_token,
  avatarToText,
  calculateDiscount
} from "../helpers/users";
import { get_single_user } from "../redux/action-creators";
import {
  get_service_by_category,
  get_service
} from "../redux/action-creators/services";

class Description extends Component {
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
      get_service,
      get_single_user,
      match: {
        params: { id, service_id }
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
    get_service(service_id, token);
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
      service,
      service_error
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
          {service ? (
            <section className="card-section">
              <div className="one-card">
                <div className="card-info">
                  <h4 className="card-info-title">{service.service.title}</h4>
                  <p>
                    <span className="price-now">
                      shs
                      {calculateDiscount(
                        service.service.price,
                        service.service.discount
                      )}
                    </span>
                    <span className="old-price">
                      shs {service.service.price}
                    </span>
                  </p>
                  <div className="card-discount">
                    {service.service.discount}% off
                  </div>
                </div>
                <div className="card-image">
                  {service.service.icon ? (
                    <img src={service.service.icon} alt="" />
                  ) : (
                    avatarToText(service.service.title)
                  )}
                  <p className="order-now">Order Now</p>
                </div>
              </div>
              <div className="description">
                <div className="d-address">
                  <h4>Description</h4>
                  <p className="d-details">{service.service.description}</p>
                </div>
              </div>
              <button className="select-section">
                <span>Have any Questions? Contact us</span>
                <i className="zmdi zmdi-chevron-right"></i>
              </button>
            </section>
          ) : null}
        </div>
        <style jsx>{`

      .d-address {
          font-size: 12px;
          text-align: left;
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          padding: 1em;
          border-radius: 8px;
          margin: .5em auto;
        }
        .questions {
          background: red;
          border-radius: 5px;
          color: white;
          text-align: center;
          padding: .5em .5em;
          font-size: 15px;
        }
        .card-section {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          margin: 3em auto;
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
      .select-section {
          -webkit-box-shadow: 0px 0px 2px 0px #777;
          -moz-box-shadow: 0px 0px 2px 0px #777;
          box-shadow: 0px 0px 2px 0px #777;
          border-radius: 3px;
          margin: 0.1em;
          font-size: 18px;
          padding: .3em;
          background: red;
          color: white;
          text-transform: upperCase;
        }
        .select-section i {
          float: right;
          padding-right: 2em;
          font-size: 18px;
        }
        .main {
          font-size: 28px;
          padding: 0 4px 0;
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
  service_by_category_error: state.services.service_category_error,
  service: state.services.service,
  service_error: state.services.service_error
});

export default connect(mapStateToProps, {
  get_categories,
  get_single_user,
  get_service_by_category,
  get_service
})(Description);
