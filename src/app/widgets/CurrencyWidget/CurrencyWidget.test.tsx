import { screen } from '@testing-library/react'
import { CurrencyWidget } from './CurrencyWidget'
import { componentRender } from '@common/lib/tests/componentRender'

const mockDispatch = jest.fn()

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: () => mockDispatch
}))

const mockRates = [
  {
    code: 'USD',
    rate: 0.011
  },
  {
    code: 'EUR',
    rate: 0.0095
  }
]

describe('CurrencyWidget', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Должны отображаться курсы валют', () => {
    componentRender(<CurrencyWidget />, {
      initialState: {
        currency: {
          rates: mockRates,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText('USD:')).toBeInTheDocument()
    expect(screen.getByText('90.91')).toBeInTheDocument() 
    expect(screen.getByText('EUR:')).toBeInTheDocument()
    expect(screen.getByText('105.26')).toBeInTheDocument() 
  })

  it('Должен отображаться заголовок и подзаголовок', () => {
    componentRender(<CurrencyWidget />, {
      initialState: {
        currency: {
          rates: mockRates,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText('Exchange rate in internet bank')).toBeInTheDocument()
    expect(screen.getByText('Currency')).toBeInTheDocument()
  })

  it('Должна отображаться ссылка "All courses"', () => {
    componentRender(<CurrencyWidget />, {
      initialState: {
        currency: {
          rates: mockRates,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText('All courses')).toBeInTheDocument()
  })

  it('Должна отображаться информация об обновлении', () => {
    const currentDate = new Date().toLocaleDateString()
    componentRender(<CurrencyWidget />, {
      initialState: {
        currency: {
          rates: mockRates,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText(`Update every 15 minutes, MSC ${currentDate}`)).toBeInTheDocument()
  })

  it('Должен вызываться dispatch при монтировании', () => {
    componentRender(<CurrencyWidget />)
    expect(mockDispatch).toHaveBeenCalled()
  })

  it('Должен отображаться N/A для недоступных курсов', () => {
    const ratesWithNA = [
      {
        code: 'GBP',
        rate: 'N/A'
      }
    ]

    componentRender(<CurrencyWidget />, {
      initialState: {
        currency: {
          rates: ratesWithNA,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText('GBP:')).toBeInTheDocument()
    expect(screen.getByText('N/A')).toBeInTheDocument()
  })
})
