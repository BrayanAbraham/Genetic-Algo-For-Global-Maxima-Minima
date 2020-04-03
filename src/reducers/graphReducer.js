import { ADD_PERFORMANCE_POINT, CLEAR_PERFORMANCE } from "../actions/types";

const initialState = {
  performanceX: [],
  performanceY: [],
  performanceY2: [],
  currentequation: [],
  equation: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERFORMANCE_POINT:
      return {
        ...state,
        performanceX: [...state.performanceX, action.payload.x],
        performanceY: [...state.performanceY, action.payload.y],
        performanceY2: [...state.performanceY2, action.payload.y2]
      };
    case CLEAR_PERFORMANCE:
      return {
        ...state,
        performanceX: [],
        performanceY: [],
        performanceY2: []
      };
    default:
      return state;
  }
};
