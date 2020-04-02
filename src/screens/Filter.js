import React, { Component, Fragment } from "react";
import Navigation from "./Navigation";
import { decode_token, avatarToText } from "../helpers/users";
import { connect } from "react-redux";
import {
  get_orders,
  get_orders_by_user
} from "../redux/action-creators/yourOrders";
import { get_service_by_category } from "../redux/action-creators/services";
import { get_single_user } from "../redux/action-creators";

class Filter extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const {
      history,
      get_single_user,
      get_orders,
      get_orders_by_user
    } = this.props;
    const token = localStorage.getItem("token");
    const user_id = decode_token(token);
    if (!token) {
      history.push("/login");
      this.setState({
        no_account: "Invalid credentials please create account or login"
      });
    }
    get_single_user(token, user_id.userId);
    get_orders(token);
    get_orders_by_user(token);
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
    const { user, orders } = this.props;
    const { clickHamburger, width } = this.state;
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
            page="YourOrders"
          />
        ) : null}

        <div
          className="main"
          style={{ marginTop: clickHamburger && width <= 425 ? "13em" : "3em" }}
        >
          <section className="filter-section">
            <div className="apply-btn">
              <button>Apply</button>
            </div>
            <div className="order-category">
              <p>Order type</p>
              <ul>
                <li>
                  <label>
                    <input type="radio" name="orders" value="Orders" />{" "}
                    <span>All Orders</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="orders"
                      value="Open Orders"
                    />{" "}
                    <span>Open Orders</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="orders"
                      value="Cancelled Orders"
                    />{" "}
                    <span>Cancelled Orders</span>
                  </label>
                </li>
              </ul>
            </div>
            <div className="order-category">
              <p>Time filter</p>
              <ul>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="time"
                      value="Last 30 days"
                    />{" "}
                    <span>Last 30 days</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input
                      type="radio"
                      name="time"
                      value="Last 6 months"
                    />{" "}
                    <span>Last 6 months</span>
                  </label>
                </li>
                <li>
                  <label>
                    <input type="radio" name="time" value="2020" />{" "}
                    <span>2020</span>
                  </label>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <style jsx>{`
          .filter-section {
            display: flex;
            flex-direction: column;
          }
          .apply-btn {
            float: right;
            width: 70%;
            cursor: pointer;
            margin: 1em auto;
          }
          .apply-btn button {
            float: right;
            background: red;
            color: white;
            padding: 0.3em 0.8em;
            border-radius: 3px;
            font-size: 18px;
          }
          .order-category {
            margin: 0 auto;
          }
          .order-category ul {
            list-style-type: none;
            padding: 0.5em auto;
            margin: 0.5em auto;
          }
          .order-category li {
            padding: 0;
            margin: 0;
          }
          .order-category label span {
            padding: 0;
            margin: 0;
            font-size: 15px;
          }

          .order-category p {
            padding: 0.3em 0;
            margin: 0;
            font-size: 15px;
            font-weight: bolder;
          }

          .main {
            font-size: 28px; /* Increased text to enable scrolling */
            padding: 0 5px 0;
          }
        `}</style>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication.single_user,
  orders: state.yourOrders.orders,
  orders_by_user: state.yourOrders.orders_by_user,
  service_by_category: state.services.service_category
});

export default connect(mapStateToProps, {
  get_single_user,
  get_orders,
  get_orders_by_user,
  get_service_by_category
})(Filter);
