import { combineReducers } from "redux";
import phaseReducer from "./phaseReducer";
import populationReducer from "./populationReducer";
import alertsReducer from "./alertsReducer";
import graphReducer from "./graphReducer";

export default combineReducers({
  phase: phaseReducer,
  population: populationReducer,
  alert: alertsReducer,
  graph: graphReducer
});
