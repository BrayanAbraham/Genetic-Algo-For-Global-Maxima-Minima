import {
  SET_EQUATION,
  SHOW_DATA,
  SET_VARIABLE,
  SET_DESCRIPTION,
} from "./types";

export const setDescription = () => (dispatch) => {
  dispatch({
    type: SET_DESCRIPTION,
  });
};

export const setEquation = () => (dispatch) => {
  dispatch({
    type: SET_EQUATION,
  });
};

export const showData = () => (dispatch) => {
  dispatch({
    type: SHOW_DATA,
  });
};

export const setVariable = () => (dispatch) => {
  dispatch({
    type: SET_VARIABLE,
  });
};
