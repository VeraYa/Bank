import { createSlice } from '@reduxjs/toolkit'
import { IPrescoringSchema } from '@widgets/PrescoringForm/types/prescoringSchema'

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
  }
})

export const { actions: prescoringActions } = prescoringSlice
export const { reducer: prescoringReducer } = prescoringSlice
