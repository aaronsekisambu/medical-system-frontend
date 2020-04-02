import {
  POST_SERVICE,
  FAILED_TO_POST_SERVICE,
  FAILED_TO_GET_SERVICES,
  GET_SERVICES,
  GET_SERVICE_BY_CATEGORY,
  FAILED_TO_GET_SERVICE_BY_CATEGORY,
  GET_SERVICE,
  FAILED_TO_GET_SERVICE
} from "../action-types/services";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case POST_SERVICE:
      return {
        ...state,
        new_service: payload
      };
    case FAILED_TO_POST_SERVICE:
      return {
        ...state,
        new_service_error: payload
      };
    case GET_SERVICES:
      return {
        ...state,
        services: payload
      };
    case FAILED_TO_GET_SERVICES:
      return {
        ...state,
        services_error: payload
      };
    case GET_SERVICE:
      return {
        ...state,
        service: payload
      };
    case FAILED_TO_GET_SERVICE:
      return {
        ...state,
        service_error: payload
      };
    case GET_SERVICE_BY_CATEGORY:
      return {
        ...state,
        service_category: payload
      };
    case FAILED_TO_GET_SERVICE_BY_CATEGORY:
      return {
        ...state,
        service_category_error: payload
      };

    default:
      return state;
  }
};
