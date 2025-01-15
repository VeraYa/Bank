import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IScheduleResponse, IScheduleSchema } from '../types/schedule'
import { getApplicationById } from '../services/getApplicatoinById/getApplicationById'

const initialState: IScheduleSchema = {
  data: undefined,
  error: undefined,
  status: undefined,
  isLoading: false
}

export const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = undefined
    },
    resetData: (state) => {
      state.data = undefined
      state.status = undefined
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(getApplicationById.pending, (state) => {
      state.error = undefined
      state.status = undefined
      state.isLoading = true
    })
    addCase(
      getApplicationById.fulfilled,
      (state, action: PayloadAction<IScheduleResponse>) => {
        state.isLoading = false
        state.status = action.payload.status
        if (action.payload.status === 'CC_APPROVED') {
          state.data = action.payload.credit.paymentSchedule
        }
      }
    )
    addCase(getApplicationById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { reducer: scheduleReducer } = scheduleSlice
export const { actions: scheduleActions } = scheduleSlice
