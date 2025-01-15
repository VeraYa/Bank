import { createSlice } from '@reduxjs/toolkit'
import { IPrescoringSchema } from '../types/prescoringSchema'
import { createLoanApplication } from '../services/createLoanApplication/createLoanApplication'

const initialState: IPrescoringSchema = {
  error: undefined,
  isLoading: false
}

export const prescoringSlice = createSlice({
  name: 'prescoring',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(createLoanApplication.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(createLoanApplication.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(createLoanApplication.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: prescoringActions } = prescoringSlice
export const { reducer: prescoringReducer } = prescoringSlice
