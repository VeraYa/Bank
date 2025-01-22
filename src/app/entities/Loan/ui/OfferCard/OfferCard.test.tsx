import { componentRender } from '@common/lib/tests/componentRender'
import { OfferCard } from './OfferCard'
import { IStateSchema } from '@app/providers/StoreProvider'
import { IOfferData } from '@common/types/loan'

const initialState: DeepPartial<IStateSchema> = {
  prescoring: { error: undefined, isLoading: false }
}

const offerItem: IOfferData = {
  applicationId: 1,
  requestedAmount: 150000,
  totalAmount: 150000,
  monthlyPayment: 26702.75,
  term: 6,
  rate: 23,
  isInsuranceEnabled: false,
  isSalaryClient: false
}

describe('OfferCard', () => {
  it('Карточка должна отрендериться с корректными данными', () => {
    const offerCard = componentRender(<OfferCard {...offerItem} />, { initialState })
    const { getByTestId, getByText, getByAltText } = offerCard

    expect(getByTestId('offer-card')).toBeInTheDocument()
    expect(getByText(/Requested amount/)).toBeInTheDocument()
    expect(getByText(/Total amount/)).toBeInTheDocument()
    expect(getByText(/For/)).toBeInTheDocument()
    expect(getByText(/Monthly payment/)).toBeInTheDocument()
    expect(getByText(/Your rate/)).toBeInTheDocument()
    expect(getByAltText('Surprise Image')).toBeInTheDocument()
  })
})
