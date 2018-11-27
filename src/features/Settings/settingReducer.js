import { FETCH_ORDER_ITEMS, FETCH_SELLING_ITEMS } from "./settingConstants";
import { createReducer } from "../../app/common/util/createReducer";

const initState = {
  orderItems: [],
  sellingItems: []
};

const fetchOrderItems = (state = initState, payload) => {
  return {
    ...state,
    orderItems: payload.items
  };
};

const fetchSellingItems = (state = initState, payload) => {
  return {
    ...state,
    sellingItems: payload.items
  };
};

export default createReducer(initState, {
  [FETCH_ORDER_ITEMS]: fetchOrderItems,
  [FETCH_SELLING_ITEMS]: fetchSellingItems
});
