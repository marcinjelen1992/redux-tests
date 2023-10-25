// taking combine reducers result
import { configureStore } from "@reduxjs/toolkit";

// combined reducers (different slices)
import { rootReducer } from "./rootReducer";

export const store = configureStore({
    reducer: rootReducer
})