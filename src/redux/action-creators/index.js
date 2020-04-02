import axios from "axios";
import {
  LOGIN_SUCCESS,
  FAILED_TO_LOGIN,
  CREATE_USER,
  FAILED_TO_CREATE_USER,
  GET_USER_ROLES,
  FAILED_TO_GET_USER_ROLES,
  GET_ALL_USERS,
  FAILED_TO_GET_ALL_USERS,
  FAILED_TO_GET_SINGLE_USER,
  GET_SINGLE_USER,
  GET_USER_SINGLE_ROLE,
  FAILED_TO_GET_USER_SINGLE_ROLE
} from "../action-types";

// super admin create a new user
export const create_user = (
  mobile_number,
  first_name,
  last_name,
  email,
  user_role,
  city_id,
  dob,
  gender,
  password,
  state_id,
  pin_code,
  landmark,
  address,
  branch_id,
  is_active,
  locality,
  product_allocation_id
) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/auth/register`;
  try {
    const new_user = await axios.post(URL, {
      mobile_number,
      first_name,
      last_name,
      email,
      user_role,
      city_id,
      dob,
      gender,
      password,
      state_id,
      pin_code,
      landmark,
      address,
      branch_id,
      is_active,
      locality,
      product_allocation_id
    });
    const { data } = new_user;
    return dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    const { response } = error;
    return dispatch({ type: FAILED_TO_CREATE_USER, payload: response });
  }
};

// Get all user roles
export const user_roles = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/roles`;
  try {
    const roles = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_USER_ROLES, payload: roles.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_USER_ROLES, payload: error.response });
  }
};

// Get edit user
export const edit_user = (
  mobile_number,
  first_name,
  last_name,
  email,
  user_role,
  city_id,
  dob,
  gender,
  password,
  state_id,
  pin_code,
  landmark,
  address,
  branch_id,
  is_active,
  locality,
  token,
  id
) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/auth/user/${id}`;
  try {
    const edit = await axios.put(
      URL,
      {
        mobile_number,
        first_name,
        last_name,
        email,
        user_role,
        city_id,
        dob,
        gender,
        password,
        state_id,
        pin_code,
        landmark,
        address,
        branch_id,
        is_active,
        locality,
        token
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    dispatch({ type: GET_USER_ROLES, payload: edit.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_USER_ROLES, payload: error.response });
  }
};

// Get all users
export const get_users = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/auth/users`;
  try {
    const user = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_ALL_USERS, payload: user.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_ALL_USERS, payload: error.response });
  }
};

// Get user role
export const get_user_role = (token, id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/role/${id}`;
  try {
    const role = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_USER_SINGLE_ROLE, payload: role.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_USER_SINGLE_ROLE, payload: error.response });
  }
};

// Get a single user
export const get_single_user = (token, id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/auth/user/${id}`;
  try {
    const single_user = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SINGLE_USER, payload: single_user.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_SINGLE_USER, payload: error.response });
  }
};

// login an existing user
export const login = ({ mobile_number, password }) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/auth/login`;
  try {
    const user = await axios.post(URL, { mobile_number, password });
    const { data } = user;
    localStorage.setItem("token", data.token);
    return dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    const { response } = error;
    return dispatch({ type: FAILED_TO_LOGIN, payload: response });
  }
};
