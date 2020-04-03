import { SET_EQUATION, SHOW_DATA, SET_VARIABLE } from "./types";

export const setEquation = () => dispatch => {
  dispatch({
    type: SET_EQUATION
  });
};

export const showData = () => dispatch => {
  dispatch({
    type: SHOW_DATA
  });
};

export const setVariable = () => dispatch => {
  dispatch({
    type: SET_VARIABLE
  });
};
