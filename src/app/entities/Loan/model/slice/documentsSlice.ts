import { createSlice } from '@reduxjs/toolkit'
import { createDocuments } from '../services/createDocuments/createDocuments'
import { IDocumentsSchema } from '../types/documentsSchema'
import { signDocuments } from '../services/signDocuments/signDocuments'

const initialState: IDocumentsSchema = {
  error: undefined,
  isLoading: false
}

export const documentsSlice = createSlice({
  name: 'documents',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(createDocuments.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(createDocuments.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(createDocuments.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
    addCase(signDocuments.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(signDocuments.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(signDocuments.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: documentsReducer } = documentsSlice
export const { actions: documentsActions } = documentsSlice
