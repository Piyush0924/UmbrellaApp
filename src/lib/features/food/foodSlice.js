import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedFoodType: null,
}

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    selectFoodType: (state, action) => {
      state.selectedFoodType = action.payload
    },
  },
})

export const { selectFoodType } = foodSlice.actions
export default foodSlice.reducer
