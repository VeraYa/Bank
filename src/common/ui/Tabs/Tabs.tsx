import { memo } from 'react'
import { classNames } from '@classNames/classNames'
import { Button } from '../Button/Button'
import './Tabs.scss'

interface ITabsProps {
  className?: string
  tabs: string[]
  activeTab: string
  onSetActiveTab: (value: string) => void
}

export const Tabs = memo((props: ITabsProps) => {
  const { className, tabs, activeTab, onSetActiveTab } = props

  return (
    <ul className={classNames('tabs', {}, [className])}>
      {tabs.map((tab) => {
        const mods = { 'tabs__item--active': tab === activeTab }

        return (
          <li className={classNames('tabs__item', mods)} key={tab}>
            <Button
              className="tabs__button"
              theme="tabs"
              onClick={() => onSetActiveTab(tab)}
            >
              {tab}
            </Button>
          </li>
        )
      })}
    </ul>
  )
})
