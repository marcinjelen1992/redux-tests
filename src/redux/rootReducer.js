import { combineReducers } from "@reduxjs/toolkit";

// importuj reduktory i połącz w jeden state
import sliceTestReduxReducer from "./testReduxSlice/sliceTestRedux";
import sliceCounterReduxReducer from "./counterReduxSlice/counterReduxSlice";

export const rootReducer = combineReducers({
    firstReduxStore: sliceTestReduxReducer.reducer,
counterReduxStore: sliceCounterReduxReducer.reducer
})