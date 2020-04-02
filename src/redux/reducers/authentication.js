import {
  LOGIN_SUCCESS,
  FAILED_TO_LOGIN,
  CREATE_USER,
  FAILED_TO_CREATE_USER,
  GET_USER_ROLES,
  FAILED_TO_GET_USER_ROLES,
  GET_ALL_USERS,
  FAILED_TO_GET_ALL_USERS,
  GET_SINGLE_USER,
  FAILED_TO_GET_SINGLE_USER,
  EDIT_USER,
  FAILED_TO_EDIT_USER,
  GET_USER_SINGLE_ROLE,
  FAILED_TO_GET_USER_SINGLE_ROLE
} from "../action-types/index";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        logins: payload
      };
    case FAILED_TO_LOGIN:
      return {
        ...state,
        login_error: payload
      };

    case CREATE_USER:
      return {
        ...state,
        created_new_user: payload
      };
    case FAILED_TO_CREATE_USER:
      return {
        ...state,
        new_user_error: payload
      };
    case GET_USER_ROLES:
      return {
        ...state,
        roles: payload
      };
    case FAILED_TO_GET_USER_ROLES:
      return {
        ...state,
        roles_error: payload
      };
    case GET_ALL_USERS:
      return {
        ...state,
        users: payload
      };
    case FAILED_TO_GET_ALL_USERS:
      return {
        ...state,
        users_error: payload
      };
    case GET_SINGLE_USER:
      return {
        ...state,
        single_user: payload
      };
    case FAILED_TO_GET_SINGLE_USER:
      return {
        ...state,
        single_user_error: payload
      };
    case EDIT_USER:
      return {
        ...state,
        edit_user: payload
      };
    case FAILED_TO_EDIT_USER:
      return {
        ...state,
        edit_user_error: payload
      };
    case GET_USER_SINGLE_ROLE:
      return {
        ...state,
        single_user_role: payload
      };
    case FAILED_TO_GET_USER_SINGLE_ROLE:
      return {
        ...state,
        single_user_role_error: payload
      };
    default:
      return state;
  }
};
