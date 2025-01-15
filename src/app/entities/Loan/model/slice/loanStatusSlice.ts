import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ILoanStatusSchema } from '../types/loanStatusSchema'
import { loanStatus } from '@common/lib/utils/loanStatus'

const initialState: ILoanStatusSchema = {
  step: 1,
  applicationId: undefined
}

export const loanStatusSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setStep: (state, action: PayloadAction<number>) => {
      loanStatus.setStepNumber(action.payload)
      state.step = action.payload
    },
    setApplicationId: (state, action: PayloadAction<number>) => {
      loanStatus.setApplicationId(action.payload)
      state.applicationId = action.payload
    },
    initLoanStatus: (state) => {
      const newStep = loanStatus.getStepNumber()
      const newApplicationId = loanStatus.getApplicationId()

      if (newStep) {
        state.step = newStep
      } else {
        loanStatus.setStepNumber(state.step)
      }

      if (newApplicationId) state.applicationId = newApplicationId
    },
    resetLoanStatus: (state) => {
      state.step = initialState.step
      state.applicationId = initialState.applicationId
      loanStatus.remove()
      loanStatus.setStepNumber(initialState.step)
    }
  }
})

export const { actions: loanStatusActions } = loanStatusSlice
export const { reducer: loanStatusReducer } = loanStatusSlice
