import { FETCH_ITEMS } from "./settingConstants";
import { createReducer } from "../../app/common/util/createReducer";

const initState = {
  items: []
};

const fetchItems = (state = initState, payload) => {
  return {
    ...state,
    items: payload.items
  };
};

export default createReducer(initState, {
  [FETCH_ITEMS]: fetchItems
});
