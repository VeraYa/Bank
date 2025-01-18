import { loanStatusActions } from '@entities/Loan'
import { mainApi } from '@common/api/mainApi'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const createDocuments = createAsyncThunk<
  void,
  number,
  { rejectValue: string }
>('documents/createDocuments', async (applicationId, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  try {
    const response = await mainApi.post(`document/${applicationId}`)

    if (response.status !== 200) throw new Error('Something went wrong')

    dispatch(loanStatusActions.setStep(5))
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
