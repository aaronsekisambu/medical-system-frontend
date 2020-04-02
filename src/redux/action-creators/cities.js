import axios from "axios";
import {
  GET_CITIES,
  GET_CITY,
  FAILED_TO_GET_CITIES,
  FAILED_TO_GET_CITY
} from "../action-types/cities";

// Get all Cities
export const cities = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/cities`;
  try {
    const city = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_CITIES, payload: city.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_CITIES, payload: error.response });
  }
};
export const city = (id, token) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/city/${id}`;
  try {
    const city = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_CITY, payload: city.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_CITY, payload: error.response });
  }
};
