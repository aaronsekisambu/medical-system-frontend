import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import { get_single_user } from "../redux/action-creators";
import {
  decode_token,
  avatarToText,
  convertTextToSlug
} from "../helpers/users";
import { connect } from "react-redux";
import { get_services } from "../redux/action-creators/services";
import { get_categories } from "../redux/action-creators/categories";
import Calendar from "./calendar/Calendar";
import { get_order_by_nurse } from "../redux/action-creators/yourOrders";

class LandingPageNurse extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0,
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const token = localStorage.getItem("token");
    const {
      history,
      get_single_user,
      get_services,
      get_categories,
      categories_error,
    } = this.props;
    if (!token) {
      history.push("/Signup");
      this.setState({
        no_account: "Invalid credentials please create account or login"
      });
    }
    const user_id = decode_token(token);
    get_single_user(token, user_id.userId);
    get_services(token);
    get_categories(token);
  }

  componentDidUpdate(prevProps) {
    const { user, get_order_by_nurse, order_by_nurse } = this.props;
    const token = localStorage.getItem("token");
    if (user !== prevProps.user) {
      get_order_by_nurse(token, user.user.id);
    }
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
    const { clickHamburger, width } = this.state;
    const { user, services, categories, order_by_nurse } = this.props;
    console.log("order_by_nurse ---->", order_by_nurse);
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
          style={{ marginTop: clickHamburger && width <= 425 ? "14em" : "5em" }}
        >
          <section className="card-section">
            <Calendar order_by_nurse={order_by_nurse ? order_by_nurse.orders.map(order => order.schedules.map(sch => sch.day))[0][0]: null} />
          </section>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
          }
          .card-section {
            display: flex;
            flex-wrap: wrap;
            margin: 1em auto;
            justify-content: center;
          }
          .one-card,
          .two-card {
            background: white;
            -webkit-box-shadow: 0px 0px 4px 0px #777;
            -moz-box-shadow: 0px 0px 4px 0px #777;
            box-shadow: 0px 0px 4px 0px #777;
            width: 300px;
            margin: 0.2em;
          }
          .one-card img {
            width: 300px;
            height: 200px;
            object-fit: cover;
          }
          .one-card:hover {
            transform: scale(1.05);
          }
          .avatar-text {
            border-radius: 300px;
            text-align: center;
            padding: 0.5em 1em;
            font-size: 63px;
            text-transform: uppercase;
            font-weight: bolder;
          }
          .card-info,
          .card-info-two {
            background-color: white;
            color: black;
            text-align: center;
            padding: 1px;
            font-size: 18px;
            text-transform: capitalize;
            animation-name: example;
            animation-duration: 15s;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
          }

          .card-info-two {
            background: #ffc10742;
            animation-duration: 20s;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
            animation-timing-function: ease-in-out;
            animation-fill-mode: both;
          }

          .main {
            font-size: 28px; /* Increased text to enable scrolling */
          }
          @keyframes example {
            0% {
              background-color: #01738c;
            }
            25% {
              background-color: #5d018c;
            }
            50% {
              background-color: #903500;
            }
            100% {
              background-color: #248c01;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  user: state.authentication.single_user,
  services: state.services.services,
  categories: state.categories.new_categories,
  categories_error: state.categories.new_categories_error,
  order_by_nurse: state.yourOrders.orders_by_nurse
});
export default connect(mapStateToProps, {
  get_single_user,
  get_services,
  get_categories,get_order_by_nurse
})(LandingPageNurse);
