import axios from "axios";
import {
  GET_SINGLE_PRODUCT_ALLOCATION,
  FAILED_TO_GET_SINGLE_PRODUCT_ALLOCATION,
  GET_PRODUCT_ALLOCATIONS,
  FAILED_TO_GET_PRODUCT_ALLOCATIONS
} from "../action-types/productAllocations";

// Get a single allocation
export const get_product_allocation = (
  token,
  allocation_id
) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/productAllocation/${allocation_id}`;
  try {
    const allocation = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_SINGLE_PRODUCT_ALLOCATION, payload: allocation.data });
  } catch (error) {
    dispatch({
      type: FAILED_TO_GET_SINGLE_PRODUCT_ALLOCATION,
      payload: error.message
    });
  }
};

// Get all allocations
export const allocations = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/productAllocations`;
  try {
    const allocated = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_PRODUCT_ALLOCATIONS, payload: allocated.data });
  } catch (error) {
    dispatch({
      type: FAILED_TO_GET_PRODUCT_ALLOCATIONS,
      payload: error.response
    });
  }
};
