// here we are putting reducers but only for testReduxSlice (only this piece of logic)
import { createSlice } from "@reduxjs/toolkit"

const initialReduxTestState = {
    value: "store is working"
};

const sliceTestReduxReducer = createSlice({
    name: "slice-test-redux-reducer",
    initialState: initialReduxTestState,
    reducers: {
        // setters to export here (complexity here)
        setInitialTestValue: (state) => {
            const currentDate = new Date();
            const formattedDate = currentDate.toLocaleString();
            state.value = `${state.value} but why !! Date and time ${formattedDate}`
        }
    }
});

export default sliceTestReduxReducer;