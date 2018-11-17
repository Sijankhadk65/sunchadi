import {
  ASYNC_ACTION_START,
  ASYNC_ACTION_END,
  ASYNC_ACTION_ERROR
} from "./asyncConstants";
import { createReducer } from "../../app/common/util/createReducer";

const initState = {
  loading: false,
  error: false
};

const asyncActionsStart = (state = initState) => ({
  ...state,
  loading: true
});

const asyncActionsEnd = (state = initState) => ({
  ...state,
  loading: false
});

const asyncActionsError = (state = initState) => ({
  ...state,
  loading: false,
  error: true
});

export default createReducer(initState, {
  [ASYNC_ACTION_START]: asyncActionsStart,
  [ASYNC_ACTION_END]: asyncActionsEnd,
  [ASYNC_ACTION_ERROR]: asyncActionsError
});
