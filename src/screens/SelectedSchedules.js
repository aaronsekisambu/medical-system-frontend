import React, { Component, Fragment } from "react";

class SelectedSchedules extends Component {
  // state = { selectedSchedules: this.props.selectedSchedules };
  render() {
    const { selectedSchedules, removeSchedule } = this.props;
    console.log("fuck man", selectedSchedules)
    return (
      <Fragment>
        <div className="selected-schedules">
          {/* {schedule} */}
          {selectedSchedules ? (
            selectedSchedules.map((sch, i) => (
              <div className="added-schedule" key={sch.id}>
                <span>{`${sch.day}:${sch.schedules}`}</span>
                <i
                  className="zmdi zmdi-delete"
                  onClick={e => removeSchedule(e, sch.id)}
                ></i>
              </div>
            ))
          ) : (
            <div
              style={{ fontSize: "14px", textAlign: "center", color: "grey" }}
            >
              <p style={{ fontWeight: "bolder" }}>
                No selected schedules yet, Follow the steps below{" "}
              </p>
              <p style={{ fontSize: "12px" }}>
                1. Click on the Calendar icon to choose a date <br />
                2. Select the time using the up and down arrow <br />
                3. Click on the add schedule button <br />
                4. Confirm your schedule <br />
              </p>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default SelectedSchedules;
