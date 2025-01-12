import MoneyIcon from '@assets/icons/Money_duotone.svg'
import CalendarIcon from '@assets/icons/Calendar_duotone.svg'
import ClockIcon from '@assets/icons/Clock_duotone.svg'
import BagIcon from '@assets/icons/Bag_duotone.svg'
import CreditCardIcon from '@assets/icons/Credit_card_duotone.svg'
import './AboutCard.scss'

export const AboutCard = () => {
  return (
    <ul className="about-card">
      <li className="about-card__card">
        <img src={MoneyIcon} className="about-card__icon" alt="" />
        <h4 className="about-card__title">Up to 50 000 ₽</h4>
        <p className="about-card__description">
          Cash and transfers without commission and percent
        </p>
      </li>
      <li className="about-card__card">
        <img src={CalendarIcon} className="about-card__icon" alt="" />
        <h4 className="about-card__title">Up to 160 days</h4>
        <p className="about-card__description">Without percent on the loan</p>
      </li>
      <li className="about-card__card">
        <img src={ClockIcon} className="about-card__icon" alt="" />
        <h4 className="about-card__title">Free delivery</h4>
        <p className="about-card__description">
          We will deliver your card by courier at a convenient place and time for you
        </p>
      </li>
      <li className="about-card__card">
        <img src={BagIcon} className="about-card__icon" alt="" />
        <h4 className="about-card__title">Up to 12 months</h4>
        <p className="about-card__description">
          No percent. For equipment, clothes and other purchases in installments
        </p>
      </li>
      <li className="about-card__card">
        <img src={CreditCardIcon} className="about-card__icon" alt="" />
        <h4 className="about-card__title">Convenient deposit and withdrawal</h4>
        <p className="about-card__description">
          At any ATM. Top up your credit card for free with cash or transfer from
          other cards
        </p>
      </li>
    </ul>
  )
}
