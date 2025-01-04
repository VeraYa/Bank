import { ChangeEvent, KeyboardEvent, memo, useEffect, useRef, useState } from 'react'
import './InputPin.scss'
import { classNames } from '@classNames/classNames'

interface IInputPinProps {
  className?: string
  quantity?: number
  onChange: (string: string) => void
  error?: string
}

let currentOTPIndex: number = 0

export const InputPin = memo((props: IInputPinProps) => {
  const { className, quantity = 4, onChange, error } = props
  const [otp, setOtp] = useState<string[]>(new Array(quantity).fill(''))
  const [activeOTPIndex, setActiveOTPIndex] = useState<number>(0)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    onChange(otp.join(''))
  }, [otp])

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { value } = target
    const newOTP = [...otp]
    newOTP[currentOTPIndex] = value.substring(value.length - 1)

    if (!value) setActiveOTPIndex(currentOTPIndex - 1)
    else setActiveOTPIndex(currentOTPIndex + 1)

    setOtp(newOTP)
  }

  const handleOnKeyDown = (
    { key }: KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    currentOTPIndex = index
    if (key === 'Backspace') setActiveOTPIndex(currentOTPIndex - 1)
  }

  useEffect(() => {
    inputRef.current?.focus()
  }, [activeOTPIndex])

  return (
    <div className={classNames('input-pin', {}, [className])}>
      <div className="input-wrapper">
        {otp.map((_, index) => (
          <input
            ref={index === activeOTPIndex ? inputRef : null}
            className="input-pin__input"
            placeholder="◯"
            type="number"
            required
            key={index}
            onChange={handleChange}
            onKeyDown={(e) => handleOnKeyDown(e, index)}
            value={otp[index]}
          />
        ))}
      </div>
      {error && <p className="input-pin__error">{error}</p>}
    </div>
  )
})
