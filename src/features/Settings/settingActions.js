import { FETCH_ORDER_ITEMS, FETCH_SELLING_ITEMS } from "./settingConstants";
import firestore from "../../app/config/firebaseConfig";

import {
  asyncActionStart,
  asyncActionEnd,
  asyncActionError
} from "../Async/asyncActions";

const fetchOrderItemsAction = items => {
  return {
    type: FETCH_ORDER_ITEMS,
    payload: {
      items
    }
  };
};

const fetchSellingItemsAction = items => {
  return {
    type: FETCH_SELLING_ITEMS,
    payload: {
      items
    }
  };
};

export const fetchOrderItems = () => {
  return async dispatch => {
    dispatch(asyncActionStart());
    firestore.collection("orderItems").onSnapshot(
      i => {
        let items = [];
        i.forEach(item => {
          items = [
            ...items,
            {
              id: item.id,
              ...item.data()
            }
          ];
        });
        dispatch(fetchOrderItemsAction(items));
        dispatch(asyncActionEnd());
      },
      error => {
        dispatch(asyncActionError());
      }
    );
  };
};

export const addOrderItem = (orderItemDetails, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore.collection("orderItems").add(orderItemDetails);
      history.push("/settings/app/order-items");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const updateOrderItem = (orderItemDetails, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("orderItems")
        .doc(orderItemDetails.id)
        .update(orderItemDetails);
      history.push("/settings/app/order-items");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const fetchSellingItems = () => {
  return async dispatch => {
    dispatch(asyncActionStart());
    firestore.collection("sellingItems").onSnapshot(
      i => {
        let items = [];
        i.forEach(item => {
          items = [
            ...items,
            {
              id: item.id,
              ...item.data()
            }
          ];
        });
        dispatch(fetchSellingItemsAction(items));
        dispatch(asyncActionEnd());
      },
      error => {
        dispatch(asyncActionError());
      }
    );
  };
};

export const addSellingItem = (sellingItemDetails, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore.collection("sellingItems").add(sellingItemDetails);
      history.push("/settings/app/selling-items");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const updateSellingItem = (sellingItemDetails, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("sellingItems")
        .doc(sellingItemDetails.id)
        .update(sellingItemDetails);
      history.push("/settings/app/selling-items");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};
