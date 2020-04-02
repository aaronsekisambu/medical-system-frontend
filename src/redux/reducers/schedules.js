import {
  POST_SCHEDULE,
  FAILED_TO_POST_SCHEDULE,
  GET_SCHEDULES,
  FAILED_TO_GET_SCHEDULES,
  GET_SINGLE_SCHEDULE,
  FAILED_TO_GET_SINGLE_SCHEDULE,
  DELETE_SCHEDULE,
  FAILED_TO_DELETE_SCHEDULE
} from "../action-types/schedules";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_SINGLE_SCHEDULE:
      return {
        ...state,
        schedule_by_user: payload.schedules
      };
    case POST_SCHEDULE:
      return {
        ...state,
        schedule_by_user: state.schedule_by_user.concat([payload.schedule])
      };
      case DELETE_SCHEDULE:
        return {
          ...state,
          schedule_by_user: state.schedule_by_user.filter(sch => sch.id !== payload)
        };
    case FAILED_TO_POST_SCHEDULE:
      return {
        ...state,
        post_schedule_error: payload
      };
    case GET_SCHEDULES:
      return {
        ...state,
        schedules: payload
      };
    case FAILED_TO_GET_SCHEDULES:
      return {
        ...state,
        schedules_error: payload
      };
    case FAILED_TO_GET_SINGLE_SCHEDULE:
      return {
        ...state,
        schedule_by_user_error: payload
      };
    case FAILED_TO_DELETE_SCHEDULE:
      return {
        ...state,
        cancel_schedule_error: payload
      };

    default:
      return state;
  }
};
