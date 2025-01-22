import { screen } from '@testing-library/react'
import { NewsSlider } from './NewsSlider'
import { componentRender } from '@common/lib/tests/componentRender'
import * as hooks from '@common/lib/hooks/useAppDispatch'

const mockDispatch = jest.fn()
jest.spyOn(hooks, 'useAppDispatch').mockReturnValue(mockDispatch)

const mockNews = [
  {
    title: 'Test News 1',
    description: 'Test Description 1',
    url: 'https://test1.com',
    urlToImage: 'test1.jpg'
  },
  {
    title: 'Test News 2',
    description: 'Test Description 2',
    url: 'https://test2.com',
    urlToImage: 'test2.jpg'
  },
  {
    title: 'Test News 3',
    description: 'Test Description 3',
    url: 'https://test3.com',
    urlToImage: 'test3.jpg'
  }
]

describe('NewsSlider', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Должен отображаться лоадер во время загрузки', () => {
    componentRender(<NewsSlider />, {
      initialState: {
        news: {
          news: [],
          loading: true,
          error: null
        }
      }
    })

    expect(screen.getByText('Loading...')).toBeInTheDocument()
  })

  it('Должна отображаться ошибка при наличии ошибки', () => {
    const errorMessage = 'Error loading news'
    componentRender(<NewsSlider />, {
      initialState: {
        news: {
          news: [],
          loading: false,
          error: errorMessage
        }
      }
    })

    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('Должны отображаться новости после загрузки', () => {
    componentRender(<NewsSlider />, {
      initialState: {
        news: {
          news: mockNews,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText('Test News 1')).toBeInTheDocument()
    expect(screen.getByText('Test Description 1')).toBeInTheDocument()
    expect(screen.getByText('Test News 2')).toBeInTheDocument()
    expect(screen.getByText('Test Description 2')).toBeInTheDocument()
  })

  it('Кнопка "Prev" должна быть отключена на первом слайде', () => {
    componentRender(<NewsSlider />, {
      initialState: {
        news: {
          news: mockNews,
          loading: false,
          error: null
        }
      }
    })

    const prevButton = screen.getByTestId('prev-button')
    expect(prevButton).toBeDisabled()
  })

  it('Должен вызываться dispatch при монтировании', () => {
    componentRender(<NewsSlider />)
    expect(mockDispatch).toHaveBeenCalled()
  })

  it('Должен корректно отображаться заголовок и подзаголовок', () => {
    componentRender(<NewsSlider />, {
      initialState: {
        news: {
          news: mockNews,
          loading: false,
          error: null
        }
      }
    })

    expect(screen.getByText('Current news from the world of finance')).toBeInTheDocument()
    expect(screen.getByText('We update the news feed every 15 minutes. You can learn more by clicking on the news you are interested in.')).toBeInTheDocument()
  })
})
