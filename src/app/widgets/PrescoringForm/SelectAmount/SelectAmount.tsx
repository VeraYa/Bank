import { forwardRef, InputHTMLAttributes, memo } from 'react'
import { classNames } from '@classNames/classNames'
import { InputAmount, InputRange, Label } from '@common/ui'
import './SelectAmount.scss'

interface ISelectAmountProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
  label: string
}

export const SelectAmount = memo(
  forwardRef<HTMLInputElement, ISelectAmountProps>((props, ref) => {
    const { className, label, name, min, max, ...otherProps } = props

    return (
      <div className={classNames('select-amount', {}, [className])}>
        <Label className="select-amount__label" htmlFor={name}>
          {label}
        </Label>
        <InputAmount
          className="select-amount__number"
          id={name}
          name={name}
          min={min}
          max={max}
          ref={ref}
          {...otherProps}
        />
        <InputRange
          id={name}
          name={name}
          min={min}
          max={max}
          ref={ref}
          {...otherProps}
        />
      </div>
    )
  })
)
