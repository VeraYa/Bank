import { TestAsyncThunk } from '@common/lib/tests/TestAsyncThunk'
import { IPrescoringData } from '@common/types/loan'
import { createLoanApplication } from './createLoanApplication'
import { mainApi } from '@common/api/mainApi'

const prescoringData: IPrescoringData = {
  firstName: 'John',
  lastName: 'Doe',
  middleName: '',
  amount: 200000,
  birthdate: '1992-12-12',
  email: 'test@test.com',
  passportNumber: '123123',
  passportSeries: '1231',
  term: 6
}

const offerData = [
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 150000,
    monthlyPayment: 26702.75,
    term: 6,
    rate: 23,
    isInsuranceEnabled: false,
    isSalaryClient: false
  },
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 150000,
    monthlyPayment: 26626.65,
    term: 6,
    rate: 22,
    isInsuranceEnabled: false,
    isSalaryClient: true
  },
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 160000,
    monthlyPayment: 28162.58,
    term: 6,
    rate: 19,
    isInsuranceEnabled: true,
    isSalaryClient: false
  },
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 160000,
    monthlyPayment: 28082.19,
    term: 6,
    rate: 18,
    isInsuranceEnabled: true,
    isSalaryClient: true
  }
]

jest.mock('@common/api/mainApi')

const mockedMainApi = jest.mocked(mainApi)

describe('createLoanApplication', () => {
  it('createLoanApplication fulfilled', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ data: offerData }))
    const thunk = new TestAsyncThunk(createLoanApplication)
    const result = await thunk.callThunk(prescoringData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
    expect(result.meta.requestStatus).toBe('fulfilled')
  })

  it('createLoanApplication rejected', async () => {
    mockedMainApi.post.mockReturnValue(Promise.resolve({ status: 503 }))
    const thunk = new TestAsyncThunk(createLoanApplication)
    const result = await thunk.callThunk(prescoringData)

    expect(thunk.dispatch).toHaveBeenCalled()
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.meta.requestStatus).toBe('rejected')
  })
})
