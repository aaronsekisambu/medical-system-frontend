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

class OrderConfirmation extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0,
    currentSelectedSchedules_ids: [],
    user_schedules: []
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const {
      history,
      get_single_user,
      match: {
        params: { service_id }
      },
      get_service,
      get_schedule_by_user
    } = this.props;
    const token = localStorage.getItem("token");
    const user_id = decode_token(token);
    if (!token) {
      history.push("/login");
      this.setState({
        no_account: "Invalid credentials please create account or login"
      });
    }
    get_schedule_by_user(token);
    get_single_user(token, user_id.userId);
    get_service(service_id, token);
  }
  componentDidUpdate(prevProps) {
    const token = localStorage.getItem("token");
    const { user, get_product_allocation, schedules_by_user } = this.props;
    if (user !== prevProps.user) {
      get_product_allocation(token, user.user.product_allocation.id);
      const combineSchedules = schedules_by_user.schedules
        .map(d => d.schedules.map(s => `${d.day} ${s}`))
        .reduce((acc, val) => acc.concat(val), []);
      const schedule_ids = schedules_by_user.schedules.map(id => id.id);
      this.setState({ currentSelectedSchedules_ids: schedule_ids });
      this.setState({ user_schedules: combineSchedules });
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
  createOrder = e => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const {
      service: { service },
      user: { user },
      create_order
    } = this.props;
    const { product_category, id } = service;
    const { currentSelectedSchedules_ids, user_schedules } = this.state;
    const service_amount = calculateDiscount(
      calculateTotal(service.price, user_schedules.length),
      service.discount
    );
    create_order(
      token,
      id,
      product_category.id,
      user.id,
      service_amount,
      currentSelectedSchedules_ids,
      user.product_allocation.id
    );
  };
  render() {
    const { user, service, service_error, allocations } = this.props;
    const {
      clickHamburger,
      width,
      user_schedules
    } = this.state;
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
          />
        ) : null}

        <div
          className="main"
          style={{ marginTop: clickHamburger && width <= 425 ? "13em" : "3em" }}
        >
          <section className="card-section">
            {service ? (
              <section>
                <div className="one-card">
                  <div className="card-info">
                    <h4 className="card-info-title">{service.service.title}</h4>
                    <p>
                      <span className="price-now">
                        ₹
                        {calculateDiscount(
                          service.service.price,
                          service.service.discount
                        )}
                      </span>
                      <span className="old-price">
                        ₹ {service.service.price}
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
                  </div>
                </div>
                <div className="description">
                  <table className="table-info">
                    <tbody>
                      <tr>
                        <td>MRP Price :</td>
                        <td>{service.service.price}</td>
                      </tr>
                      <tr>
                        <td>Discount :</td>
                        <td>{service.service.discount}%</td>
                      </tr>
                      <tr>
                        <td>Quantity :</td>
                        <td>{user_schedules.length}</td>
                      </tr>
                      <tr>
                        <td>MRP Total :</td>
                        <td>
                          ₹
                          {calculateTotal(
                            service.service.price,
                            user_schedules.length
                          )}
                        </td>
                      </tr>
                      <tr>
                        <td>To be Paid :</td>
                        <td>
                          ₹
                          {calculateDiscount(
                            calculateTotal(
                              service.service.price,
                              user_schedules.length
                            ),
                            service.service.discount
                          )}
                        </td>
                      </tr>
                      <tr style={{ border: "1px solid grey", color: "green" }}>
                        <td>Total Savings:</td>
                        <td>
                          ₹
                          {calculateSavings(
                            calculateTotal(
                              service.service.price,
                              user_schedules.length
                            ),
                            calculateDiscount(
                              calculateTotal(
                                service.service.price,
                                user_schedules.length
                              ),
                              service.service.discount
                            )
                          )}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
            ) : (
              <div
                className="show-error"
                style={{
                  background: service ? "transparent" : "red",
                  display: service ? "none" : "block"
                }}
              >
                {service_error}
              </div>
            )}
            <div className="description">
              {user ? (
                <div className="d-address">
                  <h4>Confirmed Delivery Address</h4>
                  <span className="city-state-title">Apartment:</span>
                  {allocations ? (
                    allocations.Allocation.name
                  ) : (
                    <span style={{ color: "red" }}>No apartment</span>
                  )}
                  <br />
                  <span>
                    <span className="city-state-title">City:</span>
                    {user.user.city_id.city}
                  </span>
                  <br />
                  <span>
                    <span className="city-state-title">State:</span>
                    {user.user.state_id.state}
                  </span>
                  <br />
                  <span className="city-state-title">Address:</span>
                  {user.user.address}
                  <br />
                  <span className="city-state-title">Pin Code:</span>
                  {user.user.pin_code} <br />
                  <span className="city-state-title">Mobile:</span>
                  {user.user.mobile_number} <br />
                </div>
              ) : null}
              <div className="confirmed-schedule">
                <h4>Confirmed Schedule</h4>
                {user_schedules ? (
                  user_schedules.length !== 0 ? (
                    user_schedules.map((schedule, index) => (
                      <ul className="schedules" key={index}>
                        <li>{schedule}</li>
                      </ul>
                    ))
                  ) : (
                    <p>
                      You have no schedule selected so you cannot continue,
                      please contact the admin
                    </p>
                  )
                ) : null}
              </div>
              {service ? (
                <div className="checkout-last">
                  <div className="total-payable">
                    <p className="payable">Total Payable</p>
                    <p className="amount-paid">
                      ₹
                      {calculateDiscount(
                        calculateTotal(
                          service.service.price,
                          user_schedules.length
                        ),
                        service.service.discount
                      )}
                    </p>
                  </div>
                  <div className="checkout-section">
                    <button
                      className="questions"
                      onClick={e => this.createOrder(e)}
                    >
                      CHECKOUT
                    </button>
                  </div>
                </div>
              ) : null}
            </div>
          </section>
        </div>
        <style jsx>{`

        h4 {
          font-size: 17px;
          padding: 0;
          margin: .5em 0;
        }
          .city-state-title{
          font-weight: bolder;
          padding-right: 4px;
        }
          .show-error {
            font-family: Arial;
            font-weight: bolder;
            align-self: center;
            font-size: 12px;
            padding: 1em;
            background: red;
            color: white;
            border-radius: 2px;
          }
        .checkout-last {
          display: flex;
          justify-content: space-between;
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          padding: 1em;
          border-radius: 8px;
          margin: .5em auto;
        }
        .payable {
          font-size: 15px;
          padding: 0;
          margin: 0;
        }
        .amount-paid {
          font-size: 14px;
          font-weight: bolder;
          padding: 0;
          margin: 0;
        }
        .confirmed-schedule {
          font-size: 15px;
          text-align: left;
          padding: 0;
          margin: 0;
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          padding: 1em;
          border-radius: 8px;
          margin: .5em auto;
        }

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
      .table-info td, .table-info th {
          border: 1px solid #ddd;
          padding: 8px;
          border-radius: 3px;
      }
      .table-info tr:nth-child(even){
          background-color: #f2f2f2;
          }

      .table-info tr:hover {
        background-color: #ddd;
        }

        .table-info th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #4CAF50;
          color: white;
        }
        .description {
          width: 100%;
          margin: 0 auto;
        }
        .table-info {
          font-size: 20px;
          padding: 1em 0;
          width: inherit;
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
  allocations: state.productAllocations.product_allocation
});
export default connect(mapStateToProps, {
  get_single_user,
  state,
  city,
  get_service,
  get_product_allocation,
  get_schedule_by_user,
  create_order
})(OrderConfirmation);
