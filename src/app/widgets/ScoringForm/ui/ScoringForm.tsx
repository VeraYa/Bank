import { useForm } from 'react-hook-form'
import { regex } from '@common/const/regex'
import { IScoringData } from '@common/types/loan'
import { Button, Input, Select } from '@common/ui'
import { formValidate } from '@common/lib/utils/formValidate'
import './ScoringForm.scss'

interface IScoringFormProps {
  onSubmit: (data: IScoringData) => void
}

export const ScoringForm = (props: IScoringFormProps) => {
  const { onSubmit } = props
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted, dirtyFields }
  } = useForm<IScoringData>({
    mode: 'all',
    defaultValues: {
      account: '11223344556677889900'
    }
  })

  return (
    <form
      className="scoring-form"
      onSubmit={handleSubmit(onSubmit)}
      data-testid="scoring-form"
    >
      <div className="scoring-form__header">
        <h3 className="scoring-form__title">Continuation of the application</h3>
        <p className="scoring-form__step">Step 2 of 5</p>
      </div>
      <div className="scoring-form__personal-data">
        {/* prettier-ignore */}
        <Select 
          className='scoring-form__field scoring-form__field--gender'
          label={'What\'quots your gender'}
          options={[
            { value: 'MALE', content: 'MALE' },
            { value: 'FEMALE', content: 'FEMALE' }
          ]}
          required
          empty
          error={errors.gender?.message}
          isSubmitted={isSubmitted}
          {...register('gender', { required: 'Select your gender' })}
        />
        <Select
          className="scoring-form__field scoring-form__field--marital"
          label="Your marital status"
          options={[
            { value: 'MARRIED', content: 'MARRIED' },
            { value: 'DIVORCED', content: 'DIVORCED' },
            { value: 'SINGLE', content: 'SINGLE' },
            { value: 'WIDOW_WIDOWER', content: 'WIDOW_WIDOWER' }
          ]}
          empty
          required
          error={errors.maritalStatus?.message}
          isSubmitted={isSubmitted}
          {...register('maritalStatus', { required: 'Select your marital status' })}
        />
        <Select
          className="scoring-form__field scoring-form__field--dependents"
          label="Your number of dependents"
          options={[
            { value: 0, content: '0' },
            { value: 1, content: '1' },
            { value: 2, content: '2' },
            { value: 3, content: '3' },
            { value: 4, content: 'MORE' }
          ]}
          required
          empty
          error={errors.dependentAmount?.message}
          isSubmitted={isSubmitted}
          {...register('dependentAmount', {
            required: 'Select your number of dependents'
          })}
        />
        <Input
          className="scoring-form__field scoring-form__field--date-of-issue"
          label="Date of issue of the passport"
          placeholder="Select Date and Time"
          required
          type="date"
          error={errors.passportIssueDate?.message}
          isDirty={dirtyFields.passportIssueDate}
          isSubmitted={isSubmitted}
          {...register('passportIssueDate', {
            required: 'Enter date of issue of the passport',
            validate: (value) => formValidate.dateNotAfterToday(value)
          })}
        />
        <Input
          className="scoring-form__field scoring-form__field--division-code"
          label="Division code"
          placeholder="000000"
          required
          maxLength={6}
          error={errors.passportIssueBranch?.message}
          isDirty={dirtyFields['passportIssueBranch']}
          isSubmitted={isSubmitted}
          {...register('passportIssueBranch', {
            required: 'Enter division code',
            minLength: { value: 6, message: 'Division code must be 6 digits' },
            pattern: {
              value: regex.digits,
              message: 'Please enter only digits'
            }
          })}
        />
      </div>
      <h4 className="scoring-form__subtitle">Employment</h4>
      <div className="scoring-form__employment-data">
        <Select
          className="scoring-form__field scoring-form__field--employment"
          label="Your employment status"
          options={[
            { value: 'UNEMPLOYED', content: 'UNEMPLOYED' },
            { value: 'SELF_EMPLOYED', content: 'SELF_EMPLOYED' },
            { value: 'EMPLOYED', content: 'EMPLOYED' },
            { value: 'BUSINESS_OWNER', content: 'BUSINESS_OWNER' }
          ]}
          required
          empty
          error={errors.employment?.employmentStatus?.message}
          isSubmitted={isSubmitted}
          {...register('employment.employmentStatus', {
            required: 'Select your employment status'
          })}
        />
        <Input
          className="scoring-form__field scoring-form__field--inn"
          label="Your employer INN"
          placeholder="000000000000"
          required
          maxLength={12}
          error={errors.employment?.employerINN?.message}
          isDirty={dirtyFields.employment?.employerINN}
          isSubmitted={isSubmitted}
          {...register('employment.employerINN', {
            required: 'Enter your employer INN',
            minLength: { value: 12, message: 'INN must be 12 digits' },
            maxLength: { value: 12, message: 'INN must be 12 digits' },
            pattern: {
              value: regex.digits,
              message: 'Please enter only digits'
            }
          })}
        />
        <Input
          className="scoring-form__field scoring-form__field--salary"
          label="Your salary"
          placeholder="For example 100 000"
          required
          error={errors.employment?.salary?.message}
          isDirty={dirtyFields.employment?.salary}
          isSubmitted={isSubmitted}
          {...register('employment.salary', {
            required: 'Enter your salary',
            pattern: {
              value: regex.digits,
              message: 'Please enter only digits'
            }
          })}
        />
        <Select
          className="scoring-form__field scoring-form__field--position"
          label="Your position"
          options={[
            { value: 'WORKER', content: 'WORKER' },
            { value: 'MID_MANAGER', content: 'MID_MANAGER' },
            { value: 'TOP_MANAGER', content: 'TOP_MANAGER' },
            { value: 'OWNER', content: 'OWNER' }
          ]}
          required
          empty
          error={errors.employment?.position?.message}
          isSubmitted={isSubmitted}
          {...register('employment.position', {
            required: 'Select your position'
          })}
        />
        <Input
          className="scoring-form__field  scoring-form__field--total-experience"
          label="Your work experience total"
          placeholder="For example 10"
          required
          error={errors.employment?.workExperienceTotal?.message}
          isDirty={dirtyFields.employment?.workExperienceTotal}
          isSubmitted={isSubmitted}
          maxLength={2}
          {...register('employment.workExperienceTotal', {
            required: 'Enter your work experience total',
            pattern: {
              value: regex.digits,
              message: 'Please enter only digits'
            }
          })}
        />
        <Input
          className="scoring-form__field scoring-form__field--current-experience"
          label="Your work experience current"
          placeholder="For example 2"
          required
          error={errors.employment?.workExperienceCurrent?.message}
          isDirty={dirtyFields.employment?.workExperienceCurrent}
          isSubmitted={isSubmitted}
          maxLength={2}
          {...register('employment.workExperienceCurrent', {
            required: 'Enter your work experience current',
            pattern: {
              value: regex.digits,
              message: 'Please enter only digits'
            }
          })}
        />
      </div>
      <Button
        className="scoring-form__button"
        type="submit"
        data-testid="scoring-submit"
      >
        Continue
      </Button>
    </form>
  )
}
