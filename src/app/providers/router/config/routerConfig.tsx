import { RouteProps } from 'react-router-dom'
import {
  CodePage,
  DocumentPage,
  HomePage,
  LoanPage,
  NotFoundPage,
  ScoringPage,
  SignPage
} from '@pages/index'
import {
  getRouteCode,
  getRouteDocument,
  getRouteHome,
  getRouteLoan,
  getRouteNotFound,
  getRouteScoring,
  getRouteSign
} from '@common/const/routes'
import { ProtectedRoute } from '..'

export enum AppRoutes {
  HOME = 'home',
  LOAN = 'loan',
  SCORING = 'scoring',
  DOCUMENT = 'document',
  SIGN = 'sign',
  CODE = 'code',
  NOT_FOUND = 'not_found'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.HOME]: {
    path: getRouteHome(),
    element: <HomePage />
  },
  [AppRoutes.LOAN]: {
    path: getRouteLoan(),
    element: <LoanPage />
  },
  [AppRoutes.SCORING]: {
    path: getRouteScoring(),
    element: (
      <ProtectedRoute minStep={3} sameApplicationId>
        <ScoringPage />
      </ProtectedRoute>
    )
  },
  [AppRoutes.DOCUMENT]: {
    path: getRouteDocument(),
    element: (
      <ProtectedRoute minStep={4} sameApplicationId>
        <DocumentPage />
      </ProtectedRoute>
    )
  },
  [AppRoutes.SIGN]: {
    path: getRouteSign(),
    element: (
      <ProtectedRoute minStep={5} sameApplicationId>
        <SignPage />
      </ProtectedRoute>
    )
  },
  [AppRoutes.CODE]: {
    path: getRouteCode(),
    element: (
      <ProtectedRoute minStep={6} sameApplicationId>
        <CodePage />
      </ProtectedRoute>
    )
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />
  }
}
