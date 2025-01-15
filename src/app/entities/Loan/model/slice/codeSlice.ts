import { createSlice } from '@reduxjs/toolkit'
import { ICodeSchema } from '../types/codeSchema'
import { sendSESCode } from '../services/sendSESCode/sendSESCode'

const initialState: ICodeSchema = {
  error: undefined,
  isLoading: false
}

export const codeSlice = createSlice({
  name: 'code',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(sendSESCode.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(sendSESCode.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(sendSESCode.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: codeReducer } = codeSlice
export const { actions: codeActions } = codeSlice
