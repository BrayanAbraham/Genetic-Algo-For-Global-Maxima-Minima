import { v1 } from "uuid";
import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERT } from "./types";

export const setAlert = alertData => dispatch => {
  alertData.id = v1();
  dispatch({
    type: SET_ALERT,
    payload: alertData
  });
  setTimeout(
    () =>
      dispatch({
        type: REMOVE_ALERT,
        payload: alertData.id
      }),
    10000
  );
};

export const removeAlert = id => dispatch => {
  dispatch({
    type: REMOVE_ALERT,
    payload: id
  });
};

export const clearAlert = () => dispatch => {
  dispatch({
    type: CLEAR_ALERT
  });
};
