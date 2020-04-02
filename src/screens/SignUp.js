import React, { Fragment, Component } from "react";
import styled, { css } from "styled-components";
import VerifyMobile from "./VerifyMobile";
import { Link } from "react-router-dom";

function validate(first_name, last_name, email, password, mobile_number) {
  // true means invalid, so our conditions got reversed
  return {
    last_name: last_name.length === 0,
    first_name: first_name.length === 0,
    email: email.length === 0,
    password: password.length === 0,
    mobile_number: mobile_number.length === 0,
  };
}
class SignUp extends Component {
  state = {
    first_name: "",
    last_name: "",
    touched: {
      first_name: false,
      last_name: false
    },
    email: "",
    mobile_number: "",
    password: "",
    password_required: "",
    first_name_required: "",
    last_name_required: "",
    email_required: "",
    mobile_number_required: "",
    sendVerification: false,
    showPassword: false
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  showHidePassword = e => {
    const { showPassword } = this.state;
    e.preventDefault();
    this.setState({ showPassword: !showPassword });
  };

  onSubmit = e => {
    e.preventDefault();
    const {
      first_name,
      last_name,
      email,
      mobile_number,
      password
    } = this.state;
    if (first_name === "") {
      return this.setState({ first_name_required: "First Name is required" });
    }
    if (last_name === "") {
      return this.setState({ last_name_required: "Last Name is required" });
    }
    if (mobile_number === "") {
      return this.setState({
        mobile_number_required: "Mobile Number is required"
      });
    }
    if (mobile_number.length > 10 || mobile_number.length < 10) {
      return this.setState({
        mobile_number_required: "Mobile Number should be 10 digits long"
      });
    }
    if (email === "") {
      return this.setState({ email_required: "Email is required" });
    }
    if (password === "") {
      return this.setState({ password_required: "Password is required" });
    }
    return this.setState({ sendVerification: true });
  };

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      password_required,
      mobile_number,
      first_name_required,
      last_name_required,
      email_required,
      mobile_number_required,
      sendVerification,
      showPassword
    } = this.state;

    const errors = validate(first_name, last_name, email, password, mobile_number);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };

    return (
      <Fragment>
        {sendVerification ? (
          <VerifyMobile
            last_name={last_name}
            first_name={first_name}
            email={email}
            mobile_number={mobile_number}
            password={password}
          />
        ) : (
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
            {/* First Name */}
            <div className="user-inputs">
              <div className={shouldMarkError("first_name") ? "error" : "inputs"}>
                <i className="zmdi zmdi-account-o"></i>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={this.onChange}
                  name="first_name"
                  value={first_name}
                  onBlur={this.handleBlur("first_name")}
                />
                <div
                  className="show-error"
                  style={{
                    background:
                      first_name_required === "" ? "transparent" : "red",
                    display: first_name_required === "" ? "none" : "block"
                  }}
                >
                  {first_name_required}
                </div>
              </div>
            </div>

            {/* Last Name */}
            <div className="user-inputs">
              <div className={shouldMarkError("last_name") ? "error" : "inputs"}>
                <i className="zmdi zmdi-account"></i>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={this.onChange}
                  name="last_name"
                  value={last_name}
                  onBlur={this.handleBlur("last_name")}
                />
                <div
                  className="show-error"
                  style={{
                    background:
                      first_name_required === "" ? "transparent" : "red",
                    display: last_name_required === "" ? "none" : "block"
                  }}
                >
                  {first_name_required}
                </div>
              </div>
            </div>

            {/* Mobile Number */}
            <div className="user-inputs">
              <div className={shouldMarkError("mobile_number") ? "error" : "inputs"}>
                <i className="zmdi zmdi-phone"></i>
                <input
                  type="text"
                  placeholder="Mobile Number"
                  onChange={this.onChange}
                  name="mobile_number"
                  value={mobile_number}
                  maxLength={10}
                  minLength={10}
                  onBlur={this.handleBlur("mobile_number")}
                />
                <div
                  className="show-error"
                  style={{
                    background:
                      mobile_number_required === "" ? "transparent" : "red",
                    display: mobile_number_required === "" ? "none" : "block"
                  }}
                >
                  {mobile_number_required}
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="user-inputs">
              <div className={shouldMarkError("email") ? "error" : "inputs"}>
                <i className="zmdi zmdi-email"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={this.onChange}
                  name="email"
                  value={email}
                  onBlur={this.handleBlur("email")}
                />
                <div
                  className="show-error"
                  style={{
                    background: email_required === "" ? "transparent" : "red",
                    display: email_required === "" ? "none" : "block"
                  }}
                >
                  {email_required}
                </div>
              </div>
            </div>

            {/* Set password */}
            <div className="user-inputs">
              <div className={shouldMarkError("password") ? "error" : "inputs"}>
                <i className="zmdi zmdi-lock-outline"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  onChange={this.onChange}
                  name="password"
                  value={password}
                  onBlur={this.handleBlur("password")}
                />
                <i
                  className={
                    showPassword ? "zmdi zmdi-eye" : "zmdi zmdi-eye-off"
                  }
                  style={{ color: `${showPassword ? "red" : "green"}` }}
                  onClick={e => this.showHidePassword(e)}
                ></i>
                <div
                  className="show-error"
                  style={{
                    background:
                      password_required === "" ? "transparent" : "red",
                    display: password_required === "" ? "none" : "block"
                  }}
                >
                  {password_required}
                </div>
              </div>
            </div>
            <button
              disabled={isDisabled}
              className={isDisabled ? "verify-mobile-number-disabled" : "verify-mobile-number"}
              onClick={e => this.onSubmit(e)}
            >
              Verify Mobile Number
            </button>
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
        )}

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
          .error {
            border: 1px solid red;
            width: 40%;
            margin: 0.5em auto;
            display: flex;
            background: #e0e0e0;
            border-radius: 3px;
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
          .arrow-one {
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
          .inputs input, .error input {
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
          .inputs i, .error i {
            padding: 0.5em 1em 0.5em;
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
          a {
            text-decoration: none;
          }
          @media all screen (max-width: 768px) and (min-width: 320px) {
            .inputs input, .error input {
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

const ErrorText = styled.span`
  font-family: Arial;
  color: #480303;
  font-weight: bolder;
  align-self: center;
  padding: 0.2em 0;
`;

export default SignUp;
