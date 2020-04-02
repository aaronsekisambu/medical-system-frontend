import React, { Component, Fragment } from "react";
class Day extends Component {
  render() {
    let day = this.props.day;
    let selected = this.props.selected;
    let select = this.props.select;
    // console.log("day===>", day)
    // console.log("day===>", selected)

    return (
      <div
        className={
          "day" +
          (day.isToday ? " today" : "") +
          (day.isCurrentMonth ? "" : " different-month") +
          (day.date.isSame(selected) ? " selected" : "") +
          (day.hasEvents ? " has-events" : "")
        }
        onClick={() => select(day)}
      >
        <div className="day-number">{day.number}</div>
      </div>
    );
  }
}

export default Day;
