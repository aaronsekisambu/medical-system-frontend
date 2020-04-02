import axios from "axios";
import {
  FAILED_TO_GET_CATEGORIES,
  FAILED_TO_GET_CATEGORY,
  GET_CATEGORIES,
  GET_CATEGORY,
  POST_SERVICE,
  FAILED_TO_POST_SERVICE
} from "../action-types/categories";

// export const create_service = (
//   token,
//   title,
//   product_id,
//   product_category_id,
//   description,
//   icon,
//   price,
//   discount
// ) => async dispatch => {
//   const URL = `${process.env.REACT_APP_API}/service`;
//   try {
//     const newService = await axios.post(
//       URL,
//       {
//         title,
//         product_id,
//         product_category_id,
//         description,
//         icon,
//         price,
//         discount
//       },
//       {
//         headers: { Authorization: `Bearer ${token}` }
//       }
//     );
//     dispatch({ type: POST_SERVICE, payload: newService.data });
//   } catch (error) {
//     console.log("error", error);
//     dispatch({ type: FAILED_TO_POST_SERVICE, payload: error.response });
//   }
// };

export const get_categories = token => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/categories`;

  try {
    const categories = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_CATEGORIES, payload: categories.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_CATEGORIES, payload: error.response });
  }
};

export const get_category = (token, id) => async dispatch => {
  const URL = `${process.env.REACT_APP_API}/category/${id}`;

  try {
    const category = await axios.get(URL, {
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({ type: GET_CATEGORY, payload: category.data });
  } catch (error) {
    dispatch({ type: FAILED_TO_GET_CATEGORY, payload: error.response });
  }
};
