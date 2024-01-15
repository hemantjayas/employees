import {
    POST_DATA_REQUEST,
    POST_DATA_SUCCESS,
    POST_DATA_FAILURE,
} from '../actions/addEmployees';
import { DELETE_DATA_FAILURE, DELETE_DATA_REQUEST, DELETE_DATA_SUCCESS } from '../actions/deleteEmployee';
import { UPDATE_DATA_FAILURE, UPDATE_DATA_REQUEST, UPDATE_DATA_SUCCESS } from '../actions/updateEmployee';

const initialState = {
    loading: false,
    data: null,
    error: null,
  };
  
  const postDataReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_DATA_REQUEST:
      case DELETE_DATA_REQUEST:
      case UPDATE_DATA_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case POST_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: action.payload,
        };
      case DELETE_DATA_SUCCESS:
        return {
          ...state,
          loading: false,
          data: state.data.filter((item) => item.id !== action.payload),
        };
      case UPDATE_DATA_SUCCESS:
        const updatedData = action.payload;
        return {
          ...state,
          loading: false,
          data: state.data.map((item) => (item.id === updatedData.id ? updatedData : item)),
        };
      case POST_DATA_FAILURE:
      case DELETE_DATA_FAILURE:
      case UPDATE_DATA_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      default:
        return state;
    }
  };
  
  export default postDataReducer;
