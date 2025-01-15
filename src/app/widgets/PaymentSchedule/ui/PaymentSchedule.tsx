import { ScheduleTable } from '@widgets/ScheduleTable'
import './PaymentSchedule.scss'
import { Button, Checkbox, ErrorMessage, Loader } from '@common/ui'
import {
  DenyModal,
  documentsActions,
  getDocumentsError,
  getDocumentsIsLoading,
  getLoanStatusApplicationId
} from '@entities/Loan'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import { createDocuments } from '@entities/Loan/model/services/createDocuments/createDocuments'
import { getScheduleData } from '@widgets/ScheduleTable'

export const PaymentSchedule = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [isAgree, setIsAgree] = useState(false)
  const applicationId = useSelector(getLoanStatusApplicationId)
  const isLoading = useSelector(getDocumentsIsLoading)
  const data = useSelector(getScheduleData)
  const error = useSelector(getDocumentsError)

  const dispatch = useAppDispatch()

  const onSend = () => {
    if (applicationId) {
      dispatch(createDocuments(applicationId))
    }
  }

  const resetErrorHandler = () => {
    dispatch(documentsActions.resetError())
  }

  const onToggleAgree = () => {
    setIsAgree((prev) => !prev)
  }

  const onCloseModal = () => {
    setIsOpenModal(false)
  }

  const onOpenModal = () => {
    setIsOpenModal(true)
  }

  if (isLoading) {
    return <Loader />
  }

  if (error) {
    return <ErrorMessage error={error} onClick={resetErrorHandler} />
  }

  return (
    <section className="payment-schedule">
      <div className="payment-schedule__header">
        <h3 className="payment-schedule__title">Payment Schedule</h3>
        <p className="payment-schedule__step">Step 3 of 5</p>
      </div>
      <div className="payment-schedule__wrapper">
        <ScheduleTable className="payment-schedule__table" />
      </div>
      <Checkbox
        className="payment-schedule__checkbox payment-schedule__checkbox--hidden"
        label="I agree with the payment schedule"
        isChecked={isAgree}
        onClick={onToggleAgree}
      />
      <div className="payment-schedule__actions">
        <Button
          className="payment-schedule__button payment-schedule__button--deny"
          theme="error"
          onClick={onOpenModal}
        >
          Deny
        </Button>
        <Checkbox
          className="payment-schedule__checkbox"
          label="I agree with the payment schedule"
          isChecked={isAgree}
          onClick={onToggleAgree}
        />
        <Button
          className="payment-schedule__button"
          disabled={!isAgree || !data}
          onClick={onSend}
        >
          Send
        </Button>
      </div>
      <DenyModal isOpen={isOpenModal} onClose={onCloseModal} />
    </section>
  )
}
