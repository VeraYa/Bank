import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, InfoMessage } from '@common/ui'
import { loanStatusActions } from '@entities/Loan'
import { getRouteHome } from '@common/const/routes'
import { scheduleActions } from '@widgets/ScheduleTable'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import './Denied.scss'

export const Denied = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    return () => {
      navigate(getRouteHome())
      dispatch(loanStatusActions.resetLoanStatus())
      dispatch(loanStatusActions.initLoanStatus())
      dispatch(scheduleActions.resetData())
    }
  }, [])

  const onClick = () => {
    navigate(getRouteHome())
  }

  return (
    <div className="denied">
      <InfoMessage
        className="denied__message"
        title="Credit card application is denied."
        text="We regret to inform you that we are unable to approve your loan application at this time. We appreciate your interest and encourage you to consider applying again in the future."
      />
      <Button className="denied__button" onClick={onClick}>
        Go home
      </Button>
    </div>
  )
}
