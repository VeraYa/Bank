import { forwardRef, memo, SelectHTMLAttributes, useMemo } from 'react'
import { Label } from '../Label/Label'
import { classNames, Mods } from '@classNames/classNames'
import ArrowIcon from '@assets/icons/Select_arrow.svg'
import './Select.scss'

interface ISelectOption {
  value: string | number
  content: string
}

interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string
  label?: string
  options?: ISelectOption[]
  empty?: boolean
  error?: string
  isSubmitted?: boolean
}

export const Select = memo(
  forwardRef<HTMLSelectElement, ISelectProps>((props, ref) => {
    const {
      className,
      label,
      name,
      options,
      required,
      empty,
      error,
      isSubmitted,
      ...otherProps
    } = props

    const optionsList = useMemo(
      () =>
        options?.map(({ value, content }) => (
          <option value={value} key={value}>
            {content}
          </option>
        )),
      [options]
    )

    const mods: Mods = { 'select--error': isSubmitted && error }

    if (label) {
      return (
        <div className={classNames('select-item', {}, [className])}>
          <Label required={required} htmlFor={name}>
            {label}
          </Label>
          <div className="select__wrapper">
            <select
              className={classNames('select', mods)}
              name={name}
              id={name}
              ref={ref}
              {...otherProps}
            >
              {empty && <option hidden value=""></option>}
              {optionsList}
            </select>
            <img src={ArrowIcon} className={classNames('select__arrow')} />
          </div>
          {error && isSubmitted && <span className="select__error">{error}</span>}
        </div>
      )
    }

    return (
      <div>
        <select
          className={classNames('select', {}, [className])}
          name={name}
          id={name}
          ref={ref}
          {...otherProps}
        >
          {empty && <option hidden value=""></option>}
          {optionsList}
        </select>
        <img src={ArrowIcon} className={classNames('select__arrow')} />
        {error && isSubmitted && <span className="select__error">{error}</span>}
      </div>
    )
  })
)
