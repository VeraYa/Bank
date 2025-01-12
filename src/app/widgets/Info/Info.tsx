import { ReactNode, useCallback, useState } from 'react'
import { RatesAndConditions } from './RatesAndConditions/RatesAndConditions'
import { AboutCard } from './AboutCard/AboutCard'
import { Cashback } from './Cashback/Cashback'
import { Tabs } from '@ui/Tabs/Tabs'
import { Faq } from './Faq/Faq'
import './Info.scss'

const tabs: Record<string, ReactNode> = {
  'About card': <AboutCard />,
  'Rates and conditions': <RatesAndConditions />,
  Cashback: <Cashback />,
  FAQ: <Faq />
}

export const Info = () => {
  const SESSION_STORAGE_ACTIVE_TAB_KEY = 'active_tab'

  const [activeTab, setActiveTab] = useState(
    sessionStorage.getItem(SESSION_STORAGE_ACTIVE_TAB_KEY) || 'About card'
  )

  const onSetActiveTab = useCallback((value: string) => {
    setActiveTab(value)
    sessionStorage.setItem(SESSION_STORAGE_ACTIVE_TAB_KEY, value)
  }, [])

  const renderContent = tabs[activeTab]

  return (
    <section className="info">
      <Tabs
        className="info__tabs"
        tabs={Object.keys(tabs)}
        activeTab={activeTab}
        onSetActiveTab={onSetActiveTab}
      />
      {renderContent}
    </section>
  )
}
