// here we are putting reducers but only for testReduxSlice (only this piece of logic)
import { createSlice } from "@reduxjs/toolkit"

const initialReduxCounterState = {
    counter: 0,
};

const sliceCounterReduxReducer = createSlice({
    name: "slice-counter-redux-reducer",
    initialState: initialReduxCounterState,
    reducers: {
        // setters to export here (complexity here)
        setIncrement: (state) => {
            state.counter += 1
        }
    }
});

export default sliceCounterReduxReducer;