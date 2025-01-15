import { IStateSchema } from '@/app/providers/StoreProvider'

export const getScoring = (state: IStateSchema) => state?.scoring
export const getScoringError = (state: IStateSchema) => state?.scoring?.error
export const getScoringIsLoading = (state: IStateSchema) => state?.scoring?.isLoading
