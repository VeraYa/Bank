import { render, screen, fireEvent, waitFor, act } from '@testing-library/react'
import { Support } from './Support'
import axios from 'axios'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('Support', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  it('Рендер формы подписки для неподписанных пользователей', () => {
    render(<Support />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('Отображение сообщения для уже подписанных пользователей', () => {
    localStorage.setItem('isSubscribedToNews', 'true')
    render(<Support />)
    expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument()
  })

  it('Обработка ошибок при отправке формы', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('Network error'))
    
    render(<Support />)
    
    const emailInput = screen.getByPlaceholderText('Your email')
    const submitButton = screen.getByText('Subscribe')
    
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.click(submitButton)
    })
    
    await waitFor(() => {
      expect(screen.getByText('Ошибка')).toBeInTheDocument()
    })
  })

  it('Успешная подписка', async () => {
    mockedAxios.post.mockResolvedValueOnce({ status: 200, data: {} })
    
    render(<Support />)
    
    const emailInput = screen.getByPlaceholderText('Your email')
    const submitButton = screen.getByText('Subscribe')
    
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.click(submitButton)
    })
    
    await waitFor(() => {
      expect(screen.getByText("You are already subscribed to the bank's newsletter")).toBeInTheDocument()
      expect(localStorage.getItem('isSubscribedToNews')).toBe('true')
    })
  })

  it('Валидация email', async () => {
    render(<Support />)
    
    const emailInput = screen.getByPlaceholderText('Your email')
    
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'invalid-email' } })
      fireEvent.submit(screen.getByRole('form'))
    })
    
    await waitFor(() => {
      expect(screen.getByText('Incorrect email address')).toBeInTheDocument()
    }, { timeout: 3000 })
  })

  it('Отображение лоадера во время отправки формы', async () => {
    mockedAxios.post.mockImplementationOnce(() => 
      new Promise(resolve => setTimeout(() => resolve({ status: 200, data: {} }), 100))
    )
    
    render(<Support />)
    
    const emailInput = screen.getByPlaceholderText('Your email')
    const submitButton = screen.getByText('Subscribe')
    
    await act(async () => {
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
      fireEvent.click(submitButton)
    })
    
    await waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument()
    })
  })
})
