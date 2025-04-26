import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  selectedTransportType: null,
}

const transportSlice = createSlice({
  name: "transport",
  initialState,
  reducers: {
    selectTransportType: (state, action) => {
      state.selectedTransportType = action.payload
    },
  },
})

export const { selectTransportType } = transportSlice.actions
export default transportSlice.reducer
