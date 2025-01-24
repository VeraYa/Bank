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
import { ReducersMapObject } from '@reduxjs/toolkit'

export function createReduxStore(
  initialState?: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
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
  }

  const store = configureStore({
    reducer: rootReducers,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false
    }),
    devTools: process.env.NODE_ENV === 'development'
  })

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
