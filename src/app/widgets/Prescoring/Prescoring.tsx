import { useCallback } from 'react'
import { useSelector } from 'react-redux'
import { PrescoringForm } from '@widgets/PrescoringForm/PrescoringForm'
import { Loader } from '@common/ui/Loader/Loader'
import { ErrorMessage } from '@common/ui/ErrorMessage/ErrorMessage'
import {
  getPrescoringError,
  getPrescoringIsLoading,
} from '@widgets/PrescoringForm/selectors/getPrescoring/getPrescoring'
import { IPrescoringData } from '@common/types/loan'
import { prescoringActions } from '@store/slices/prescoringSlice'
import { useAppDispatch } from '@store/hooks'

export const Prescoring = () => {
  const prescoringError = useSelector(getPrescoringError)
  const prescoringIsLoading = useSelector(getPrescoringIsLoading)
  const dispatch = useAppDispatch()

  const error = prescoringError 
  const isLoading = prescoringIsLoading 

  const onSubmit = (data: IPrescoringData) => {
    console.log(data)
  }

  const resetErrorHandler = useCallback(() => {
    dispatch(prescoringActions.resetError())
  }, [])

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} onClick={resetErrorHandler} />
  }

  return (
    <section id="prescoring">
      <PrescoringForm onSubmit={onSubmit} />
    </section>
  )
}
