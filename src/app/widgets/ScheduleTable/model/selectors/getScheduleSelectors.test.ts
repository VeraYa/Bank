import { IStateSchema } from '@app/providers/StoreProvider'
import {
  getSchedule,
  getScheduleData,
  getScheduleError,
  getScheduleIsLoading,
  getScheduleStatus
} from './getScheduleSelectors'

const state: DeepPartial<IStateSchema> = {
  schedule: {
    data: [
      {
        date: '12-12-2020',
        debtPayment: 150000,
        interestPayment: 160000,
        number: 6,
        remainingDebt: 5,
        totalPayment: 2000000
      }
    ],
    status: 'CC_APPROVED',
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getSchedule(state as IStateSchema)).toEqual(state.schedule)
  })

  it('Должно вернуться поле data', () => {
    expect(getScheduleData(state as IStateSchema)).toBe(state.schedule?.data)
  })

  it('Должно вернуться поле status', () => {
    expect(getScheduleStatus(state as IStateSchema)).toBe(state.schedule?.status)
  })

  test('Должно вернуться поле error', () => {
    expect(getScheduleError(state as IStateSchema)).toBe(state.schedule?.error)
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getScheduleIsLoading(state as IStateSchema)).toBe(
      state.schedule?.isLoading
    )
  })
})
