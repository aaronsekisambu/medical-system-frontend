import {
  GET_STATES,
  FAILED_TO_GET_STATES,
  FAILED_TO_GET_STATE,
  GET_STATE
} from "../action-types/states";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_STATES:
      return {
        ...state,
        states: payload
      };
    case FAILED_TO_GET_STATES:
      return {
        ...state,
        states_error: payload
      };
    case GET_STATE:
      return {
        ...state,
        state: payload
      };
    case FAILED_TO_GET_STATE:
      return {
        ...state,
        state_error: payload
      };
    default:
      return state;
  }
};
