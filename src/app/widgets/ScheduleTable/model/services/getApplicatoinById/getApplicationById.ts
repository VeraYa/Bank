import { createAsyncThunk } from '@reduxjs/toolkit'
import { IScheduleResponse } from '../../types/schedule'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { mainApi } from '@common/api/mainApi'

export const getApplicationById = createAsyncThunk<
  IScheduleResponse,
  number,
  { rejectValue: string }
>('schedule/getApplicationById', async (applicationId, thunkAPI) => {
  const { rejectWithValue } = thunkAPI
  try {
    const response = await mainApi.get<IScheduleResponse>(
      `admin/application/${applicationId}`
    )

    if (!response.data) throw new Error('No data')

    if (
      response.data.status === 'CC_DENIED' ||
      response.data.status === 'CC_APPROVED'
    ) {
      return response.data
    } else {
      throw new Error('Something went wrong')
    }
  } catch (e) {
    return rejectWithValue(errorHandler(e))
  }
})
