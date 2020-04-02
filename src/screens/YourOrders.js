import React, { Component, Fragment } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { get_single_user } from "../redux/action-creators";
import { decode_token, avatarToText } from "../helpers/users";
import {
  get_orders,
  get_orders_by_user
} from "../redux/action-creators/yourOrders";
import { get_service_by_category } from "../redux/action-creators/services";
import { Link } from "react-router-dom";
class YourOrders extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0,
    your_orders: [],
    days: [],
    time: [],
    user_schedule: [],
    keyword: ""
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

  // componentDidUpdate(prevProps) {
  //   const { orders_by_user } = this.props;
  //   if (orders_by_user !== prevProps.orders_by_user) {
  // }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };
  searchQuery = query => {
    this.setState({ keyword: query });
  };
  showHideTabs = e => {
    const { clickHamburger } = this.state;
    e.preventDefault();
    this.setState({ clickHamburger: !clickHamburger });
  };
  goToFilter = e => {
    e.preventDefault(e);
    const { user, history } = this.props;
    history.push(`/filter/${user.user.id}`);
  };
  render() {
    const { user, orders, orders_by_user } = this.props;
    const { clickHamburger, width, user_schedule, keyword } = this.state;
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
          <h1
            style={{
              fontSize: "25px",
              margin: "3em  auto  0 1em",
              color: "grey"
            }}
          >
            Your Orders
          </h1>
          <section className="card-section">
            <div className="filter-section">
              <span className="search-filed" onChange={this.searchQuery}>
                <i className="zmdi zmdi-search"></i>
                <input type="text" placeholder="Search all Orders" />
              </span>
              <span className="filter-text" onClick={e => this.goToFilter(e)}>
                filter <i className="zmdi zmdi-chevron-right"></i>
              </span>
            </div>
            <h1 style={{ fontSize: "15px", padding: "0 1em", color: "grey" }}>
              Last 2 months
            </h1>
            {orders_by_user ? (
              orders_by_user.orders.length === 0 ? (
                <div style={{ color: "grey", fontWeight: "bolder" }}>
                  No Placed orders at the moment <br /> Place some orders to
                  continue.
                  <button>Click here to place an order</button>
                </div>
              ) : (
                orders_by_user.orders.map(order => (
                  <Link
                    to={`/YourOrders/OrderDetails/${order.id}`}
                    key={order.id}
                  >
                    <div className="one-card">
                      <div className="card-image">
                        {order.icon ? (
                          <img src={order.icon} alt="" />
                        ) : (
                          <div className="avatar-text">
                            {avatarToText("Aaron")}
                          </div>
                        )}
                      </div>
                      <div className="card-info">
                        <h4 className="card-info-title">
                          {order.service.title}
                        </h4>
                        <h4>Scheduled </h4>
                        {order.schedules.length !== 0 ? (
                          order.schedules.map(sch =>
                            sch.schedules.map((t, ind) => (
                              <ul key={ind}>
                                <li>{`${sch.day} ${t}`}</li>
                              </ul>
                            ))
                          )
                        ) : (
                          <p style={{ color: "red" }}>
                            You have no schedules at the moment
                          </p>
                        )}
                      </div>
                      <div className="card-discount">
                        <i className="zmdi zmdi-chevron-right"></i>
                      </div>
                    </div>
                  </Link>
                ))
              )
            ) : null}
          </section>
        </div>
        <style jsx>{`
          a {
            text-decoration: none;
          }
      .filter-text i {
        font-size: 20px;
        padding: 0 .5em;
      }
        .filter-text {
          margin: 0;
          padding: .2em;
          font-size: 28px;
          color: #f34500;
          border-left: 1px solid;
        }
        .search-filed {
          color: grey;
          padding-left: .5em;
        }
        .avatar-text {
            border-radius: 300px;
            text-align: center;
            padding: 0.5em .5em;
            font-size: 50px;
            text-transform: uppercase;
            font-weight: bolder;
          }
        .filter-section {
          background: white;
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          margin: 0.2em;
          border-radius: 10px;
          padding: .3em;
          display: flex;
          justify-content: space-between; 
        }
        .filter-section input {
          padding: 0;
          height: 35px;
          outline: none;
          border: none;
          font-size: 20px;
          margin: 0 0 0 1em;
        }
        .one-card {
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          margin: 0.2em;
          display: flex;
          border-radius: 10px;
          justify-content: space-between;  
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
        .card-discount {
          color: orange;
          padding: .4em .4em;
          font-size: 60px;
          cursor: pointer;
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
})(YourOrders);
