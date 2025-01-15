import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getScheduleData } from '../model/selectors/getScheduleSelectors'
import { IScheduleData } from '../model/types/schedule'
import DownIcon from '@assets/icons/Arrow_drop_down.svg'
import UpIcon from '@assets/icons/Arrow_drop_up.svg'
import './ScheduleTable.scss'
import { classNames } from '@classNames/classNames'

interface IScheduleTableProps {
  className?: string
}

export const ScheduleTable = (props: IScheduleTableProps) => {
  const { className } = props

  const data = useSelector(getScheduleData)
  const [sortedBy, setSortedBy] = useState('')
  const [sortedData, setSortedData] = useState<IScheduleData[]>()

  useEffect(() => {
    setSortedData(data)
  }, [data])

  const sortBy = (columnName: keyof IScheduleData) => {
    if (!sortedData) return

    const sortableData = [...sortedData]
    if (sortedBy !== columnName) {
      sortableData.sort((a, b) => {
        if (a[columnName] < b[columnName]) return -1
        if (a[columnName] > b[columnName]) return 1
        return 0
      })
    } else {
      sortableData.reverse()
    }
    setSortedBy(columnName)
    setSortedData(sortableData)
  }

  const renderArrow = (name: keyof IScheduleData) => {
    return sortedBy === name ? (
      <img src={DownIcon} className="schedule-table__icon" />
    ) : (
      <img src={UpIcon} className="schedule-table__icon" />
    )
  }

  return (
    <table className={classNames('schedule-table', {}, [className])}>
      <thead className="schedule-table__head">
        <tr className="schedule-table__row">
          <th className="schedule-table__head-col" onClick={() => sortBy('number')}>
            <div>NUMBER{renderArrow('number')}</div>
          </th>
          <th className="schedule-table__head-col" onClick={() => sortBy('date')}>
            <div>DATE{renderArrow('date')}</div>
          </th>
          <th
            className="schedule-table__head-col"
            onClick={() => sortBy('totalPayment')}
          >
            <div>TOTAL PAYMENT{renderArrow('totalPayment')}</div>
          </th>
          <th
            className="schedule-table__head-col"
            onClick={() => sortBy('interestPayment')}
          >
            <div>INTEREST PAYMENT{renderArrow('interestPayment')}</div>
          </th>
          <th
            className="schedule-table__head-col"
            onClick={() => sortBy('debtPayment')}
          >
            <div>DEBT PAYMENT{renderArrow('debtPayment')}</div>
          </th>
          <th
            className="schedule-table__head-col"
            onClick={() => sortBy('remainingDebt')}
          >
            <div>REMAINING DEBT{renderArrow('remainingDebt')}</div>
          </th>
        </tr>
      </thead>
      <tbody className="schedule-table__body">
        {sortedData?.map((item) => (
          <tr className="schedule-table__row" key={item.date}>
            <td className="schedule-table__col">{item.number}</td>
            <td className="schedule-table__col">{item.date}</td>
            <td className="schedule-table__col">{item.totalPayment}</td>
            <td className="schedule-table__col">{item.interestPayment}</td>
            <td className="schedule-table__col">{item.debtPayment}</td>
            <td className="schedule-table__col">{item.remainingDebt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
