import './RatesAndConditions.scss'

export const RatesAndConditions = () => {
  return (
    <table className="rates-and-conditions">
      <tbody>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">Card currency</td>
          <td className="rates-and-conditions__col">Rubles, dollars, euro</td>
        </tr>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">Interest free period</td>
          <td className="rates-and-conditions__col">0% up to 160 days</td>
        </tr>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">Payment system</td>
          <td className="rates-and-conditions__col">Mastercard, Visa</td>
        </tr>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">
            Maximum credit limit on the card
          </td>
          <td className="rates-and-conditions__col">600 000 ₽</td>
        </tr>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">Replenishment and withdrawal</td>
          <td className="rates-and-conditions__col">
            At any ATM. Top up your credit card for free with cash or transfer from
            other cards
          </td>
        </tr>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">Max cashback per month</td>
          <td className="rates-and-conditions__col">15 000 ₽</td>
        </tr>
        <tr className="rates-and-conditions__row">
          <td className="rates-and-conditions__col">Transaction Alert</td>
          <td className="rates-and-conditions__col">
            <p>60 ₽ — SMS or push notifications </p>
            <p>0 ₽ — card statement, information about
              transactions in the online bank</p>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
