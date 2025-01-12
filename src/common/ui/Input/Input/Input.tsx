import { forwardRef, InputHTMLAttributes, memo } from 'react'
import { classNames, Mods } from '@classNames/classNames'
import { Label } from '../../Label/Label'
import './Input.scss'
import ValidIcon from '@assets/icons/Success-icon.svg'
import InvalidIcon from '@assets/icons/Error-icon.svg'

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
  error?: string
  isDirty?: boolean
  isSubmitted?: boolean
}

export const Input = memo(
  forwardRef<HTMLInputElement, IInputProps>((props, ref) => {
    const {
      className,
      label,
      error,
      name,
      required,
      isDirty,
      isSubmitted,
      type = 'text',
      ...otherProps
    } = props

    const mods: Mods = {
      'input--error': isSubmitted && error,
      'input--date': type === 'date',
      'input--error-date':
        (type === 'date' && isSubmitted && error) || (isDirty && !error)
    }

    return (
      <div className={classNames('input-item', {}, [className])}>
        <Label className="input__label" htmlFor={name} required={required}>
          {label}
        </Label>
        <div className="input-wrapper">
          <input
            className={classNames('input', mods)}
            id={name}
            type={type}
            name={name}
            ref={ref}
            {...otherProps}
          />
          {isDirty && !error && (
            <img src={ValidIcon} className="input__icon input__icon--valid" />
          )}
          {isSubmitted && error && (
            <img src={InvalidIcon} className="input__icon input__icon--invalid" />
          )}
        </div>
        {error && isSubmitted && <span className="input__error">{error}</span>}
      </div>
    )
  })
)
