import React, { Component, Fragment } from "react";
import Navigation from "./Navigation";
import { connect } from "react-redux";
import { decode_token, convertTextToSlug } from "../helpers/users";
import { get_single_user } from "../redux/action-creators";
import { city } from "../redux/action-creators/cities";
import { state } from "../redux/action-creators/states";
import { get_product_allocation } from "../redux/action-creators/productAllocations";

class AddressDetails extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const { history, get_single_user } = this.props;
    const token = localStorage.getItem("token");
    const user_id = decode_token(token);
    if (!token) {
      history.push("/login");
      this.setState({
        no_account: "Invalid credentials please create account or login"
      });
    }
    get_single_user(token, user_id.userId);
  }
  componentDidUpdate(prevProps) {
    const { user, get_product_allocation } = this.props;
    const token = localStorage.getItem("token");
    if (user !== prevProps.user) {
      get_product_allocation(token, user.user.product_allocation.id);
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

  scheduler = e => {
    const {
      history,
      match: {
        params: { type, id, title, service_id }
      }
    } = this.props;
    e.preventDefault();
    history.push(
      `/ServiceByCategory/${convertTextToSlug(type)}/${id}/${convertTextToSlug(
        title
      )}/${service_id}/confirmAddress/ScheduleDetails/`
    );
  };
  render() {
    const { user, single_city, single_state, allocations } = this.props;
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
            page="HamburgerGrihaSeva"
          />
        ) : null}
        <div
          className="main"
          style={{ marginTop: clickHamburger && width <= 425 ? "13em" : "3em" }}
        >
          {user ? (
            <section className="card-section">
              <div className="one-card">
                <div className="card-info">
                  <i className="zmdi zmdi-plus-circle"></i> ADD NEW ADDRESS
                </div>
              </div>
              <div className="delivery-card">
                <div className="address-info">
                  <div className="d-address">
                    <h4>Delivery Address</h4>
                    <span className="city-state-title">Apartment:</span>
                    {allocations ? allocations.Allocation.name : null} <br />
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
                  <div className="radio-section">
                    <input type="radio" name="" defaultChecked />
                    <p className="d-edit">Edit</p>
                  </div>
                </div>
              </div>
              <div className="description">
                <button className="questions" onClick={e => this.scheduler(e)}>
                  ADD SCHEDULE
                </button>
              </div>
            </section>
          ) : null}
        </div>
        <style jsx>{`
        .detailed-directions {
          margin: 0 auto;
          text-align: center;
        }
        .d-edit {
          color: red;
          font-size: 14px;
        }
        .d-address {
          font-size: 14px;
        }
        h4 {
          font-size: 17px;
        }

        .city-state-title{
          font-weight: bolder;
          padding-right: 4px;
        }
        .address-info {
          display: flex;
          justify-content: space-between;
          padding: .4em .6em;
        }
      .delivery-card {
          background: white;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          margin: 0.2em auto;
          width: 100%;
          border-radius: 5px;
        }
        .description {
          text-align: center;
          margin: 0 auto;
        }
        .table-info {
          font-size: 20px;
          text-align: center;
          padding: 1em 0
        }
        .questions {
          background: red;
          border-radius: 5px;
          color: white;
          text-align: center;
          padding: 1em 1em;
          font-size: 20px;
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
          background: red;
          -webkit-box-shadow: 0px 0px 4px 0px #777;
          -moz-box-shadow: 0px 0px 4px 0px #777;
          box-shadow: 0px 0px 4px 0px #777;
          margin: 0.2em auto;
          width: 100%;
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
          color: white;
          text-align: center;
          padding: 1em;
          font-size: 15px;
          cursor: pointer;
          border-radius: 5px;
        }
        .card-info:hover {
          background: orange;
          color: white;
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
  single_city: state.cities.city,
  single_state: state.states.state,
  allocations: state.productAllocations.product_allocation
});

export default connect(mapStateToProps, {
  get_single_user,
  state,
  city,
  get_product_allocation
})(AddressDetails);
