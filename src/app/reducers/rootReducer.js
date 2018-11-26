import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import customerReducer from "../../features/Customers/customerReducer";
import workerReducer from "../../features/Workers/workerReducer";
import orderReducer from "../../features/Order/orderReducer";
import settingReducer from "../../features/Settings/settingReducer";
import asyncReducer from "../../features/Async/asyncReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  customers: customerReducer,
  workers: workerReducer,
  orders: orderReducer,
  config: settingReducer,
  async: asyncReducer
});

export default rootReducer;
