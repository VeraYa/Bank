import { IPrescoringSchema } from '../types/prescoringSchema'
import { prescoringActions, prescoringReducer } from './prescoringSlice'

describe('prescoringSlice', () => {
  it('reserError', () => {
    const state: DeepPartial<IPrescoringSchema> = { error: 'Some error' }
    expect(
      prescoringReducer(state as IPrescoringSchema, prescoringActions.resetError())
    ).toEqual({ error: undefined })
  })
  it('reserError с пустым состоянием', () => {
    expect(prescoringReducer(undefined, prescoringActions.resetError())).toEqual({
      data: undefined,
      error: undefined,
      isLoading: false
    })
  })
})
