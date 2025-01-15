import { IOfferData } from '@common/types/loan'
import { OfferCard } from '@entities/index'
import './OffersList.scss'
import { useEffect, useState } from 'react'

interface IOffersListProps {
  items: IOfferData[]
}

export const OffersList = (props: IOffersListProps) => {
  const { items } = props
  const [sortedItems, setSortedItems] = useState(items)

  useEffect(() => {
    setSortedItems([...sortedItems].sort((a, b) => b.rate - a.rate))
  }, [items])

  return (
    <div className="offers-list">
      {sortedItems.map((item, key) => (
        <OfferCard
          applicationId={item.applicationId}
          requestedAmount={item.requestedAmount}
          monthlyPayment={item.monthlyPayment}
          totalAmount={item.totalAmount}
          rate={item.rate}
          term={item.term}
          isInsuranceEnabled={item.isInsuranceEnabled}
          isSalaryClient={item.isSalaryClient}
          key={key}
        />
      ))}
    </div>
  )
}
