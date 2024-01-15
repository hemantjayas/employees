import axios from "axios";

export const UPDATE_DATA_REQUEST = "UPDATE_DATA_REQUEST";
export const UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS";
export const UPDATE_DATA_FAILURE = "UPDATE_DATA_FAILURE";

export const updateRequest = () => {
  return {
    type: UPDATE_DATA_REQUEST,
  };
};

export const updateSuccess = (updatedData) => {
  return {
    type: UPDATE_DATA_SUCCESS,
    payload: updatedData,
  };
};

export const updateFailure = (error) => {
  return {
    type: UPDATE_DATA_FAILURE,
    error: error,
  };
};


export const SELECT_EMPLOYEE = "SELECT_EMPLOYEE";

export const selectEmployee = (employeeId) => {
  return {
    type: SELECT_EMPLOYEE,
    payload: employeeId,
  };
};


export const updateEmployeeData = (id, updatedData) => async (dispatch) => {
  dispatch(updateRequest());
  try {
    const response = await axios.put(`https://your-api-endpoint.com/employee/${id}`, updatedData);
    dispatch(updateSuccess(response.data));
  } catch (error) {
    dispatch(updateFailure(error));
    console.log(error.message);
  }
};
