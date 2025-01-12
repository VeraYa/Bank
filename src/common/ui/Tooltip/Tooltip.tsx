import { memo, ReactNode, useRef, useState } from 'react'
import './Tooltip.scss'
import { classNames, Mods } from '@classNames/classNames'

const DELAY_BEFORE_SHOW = 500

interface ITooltipProps {
  children: ReactNode
  text: string
}

export const Tooltip = memo((props: ITooltipProps) => {
  const { children, text } = props
  const [isVisible, setIsVisible] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>()

  const onMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsVisible(true), DELAY_BEFORE_SHOW)
  }

  const onMouseLeave = () => {
    clearTimeout(timeoutRef.current)
    setIsVisible(false)
  }

  const mods: Mods = { 'tooltip__content--visible': isVisible }

  return (
    <div className="tooltip" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
      <span className={classNames('tooltip__content', mods)}>{text}</span>
    </div>
  )
})
