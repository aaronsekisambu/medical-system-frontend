import {
  GET_ORDERS,
  FAILED_TO_GET_ORDERS,
  GET_SINGLE_ORDER,
  FAILED_TO_GET_SINGLE_ORDER,
  POST_ORDER,
  FAILED_TO_POST_ORDER,
  FAILED_TO_CANCEL_ORDER,
  CANCEL_ORDER,
  GET_ORDERS_BY_USER,
  FAILED_TO_GET_ORDERS_BY_USER,
  GET_ORDERS_NURSE,
  FAILED_TO_GET_ORDERS_NURSE
} from "../action-types/yourOrders";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_ORDERS:
      return {
        ...state,
        orders: payload
      };
    case FAILED_TO_GET_ORDERS:
      return {
        ...state,
        orders_error: payload
      };
    case GET_ORDERS_NURSE:
      return {
        ...state,
        orders_by_nurse: payload
      };
    case FAILED_TO_GET_ORDERS_NURSE:
      return {
        ...state,
        order_by_nurse_error: payload
      };
    case GET_ORDERS_BY_USER:
      return {
        ...state,
        orders_by_user: payload
      };
    case FAILED_TO_GET_ORDERS_BY_USER:
      return {
        ...state,
        orders_by_user_error: payload
      };
    case GET_SINGLE_ORDER:
      return {
        ...state,
        order: payload
      };
    case FAILED_TO_GET_SINGLE_ORDER:
      return {
        ...state,
        order_error: payload
      };
    case POST_ORDER:
      return {
        ...state,
        post_order: payload
      };
    case FAILED_TO_POST_ORDER:
      return {
        ...state,
        post_order_error: payload
      };
    case CANCEL_ORDER:
      return {
        ...state,
        canceled_order: payload
      };
    case FAILED_TO_CANCEL_ORDER:
      return {
        ...state,
        canceled_order_error: payload
      };
    default:
      return state;
  }
};
