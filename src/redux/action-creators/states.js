import axios from "axios";
import {
  GET_STATES,
  FAILED_TO_GET_STATES,
  GET_STATE,
  FAILED_TO_GET_STATE
} from "../action-types/states";

// Get all states
export const states = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/states`;
  try {
    const state = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_STATES, payload: state.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_STATES, payload: error.response });
  }
};
export const state = (id, token) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/state/${id}`;
  try {
    const state = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_STATE, payload: state.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_STATE, payload: error.response });
  }
};
