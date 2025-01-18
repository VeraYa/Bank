import { IStateSchema } from '@app/providers/StoreProvider'

export const getSchedule = (state: IStateSchema) => state.schedule
export const getScheduleData = (state: IStateSchema) => state.schedule.data
export const getScheduleError = (state: IStateSchema) => state.schedule.error
export const getScheduleStatus = (state: IStateSchema) => state.schedule.status
export const getScheduleIsLoading = (state: IStateSchema) => state.schedule.isLoading
