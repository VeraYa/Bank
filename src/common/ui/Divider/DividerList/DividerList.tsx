import { classNames } from '@classNames/classNames'
import { Divider } from '../Divider/Divider'
import './DividerList.scss'

interface IDividerListProps {
  className?: string
  content: string[]
}

export const DividerList = (props: IDividerListProps) => {
  const { className, content } = props

  return (
    <ul className={classNames('divider-list', {}, [className])}>
      {content.map((child, index) => (
        <li className="divider-list__item" key={index}>
          <Divider content={index + 1} />
          <p className="divider-list__text">{child}</p>
        </li>
      ))}
    </ul>
  )
}
