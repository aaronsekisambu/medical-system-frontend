import {
  GET_PRODUCT_ALLOCATIONS,
  FAILED_TO_GET_PRODUCT_ALLOCATIONS,
  GET_SINGLE_PRODUCT_ALLOCATION,
  FAILED_TO_GET_SINGLE_PRODUCT_ALLOCATION
} from "../action-types/productAllocations";

export default (state = {}, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_ALLOCATIONS:
      return {
        ...state,
        product_allocations: payload
      };
    case FAILED_TO_GET_PRODUCT_ALLOCATIONS:
      return {
        ...state,
        product_allocations_error: payload
      };
    case GET_SINGLE_PRODUCT_ALLOCATION:
      return {
        ...state,
        product_allocation: payload
      };
    case FAILED_TO_GET_SINGLE_PRODUCT_ALLOCATION:
      return {
        ...state,
        product_allocation_error: payload
      };
    default:
      return state;
  }
};
