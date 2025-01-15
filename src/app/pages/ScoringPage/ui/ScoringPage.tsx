import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { ScoringForm } from '@widgets/ScoringForm'
import { ErrorMessage, InfoMessage, Loader } from '@common/ui'
import {
  getLoanStatusApplicationId,
  getLoanStatusStep
} from '@entities/Loan/model/selectors/getLoanStatusSelectors/getLoanStatusSelectors'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import {
  finishRegistration,
  getScoringError,
  getScoringIsLoading,
  scoringActions
} from '@widgets/ScoringForm'
import '@styles/config/index.scss'
import { IScoringData } from '@common/types/loan'

const ScoringPage = () => {
  const step = useSelector(getLoanStatusStep)
  const error = useSelector(getScoringError)
  const isLoading = useSelector(getScoringIsLoading)
  const applicationId = useSelector(getLoanStatusApplicationId)
  const dispatch = useAppDispatch()

  const resetErrorHandler = useCallback(() => {
    dispatch(scoringActions.resetError())
  }, [])

  const onSubmit = (data: IScoringData) => {
    const dependentAmount = Number(data.dependentAmount)
    const employment = {
      ...data.employment,
      employerINN: Number(data.employment.employerINN),
      salary: Number(data.employment.salary),
      workExperienceTotal: Number(data.employment.workExperienceTotal),
      workExperienceCurrent: Number(data.employment.workExperienceCurrent)
    }

    const scoringData = { ...data, dependentAmount, employment }

    if (applicationId) dispatch(finishRegistration({ scoringData, applicationId }))
  }

  if (isLoading) {
    return (
      <main className="page">
        <Loader />
      </main>
    )
  }

  if (error) {
    return (
      <main className="page">
        <ErrorMessage error={error} onClick={resetErrorHandler} />
      </main>
    )
  }

  return (
    <main className="page">
      {step > 3 && (
        <InfoMessage
          title="Wait for a decision on the application"
          text="The answer will come to your mail within 10 minutes"
        />
      )}
      {step === 3 && <ScoringForm onSubmit={onSubmit} />}
    </main>
  )
}

export default ScoringPage
