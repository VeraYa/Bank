import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { IOfferData } from '@common/types/loan'
import { mainApi } from '@common/api/mainApi'
import { loanStatusActions } from '../../slice/loanStatusSlice'

export const applyOffer = createAsyncThunk<
  void,
  IOfferData,
  { rejectValue: string }
>('offer/applyOffer', async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  try {
    const response = await mainApi.post('application/apply', data)

    if (!response || response.status !== 200) {
      throw new Error('Sorry, failed to send the data!')
    }

    dispatch(loanStatusActions.setStep(3))
    dispatch(loanStatusActions.setApplicationId(data.applicationId))
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
