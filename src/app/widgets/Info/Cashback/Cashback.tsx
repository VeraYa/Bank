import './Cashback.scss'

export const Cashback = () => {
  return (
    <ul className="cashback">
      <li className="cashback__card">
        <p className="cashback__title">For food delivery, cafes and restaurants</p>
        <p className="cashback__description">5%</p>
      </li>
      <li className="cashback__card">
        <p className="cashback__title">In supermarkets with our subscription</p>
        <p className="cashback__description">5%</p>
      </li>
      <li className="cashback__card">
        <p className="cashback__title">
          In clothing stores and children&apos;s goods
        </p>
        <p className="cashback__description">2%</p>
      </li>
      <li className="cashback__card">
        <p className="cashback__title">
          Other purchases and payment of services and fines
        </p>
        <p className="cashback__description">1%</p>
      </li>
      <li className="cashback__card">
        <p className="cashback__title">Shopping in online stores</p>
        <p className="cashback__description">up to 3%</p>
      </li>
      <li className="cashback__card">
        <p className="cashback__title">Purchases from our partners</p>
        <p className="cashback__description">30%</p>
      </li>
    </ul>
  )
}
