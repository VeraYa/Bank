import { IStateSchema } from '@app/providers/StoreProvider'
import { getDeny, getDenyError, getDenyIsLoading } from './getDenySelectors'

const state: DeepPartial<IStateSchema> = {
  deny: {
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getDeny(state as IStateSchema)).toEqual({
      error: 'Some error',
      isLoading: false
    })
  })

  it('Должно вернуться поле error', () => {
    expect(getDenyError(state as IStateSchema)).toBe('Some error')
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getDenyIsLoading(state as IStateSchema)).toBe(false)
  })
})
