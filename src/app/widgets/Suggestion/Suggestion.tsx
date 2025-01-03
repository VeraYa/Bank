import cardImg from '@assets/images/cardImage1.jpg'
import './Suggestion.scss'
import { Tooltip } from '@ui/Tooltip/Tooltip'
import { Button } from '@ui/Button/Button'

const terms = [
  {
    title: 'Up to 160 days',
    subtitle: 'No percent',
    tooltip: 'When repaying the full debt up to 160 days.'
  },
  {
    title: 'Up to 600 000 ₽',
    subtitle: 'Credit limit',
    tooltip: 'Over the limit willaccrue percent'
  },
  {
    title: '0 ₽',
    subtitle: 'Card service is free',
    tooltip: 'Promotion valid until December 31, 2022.'
  }
]

export const Suggestion = () => {

  const scrollTo = (id: string) => {
    const section = document.querySelector(`#${id}`)
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section className="suggestion">
      <div className="suggestion__content">
        <h1 className="suggestion__title">Platinum digital credit card</h1>
        <div className="suggestion__wrapper">
          <p className="suggestion__info">
            Our best credit card. Suitable for everyday spending and shopping. Cash
            withdrawals and transfers without commission and interest.
          </p>
          <img
            className="suggestion__img suggestion__img--inner"
            src={cardImg}
            alt="Card"
          />
        </div>
        <div className="suggestion__terms">
          {terms.map(({ title, subtitle, tooltip }) => (
            <Tooltip text={tooltip} key={title}>
              <div className="suggestion__term">
                <span className="suggestion__term--title">{title}</span>
                <span className="suggestion__term--subtitle">{subtitle}</span>
              </div>
            </Tooltip>
          ))}
        </div>
        <Button
          className="suggestion__button"
          theme="accent"
          onClick={() => scrollTo('prescoring')}
        >
          Apply for card
        </Button>
      </div>
      <img className="suggestion__img" src={cardImg} alt="Card" />
    </section>
  )
}
