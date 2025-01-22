import { IStateSchema } from '@app/providers/StoreProvider'
import {
  getDocuments,
  getDocumentsError,
  getDocumentsIsLoading
} from './getDocumentsSelectors'

const state: DeepPartial<IStateSchema> = {
  documents: {
    error: 'Some error',
    isLoading: false
  }
}

describe('getPrescoring', () => {
  it('Должны вернуться все поля prescoring', () => {
    expect(getDocuments(state as IStateSchema)).toEqual({
      error: 'Some error',
      isLoading: false
    })
  })

  it('Должно вернуться поле error', () => {
    expect(getDocumentsError(state as IStateSchema)).toBe('Some error')
  })

  it('Должно вернуться поле isLoading', () => {
    expect(getDocumentsIsLoading(state as IStateSchema)).toBe(false)
  })
})
