import { memo } from 'react'
import { classNames } from '@classNames/classNames'
import { Button } from '../Button/Button'
import './ErrorMessage.scss'

interface IErrorMessage {
  className?: string
  error: string
  buttonText?: string
  onClick: () => void
}

export const ErrorMessage = memo((props: IErrorMessage) => {
  const { className, error, buttonText = 'Try again', onClick } = props

  return (
    <div className={classNames('error-message', {}, [className])}>
      <h3 className="error-message__title">{error}</h3>
      <Button className="error-message__button" theme="error" onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  )
})
