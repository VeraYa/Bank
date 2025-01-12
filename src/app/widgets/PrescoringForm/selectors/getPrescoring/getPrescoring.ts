import { IStateSchema } from '@widgets/PrescoringForm/storeProvider/StateSchema'

export const getPrescoring = (state: IStateSchema) => state.prescoring

export const getPrescoringError = (state: IStateSchema) => state.prescoring.error
export const getPrescoringIsLoading = (state: IStateSchema) =>
  state.prescoring.isLoading
