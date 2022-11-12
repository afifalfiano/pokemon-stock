/* eslint-disable @typescript-eslint/no-unused-expressions */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    viewport: 0,
}

export const screenSlice = createSlice({
  name: 'screen',
  initialState,
  reducers: {
    setDimensions: (state, action) => {
      state.viewport = action.payload;
    },
    reset: state => {state.viewport = 0} 
  },
})

export const { setDimensions, reset } = screenSlice.actions

export const selectViewport = (state: any) => state.screen.viewport;

export default screenSlice.reducer