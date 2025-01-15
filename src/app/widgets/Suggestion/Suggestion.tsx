import cardImg from '@assets/images/cardImage1.jpg'
import './Suggestion.scss'
import { AppLink, Button, Tooltip } from '@common/ui'
import { scrollTo } from '@common/lib/utils/utils'
import { useSelector } from 'react-redux'
import { getLoanStatusApplicationId, getLoanStatusStep } from '@entities/Loan'
import {
  getAppRouteCode,
  getAppRouteDocument,
  getAppRouteScoring,
  getAppRouteSign,
  getRouteHome
} from '@common/const/routes'

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
  const step = useSelector(getLoanStatusStep)
  const applicationId = useSelector(getLoanStatusApplicationId)

  const getCurrentLink = () => {
    if (!applicationId) return getRouteHome()
    if (step === 3) return getAppRouteScoring(applicationId)
    if (step === 4) return getAppRouteDocument(applicationId)
    if (step === 5) return getAppRouteSign(applicationId)
    if (step === 6) return getAppRouteCode(applicationId)
    return getRouteHome()
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
        {step > 2 ? (
          <AppLink className="suggestion__link" theme="accent" to={getCurrentLink()}>
            Continue registration
          </AppLink>
        ) : (
          <Button
            className="suggestion__button"
            theme="accent"
            onClick={() => scrollTo('prescoring')}
          >
            {step === 1 && 'Apply for card'}
            {step === 2 && 'Choose an offer'}
          </Button>
        )}
      </div>
      <img className="suggestion__img" src={cardImg} alt="Card" />
    </section>
  )
}
