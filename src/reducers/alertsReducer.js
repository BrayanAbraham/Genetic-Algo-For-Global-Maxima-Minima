import { SET_ALERT, REMOVE_ALERT, CLEAR_ALERT } from "../actions/types";

const initialState = {
  alerts: [],
};

const alertsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        alerts: [...state.alerts, action.payload],
      };
    case REMOVE_ALERT:
      return {
        ...state,
        alerts: state.alerts.filter(a => a.id !== action.payload),
      };
    case CLEAR_ALERT:
      return {
        ...state,
        alerts: [],
      };
    default:
      return state;
  }
};

export default alertsReducer;
