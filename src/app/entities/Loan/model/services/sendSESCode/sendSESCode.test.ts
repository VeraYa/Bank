import { mainApi } from '@common/api/mainApi'
import { TestAsyncThunk } from '@common/lib/tests/TestAsyncThunk'
import { sendSESCode } from './sendSESCode'

const sendSESCodeData = { applicationId: 1, code: '1234' }

jest.mock('@common/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('sendSESCode', () => {
  it('sendSESCode fulfilled', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 200 }))
    const thunk = new TestAsyncThunk(sendSESCode)
    const result = await thunk.callThunk(sendSESCodeData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  it('sendSESCode rejected', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(sendSESCode)
    const result = await thunk.callThunk(sendSESCodeData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
