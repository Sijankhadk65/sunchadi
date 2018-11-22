import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import customerReducer from "../../features/Customers/customerReducer";
import workerReducer from "../../features/Workers/workerReducer";
import asyncReducer from "../../features/async/asyncReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  customers: customerReducer,
  workers: workerReducer,
  async: asyncReducer
});

export default rootReducer;
