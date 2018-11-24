import { FETCH_ORDERS } from "./orderConstants";

import firestore from "../../app/config/firebaseConfig";
import {
  asyncActionStart,
  asyncActionEnd,
  asyncActionError
} from "../Async/asyncActions";

const fetchOrdersAction = orders => {
  return {
    type: FETCH_ORDERS,
    payload: {
      orders
    }
  };
};

export const fetchOrders = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      firestore.collection("orders").onSnapshot(o => {
        let orders = [];
        o.forEach(order => {
          orders = [
            ...orders,
            {
              id: order.id,
              ...order.data()
            }
          ];
        });
        orders = [
          ...orders.filter(order => order.completed === false),
          ...orders.filter(order => order.completed === true)
        ];
        dispatch(fetchOrdersAction(orders));
        dispatch(asyncActionEnd());
      });
    } catch (eror) {
      dispatch(asyncActionError());
    }
  };
};

export const placeOrder = (orderInfo, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore.collection("orders").add(orderInfo);
      history.push("/orders");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const updateOrder = (orderInfo, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("orders")
        .doc(orderInfo.id)
        .update(orderInfo);
      history.push("/orders");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const deleteOrder = (id, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("orders")
        .doc(id)
        .delete();
      history.push("/orders");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};
