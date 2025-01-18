import { InputPin } from '@common/ui'
import './Confirmation.scss'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import { useSelector } from 'react-redux'
import {
  codeActions,
  getCodeError,
  getLoanStatusApplicationId,
  sendSESCode
} from '@entities/Loan'

const QUANTITY_DIGITS = 4

export const Confirmation = () => {
  const dispatch = useAppDispatch()
  const applicationId = useSelector(getLoanStatusApplicationId)
  const error = useSelector(getCodeError)

  const handleChange = (code: string) => {
    if (code.length === QUANTITY_DIGITS - 1) {
      dispatch(codeActions.resetError())
    }

    if (code.length === QUANTITY_DIGITS && applicationId) {
      dispatch(sendSESCode({ applicationId, code }))
    }
  }

  return (
    <section className="confirmation">
      <h1 className="confirmation__title">Please enter confirmation code</h1>
      <InputPin onChange={handleChange} quantity={QUANTITY_DIGITS} error={error} />
    </section>
  )
}
