import { mainApi } from '@common/api/mainApi'
import { TestAsyncThunk } from '@common/lib/tests/TestAsyncThunk'
import { createDocuments } from './createDocuments'

const applicationId = 1

jest.mock('@common/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('createDocuments', () => {
  it('createDocuments fulfilled', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 200 }))
    const thunk = new TestAsyncThunk(createDocuments)
    const result = await thunk.callThunk(applicationId)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  it('createDocuments rejected', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(createDocuments)
    const result = await thunk.callThunk(applicationId)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
