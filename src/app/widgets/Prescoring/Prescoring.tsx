import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { OffersList } from '@entities/index'
import { PrescoringForm } from '@widgets/PrescoringForm/PrescoringForm'
import { ErrorMessage, Loader } from '@common/ui'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import {
  OfferMessage,
  offerActions,
  getOfferData,
  getOfferError,
  getOfferIsLoading,
  getLoanStatusStep
} from '@entities/Loan'
import {
  createLoanApplication,
  getPrescoringError,
  getPrescoringIsLoading,
  prescoringActions
} from '@widgets/PrescoringForm'
import { IPrescoringData } from '@common/types/loan'

export const Prescoring = () => {
  const dispatch = useAppDispatch()
  const data = useSelector(getOfferData)
  const step = useSelector(getLoanStatusStep)
  const offerError = useSelector(getOfferError)
  const offerIsLoading = useSelector(getOfferIsLoading)
  const prescoringError = useSelector(getPrescoringError)
  const prescoringIsLoading = useSelector(getPrescoringIsLoading)

  const error = prescoringError || offerError
  const isLoading = prescoringIsLoading || offerIsLoading

  const onSubmit = (data: IPrescoringData) => {
    const term = Number(data.term)
    const middleName = data.middleName || null
    dispatch(createLoanApplication({ ...data, term, middleName }))
  }

  const resetErrorHandler = useCallback(() => {
    dispatch(prescoringActions.resetError())
    dispatch(offerActions.resetError())
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} onClick={resetErrorHandler} />
  }

  return (
    <section id="prescoring">
      {step === 1 && <PrescoringForm onSubmit={onSubmit} />}
      {step === 2 && data && <OffersList items={data} />}
      {step > 2 && <OfferMessage />}
    </section>
  )
}
