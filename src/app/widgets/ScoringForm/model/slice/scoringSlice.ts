import { createSlice } from '@reduxjs/toolkit'
import { IScoringSchema } from '../types/scoringSchema'
import { finishRegistration } from '../services/finishRegistration/finishRegistration'

const initialState: IScoringSchema = {
  error: undefined,
  isLoading: false
}

export const scoringSlice = createSlice({
  name: 'scoring',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(finishRegistration.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(finishRegistration.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(finishRegistration.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: scoringReducer } = scoringSlice
export const { actions: scoringActions } = scoringSlice
