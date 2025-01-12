import { DividerList } from '@ui/Divider/DividerList/DividerList'
import './Instruction.scss'

const content = [
  'Fill out an online application - you do not need to visit the bank',
  'Find out the bank\'s decision immediately after filling out the application', // prettier-ignore
  'The bank will deliver the card free of charge, wherever convenient, to your city'
]

export const Instruction = () => {
  return (
    <section className="instruction">
      <h3 className="instruction__title">How to get a card</h3>
      <DividerList className="instruction__list" content={content} />
    </section>
  )
}