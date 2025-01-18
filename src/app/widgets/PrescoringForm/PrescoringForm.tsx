import { useSelector } from 'react-redux'
import { ChangeEvent, FocusEvent, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { Button, Input, InputAmount, Loader, Select } from '@common/ui'
import {
  getPrescoringError,
  getPrescoringIsLoading
} from './selectors/getPrescoring/getPrescoring'
import { regex } from '@common/const/regex'
import { IPrescoringData } from '@common/types/loan'
import { filterDigits } from '@common/lib/utils/utils'
import { SelectAmount } from './SelectAmount/SelectAmount'
import { formValidate } from '@common/lib/utils/formValidate'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import { prescoringActions } from './slice/prescoringSlice'
import './PrescoringForm.scss'

const AMOUNT_DEFAULT = 150000
const AMOUNT_MIN = 15000
const AMOUNT_MAX = 600000

interface IPrescoringFormProps {
  onSubmit: (data: IPrescoringData) => void
}

export const PrescoringForm = (props: IPrescoringFormProps) => {
  const { onSubmit } = props
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitted, dirtyFields }
  } = useForm<IPrescoringData>({
    mode: 'all',
    defaultValues: {
      amount: AMOUNT_DEFAULT
    }
  })

  const error = useSelector(getPrescoringError)
  const isLoading = useSelector(getPrescoringIsLoading)
  const dispatch = useAppDispatch()

  const resetError = () => dispatch(prescoringActions.resetError())

  const onBlurAmount = useCallback((e: FocusEvent<HTMLInputElement>) => {
    let newValue = Number(filterDigits(e.target.value))
    if (newValue >= AMOUNT_MAX) newValue = AMOUNT_MAX
    if (newValue <= AMOUNT_MIN) newValue = AMOUNT_MIN
    setValue('amount', newValue)
  }, [])

  const onChangeAmount = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(filterDigits(e.target.value))
    setValue('amount', newValue)
  }, [])

  if (isLoading) {
    return (
      <div className="prescoring-form__loading">
        <Loader />
      </div>
    )
  }

  if (error) {
    return (
      <div className="prescoring-form__error">
        <p className="prescoring-form__error-message">{error}</p>
        <Button theme="error" onClick={() => resetError()}>
          Try again
        </Button>
      </div>
    )
  }

  return (
    <form
      className="prescoring-form"
      onSubmit={handleSubmit(onSubmit)}
      data-testid="prescoring-form"
    >
      <div className="prescoring-form__amount-wrapper">
        <div className="prescoring-form__select-wrapper">
          <div className="prescoring-form__select-header">
            <h3 className="prescoring-form__title">Customize your card</h3>
            <p className="prescoring-form__step">Step 1 of 5</p>
          </div>
          <SelectAmount
            data-testid="amount"
            label="Select Amount"
            min={AMOUNT_MIN}
            max={AMOUNT_MAX}
            value={watch('amount')}
            {...register('amount', {
              onChange: onChangeAmount,
              onBlur: onBlurAmount
            })}
          />
        </div>
        <div className="prescoring-form__total-wrapper">
          <h4 className="prescoring-form__amount-title">
            You have chosen the amount
          </h4>
          <InputAmount
            data-testid="amount"
            className="prescoring-form__amount"
            min={AMOUNT_MIN}
            max={AMOUNT_MAX}
            value={watch('amount')}
            {...register('amount', {
              onChange: onChangeAmount,
              onBlur: onBlurAmount
            })}
          />
        </div>
      </div>
      <div className="prescoring-form__contact-info">
        <h4 className="prescoring-form__contact-title">Contact Information</h4>
        <div className="prescoring-form__contact-items">
          <Input
            placeholder="For Example Doe"
            label="Your last name"
            error={errors.lastName?.message}
            isDirty={dirtyFields.lastName}
            isSubmitted={isSubmitted}
            required
            {...register('lastName', {
              required: 'Enter your last name'
            })}
          />
          <Input
            placeholder="For Example John"
            label="Your first name"
            error={errors.firstName?.message}
            isDirty={dirtyFields.firstName}
            isSubmitted={isSubmitted}
            required
            {...register('firstName', {
              required: 'Enter your first name'
            })}
          />
          <Input
            placeholder="For Example Victorovich"
            label="Your patronymic"
            {...register('middleName')}
          />
          <Select
            label="Select term"
            required
            options={[
              { value: 6, content: '6 month' },
              { value: 12, content: '12 month' },
              { value: 18, content: '18 month' },
              { value: 24, content: '24 month' }
            ]}
            {...register('term')}
          />
          <Input
            placeholder="test@gmail.com"
            label="Your email"
            error={errors.email?.message}
            isDirty={dirtyFields.email}
            isSubmitted={isSubmitted}
            required
            {...register('email', {
              required: 'Incorrect email address',
              pattern: {
                value: regex.email,
                message: 'Incorrect email address'
              }
            })}
          />
          <Input
            placeholder="Select Date and Time"
            label="Your date of birth"
            error={errors.birthdate?.message}
            isDirty={dirtyFields.birthdate}
            isSubmitted={isSubmitted}
            type="date"
            required
            {...register('birthdate', {
              required: 'Incorrect date of birth',
              validate: (value) => formValidate.age(value)
            })}
          />
          <Input
            placeholder="0000"
            label="Your passport series"
            error={errors.passportSeries?.message}
            isDirty={dirtyFields.passportSeries}
            isSubmitted={isSubmitted}
            maxLength={4}
            required
            {...register('passportSeries', {
              required: 'The series must be 4 digits',
              minLength: { value: 4, message: 'The series must be 4 digits' },
              pattern: {
                value: regex.digits,
                message: 'Please enter only digits'
              }
            })}
          />
          <Input
            placeholder="000000"
            label="Your passport number"
            error={errors.passportNumber?.message}
            isDirty={dirtyFields.passportNumber}
            isSubmitted={isSubmitted}
            maxLength={6}
            required
            {...register('passportNumber', {
              required: 'The series must be 6 digits',
              minLength: { value: 6, message: 'The series must be 6 digits' },
              pattern: {
                value: regex.digits,
                message: 'Please enter only digits'
              }
            })}
          />
        </div>
      </div>
      <Button
        className="prescoring-form__button"
        type="submit"
        data-testid="prescoring-submit"
      >
        Continue
      </Button>
    </form>
  )
}
