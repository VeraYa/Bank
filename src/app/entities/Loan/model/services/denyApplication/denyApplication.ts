import { mainApi } from '@common/api/mainApi'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const denyApplication = createAsyncThunk<
  void,
  number,
  { rejectValue: string }
>('deny/denyApplication', async (applicationId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI

  try {
    const response = await mainApi.post(`application/${applicationId}/deny`)

    if (response.status !== 200) throw new Error('Something went wrong')
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
