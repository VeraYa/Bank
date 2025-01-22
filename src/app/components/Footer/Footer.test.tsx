import { screen } from '@testing-library/react'
import { Footer } from './Footer'
import { componentRender } from '@common/lib/tests/componentRender'

describe('Footer', () => {
  it('Должен отображать логотип и контактную информацию', () => {
    componentRender(<Footer />)
    
    const logo = screen.getByAltText('Neoflex Logo')
    const phone = screen.getByText('+7 (495) 984 25 13')
    const email = screen.getByText('info@neoflex.ru')
    
    expect(logo).toBeInTheDocument()
    expect(phone).toBeInTheDocument()
    expect(email).toBeInTheDocument()
  })

  it('Должен отображать все навигационные ссылки', () => {
    componentRender(<Footer />)
    
    const expectedLinks = [
      "About bank",
      "Ask a Question",
      "Quality of service",
      "Requisites",
      "Press center",
      "Bank career",
      "Investors",
      "Analytics",
      "Business and processes",
      "Compliance and business ethics"
    ]

    expectedLinks.forEach(link => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('Должен отображать информацию о cookies', () => {
    componentRender(<Footer />)
    
    const cookiesInfo = screen.getByText(/We use cookies to personalize our services/i)
    expect(cookiesInfo).toBeInTheDocument()
  })
})
