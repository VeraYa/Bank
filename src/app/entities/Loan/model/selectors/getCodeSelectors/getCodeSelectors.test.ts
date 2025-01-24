import { IStateSchema } from '@app/providers/StoreProvider'
import { getCode, getCodeError, getCodeIsLoading } from './getCodeSelectors'

const state: DeepPartial<IStateSchema> = {
  code: {
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getCode(state as IStateSchema)).toEqual({
      error: 'Some error',
      isLoading: false
    })
  })

  it('Должно вернуться поле error', () => {
    expect(getCodeError(state as IStateSchema)).toBe('Some error')
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getCodeIsLoading(state as IStateSchema)).toBe(false)
  })
})
