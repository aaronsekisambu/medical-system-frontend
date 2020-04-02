import {
  GET_BRANCHES,
  FAILED_TO_GET_BRANCHES,
  GET_SINGLE_BRANCH,
  FAILED_TO_GET_SINGLE_BRANCH
} from "../action-types/branches";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_BRANCHES:
      return {
        ...state,
        branches: payload
      };
    case FAILED_TO_GET_BRANCHES:
      return {
        ...state,
        branches_error: payload
      };
    case GET_SINGLE_BRANCH:
      return {
        ...state,
        branch: payload
      };
    case FAILED_TO_GET_SINGLE_BRANCH:
      return {
        ...state,
        single_branch_error: payload
      };
    default:
      return state;
  }
};
