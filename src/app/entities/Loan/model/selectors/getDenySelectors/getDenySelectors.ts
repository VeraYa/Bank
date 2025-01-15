import { IStateSchema } from '@app/providers/StoreProvider'

export const getDeny = (state: IStateSchema) => state.deny
export const getDenyError = (state: IStateSchema) => state.deny.error
export const getDenyIsLoading = (state: IStateSchema) => state.deny.isLoading
