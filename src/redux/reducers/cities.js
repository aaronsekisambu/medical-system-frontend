import {
  GET_CITIES,
  GET_CITY,
  FAILED_TO_GET_CITIES,
  FAILED_TO_GET_CITY
} from "../action-types/cities";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_CITIES:
      return {
        ...state,
        cities: payload
      };
    case FAILED_TO_GET_CITIES:
      return {
        ...state,
        cities_error: payload
      };
    case GET_CITY:
      return {
        ...state,
        city: payload
      };
    case FAILED_TO_GET_CITY:
      return {
        ...state,
        city_error: payload
      };
    default:
      return state;
  }
};
