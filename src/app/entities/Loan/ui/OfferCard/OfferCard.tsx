import { useCallback } from 'react'
import { Button } from '@common/ui'
import offerCardImg from '@assets/images/SurpriseImage1.png'
import NotIncludedIcon from '@assets/icons/Error-icon.svg'
import IncludedIcon from '@assets/icons/Success-icon.svg'
import { IOfferData } from '@common/types/loan'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import { applyOffer } from '../../model/services/applyOffer/applyOffer'
import './OfferCard.scss'

export const OfferCard = (props: IOfferData) => {
  const {
    applicationId,
    requestedAmount,
    totalAmount,
    term,
    monthlyPayment,
    rate,
    isInsuranceEnabled,
    isSalaryClient
  } = props

  const dispatch = useAppDispatch()

  const onClick = useCallback(() => {
    dispatch(
      applyOffer({
        applicationId,
        requestedAmount,
        totalAmount,
        term,
        monthlyPayment,
        rate,
        isInsuranceEnabled,
        isSalaryClient
      })
    )
  }, [])

  const renderIsIncludedIcon = (isValue: boolean) =>
    isValue ? (
      <img src={IncludedIcon} className="offer-card__icon offer-card__icon--included" />
    ) : (
      <img src={NotIncludedIcon} className="offer-card__icon offer-card__icon--not-included" />
    )

  return (
    <article className="offer-card" data-testid="offer-card">
      <img className="offer-card__img" src={offerCardImg} alt="Surprise Image" />
      <p className="offer-card__term">Requested amount: {requestedAmount} ₽</p>
      <p className="offer-card__term">Total amount: {totalAmount} ₽</p>
      <p className="offer-card__term">For {term} months</p>
      <p className="offer-card__term">Monthly payment: {monthlyPayment} ₽</p>
      <p className="offer-card__term">Your rate: {rate}%</p>
      <div className="offer-card__option">
        <p>Insurance included</p>
        {renderIsIncludedIcon(isInsuranceEnabled)}
      </div>
      <div className="offer-card__option">
        <p>Salary client</p>
        {renderIsIncludedIcon(isSalaryClient)}
      </div>
      <Button className="offer-card__button" onClick={onClick}>
        Select
      </Button>
    </article>
  )
}
