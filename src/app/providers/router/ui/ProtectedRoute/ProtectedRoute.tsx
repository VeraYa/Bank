import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { NotFoundPage } from '@pages/index'
import { getLoanStatusApplicationId, getLoanStatusStep } from '@entities/Loan'

export interface IProtectedRoute {
  children?: ReactNode
  minStep?: number
  sameApplicationId?: boolean
}

const ProtectedRoute = (props: IProtectedRoute) => {
  const { children, minStep, sameApplicationId } = props
  const currStep = useSelector(getLoanStatusStep)
  const currApplicationId = useSelector(getLoanStatusApplicationId)
  const { applicationId } = useParams()

  if (sameApplicationId) {
    return String(currApplicationId) === applicationId ? children : <NotFoundPage />
  }

  if (minStep) {
    return minStep <= currStep ? children : <NotFoundPage />
  }

  return children
}

export default ProtectedRoute
