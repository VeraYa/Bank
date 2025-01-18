import { IStateSchema } from '@app/providers/StoreProvider'

export const getOffer = (state: IStateSchema) => state.offer
export const getOfferData = (state: IStateSchema) => state.offer.data
export const getOfferError = (state: IStateSchema) => state.offer.error
export const getOfferIsLoading = (state: IStateSchema) => state.offer.isLoading
