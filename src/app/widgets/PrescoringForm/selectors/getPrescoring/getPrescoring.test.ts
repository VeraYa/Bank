import { IStateSchema } from '@app/providers/StoreProvider'
import {
  getPrescoring,
  getPrescoringError,
  getPrescoringIsLoading
} from './getPrescoring'

const state: DeepPartial<IStateSchema> = {
  prescoring: {
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getPrescoring(state as IStateSchema)).toEqual({
      error: 'Some error',
      isLoading: false
    })
  })

  it('Должно вернуться поле error', () => {
    expect(getPrescoringError(state as IStateSchema)).toBe('Some error')
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getPrescoringIsLoading(state as IStateSchema)).toBe(false)
  })
})
