import { numWithSpaces } from '@common/lib/utils/utils'
import { classNames } from '@classNames/classNames'
import { forwardRef, InputHTMLAttributes, memo } from 'react'
import './InputRange.scss'

interface IInputRangeProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string
}

export const InputRange = memo(
  forwardRef<HTMLInputElement, IInputRangeProps>((props, ref) => {
    const { className, min, max, value, ...otherProps } = props
    const rangeValuePercent =
      ((Number(value) - Number(min)) / (Number(max) - Number(min))) * 100

    return (
      <div className="input-range__wrapper">
        <input
          className={classNames('input-range__range', {}, [className])}
          value={value}
          type="range"
          min={min}
          max={max}
          ref={ref}
          style={{
            backgroundSize: `${rangeValuePercent}% 100%`
          }}
          {...otherProps}
        />
        {min && max && (
          <span className="input-range__min">{numWithSpaces(Number(min))}</span>
        )}
        {max && max && (
          <span className="input-range__max">{numWithSpaces(Number(max))}</span>
        )}
      </div>
    )
  })
)
