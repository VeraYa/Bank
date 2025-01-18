import { loanStatusActions, offerActions } from '@entities/Loan'
import { mainApi } from '@common/api/mainApi'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { IOfferData, IPrescoringData } from '@common/types/loan'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createLoanApplication = createAsyncThunk<
  IOfferData[],
  IPrescoringData,
  { rejectValue: string }
>('prescoring/sendPrescoringData', async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  try {
    const response = await mainApi.post('application', data)

    if (!response.data) throw new Error('No data')

    dispatch(offerActions.setData(response.data))
    dispatch(loanStatusActions.setStep(2))

    return response.data
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
