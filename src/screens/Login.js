import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../redux/action-creators/index";

function validate(mobile_number, password) {
  // true means invalid, so our conditions got reversed
  return {
    password: password.length === 0,
    mobile_number: mobile_number.length === 0
  };
}
class Login extends Component {
  state = {
    touched: {
      email: false,
      mobile_number: false
    },
    mobile_number: "",
    password: "",
    general_error: "",
    password_required: "",
    Invalid_number: "",
    mobile_required: "",
    showPassword: false
  };

  componentDidMount() {
    const { history } = this.props;
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/HamburgerGrihaSeva");
    }
  }
  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  showHidePassword = e => {
    const { showPassword } = this.state;
    e.preventDefault();
    this.setState({ showPassword: !showPassword });
  };
  handleBlur = field => evt => {
    this.setState({
      touched: { ...this.state.touched, [field]: true }
    });
  };

  onSubmit = async e => {
    e.preventDefault();
    const { mobile_number, password } = this.state;
    const { login, history } = this.props;
    if (password === "" && mobile_number === "") {
      this.setState({
        password_required: "Password is required",
        mobile_required: "Mobile number is required"
      });
    }
    if (password === "") {
      return this.setState({ password_required: "Password is required" });
    }
    if (mobile_number === "") {
      return this.setState({ mobile_required: "Mobile number is  required" });
    }

    await login({ mobile_number, password });
    const { logins_error, login_user } = this.props;
    if (logins_error) {
      return this.setState({ general_error: logins_error.data.message });
    }
    if (login_user.status === 200) {
      return history.push("/HamburgerGrihaSeva");
    }
  };
  render() {
    const {
      mobile_number,
      password,
      password_required,
      mobile_required,
      showPassword,
      general_error
    } = this.state;

    const errors = validate(mobile_number, password);
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
            <img src={require("../assets/images/New-logo_Website.png")} />
          </div>
          <h3 style={{ textAlign: "center", color: "white" }}>Sign In</h3>
          {/* Mobile Number */}
          <div className="user-inputs">
            <div
              className={shouldMarkError("mobile_number") ? "error" : "inputs"}
            >
              <i className="zmdi zmdi-account-o"></i>
              <input
                type="number"
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
                  background: mobile_required === "" ? "transparent" : "red",
                  display: mobile_required === "" ? "none" : "block"
                }}
              >
                {mobile_required}
              </div>
            </div>
          </div>

          {/* Password  */}
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
                className={showPassword ? "zmdi zmdi-eye" : "zmdi zmdi-eye-off"}
                style={{ color: `${showPassword ? "red" : "green"}` }}
                onClick={e => this.showHidePassword(e)}
              ></i>

              <div
                className="show-error"
                style={{
                  background: password_required === "" ? "transparent" : "red",
                  display: password_required === "" ? "none" : "block"
                }}
              >
                {password_required}
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
            <Link to="/login">
              <button className="go-back">
                <i className="zmdi zmdi-long-arrow-left"></i>Try Again
              </button>
            </Link>
          ) : (
            <button
              className={
                isDisabled
                  ? "verify-mobile-number-disabled"
                  : "verify-mobile-number"
              }
              onClick={e => this.onSubmit(e)}
              disabled={isDisabled}
            >
              Continue
            </button>
          )}
          <div className="login-instead">
            No account yet:
            <Link to="/signup">
              <span>Create Account</span>
            </Link>
          </div>
          <div className="login-instead">
            Forgot
            <span>password?</span>
          </div>

          <p style={{ textAlign: "center", color: "white" }}>
            Term and Conditions
          </p>
        </section>
        <style jsx>{`
          a {
            text-decoration: none;
          }
          .hide-error {
            display: none;
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

          .error {
            border: 1px solid red;
            width: 40%;
            margin: 0.5em auto;
            display: flex;
            background: #e0e0e0;
            border-radius: 3px;
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
  login_user: state.authentication.logins,
  logins_error: state.authentication.login_error
});
export default connect(mapStateToProps, { login })(Login);
