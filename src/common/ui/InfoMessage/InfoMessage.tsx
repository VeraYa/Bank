import { classNames } from '@classNames/classNames'
import './InfoMessage.scss'
import { memo } from 'react'

interface IInfoMessageProps {
  className?: string
  classNameInfo?: string
  title: string
  text: string
}

export const InfoMessage = memo((props: IInfoMessageProps) => {
  const { className, classNameInfo, title, text } = props

  return (
    <div className={classNames('info-message', {}, [className])}>
      <h3 className="info-message__title">{title}</h3>
      <p className={classNames('info-message__info', {}, [classNameInfo])}>{text}</p>
    </div>
  )
})
