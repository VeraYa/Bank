import { IStateSchema } from '@app/providers/StoreProvider'
import { componentRender } from '@common/lib/tests/componentRender'
import { ScoringForm } from './ScoringForm'
import userEvent from '@testing-library/user-event'

const initialState: DeepPartial<IStateSchema> = {
  scoring: { error: undefined, isLoading: false }
}

const mockSendData = jest.fn()

describe('ScoringForm', () => {
  it('Все поля формы должны отрендериться', () => {
    const scoringForm = componentRender(<ScoringForm onSubmit={mockSendData} />, {
      initialState
    })
    const { getByLabelText } = scoringForm

    expect(getByLabelText('What\'quots your gender')).toBeInTheDocument() // prettier-ignore
    expect(getByLabelText('Your marital status')).toBeInTheDocument()
    expect(getByLabelText('Your number of dependents')).toBeInTheDocument()
    expect(getByLabelText('Date of issue of the passport')).toBeInTheDocument()
    expect(getByLabelText('Division code')).toBeInTheDocument()
    expect(getByLabelText('Your employment status')).toBeInTheDocument()
    expect(getByLabelText('Your employer INN')).toBeInTheDocument()
    expect(getByLabelText('Your salary')).toBeInTheDocument()
    expect(getByLabelText('Your position')).toBeInTheDocument()
    expect(getByLabelText('Your work experience total')).toBeInTheDocument()
    expect(getByLabelText('Your work experience current')).toBeInTheDocument()
  })

  it('Отправка формы с невалидными данными, проверка валидации и функция отправки данных не должна быть вызвана', async () => {
    const scoringForm = componentRender(<ScoringForm onSubmit={mockSendData} />, {
      initialState
    })
    const { getByText, getByTestId } = scoringForm

    await userEvent.click(getByTestId('scoring-submit'))

    expect(getByText('Select your gender')).toBeInTheDocument()
    expect(getByText('Select your marital status')).toBeInTheDocument()
    expect(getByText('Select your number of dependents')).toBeInTheDocument()
    expect(getByText('Enter date of issue of the passport')).toBeInTheDocument()
    expect(getByText('Enter division code')).toBeInTheDocument()
    expect(getByText('Select your employment status')).toBeInTheDocument()
    expect(getByText('Enter your employer INN')).toBeInTheDocument()
    expect(getByText('Enter your salary')).toBeInTheDocument()
    expect(getByText('Select your position')).toBeInTheDocument()
    expect(getByText('Enter your work experience total')).toBeInTheDocument()
    expect(getByText('Enter your work experience current')).toBeInTheDocument()
    expect(mockSendData).not.toHaveBeenCalled()
  })

  it('Отправка формы с валидными данными, должна быть вызвана функция отправки данных', async () => {
    const scoringForm = componentRender(<ScoringForm onSubmit={mockSendData} />, {
      initialState
    })
    const { getByTestId, getByLabelText } = scoringForm

    await userEvent.selectOptions(getByLabelText('What\'quots your gender'), 'MALE') // prettier-ignore
    await userEvent.selectOptions(getByLabelText('Your marital status'), 'SINGLE')
    await userEvent.selectOptions(getByLabelText('Your number of dependents'), '0')
    await userEvent.type(
      getByLabelText('Date of issue of the passport'),
      '1992-12-12'
    )
    await userEvent.type(getByLabelText('Division code'), '123123')
    await userEvent.selectOptions(
      getByLabelText('Your employment status'),
      'BUSINESS_OWNER'
    )
    await userEvent.type(getByLabelText('Your employer INN'), '123123123123')
    await userEvent.type(getByLabelText('Your salary'), '1000000')
    await userEvent.selectOptions(getByLabelText('Your position'), 'OWNER')
    await userEvent.type(getByLabelText('Your work experience total'), '12')
    await userEvent.type(getByLabelText('Your work experience current'), '5')

    await userEvent.click(getByTestId('scoring-submit'))

    expect(mockSendData).toHaveBeenCalled()
  })
})
