import { OffersList } from './OffersList'
import { IOfferData } from '@common/types/loan'
import { componentRender } from '@common/lib/tests/componentRender'
import { IStateSchema } from '@app/providers/StoreProvider'

const offersItems: IOfferData[] = [
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 150000,
    monthlyPayment: 26702.75,
    term: 6,
    rate: 23,
    isInsuranceEnabled: false,
    isSalaryClient: false
  },
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 150000,
    monthlyPayment: 26626.65,
    term: 6,
    rate: 22,
    isInsuranceEnabled: false,
    isSalaryClient: true
  },
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 160000,
    monthlyPayment: 28162.58,
    term: 6,
    rate: 19,
    isInsuranceEnabled: true,
    isSalaryClient: false
  },
  {
    applicationId: 1,
    requestedAmount: 150000,
    totalAmount: 160000,
    monthlyPayment: 28082.19,
    term: 6,
    rate: 18,
    isInsuranceEnabled: true,
    isSalaryClient: true
  }
]

const initialState: DeepPartial<IStateSchema> = {
  prescoring: { error: undefined, isLoading: false }
}

describe('OffersList', () => {
  it('Должны отрендериться все переданные карточки', () => {
    const offersList = componentRender(<OffersList items={offersItems} />, {
      initialState
    })

    const { getAllByTestId } = offersList

    expect(getAllByTestId('offer-card')).toHaveLength(4)
    expect(getAllByTestId('offer-card')[0]).toBeInTheDocument()
    expect(getAllByTestId('offer-card')[1]).toBeInTheDocument()
    expect(getAllByTestId('offer-card')[2]).toBeInTheDocument()
    expect(getAllByTestId('offer-card')[3]).toBeInTheDocument()
  })

  it('Компонент рендерится без ошибок, при передаче пустого массива карточек', () => {
    const offersList = componentRender(<OffersList items={[]} />, { initialState })
    const { container } = offersList

    expect(container).toBeInTheDocument()
  })
})
