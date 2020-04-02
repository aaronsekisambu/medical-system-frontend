import React, { Fragment, Component } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { cities } from "../redux/action-creators/cities";
import { states } from "../redux/action-creators/states";
import { create_user } from "../redux/action-creators";
import { withRouter } from "react-router-dom";
import { gender_options } from "../helpers/userData";
import { allocations } from "../redux/action-creators/productAllocations";

function validate(
  city_id,
  dob,
  gender,
  address,
  state_id,
  pin_code,
  branch_id
) {
  // true means invalid, so our conditions got reversed
  return {
    city_id: city_id.length === 0,
    dob: dob.length === 0,
    gender: gender.length === 0,
    address: address.length === 0,
    state_id: state_id.length === 0,
    pin_code: pin_code.length === 0,
    branch_id: branch_id.length === 0
  };
}
class CreateAccount extends Component {
  state = {
    touched: {
      city_id: false,
      dob: false,
      otp: false,
      gender: false,
      address: false,
      state_id: false,
      pin_code: false,
      branch_id: false
    },
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    email: this.props.email,
    mobile_number: this.props.mobile_number,
    city_id: 0,
    dob: "",
    password: this.props.password,
    otp: this.props.otp,
    gender: "",
    address: "",
    gender_required: "",
    dob_required: "",
    state_required: "",
    city_required: "",
    address_required: "",
    pin_code_required: "",
    apartment_required: "",
    branch_required: "",
    apartment: "",
    state_id: 0,
    pin_code: "",
    branch_id: 1,
    is_active: 1,
    user_role: [6],
    showPassword: false,
    landmark: "Landmark",
    locality: "locality",
    general_error: ""
  };

