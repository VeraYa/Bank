import { screen, fireEvent } from '@testing-library/react'
import { Header } from './Header'
import { componentRender } from '@common/lib/tests/componentRender'

describe('Header', () => {
  it('Должен отображать логотип и все пункты меню', () => {
    componentRender(<Header />)
    
    expect(screen.getByText('NeoBank')).toBeInTheDocument()
    
    const menuItems = [
      'Credit card',
      'Product', 
      'Account',
      'Resources'
    ]

    menuItems.forEach(item => {
      expect(screen.getByText(item)).toBeInTheDocument()
    })
  })

  it('Должен отображать кнопку Online Bank', () => {
    componentRender(<Header />)
    
    const button = screen.getByText('Online Bank')
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('header__btn')
  })

  it('Должен открывать/закрывать мобильное меню при клике на бургер', () => {
    componentRender(<Header />)
    
    const burger = screen.getByRole('presentation', { name: '' })
    const menu = screen.getByRole('list')

    expect(menu).not.toHaveClass('header__list--open')
    
    fireEvent.click(burger)
    expect(menu).toHaveClass('header__list--open')
    
    fireEvent.click(burger)
    expect(menu).not.toHaveClass('header__list--open')
  })
}) 