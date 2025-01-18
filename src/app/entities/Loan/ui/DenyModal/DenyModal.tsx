import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { classNames } from '@classNames/classNames'
import { Button, Modal } from '@common/ui'
import { getRouteHome } from '@common/const/routes'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import { loanStatusActions } from '../../model/slice/loanStatusSlice'
import { denyApplication } from '../../model/services/denyApplication/denyApplication'
import { getLoanStatusApplicationId } from '../../model/selectors/getLoanStatusSelectors/getLoanStatusSelectors'
import './DenyModal.scss'
import { scheduleActions } from '@widgets/ScheduleTable'

interface IDenyModalProps {
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const DenyModal = (props: IDenyModalProps) => {
  const { className, isOpen, onClose } = props
  const [isDenied, setIsDenied] = useState(false)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const applicationId = useSelector(getLoanStatusApplicationId)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const onCloseHandler = () => {
    onClose()
    if (isDenied) {
      navigate(getRouteHome())
      dispatch(loanStatusActions.resetLoanStatus())
      dispatch(loanStatusActions.initLoanStatus())
      dispatch(scheduleActions.resetData())
    }
  }

  const onDenyHandler = () => {
    if (applicationId) {
      dispatch(denyApplication(applicationId))
      setIsDenied(true)
    }
  }

  const onCloseInModal = () => {
    buttonRef.current?.click()
  }

  return (
    <Modal
      className={classNames('deny-modal', {}, [className])}
      isOpen={isOpen}
      onClose={onCloseHandler}
      closeButton
      lazy
      ref={buttonRef}
    >
      <h4 className="deny-modal__title">Deny application</h4>
      {isDenied ? (
        <>
          <p className="deny-modal__question">Your application has been deny!</p>
          <Button
            className="deny-modal__button deny-modal__button--home"
            onClick={onCloseInModal}
          >
            Go home
          </Button>
        </>
      ) : (
        <>
          <p className="deny-modal__question">
            You exactly sure, you want to cancel this application?
          </p>
          <div className="deny-modal__actions">
            <Button
              className="deny-modal__button deny-modal__button--deny"
              theme="error"
              onClick={onDenyHandler}
            >
              Deny
            </Button>
            <Button className="deny-modal__button" onClick={onCloseInModal}>
              Cancel
            </Button>
          </div>
        </>
      )}
    </Modal>
  )
}
