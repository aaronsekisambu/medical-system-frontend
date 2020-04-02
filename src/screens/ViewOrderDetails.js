import React, { Component, Fragment } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import {
  decode_token,
  calculateDiscount,
  avatarToText,
  calculateTotal,
  calculateSavings
} from "../helpers/users";
import { get_single_user } from "../redux/action-creators";
import { city } from "../redux/action-creators/cities";
import { state } from "../redux/action-creators/states";
import { get_service } from "../redux/action-creators/services";
import { get_product_allocation } from "../redux/action-creators/productAllocations";
import { get_schedule_by_user } from "../redux/action-creators/schedules";
import { create_order } from "../redux/action-creators/yourOrders";
import { get_order } from "../redux/action-creators/yourOrders";

class ViewOrderDetails extends Component {
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
      match: {
        params: { id }
      },
      get_order
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
    get_order(token, id);
  }
  // componentDidUpdate(prevProps) {
  //   const token = localStorage.getItem("token");
  //   const { order, get_service } = this.props;
  //   if (order !== prevProps.order) {
  //     get_service(order.order.service.id, token);
  //   }
  // }

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
      order,
      user,
      service,
      service_error,
      allocations,
      match: {
        params: { id }
      }
    } = this.props;
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
            page={`YourOrders/OrderDetails/${id}`}
          />
        ) : null}

        <div
          className="main"
          style={{ marginTop: clickHamburger && width <= 425 ? "13em" : "3em" }}
        >
          <section className="card-section">
            <div className="d-address">
              <table className="table-info">
                <tbody>
                  <tr>
                    <td>Order Date :</td>
                    <td>26-Jan-2020</td>
                  </tr>
                  <tr>
                    <td>Order # :</td>
                    <td>{order ? order.order.id : null}</td>
                  </tr>
                  <tr>
                    <td>Order Total :</td>
                    <td>₹ 5495.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="d-address">
              <h4>Payment Method </h4>
              <p className="d-details">Cash</p>
            </div>
            <div className="d-address">
              <h4>Order Summary </h4>
              <table className="table-info">
                <tbody>
                  <tr>
                    <td>Items :</td>
                    <td>₹ 749.00</td>
                  </tr>
                  <tr>
                    <td>Total before Tax :</td>
                    <td>₹ 749.00</td>
                  </tr>
                  <tr>
                    <td>Tax :</td>
                    <td>₹ 250.00 </td>
                  </tr>
                  <tr>
                    <td>Total :</td>
                    <td>₹ 999.00</td>
                  </tr>
                  <tr>
                    <td>Discount :</td>
                    <td>₹ {order ? order.order.service.discount : null}%</td>
                  </tr>
                  <tr style={{ fontWeight: "bolder" }}>
                    <td>Order Total :</td>
                    <td>₹ 999.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
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
            margin: 0.5em;
          }

          .table-info td,
          .table-info th {
            border: 1px solid #ddd;
            padding: 8px;
            border-radius: 3px;
          }
          .table-info tr:nth-child(even) {
            background-color: #f2f2f2;
          }

          .table-info tr:hover {
            background-color: #ddd;
          }

          .table-info th {
            padding-top: 12px;
            padding-bottom: 12px;
            text-align: left;
            background-color: #4caf50;
            color: white;
          }
          .table-info {
            font-size: 20px;
            padding: 1em 0;
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
  single_city: state.cities.city,
  single_state: state.states.state,
  service: state.services.service,
  service_error: state.services.service_error,
  schedules_by_user: state.schedules.schedule_by_user,
  allocations: state.productAllocations.product_allocation,
  order: state.yourOrders.order
});

export default connect(mapStateToProps, {
  get_single_user,
  state,
  city,
  get_service,
  get_product_allocation,
  get_schedule_by_user,
  create_order,
  get_order
})(ViewOrderDetails);
