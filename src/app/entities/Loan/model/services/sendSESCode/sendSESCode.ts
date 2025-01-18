import { createAsyncThunk } from '@reduxjs/toolkit'
import { mainApi } from '@common/api/mainApi'
import { loanStatusActions } from '../../slice/loanStatusSlice'

export const sendSESCode = createAsyncThunk<
  void,
  { applicationId: number; code: string },
  { rejectValue: string }
>('code/sendSESCode', async ({ applicationId, code }, thunkAPI) => {
  const { dispatch, rejectWithValue } = thunkAPI

  try {
    const response = await mainApi.post(`/document/${applicationId}/sign/code`, code)

    if (response.status > 399) throw new Error('Invalid confirmation code')

    dispatch(loanStatusActions.setStep(7))
  } catch (e) {
    console.log(e)
    return rejectWithValue('Invalid confirmation code')
  }
})
