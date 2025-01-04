import { LabelHTMLAttributes, memo, ReactNode } from 'react'
import { classNames, Mods } from '@classNames/classNames'
import './Label.scss'

interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  className?: string
  children?: ReactNode
  required?: boolean
}

export const Label = memo((props: ILabelProps) => {
  const { className, children, required, ...otherProps } = props

  const mods: Mods = { 'label--required': required }

  return (
    <label className={classNames('label', mods, [className])} {...otherProps}>
      {children}
    </label>
  )
})
