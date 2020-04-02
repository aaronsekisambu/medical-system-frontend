import React, { Component, Fragment } from "react";
import HyperModal from "react-hyper-modal";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { get_single_user } from "../redux/action-creators";
import { decode_token, avatarToText } from "../helpers/users";
import { get_order } from "../redux/action-creators/yourOrders";
import { get_product_allocation } from "../redux/action-creators/productAllocations";

class OrderDetails extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0,
    isModalOpen: false
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const {
      history,
      get_single_user,
      get_order,
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
    get_single_user(token, user_id.userId);
    get_order(token, id);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  componentDidUpdate(prevProps) {
    const token = localStorage.getItem("token");
    const { user, get_product_allocation } = this.props;
    if (user !== prevProps.user) {
      get_product_allocation(token, user.user.product_allocation_id);
    }
  }
  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  showHideTabs = e => {
    const { clickHamburger } = this.state;
    e.preventDefault();
    this.setState({ clickHamburger: !clickHamburger });
  };
  viewOrders = e => {
    e.preventDefault(e);
    const {
      history,
      match: {
        params: { id }
      }
    } = this.props;
    history.push(`/YourOrders/ViewOrderDetails/${id}/ViewOrderDetails`);
  };
  deleteConfirmation = e => {
    e.preventDefault();
    this.setState({ isModalOpen: true });
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });
  confirm = () => {
    const token = localStorage.getItem("token");
    const { history } = this.props;
    const { schedule, date } = this.state;
    history.push("/YourOrders");
  };
  render() {
    const { user, order, allocations } = this.props;
    const { clickHamburger, width, isModalOpen } = this.state;
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
          <section className="card-section">
            {order ? (
              <div className="one-card">
                <div className="one-card-section-one">
                  <div className="card-image">
                    {order.order.service.icon ? (
                      <img src={order.order.service.icon} alt="" />
                    ) : (
                      <div className="avatar-text">
                        {avatarToText(order.order.service.title)}
                      </div>
                    )}
                  </div>
                  <div className="card-info">
                    <h4 className="card-info-title">
                      {order.order.service.title}
                    </h4>
                    <p>
                      <span className="date-now">
                        Scheduled - 25 - Jan - 2020
                      </span>
                    </p>
                  </div>
                </div>
                <button className="buy-it-again">
                  <span>Buy it again</span>
                  <i className="zmdi zmdi-chevron-right"></i>
                </button>
              </div>
            ) : null}
            {user ? (
              <div className="d-address">
                <h4>CONFIRM DELIVERY ADDRESS</h4>
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
            <button
              className="select-section"
              onClick={e => this.viewOrders(e)}
            >
              <span>View Orders</span>
              <i className="zmdi zmdi-chevron-right"></i>
            </button>
            <button
              className="select-section"
              onClick={e => this.deleteConfirmation(e)}
            >
              <span>Cancel Order</span>
              <i className="zmdi zmdi-chevron-right"></i>
            </button>
            <button className="select-section">
              <span>View Order Invoice</span>
              <i className="zmdi zmdi-chevron-right"></i>
            </button>
            <button className="select-section">
              <span>View Reports</span>
              <i className="zmdi zmdi-chevron-right"></i>
            </button>
            <button className="select-section">
              <span>Give feedback</span>
              <i className="zmdi zmdi-chevron-right"></i>
            </button>
          </section>
        </div>
        {isModalOpen ? (
          <HyperModal isOpen={isModalOpen} requestClose={this.closeModal}>
            <div style={{ margin: "4em 0", textAlign: "center" }}>
              <h3 style={{ color: "grey" }}>
                Are you sure you want to <strong>cancel order</strong>?
              </h3>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <button
                  onClick={this.confirm}
                  style={{
                    background: "green",
                    padding: ".5em .7em",
                    borderRadius: "3px",
                    color: "white",
                    fontSize: "20px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  Yes
                </button>
                <button
                  onClick={this.closeModal}
                  style={{
                    background: "red",
                    padding: "0.5em .7em",
                    borderRadius: "3px",
                    color: "white",
                    fontSize: "20px",
                    border: "none",
                    cursor: "pointer"
                  }}
                >
                  No
                </button>
              </div>
            </div>
          </HyperModal>
        ) : null}
        <style jsx>{`
        .style__hyper-modal-wrapper___3sRTj .style__hyper-modal-content-wrapper___1-Dl8 {
            width: 80%;
            height: 30%;
            padding: 1em;
            }
          .add:hover {
            background: #115101 !important;
          }
          .confirm:hover {
            background: #9d0101 !important;
          }

        .city-state-title{
          font-weight: bolder;
          padding-right: 4px;
        }

        .avatar-text {
            border-radius: 300px;
            text-align: center;
            padding: 0.5em .5em;
            font-size: 50px;
            text-transform: uppercase;
            font-weight: bolder;
          }
        .one-card {
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          margin: 0.2em;
          display: flex;
          border-radius: 8px;
          flex-direction: column;
          justify-content: start;  
        }
        .buy-it-again {
          font-size: 15px;
          padding: .3em;
          background: orange;
          color: white;
        }
        .buy-it-again i {
          float: right;
          padding-right: 2em;
          font-size: 18px;
        }
        .one-card-section-one {
          display: flex;
        }
        .card-section {
          display: flex;
          flex-wrap: wrap;
          margin: .5em auto;
          flex-direction: column;
        }
        .card-info-title {
          font-size: 20px;
          padding: 0;
          margin: 0;
        }
        .date-now {
          padding; 0;
          margin: 0;
          font-weight: bold;
          text-align: left;
          color: green;
        }
        .card-image img {
          width: 100px;
          height: 100px;
          padding: 0 1em;
          margin: 0.4em;
          background: grey;
        }
        .card-info {
          color: black;
          padding: 1.2em 0;
          font-size: 15px;
          
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
          margin: 0.5em;
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
          padding: 0 5px 0;
        }
      `}</style>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  user: state.authentication.single_user,
  order: state.yourOrders.order,
  allocations: state.productAllocations.product_allocation
});

export default connect(mapStateToProps, {
  get_single_user,
  get_order,
  get_product_allocation
})(OrderDetails);
