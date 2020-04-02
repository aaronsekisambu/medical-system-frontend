import axios from "axios";
import {
  GET_SINGLE_ORDER,
  FAILED_TO_GET_SINGLE_ORDER,
  GET_ORDERS,
  FAILED_TO_GET_ORDERS,
  POST_ORDER,
  FAILED_TO_POST_ORDER,
  GET_ORDERS_BY_USER,
  FAILED_TO_GET_ORDERS_BY_USER,
  GET_ORDERS_NURSE,
  FAILED_TO_GET_ORDERS_NURSE
} from "../action-types/yourOrders";

export const create_order = (
  token,
  service,
  category,
  user_id,
  service_amount,
  schedule_id,
  apartment
) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/order`;
  try {
    const newOrder = await axios.post(
      URL,
      {
        service,
        category,
        user_id,
        service_amount,
        schedule_id,
        apartment
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    dispatch({ type: POST_ORDER, payload: newOrder.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_POST_ORDER, payload: error.response });
  }
};

// Get a single branch
export const get_order = (token, id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/order/${id}`;
  try {
    const get_order = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SINGLE_ORDER, payload: get_order.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_SINGLE_ORDER, payload: error.response });
  }
};

export const get_order_by_nurse = (token, id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/order/nurse/${id}`;
  try {
    const get_order_by_nurses = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_ORDERS_NURSE, payload: get_order_by_nurses.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_ORDERS_NURSE, payload: error.response });
  }
};
export const get_orders_by_user = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/orders/owner`;
  try {
    const get_orders = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_ORDERS_BY_USER, payload: get_orders.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_ORDERS_BY_USER, payload: error.response });
  }
};

// Get all branches
export const get_orders = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/orders`;
  try {
    const get_orders = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_ORDERS, payload: get_orders.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_ORDERS, payload: error.response });
  }
};

export const post_order = (token, day, schedule) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/schedule`;
  try {
    const posted_order = await axios.post(
      URL,
      {
        headers: { Authorization: `Bearer ${token}` }
      },
      {
        day,
        schedule
      }
    );
    const { data } = posted_order;
    return dispatch({ type: POST_ORDER, payload: data });
  } catch (error) {
    const { response } = error;
    return dispatch({ type: FAILED_TO_POST_ORDER, payload: response });
  }
};
