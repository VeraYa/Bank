import { IOfferData } from '@common/types/loan'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IOfferSchema } from '../types/offerSchema'
import { applyOffer } from '../services/applyOffer/applyOffer'
import { loanStatus } from '@common/lib/utils/loanStatus'

const initialState: IOfferSchema = {
  data: loanStatus.getOfferList(),
  error: undefined,
  isLoading: false
}

export const offerSlice = createSlice({
  name: 'offer',
  initialState,
  reducers: {
    setData: (state, action: PayloadAction<IOfferData[]>) => {
      loanStatus.setOfferList(action.payload)
      state.data = action.payload
    },
    resetError: (state) => {
      state.error = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(applyOffer.pending, (state) => {
      state.error = undefined
      state.isLoading = true
    })
    addCase(applyOffer.fulfilled, (state) => {
      state.isLoading = false
    })
    addCase(applyOffer.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { actions: offerActions } = offerSlice
export const { reducer: offerReducer } = offerSlice
