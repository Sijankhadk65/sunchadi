import { SERACH_CUSTOMERS, FETCH_CUSTOMERS } from "./customerConstants";

import {
  asyncActionStart,
  asyncActionEnd,
  asyncActionError
} from "../async/asyncActions";

import firestore from "../../app/config/firebaseConfig";

export const searchCustomerAction = newCustomers => ({
  type: SERACH_CUSTOMERS,
  payload: {
    newCustomers
  }
});

export const fetchCustomersAction = customers => ({
  type: FETCH_CUSTOMERS,
  payload: {
    customers
  }
});

export const fetchCustomers = () => {
  return dispatch => {
    dispatch(asyncActionStart());
    let customers = [];
    firestore.collection("customers").onSnapshot(
      c => {
        c.forEach(customer => {
          customers = [
            ...customers,
            {
              id: customer.id,
              ...customer.data()
            }
          ];
        });
        dispatch(fetchCustomersAction(customers));
        dispatch(asyncActionEnd());
      },
      error => {
        dispatch(asyncActionError());
      }
    );
  };
};

export const searchCustomer = term => {
  return (dispatch, getState) => {
    const { customers: { customers } } = getState();
    const newCustomers = customers.filter(customer =>
      customer.name.toLowerCase().includes(term.toLowerCase())
    );
    dispatch(searchCustomerAction(newCustomers));
  };
};
