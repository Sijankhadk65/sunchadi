import { FETCH_ITEMS } from "./settingConstants";
import firestore from "../../app/config/firebaseConfig";

import {
  asyncActionStart,
  asyncActionEnd,
  asyncActionError
} from "../Async/asyncActions";

const fetchItemsAction = items => {
  return {
    type: FETCH_ITEMS,
    payload: {
      items
    }
  };
};

export const fetchItems = () => {
  return async dispatch => {
    dispatch(asyncActionStart());
    firestore.collection("items").onSnapshot(
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
        dispatch(fetchItemsAction(items));
        dispatch(asyncActionEnd());
      },
      error => {
        dispatch(asyncActionError());
      }
    );
  };
};

export const addItem = (itemDetails, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore.collection("items").add(itemDetails);
      history.push("/settings/app/items");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};

export const updateItem = (itemDetails, history) => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      await firestore
        .collection("items")
        .doc(itemDetails.id)
        .update(itemDetails);
      history.push("/settings/app/items");
      dispatch(asyncActionEnd());
    } catch (error) {
      dispatch(asyncActionError());
    }
  };
};
