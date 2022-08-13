import { combineReducers } from "redux";
import { doctorListReducer, serviceReducer } from "./doctorsReducer";

const reducer = combineReducers({
  doctorList: doctorListReducer,
  service: serviceReducer,
});

export default reducer;