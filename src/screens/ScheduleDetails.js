import React, { Component, Fragment } from "react";
import HyperModal from "react-hyper-modal";
import Navigation from "./Navigation";
import { get_single_user } from "../redux/action-creators";
import {
  decode_token,
  removeTimeFromDate,
  convertTextToSlug
} from "../helpers/users";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import {
  create_schedule,
  get_schedule_by_user,
  delete_schedule_by_user
} from "../redux/action-creators/schedules";
import SelectedSchedules from "./SelectedSchedules";

class ScheduleDetails extends Component {
  state = {
    no_account: "",
    clickHamburger: false,
    width: 0,
    date: new Date(),
    showHideCalendar: false,
    hours: 8,
    minutes: 0,
    schedule: [],
    maxSchedules: "",
    selectedSchedules: [],
    isModalOpen: false,
    selectedDay: [],
    amToPm: "AM"
  };
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    const { history, get_single_user, get_schedule_by_user } = this.props;
    const token = localStorage.getItem("token");
    const user_id = decode_token(token);
    if (!token) {
      history.push("/login");
      this.setState({
        no_account: "Invalid credentials please create account or login"
      });
    }
    get_single_user(token, user_id.userId);
    get_schedule_by_user(token);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  };

  onChange = e => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  onSelectDate = date => this.setState({ date });
  showHideTabs = e => {
    const { clickHamburger } = this.state;
    e.preventDefault();
    this.setState({ clickHamburger: !clickHamburger });
  };
  showHideCalendar = e => {
    const { showHideCalendar } = this.state;
    e.preventDefault();
    this.setState({ showHideCalendar: !showHideCalendar });
  };
  hourAddition = e => {
    const { hours } = this.state;
    e.preventDefault();
    this.setState({ hours: hours === 12 ? 1 : hours + 1 });
  };
  hourSubtraction = e => {
    const { hours } = this.state;
    e.preventDefault();
    this.setState({ hours: hours > 0 ? hours - 1 : 12 });
  };
  minAddition = e => {
    const { minutes } = this.state;
    e.preventDefault();
    this.setState({ minutes: minutes === 59 ? 0 : minutes + 1 });
  };
  minSubtraction = e => {
    const { minutes } = this.state;
    e.preventDefault();
    this.setState({ minutes: minutes > 0 ? minutes - 1 : 59 });
  };
  am = e => {
    e.preventDefault();
    this.setState({amToPm: "AM"})
  }
  pm = e => {
    e.preventDefault();
    this.setState({amToPm: "PM"})
  }

  addSchedule = async(e) => {
    const {
      schedule,
      date,
      selectedSchedules,
      minutes,
      hours,
      selectedDay
    } = this.state;
    const { create_schedule, schedules_by_user } = this.props;
    const token = localStorage.getItem("token");
    e.preventDefault();
    const hour = hours < 9 ? `0${hours}` : hours;
    const minute = minutes < 9 ? `0${minutes}` : minutes;
    const time = `${hour}:${minute}:00`;
    const day = removeTimeFromDate(date);
    const dayAndTime = `${day}:${time}`;
    const checkSameDay = selectedDay.filter(sch => sch === day);
    const checkSelectedSchedules = schedules_by_user.filter(
      sch => sch.day === day
    );
    this.setState({
      sameDay: checkSameDay,
      sameSchedule: checkSelectedSchedules
    });
    checkSameDay.length !== 0 || checkSelectedSchedules.length !== 0
      ? this.setState({
          maxSchedules:
            "You can not schedule the same date and time twice, please select a different date"
        })
       : schedules_by_user.length >= 7 ? this.setState({
        maxSchedules: "You have reached the maximum number of schedules!!"
      }) : schedule.push(time) &&
        selectedDay.push(day) &&
        await create_schedule(token, day, time) &&
        this.setState({ maxSchedules: "" })
  };
  removeSchedule = (e, id) => {
    const token = localStorage.getItem("token");
    const { selectedSchedules } = this.state;
    const { delete_schedule_by_user, schedules_by_user } = this.props;
    e.preventDefault();
    // selectedSchedules.splice(i, 1);
    delete_schedule_by_user(token, id)
    console.log("schedules_by_user ===========>", schedules_by_user )
    this.setState({  maxSchedules: "" });
  };
  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });
  orderConfirmation = e => {
    const { selectedSchedules } = this.state;
    e.preventDefault();
    selectedSchedules.length === 0
      ? this.setState({
          maxSchedules:
            "You have not added any schedule, please select the calendar icon to choose a date a sort the time from the time selector below the calendar."
        })
      : this.setState({ isModalOpen: true });
  };
  confirm = () => {
    const token = localStorage.getItem("token");
    const {
      create_schedule,
      delete_schedule_by_user,
      history,
      match: {
        params: { type, id, title, service_id }
      }
    } = this.props;
    const { schedule, date, selectedDay } = this.state;
    console.log(schedule, date, selectedDay);
    const day = removeTimeFromDate(date);
    // delete_schedule_by_user(token, )
    // history.push(
    //   `/ServiceByCategory/${convertTextToSlug(type)}/${id}/${convertTextToSlug(
    //     title
    //   )}/${service_id}/confirmAddress/ScheduleDetails/OrderConfirmation`
    // );
  };
  render() {
    const { user, schedules_by_user, posted_schedules_by_user } = this.props;
    const {
      clickHamburger,
      width,
      date,
      showHideCalendar,
      hours,
      minutes,
      isModalOpen,
      maxSchedules,
      amToPm
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
            page="HamburgerGrihaSeva"
          />
        ) : null}
        <div
          className="main"
          style={{ marginTop: clickHamburger && width <= 425 ? "13em" : "3em" }}
        >
          <section className="card-section">
            <div className="schedule-card">
              <div className="schedule-info">Select Schedule</div>
            </div>
            <div className="date-selection">
              <div className={showHideCalendar ? "inputs" : "inputs-bg"}>
                {showHideCalendar ? (
                  <Calendar
                    onChange={this.onSelectDate}
                    value={date}
                    name="date"
                    activeStartDate={new Date()}
                    className="date-edit"
                    nextLabel={<i className="zmdi zmdi-caret-right-circle"></i>}
                    next2Label={<i className="zmdi zmdi-arrow-right"></i>}
                    prevLabel={<i className="zmdi zmdi-caret-left-circle"></i>}
                    prev2Label={<i className="zmdi zmdi-arrow-left"></i>}
                    showNavigation={true}
                  />
                ) : (
                  <input type="text" placeholder="12-02-2020" />
                )}

                <i
                  className={
                    showHideCalendar ? "hide-it" : "zmdi zmdi-calendar-check"
                  }
                  onClick={e => this.showHideCalendar(e)}
                ></i>
              </div>
              <div className="hour-mins-selection">
                <div className="hour-input">
                  <i
                    className="zmdi zmdi-caret-up"
                    onClick={e => this.hourSubtraction(e)}
                  ></i>
                  <input
                    type="number"
                    placeholder="00"
                    name="hours"
                    readOnly
                    value={hours < 9 ? `0${hours}` : hours}
                    onChange={e => this.onChange(e)}
                  />

                  <i
                    className="zmdi zmdi-caret-down"
                    onClick={e => this.hourAddition(e)}
                  ></i>
                </div>
                <div className="mins-input">
                  <i
                    className="zmdi zmdi-caret-up"
                    onClick={e => this.minSubtraction(e)}
                  ></i>
                  <input
                    type="number"
                    placeholder="30"
                    name="minutes"
                    readOnly
                    value={minutes < 9 ? `0${minutes}` : minutes}
                    onChange={e => this.onChange(e)}
                  />

                  <i
                    className="zmdi zmdi-caret-down"
                    onClick={e => this.minAddition(e)}
                  ></i>
                </div>
                <div className="mins-input">
                  <i
                    className="zmdi zmdi-caret-up"
                    onClick={e => this.pm(e)}
                  ></i>
                  <input
                    type="text"
                    placeholder="30"
                    name="am-pm"
                    readOnly
                    value={amToPm}
                    onChange={e => this.onChange(e)}
                  />

                  <i
                    className="zmdi zmdi-caret-down"
                    onClick={e => this.am(e)}
                  ></i>
                </div>
              </div>
            </div>
            <button
              className={
                maxSchedules !== ""
                  ? "add-schedule-disabled add"
                  : "add-schedule add"
              }
              style={{ background: "green" }}
              onClick={e => this.addSchedule(e)}
            >
              <i className="zmdi zmdi-plus-circle"></i>Add schedule
            </button>
            <div
              className="show-error"
              style={{
                background: maxSchedules === "" ? "transparent" : "red",
                display: maxSchedules === "" ? "none" : "block"
              }}
            >
              {maxSchedules}
            </div>
          </section>
          <SelectedSchedules selectedSchedules={schedules_by_user} removeSchedule={this.removeSchedule} />
          <button
            className="add-schedule confirm"
            onClick={e => this.orderConfirmation(e)}
          >
            Confirm Schedule <i className="zmdi zmdi-trending-flat"></i>
          </button>
        </div>
        {isModalOpen ? (
          <HyperModal isOpen={isModalOpen} requestClose={this.closeModal}>
            <div style={{ margin: "4em 0", textAlign: "center" }}>
              <h3 style={{ color: "grey" }}>
                This action can not be reversed, are you sure?
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
          .selected-schedules {
            border-top: 1px solid #e0e0e0;
            font-size: 14px;
          }
          .hide-it-then {
            display: none;
          }
          .show-error {
            display: block;
            font-family: Arial;
            font-weight: bolder;
            align-self: center;
            font-size: 12px;
            padding: 1em;
            background: red;
            color: white;
            border-radius: 2px;
          }
          .added-schedule {
            width: inherit;
            margin: .5em auto;
            text-align: center;
            border-radius: 4px;
            padding: .5em 0;
            -webkit-box-shadow: 0px 0px 5px 0px #777;
            -moz-box-shadow: 0px 0px 5px 0px #777;
            box-shadow: 0px 0px 5px 0px #777777a8;
          }
          .added-schedule span {
            padding: 1em;
            font-size: 18px;
            color: #635a5a;
          }
          .added-schedule i {
            background: red;
            padding: .3em .4em;
            border-radius: 3px;
            color: white;
            cursor: pointer;
          }
          .added-schedule i:hover {
            background: #9f0606;
          }
          .mins-input i, .hour-input i {
            text-align: center;
          }
          .hide-it {
            display: none;
          }
          .hour-mins-selection {
            display: flex;
            justify-content: center;
          }
          .hour-input, .mins-input {
            display: flex;
            flex-direction: column;
          }
          .hour-input input, .mins-input input {
            font-size: 30px;
            font-weight: bolder;
            color: orange;
            padding: 1em 0;
            width: 60px;
            text-align: center;
            border: none;
          }
          .hour-input input {
            color: #0081ff;
            }
          .date-edit {
            font-size: 12px;
          }
          .date-selection {
            display: flex;
            flex-direction: column;
            margin: 0 .5em;
          }
          .inputs {
            margin: 0.5em auto;
            display: flex;
            border-radius: 3px;
          }
          .inputs-bg {
            margin: 0.5em auto;
            display: flex;
            background: #e0e0e0;
            border-radius: 3px;
          }
          .inputs-bg input {
            color: black;
            font-size: 20px;
            padding: .8em 0.5em 0.5em 0;
            border: none;
            margin: 0 0 0 2em; 
            background: transparent;
            outline: none;
            width: 80%;
            text-align: center;
          }
          .react-calendar.date-edit {
            border-radius: 5px;
            -webkit-box-shadow: 0px 0px 4px 0px #777;
            -moz-box-shadow: 0px 0px 4px 0px #777;
            box-shadow: 0px 0px 2px 0px #777777a8;
            }

          .inputs-bg i, .inputs i {
            padding: 0.5em 1em 0.5em;
          }
          .inputs-bg i:hover, .inputs i:hover {
            color: green;
          }
        .detailed-directions {
          margin: 0 auto;
          text-align: center;
        }
        .d-edit {
          color: red;
          font-size: 14px;
        }
        .d-address {
          font-size: 12px;
        }
        .address-info {
          display: flex;
          justify-content: space-between;
          padding: .4em .6em;
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

        .add-schedule-disabled{
          background: #e0e0e0;
          border-radius: 5px;
          color: white;
          text-align: center;
          padding: 1em 1em;
          font-size: 15px;
          text-transform: uppercase;
          font-weight: bolder;
          margin: 1em 0;
          width: 100%;
        }
        .add-schedule{
          background: red;
          border-radius: 5px;
          color: white;
          text-align: center;
          padding: 1em 1em;
          font-size: 15px;
          text-transform: uppercase;
          font-weight: bolder;
          margin: 1em 0;
          width: 100%;
          cursor: pointer;
        }
        .add-schedule i, .add-schedule-disabled i {
          padding: 0 .4em;
        }
        .card-section {
          display: flex;
          flex-wrap: wrap;
          flex-direction: column;
          margin: 3em auto 0;
          justify-content: center;
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
        .schedule-card {
          margin: 0.2em auto;
          width: 100%;
          color: red;
        }
        .card-image {
          float: right;
          padding: 0 1em .5em 0;
        }
        .card-image img {
          width: 100px;
          margin: 0.4em;
        }
        .schedule-info {
          color: red;
          text-align: center;
          padding: 1em;
          font-size: 20px;
          font-weight: bolder;
          border-radius: 5px;
        }
        .card-info:hover {
          background: orange;
          color: white;
          font-weight: bolder;
        }

        .main {
          font-size: 28px; /* Increased text to enable scrolling */
          padding: 0 4px 0;
        }
      `}</style>
      </Fragment>
    );
  }
}

const mapsStateToProps = state => ({
  user: state.authentication.single_user,
  schedules_by_user: state.schedules.schedule_by_user,
});

export default connect(mapsStateToProps, {
  get_single_user,
  create_schedule,
  get_schedule_by_user,
  delete_schedule_by_user
})(ScheduleDetails);
