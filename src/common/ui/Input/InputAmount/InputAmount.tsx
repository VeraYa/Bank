import { formatNumber } from '@common/lib/utils/utils'
import { classNames } from '@classNames/classNames'
import { forwardRef, InputHTMLAttributes, memo } from 'react'
import './InputAmount.scss'

interface IInputAmount extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const InputAmount = memo(
  forwardRef<HTMLInputElement, IInputAmount>((props, ref) => {
    const { className, name, min, max, value, ...otherProps } = props

    return (
      <input
        className={classNames('input-amount', {}, [className])}
        id={name}
        name={name}
        type="text"
        min={min}
        max={max}
        ref={ref}
        maxLength={7}
        value={formatNumber(Number(value))}
        {...otherProps}
      />
    )
  })
)
