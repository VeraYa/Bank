import { createSlice } from '@reduxjs/toolkit'
import { denyApplication } from '../services/denyApplication/denyApplication'
import { IDenySchema } from '../types/denySchema'

const initialState: IDenySchema = {
  error: undefined,
  isLoading: false
}

export const denySlice = createSlice({
  name: 'deny',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(denyApplication.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(denyApplication.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(denyApplication.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: denyReducer } = denySlice
export const { actions: denyActions } = denySlice
