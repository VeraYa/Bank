import { configureStore } from '@reduxjs/toolkit'
import { IStateSchema } from './StateSchema'
import { prescoringReducer } from '@widgets/PrescoringForm'
import {
  codeReducer,
  denyReducer,
  documentsReducer,
  loanStatusReducer,
  offerReducer
} from '@entities/Loan'
import { scoringReducer } from '@widgets/ScoringForm'
import { scheduleReducer } from '@widgets/ScheduleTable'
import currencyReducer from '@store/slices/currencySlice';
import newsReducer from "@store/slices/newsSlice";

export const createReduxStore = (initialState?: IStateSchema) => {
  return configureStore<IStateSchema>({
    reducer: {
      loanStatus: loanStatusReducer,
      prescoring: prescoringReducer,
      offer: offerReducer,
      scoring: scoringReducer,
      schedule: scheduleReducer,
      deny: denyReducer,
      documents: documentsReducer,
      code: codeReducer,
      currency: currencyReducer,
      news: newsReducer,
    },
    devTools: import.meta.env.MODE === 'development',
    preloadedState: initialState
  })
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