  componentDidMount() {
    const { cities, states, allocations } = this.props;
    cities();
    states();
    allocations();
  }
  showHidePassword = e => {
    const { showPassword } = this.state;
    e.preventDefault();
    this.setState({ showPassword: !showPassword });
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSelectedOption = (value, action) => {
    this.setState({ [action.name]: value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  goBack = e => {
    e.preventDefault();
    const { history } = this.props;
    history.push("/Signup");
  };
  onSubmit = async e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      dob,
      gender,
      pin_code,
      otp,
      mobile_number,
      password,
      state_id,
      city_id,
      address,
      user_role,
      branch_id,
      is_active,
      locality,
      landmark,
      apartment
    } = this.state;
    const { create_user, history } = this.props;
    if (gender === "") {
      return this.setState({
        gender_required: "Please state whether your male or female"
      });
    }
    if (dob === "") {
      return this.setState({
        dob_required: "Insert Date of Birth in this form mm/dd/yyyy"
      });
    }
    if (city_id === 0) {
      return this.setState({ state_required: "Insert/Select state" });
    }
    if (state_id === 0) {
      return this.setState({ state_required: "Insert state" });
    }
    if (pin_code === "") {
      return this.setState({ state_required: "Enter 4 digit pin code" });
    }
    if (address === "") {
      return this.setState({ address_required: "State your address" });
    }
    if (apartment === "") {
      return this.setState({
        apartment_required: "A valid apartment is required"
      });
    }
    if (branch_id === 0) {
      return this.setState({ branch_required: "Select Branch" });
    }
    await create_user(
      mobile_number,
      first_name,
      last_name,
      email,
      user_role,
      city_id.value,
      dob,
      gender.value,
      password,
      state_id.value,
      pin_code,
      landmark,
      address,
      branch_id,
      is_active,
      locality,
      apartment.value
    );
    const { user_error, new_user, city_error, state_error } = this.props;
    if (user_error) {
      return this.setState({
        general_error: user_error.data.error
      });
    }
    if (state_error) {
      return this.setState({
        general_error: state_error.data.error
      });
    }
    if (city_error) {
      return this.setState({
        general_error: city_error.data.error
      });
    }
    if (new_user) {
      return history.push("/login");
    }
  };
  render() {
    const { city, state, all_allocations } = this.props;

    const {
      gender,
      address,
      dob,
      city_id,
      state_id,
      pin_code,
      gender_required,
      dob_required,
      state_required,
      city_required,
      address_required,
      apartment_required,
      pin_code_required,
      apartment,
      showPassword,
      general_error,
      otp,
      branch_id
    } = this.state;
    const errors = validate(
      city_id,
      dob,
      gender,
      address,
      state_id,
      pin_code,
      branch_id
    );
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    return (
      <Fragment>
        <section className="background">
          <div className="progress-bar">
            <span className="start">
              <i className="zmdi zmdi-check-circle"></i>
            </span>
            <span className="arrow-one">
              <i className="zmdi zmdi-minus"></i>
            </span>
            <span className="middle">
              <i className="zmdi zmdi-play-circle-outline"></i>
            </span>
            <span className="arrow-two">
              <i className="zmdi zmdi-minus"></i>
            </span>
            <span className="finish">
              <i className="zmdi zmdi-dot-circle-alt"></i>
            </span>
          </div>
          <h3 style={{ textAlign: "center", color: "white" }}>
            Create Account
          </h3>
          {/* Gender */}
          <div className="user-inputs">
            <div className={shouldMarkError("gender") ? "error" : "inputs"}>
              <i className="zmdi zmdi-account-o"></i>
              <Select
                placeholder="Gender"
                options={gender_options}
                className="select-user-on-modal"
                name="gender"
                onChange={this.handleSelectedOption}
                value={gender}
                onBlur={this.handleBlur("gender")}
              />
              <div
                className="show-error"
                style={{
                  background: gender_required === "" ? "transparent" : "red",
                  display: gender_required === "" ? "none" : "block"
                }}
              >
                {gender_required}
              </div>
            </div>
          </div>

          {/*Date of Birth */}
          <div className="user-inputs">
            <div className={shouldMarkError("dob") ? "error" : "inputs"}>
              <i className="zmdi zmdi-calendar"></i>
              <input
                type="date"
                placeholder="DOB"
                onChange={this.onChange}
                name="dob"
                value={dob}
                onBlur={this.handleBlur("dob")}
              />
              <div
                className="show-error"
                style={{
                  background: dob_required === "" ? "transparent" : "red",
                  display: dob_required === "" ? "none" : "block"
                }}
              >
                {dob_required}
              </div>
            </div>
          </div>

          {/* State ID */}
          <div className="user-inputs">
            <div className={shouldMarkError("state_id") ? "error" : "inputs"}>
              <i className="zmdi zmdi-city-alt"></i>
              {state ? (
                <Select
                  placeholder="Select State"
                  options={state.states.map(stat => {
                    return { value: stat.id, label: stat.state };
                  })}
                  className="select-user-on-modal"
                  name="state_id"
                  onChange={this.handleSelectedOption}
                  value={state_id}
                  onBlur={this.handleBlur("state_id")}
                />
              ) : null}
              <div
                className="show-error"
                style={{
                  background: state_required === "" ? "transparent" : "red",
                  display: state_required === "" ? "none" : "block"
                }}
              >
                {state_required}
              </div>
            </div>
          </div>

          {/* City ID */}
          <div className="user-inputs">
            <div className={shouldMarkError("city_id") ? "error" : "inputs"}>
              <i className="zmdi zmdi-city"></i>
              {city ? (
                <Select
                  placeholder="Select City"
                  options={city.cities.map(cit => {
                    return { value: cit.id, label: cit.city };
                  })}
                  className="select-user-on-modal"
                  name="city_id"
                  onChange={this.handleSelectedOption}
                  value={city_id}
                  onBlur={this.handleBlur("city_id")}
                />
              ) : null}
              <div
                className="show-error"
                style={{
                  background: city_required === "" ? "transparent" : "red",
                  display: city_required === "" ? "none" : "block"
                }}
              >
                {city_required}
              </div>
            </div>
          </div>

          {/* Pin Code */}
          <div className="user-inputs">
            <div className={shouldMarkError("pin_code") ? "error" : "inputs"}>
              <i className="zmdi zmdi-account-o"></i>
              <input
                type={showPassword ? "password" : "number"}
                placeholder="Pin Code"
                onChange={this.onChange}
                name="pin_code"
                value={pin_code}
                onBlur={this.handleBlur("pin_code")}
              />
              {/* <i
                className={showPassword ? "zmdi zmdi-eye" : "zmdi zmdi-eye-off"}
                style={{ color: `${showPassword ? "red" : "green"}` }}
                onClick={e => this.showHidePassword(e)}
              ></i> */}
              <div
                className="show-error"
                style={{
                  background: pin_code_required === "" ? "transparent" : "red",
                  display: pin_code_required === "" ? "none" : "block"
                }}
              >
                {pin_code_required}
              </div>
            </div>
          </div>

          {/* Apartment */}
          <div className="user-inputs">
            <div className={shouldMarkError("apartment") ? "error" : "inputs"}>
              <i className="zmdi zmdi-city-alt"></i>
              {all_allocations ? (
                <Select
                  placeholder="Select Apartment"
                  options={all_allocations.Allocations.map(allocate => {
                    return { value: allocate.id, label: allocate.name };
                  })}
                  className="select-user-on-modal"
                  name="apartment"
                  onChange={this.handleSelectedOption}
                  value={apartment}
                  onBlur={this.handleBlur("apartment")}
                />
              ) : null}
              <div
                className="show-error"
                style={{
                  background: apartment_required === "" ? "transparent" : "red",
                  display: apartment_required === "" ? "none" : "block"
                }}
              >
                {apartment_required}
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="user-inputs">
            <div className={shouldMarkError("address") ? "error" : "inputs"}>
              <i className="zmdi zmdi-gps-dot"></i>
              <input
                type="text"
                placeholder="Address"
                onChange={this.onChange}
                name="address"
                value={address}
                onBlur={this.handleBlur("address")}
              />
              <div
                className="show-error"
                style={{
                  background: address_required === "" ? "transparent" : "red",
                  display: address_required === "" ? "none" : "block"
                }}
              >
                {address_required}
              </div>
            </div>
            <div
              className="show-error"
              style={{
                background: general_error === "" ? "transparent" : "red",
                display: general_error === "" ? "none" : "block"
              }}
            >
              {general_error}
            </div>
          </div>
          {general_error !== "" ? (

<Link to="/signup">
            <button className="go-back" onClick={e => this.goBack(e)}>
              <i className="zmdi zmdi-long-arrow-left"></i>Start Again
            </button>
            </Link>
          ) : (
            <button
              className={isDisabled ? "verify-mobile-number-disabled" : "verify-mobile-number"}
              onClick={e => this.onSubmit(e)}
              disabled={isDisabled}
            >
              Continue
            </button>
          )}
          <div className="login-instead">
            Having an account:
            <Link to="/login">
              <span>Login instead</span>
            </Link>
          </div>

          <p style={{ textAlign: "center", color: "white" }}>
            Term and Conditions
          </p>
        </section>

        <style jsx>{`
          .hide-error {
            display: none;
          }


          .verify-mobile-number-disabled {
            background-color: #a1a1a0;
            border-radius: 5px;
            text-transform: none;
            display: block;
            font-size: 18px;
            padding: 0.5em 1em;
            margin: 0.5em auto;
            color: white;
            border: none;
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
          .background {
            background-color: rgba(237, 94, 7, 1);
            background-image: linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.5519999999999999) 0%,
              rgba(31, 178, 204, 0.69) 100%
            );
            flex-direction: column;
            display: flex;
            height: 100vh;
            width: 100%;
            display: inline-block;
          }

          .progress-bar {
            font-size: 30px;
            color: white;
            display: flex;
            width: inherit;
            justify-content: center;
            margin: 0.5em 0;
            background: #01443b69;
            padding: 0.3em 0;
          }
          .progress-bar span {
            padding: 0 0.2em;
          }
          .start,
          .arrow-one,
          .middle,
          .finish,
          .arrow-two {
            color: #00ff1f;
          }
          .user-inputs {
            text-align: center;
          }
          .inputs {
            width: 40%;
            margin: 0.5em auto;
            display: flex;
            background: #e0e0e0;
            border-radius: 3px;
          }
          .inputs input,
          .error input {
            font-family: Arial;
            height: 20px;
            color: black;
            font-size: 14px;
            padding: 0.5em 0.5em 0.5em 0;
            border: none;
            background: transparent;
            outline: none;
            width: 80%;
          }

          .inputs .select-user-on-modal, .error .select-user-on-modal {
            font-family: Arial;
            color: black;
            border: none;
            background: transparent;
            outline: none;
            width: 80%;
          }
          .css-yk16xz-control {
            background-color: transparent;
            border-style: none;
            outline: none;
          }

          .inputs i,
          .error i {
            padding: 0.5em 1em 0.5em;
            color: black;
          }
          .verify-mobile-number {
            background-color: #ed5e07;
            border-radius: 5px;
            text-transform: none;
            display: block;
            font-size: 18px;
            padding: 0.5em 1em;
            margin: 0.5em auto;
            color: white;
            border: none;
            cursor: pointer;
          }

          .error {
            border: 1px solid red;
            width: 40%;
            margin: 0.5em auto;
            display: flex;
            background: #e0e0e0;
            border-radius: 3px;
          }

          .go-back {
            background-color: #074eed;
            border-radius: 5px;
            text-transform: none;
            display: block;
            font-size: 18px;
            padding: 0.5em 1.5em;
            margin: 0.5em auto;
            color: white;
            border: none;
            cursor: pointer;
            animation-name: example;
            animation-duration: 2s;
            animation-iteration-count: infinite;
            animation-direction: alternate-reverse;
            animation-timing-function: ease-in-out;
          }
          .go-back i {
            padding: 0 1em;
          }
          .login-instead {
            text-transform: none;
            display: block;
            font-size: 12px;
            text-align: center;
            color: white;
          }

          .login-instead span {
            text-transform: none;
            font-size: 12px;
            font-weight: bolder;
            text-align: center;
            color: #c0ff00;
            cursor: pointer;
          }
          .login-instead span:hover {
            color: #00ff14;
          }
          @keyframes example {
            from {
              background-color: #074eed;
            }
            to {
              background-color: #ed5e07;
            }
          }
          @media all screen (max-width: 768px) and (min-width: 320px) {
            .inputs input,
            .error input {
              width: 50%;
            }
            .inputs {
              width: 65%;
            }
          }
        `}</style>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  city: state.cities.cities,
  city_error: state.cities.cities_error,
  state: state.states.states,
  state_error: state.states.state_error,
  user_error: state.authentication.new_user_error,
  new_user: state.authentication.created_new_user,
  all_allocations: state.productAllocations.product_allocations
});
export default withRouter(
  connect(mapStateToProps, { cities, states, create_user, allocations })(
    CreateAccount
  )
);
