import { ButtonHTMLAttributes, memo } from 'react'
import { TButtonTheme, buttonThemeMapper } from './Button.types'
import { textWeightMapper } from '@common/const/style'
import { TTextWeight } from '@common/types/style'
import { classNames } from '@classNames/classNames'
import './Button.scss'

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme?: TButtonTheme
  weight?: TTextWeight
  disabled?: boolean
  onClick?: () => void
}

export const Button = memo((props: IButtonProps) => {
  const {
    className,
    children,
    weight,
    disabled,
    onClick,
    type = 'button',
    theme = 'accent',
    ...otherProps
  } = props

  return (
    <button
      className={classNames('button', { 'button--disabled': disabled }, [
        theme && buttonThemeMapper[theme],
        weight && textWeightMapper[weight],
        className
      ])}
      type={type}
      disabled={disabled}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  )
})
