import { memo } from 'react'
import { Link, LinkProps, useLocation } from 'react-router-dom'
import { classNames } from '@classNames/classNames'
import { textWeightMapper } from '@common/const/style'
import { TTextWeight } from '@common/types/style'
import { TAppLinkTheme, appLinkThemeMapper } from './AppLink.types'
import './AppLink.scss'

export interface IAppLinkProps extends LinkProps {
  className?: string
  theme?: TAppLinkTheme
  weight?: TTextWeight
  active?: boolean
}

export const AppLink = memo((props: IAppLinkProps) => {
  const { className, children, active, to, theme, weight } = props

  const route = useLocation().pathname

  return (
    <Link
      className={classNames('link', { 'link--active': active && route === to }, [
        className,
        theme && appLinkThemeMapper[theme],
        weight && textWeightMapper[weight]
      ])}
      to={to}
    >
      {children}
    </Link>
  )
})
