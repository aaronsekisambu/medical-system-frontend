import {
  GET_CATEGORIES,
  FAILED_TO_GET_CATEGORIES,
  GET_CATEGORY,
  FAILED_TO_GET_CATEGORY,
  UPDATE_CATEGORY,
  FAILED_TO_UPDATE_CATEGORY,
  DELETE_CATEGORY,
  FAILED_TO_DELETE_CATEGORY
} from "../action-types/categories";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return {
        ...state,
        new_categories: payload
      };
    case FAILED_TO_GET_CATEGORIES:
      return {
        ...state,
        new_categories_error: payload
      };
    case GET_CATEGORY:
      return {
        ...state,
        new_category: payload
      };
    case FAILED_TO_GET_CATEGORY:
      return {
        ...state,
        new_category_error: payload
      };
    case UPDATE_CATEGORY:
      return {
        ...state,
        update_category: payload
      };
    case FAILED_TO_UPDATE_CATEGORY:
      return {
        ...state,
        update_error: payload
      };
    case DELETE_CATEGORY:
      return {
        ...state,
        deleted: payload
      };
    case FAILED_TO_DELETE_CATEGORY:
      return {
        ...state,
        deleted_error: payload
      };

    default:
      return state;
  }
};
