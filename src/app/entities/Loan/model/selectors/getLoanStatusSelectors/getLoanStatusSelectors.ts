import { IStateSchema } from '@app/providers/StoreProvider'

export const getLoanStatus = (state: IStateSchema) => state?.loanStatus

export const getLoanStatusStep = (state: IStateSchema) =>
  state?.loanStatus?.step || 1

export const getLoanStatusApplicationId = (state: IStateSchema) =>
  state?.loanStatus?.applicationId
