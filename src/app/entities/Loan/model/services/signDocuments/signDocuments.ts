import { mainApi } from '@common/api/mainApi'
import { errorHandler } from '@common/lib/errorHandler/errorHandler'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { loanStatusActions } from '../../slice/loanStatusSlice'

export const signDocuments = createAsyncThunk<void, number, { rejectValue: string }>(
  'documents/signDocuments',
  async (applicationId, thunkAPI) => {
    const { dispatch, rejectWithValue } = thunkAPI

    try {
      const response = await mainApi.post(`document/${applicationId}/sign`)

      if (response.status !== 200) throw new Error('Something went wrong')

      dispatch(loanStatusActions.setStep(6))
    } catch (e) {
      return rejectWithValue(errorHandler(e))
    }
  }
)
