import axios from "axios";
import { FetchData } from "./FetchData";

export const DELETE_DATA_REQUEST = "DELETE_DATA_REQUEST";
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";
export const DELETE_DATA_FAILURE = "DELETE_DATA_FAILURE";

export const deleteRequest = () => {
    return {
        type: DELETE_DATA_REQUEST,
    };
};

export const deleteSuccess = (id) => {
    return {
        type: DELETE_DATA_SUCCESS,
        payload: id,
    };
};

export const deleteFailure = (error) => {
    return {
        type: DELETE_DATA_FAILURE,
        error: error,
    };
};

export const deleteData = (id) => async (dispatch) => {
    dispatch(deleteRequest());
    try {
        await axios.delete(`https://653686dbbb226bb85dd244f8.mockapi.io/employee/${id}`);
        dispatch(deleteSuccess(id));
        dispatch(FetchData())
    } catch (error) {
        dispatch(deleteFailure(error));
        console.log(error.message);
    }
};
