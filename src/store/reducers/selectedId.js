

import { SELECT_EMPLOYEE } from '../actions/updateEmployee';

const initialState = {
  selectedEmployeeId: null,
};

const selectEmployeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EMPLOYEE:
      return {
        ...state,
        selectedEmployeeId: action.payload,
      };
    default:
      return state;
  }
};

export default selectEmployeeReducer;
