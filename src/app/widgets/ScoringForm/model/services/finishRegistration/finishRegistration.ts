import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi } from '@common/api/mainApi'
import { IScoringDataWithId } from '../../types/scoring'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { loanStatusActions } from '@entities/Loan'

export const finishRegistration = createAsyncThunk<
  void,
  IScoringDataWithId,
  { rejectValue: string }
>('scoring/finishRegistration', async (data, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI
  const { scoringData, applicationId } = data

  try {
    const response = await mainApi.put(
      `application/registration/${applicationId}`,
      scoringData
    )

    if (!response || response.status !== 200) {
      throw new Error('Sorry, failed to send the data!')
    }

    dispatch(loanStatusActions.setStep(4))
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
