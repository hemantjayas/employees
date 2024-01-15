import { GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "../actions/FetchData";


const initialState = {
    loading: false,
    data: null,
    error: null
}

export const FetchDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST:
            return {
                ...state, loading: true, error: null
            }
            
        case GET_DATA_SUCCESS:
            return {
                ...state, loading: false, data: action.payload, error: null
            }
            
        case GET_DATA_FAILURE:
            return { ...state, loading: false, data: null, error: action.error }
          

        default:return state
          
    }
}