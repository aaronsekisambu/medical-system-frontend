import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import CreateAccount from "./CreateAccount";

function validate(otp) {
  // true means invalid, so our conditions got reversed
  return {
    otp: otp.length === 0
  };
}
class VerifyMobile extends Component {
  state = {
    touched: {
      otp: false
    },
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    email: this.props.email,
    mobile_number: this.props.mobile_number,
    password: this.props.password,
    otp: "",

    otp_required: "",
    verified: false
  };
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    const { otp } = this.state;
    if (otp === "") {
      return this.setState({
        otp_required: "OTP (One Time Password) is required"
      });
    }
    return this.setState({ verified: true });
  };

  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };
  render() {
    const {
      first_name,
      last_name,
      email,
      mobile_number,
      password,
      otp,
      otp_required,
      verified
    } = this.state;
    const errors = validate(otp);
    const isDisabled = Object.keys(errors).some(x => errors[x]);

    const shouldMarkError = field => {
      const hasError = errors[field];
      const shouldShow = this.state.touched[field];

      return hasError ? shouldShow : false;
    };
    return (
      <Fragment>
        {verified ? (
          <CreateAccount
            first_name={first_name}
            last_name={last_name}
            mobile_number={mobile_number}
            otp={otp}
            email={email}
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
              VERIFY MOBILE NUMBER
              <p
                style={{
                  color: "white",
                  fontWeight: "lighter",
                  fontSize: "12px"
                }}
              >
                {`An SMS with One Time Password (OTP) has been sent to ${mobile_number}`}
              </p>
              <button className="change-btn">Change</button>
            </h3>
            {/* OTP */}
            <div className="user-inputs">
              <div
                className={shouldMarkError("otp") ? "error" : "inputs"}
                style={{ background: "none" }}
              >
                <i className="zmdi zmdi-navigation"></i>
                <input
                  type="text"
                  placeholder="Enter OTP"
                  onChange={this.onChange}
                  name="otp"
                  value={otp}
                  className="otp-input"
                  onBlur={this.handleBlur("otp")}
                />
                <div
                  className="show-error"
                  style={{
                    background: otp_required === "" ? "transparent" : "red",
                    display: otp_required === "" ? "none" : "block"
                  }}
                >
                  {otp_required}
                </div>
              </div>
            </div>

            <p style={{ textAlign: "center", color: "white" }}>Resend OTP</p>

            <button
              className={isDisabled ? "verify-mobile-number-disabled" : "verify-mobile-number"}
              onClick={e => this.onSubmit(e)}
              disabled={isDisabled}
            >
              Create Account
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

          .error {
            border: 1px solid red;
            width: 40%;
            margin: 0.5em auto;
            display: flex;
            background: #e0e0e0;
            border-radius: 3px;
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
          .middle {
            color: #00ff1f;
          }
          .user-inputs {
            text-align: center;
          }
          .change-btn {
            background: orange;
            color: white;
            padding: 0.5em 0.7em;
            cursor: pointer;
            border: none;
            border-radius: 3px;
          }
          .change-btn:hover {
            background: green;
          }
          .inputs {
            width: 40%;
            margin: 0.5em auto;
            display: flex;
            border: none;
            color: white;
            border-bottom: 1px solid white;
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
            color: white;
          }
          .otp-input::placeholder {
            color: white;
          }
          .inputs i,
          .error i {
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

export default VerifyMobile;
