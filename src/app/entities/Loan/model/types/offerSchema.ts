import { IOfferData } from '@common/types/loan'

export interface IOfferSchema {
  data?: IOfferData[]
  error?: string
  isLoading: boolean
}
