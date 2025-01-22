import { PrescoringForm } from './PrescoringForm'
import { componentRender } from '@common/lib/tests/componentRender'
import userEvent from '@testing-library/user-event'
import { IStateSchema } from '@app/providers/StoreProvider'

const initialState: DeepPartial<IStateSchema> = {
  prescoring: { error: undefined, isLoading: false }
}

const mockSendData = jest.fn()

describe('PrescoringForm', () => {
  it('Все поля формы должны отрендериться', () => {
    const prescoringForm = componentRender(
      <PrescoringForm onSubmit={mockSendData} />,
      { initialState }
    )
    const { getByLabelText, getAllByTestId } = prescoringForm

    expect(getByLabelText('Your last name')).toBeInTheDocument()
    expect(getByLabelText('Your first name')).toBeInTheDocument()
    expect(getByLabelText('Your patronymic')).toBeInTheDocument()
    expect(getByLabelText('Select term')).toBeInTheDocument()
    expect(getByLabelText('Your email')).toBeInTheDocument()
    expect(getByLabelText('Your date of birth')).toBeInTheDocument()
    expect(getByLabelText('Your passport series')).toBeInTheDocument()
    expect(getByLabelText('Your passport number')).toBeInTheDocument()
    expect(getAllByTestId('amount')).toHaveLength(3)
    expect(getAllByTestId('amount')[0]).toBeInTheDocument()
    expect(getAllByTestId('amount')[1]).toBeInTheDocument()
    expect(getAllByTestId('amount')[2]).toBeInTheDocument()
  })

  it('Отправка формы с невалидными данными, проверка валидации и функция отправки данных не должна быть вызвана', async () => {
    const prescoringForm = componentRender(
      <PrescoringForm onSubmit={mockSendData} />,
      { initialState }
    )
    const { getByTestId, getByText } = prescoringForm

    await userEvent.click(getByTestId('prescoring-submit'))

    expect(getByText('Enter your last name')).toBeInTheDocument()
    expect(getByText('Enter your first name')).toBeInTheDocument()
    expect(getByText('Incorrect email address')).toBeInTheDocument()
    expect(getByText('Incorrect date of birth')).toBeInTheDocument()
    expect(getByText('The series must be 4 digits')).toBeInTheDocument()
    expect(getByText('The series must be 6 digits')).toBeInTheDocument()
    expect(mockSendData).not.toHaveBeenCalled()
  })

  it('Отправка формы с валидными данными, должна быть вызвана функция отправки данных ', async () => {
    const prescoringForm = componentRender(
      <PrescoringForm onSubmit={mockSendData} />,
      { initialState }
    )
    const { getByTestId, getAllByTestId, getByLabelText } = prescoringForm

    await userEvent.type(getByLabelText('Your last name'), 'Doe')
    await userEvent.type(getByLabelText('Your first name'), 'John')
    await userEvent.selectOptions(getByLabelText('Select term'), '6 month')
    await userEvent.type(getByLabelText('Your email'), 'test@test.com')
    await userEvent.type(getByLabelText('Your date of birth'), '1992-12-12')
    await userEvent.type(getByLabelText('Your passport series'), '1111')
    await userEvent.type(getByLabelText('Your passport number'), '123123')
    await userEvent.type(getAllByTestId('amount')[0], '300000')
    await userEvent.type(getAllByTestId('amount')[1], '300000')
    await userEvent.type(getAllByTestId('amount')[2], '300000')

    await userEvent.click(getByTestId('prescoring-submit'))

    expect(mockSendData).toHaveBeenCalled()
  })
})
