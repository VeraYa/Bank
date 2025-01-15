import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, Checkbox } from '@common/ui'
import FileIcon from '@assets/icons/File_dock_duotone.svg'
import { useAppDispatch } from '@common/lib/hooks/useAppDispatch'
import { getLoanStatusApplicationId, signDocuments } from '@entities/Loan'
import infofile from '@assets/credit-card-offer.pdf';
import './SigningDocs.scss'

export const SigningDocs = () => {
  const [isAgree, setIsAgree] = useState(false)
  const applicationId = useSelector(getLoanStatusApplicationId)
  const dispatch = useAppDispatch()

  const onSend = () => {
    if (applicationId) {
      dispatch(signDocuments(applicationId))
    }
  }

  const onToggleAgree = () => {
    setIsAgree((prev) => !prev)
  }

  return (
    <section className="signing-docs">
      <div className="signing-docs__header">
        <h3 className="signing-docs__title">Signing of documents</h3>
        <p className="signing-docs__step">Step 4 of 5</p>
      </div>
      <p className="signing-docs__info">
        Information on interest rates under bank deposit agreements with individuals.
        Center for Corporate Information Disclosure. Information of a professional
        participant in the securities market. Information about persons under whose
        control or significant influence the Partner Banks are. By leaving an
        application, you agree to the processing of personal data, obtaining
        information, obtaining access to a credit history, using an analogue of a
        handwritten signature, an offer, a policy regarding the processing of
        personal data, a form of consent to the processing of personal data.
      </p>
      <a
        className="signing-docs__link"
        href={infofile}
        target="_blank"
        rel="noreferrer noopener"
        download
      >
        <img src={FileIcon} className="signing-docs__icon" />
        <span className="signing-docs__link-info">Information on your card</span>
      </a>
      <div className="signing-docs__actions">
        <Checkbox onClick={onToggleAgree} isChecked={isAgree} label="I agree" />
        <Button
          className="signing-docs__button"
          disabled={!isAgree}
          onClick={onSend}
        >
          Send
        </Button>
      </div>
    </section>
  )
}
