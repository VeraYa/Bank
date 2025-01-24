import { IStateSchema } from '@app/providers/StoreProvider'
import {
  getScoring,
  getScoringError,
  getScoringIsLoading
} from './getScoringSelectors'

const state: DeepPartial<IStateSchema> = {
  scoring: {
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getScoring(state as IStateSchema)).toEqual({
      error: 'Some error',
      isLoading: false
    })
  })

  it('Должно вернуться поле error', () => {
    expect(getScoringError(state as IStateSchema)).toBe('Some error')
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getScoringIsLoading(state as IStateSchema)).toBe(false)
  })
})
