import { IStateSchema } from '@app/providers/StoreProvider'
import {
  getLoanStatus,
  getLoanStatusStep,
  getLoanStatusApplicationId
} from './getLoanStatusSelectors'

const state: DeepPartial<IStateSchema> = {
  loanStatus: {
    step: 1,
    applicationId: 1
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getLoanStatus(state as IStateSchema)).toEqual({
      step: 1,
      applicationId: 1
    })
  })

  it('Должно вернуться поле error', () => {
    expect(getLoanStatusStep(state as IStateSchema)).toBe(1)
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getLoanStatusApplicationId(state as IStateSchema)).toBe(1)
  })
})
