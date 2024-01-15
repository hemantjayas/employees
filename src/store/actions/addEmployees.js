import axios from "axios";
import { FetchData } from "./FetchData";

export const POST_DATA_REQUEST = "POST_DATA_REQUEST";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const postRequest = () => {
    return {
        type: POST_DATA_REQUEST,
    };
};

export const postSuccess = (payload) => {
    return {
        type: POST_DATA_SUCCESS,
        payload: payload,
    };
};

export const postFailure = (error) => {
    return {
        type: POST_DATA_FAILURE,
        error: error,
    };
};

export const AddEmployee = (formData) => async (dispatch) => {
    dispatch(postRequest());
    try {
        const response = await axios.post("https://653686dbbb226bb85dd244f8.mockapi.io/employee", formData);
        console.log(response.data);
        dispatch(postSuccess(response.data));
        dispatch(FetchData())
    } catch (error) {
        dispatch(postFailure(error));
        console.log(error.message);
    }
};
