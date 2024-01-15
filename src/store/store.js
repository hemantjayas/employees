import { configureStore } from "@reduxjs/toolkit";
import { FetchDataReducer } from "./reducers/FetchDataReducer";
import AddEmployee from "./reducers/addEmployees";
import selectEmployeeReducer from "./reducers/selectedId";






export const store = configureStore({
    reducer: {
        data: FetchDataReducer,
        addEmployee: AddEmployee,
        selectedId: selectEmployeeReducer,
    }

})