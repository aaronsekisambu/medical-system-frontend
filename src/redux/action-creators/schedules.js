import axios from "axios";
import {
  GET_SINGLE_SCHEDULE,
  FAILED_TO_GET_SINGLE_SCHEDULE,
  GET_SCHEDULES,
  FAILED_TO_GET_SCHEDULES,
  POST_SCHEDULE,
  FAILED_TO_POST_SCHEDULE,
  DELETE_SCHEDULE,
  FAILED_TO_DELETE_SCHEDULE
} from "../action-types/schedules";

// Get a single branch
export const get_schedule_by_user = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/schedules/owner`;
  try {
    const schedule = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SINGLE_SCHEDULE, payload: schedule.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_SINGLE_SCHEDULE, payload: error.response });
  }
};
export const delete_schedule_by_user = (token, id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/schedule/${id}`;
  try {
    dispatch({ type: DELETE_SCHEDULE, payload: id });
    await axios.delete(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
  } catch (error) {
    dispatch({ type: FAILED_TO_DELETE_SCHEDULE, payload: error.response });
  }
};

// Get all branches
export const schedules = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/schedules`;
  try {
    const schedules = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SCHEDULES, payload: schedules.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_SCHEDULES, payload: error.response });
  }
};

export const create_schedule = (token, day, schedule) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/schedule`;
  try {
    const schedule_selected = await axios.post(
      URL,
      {
        day,
        schedule
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    const { data } = schedule_selected;
    return dispatch({ type: POST_SCHEDULE, payload: data });
  } catch (error) {
    const { response } = error;
    return dispatch({ type: FAILED_TO_POST_SCHEDULE, payload: response });
  }
};
