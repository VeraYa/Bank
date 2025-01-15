import { IScoringData } from '@common/types/loan'

export interface IScoringDataWithId {
  scoringData: IScoringData
  applicationId: number
}
