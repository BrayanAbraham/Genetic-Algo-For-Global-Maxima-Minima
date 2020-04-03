import { ADD_PERFORMANCE_POINT, CLEAR_PERFORMANCE } from "./types";

export const addPerformancePoint = (x, y, y2) => dispatch => {
  const newpoint = { x, y, y2 };
  dispatch({
    type: ADD_PERFORMANCE_POINT,
    payload: newpoint
  });
};

export const clearPerformance = () => dispatch => {
  dispatch({
    type: CLEAR_PERFORMANCE
  });
};
