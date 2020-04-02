import axios from "axios";
import {
  GET_BRANCHES,
  GET_SINGLE_BRANCH,
  FAILED_TO_GET_BRANCHES,
  FAILED_TO_GET_SINGLE_BRANCH
} from "../action-types/branches";

// Get a single branch
export const get_branch = (token, branch_id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/branch/${branch_id}`;
  try {
    const branch = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SINGLE_BRANCH, payload: branch.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_SINGLE_BRANCH, payload: error.response });
  }
};

// Get all branches
export const branches = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/branches`;
  try {
    const branch = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_BRANCHES, payload: branch.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_BRANCHES, payload: error.response });
  }
};
