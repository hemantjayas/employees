import axios from "axios"

export const GET_DATA_REQUEST = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILURE = "GET_DATA_FAILURE"

export const request = () => {
    return {
        type: GET_DATA_REQUEST
    }
}
export const success = (payload) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: payload
    }
}
export const failure = (error) => {
    return {
        type: GET_DATA_FAILURE,
        error: error
    }
}


export const FetchData = () => async (dispatch) => {
    request()
    try {

        const response = await axios.get("https://653686dbbb226bb85dd244f8.mockapi.io/employee");
        console.log(response.data)
        dispatch(success(response.data))


    } catch (error) {
        dispatch(failure(error))
        console.log(error.message);
    }
}