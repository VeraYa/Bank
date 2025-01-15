import {
  ICodeSchema,
  IDenySchema,
  IDocumentsSchema,
  ILoanStatusSchema,
  IOfferSchema
} from '@entities/Loan'
import { TCurrencyState } from '@store/slices/currencySlice'
import { TNewsState } from '@store/slices/newsSlice'
import { IPrescoringSchema } from '@widgets/PrescoringForm'
import { IScheduleSchema } from '@widgets/ScheduleTable'
import { IScoringSchema } from '@widgets/ScoringForm'

export interface IStateSchema {
  loanStatus: ILoanStatusSchema
  prescoring: IPrescoringSchema
  offer: IOfferSchema
  scoring: IScoringSchema
  schedule: IScheduleSchema
  deny: IDenySchema
  documents: IDocumentsSchema
  code: ICodeSchema
  currency: TCurrencyState
  news: TNewsState
}
