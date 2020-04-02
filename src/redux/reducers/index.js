import { combineReducers } from "redux";
import authentication from "./authentication";
import services from "./services";
import categories from "./categories";
import cities from "./cities";
import branches from "./branches";
import states from "./states";
import productAllocations from "./productAllocations";
import yourOrders from "./yourOrders";
import schedules from "./schedules";

const rootReducer = combineReducers({
  authentication,
  services,
  categories,
  branches,
  cities,
  states,
  productAllocations,
  yourOrders,
  schedules
});

export default rootReducer;
