import { configureStore } from "@reduxjs/toolkit"
import foodReducer from "./features/food/foodSlice"
import transportReducer from "./features/Transport/transportSlice"

export const store = configureStore({
  reducer: {
    food: foodReducer,
    transport: transportReducer,
  },
})