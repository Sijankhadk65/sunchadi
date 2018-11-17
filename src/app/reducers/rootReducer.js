import { combineReducers } from "redux";
import { reducer as FormReducer } from "redux-form";

import customerReducer from "../../features/Customers/customerReducer";
import asyncReducer from "../../features/async/asyncReducer";

const rootReducer = combineReducers({
  form: FormReducer,
  customers: customerReducer,
  async: asyncReducer
});

export default rootReducer;
