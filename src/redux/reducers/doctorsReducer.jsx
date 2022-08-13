import { DOCTOR_LIST, SERVICE_NAME } from "../context/doctorsContext";
import data from "../../utils/data";

const initialState = {
  service: [],
};


export const doctorListReducer = (state = data, action) => {
  switch (action.type) {
    case DOCTOR_LIST:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_NAME:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};