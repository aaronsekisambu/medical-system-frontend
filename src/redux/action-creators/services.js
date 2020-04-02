import axios from "axios";
import {
  POST_SERVICE,
  FAILED_TO_POST_SERVICE,
  GET_SERVICES,
  FAILED_TO_GET_SERVICES,
  GET_SERVICE_BY_CATEGORY,
  FAILED_TO_GET_SERVICE_BY_CATEGORY,
  GET_SERVICE,
  FAILED_TO_GET_SERVICE
} from "../action-types/services";

export const create_service = (
  token,
  title,
  product_id,
  product_category_id,
  description,
  icon,
  price,
  discount
) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/service`;
  try {
    const newService = await axios.post(
      URL,
      {
        title,
        product_id,
        product_category_id,
        description,
        icon,
        price,
        discount
      },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );
    dispatch({ type: POST_SERVICE, payload: newService.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_POST_SERVICE, payload: error.message });
  }
};

export const get_services = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/services`;

  try {
    const services = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SERVICES, payload: services.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_SERVICES, payload: error.response });
  }
};

export const get_service_by_category = (id, token) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/product_category`;
  try {
    const services = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        product_category_id: id
      }
    });
    dispatch({ type: GET_SERVICE_BY_CATEGORY, payload: services.data });
  } catch (error) {
    dispatch({
      type: FAILED_TO_GET_SERVICE_BY_CATEGORY,
      payload: error.response
    });
  }
};

export const get_service = (id, token) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/service/${id}`;
  try {
    const services = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SERVICE, payload: services.data });
  } catch (error) {
    dispatch({
      type: FAILED_TO_GET_SERVICE,
      payload: error.response
    });
  }
};
