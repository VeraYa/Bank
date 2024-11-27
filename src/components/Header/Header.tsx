import { Link, NavLink } from 'react-router-dom'
import { Button } from '../Button/Button'
import './Header.scss'
import { useState } from 'react';

type TMenu = {
  id: number;
  name: string;
  link: string;
};

const menu: TMenu[] = [
  { id: 1, name: 'Credit card', link: '/card' },
  { id: 2, name: 'Product', link: '/product' },
  { id: 3, name: 'Account', link: '/account' },
  { id: 4, name: 'Resources', link: '/resources' },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="header">
      <nav className="header__navbar">
        <Link to="/" className="header__logo">NeoBank</Link>
        <ul className={`header__list ${isMenuOpen ? 'header__list--open' : ''}`}>
          {menu.map((item) => (
            <li key={item.id} className="header__item">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? 'header__link header__link--active'
                    : 'header__link'
                }
                onClick={closeMenu}
                to={item.link}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <Button className="header__btn">Online Bank</Button>
        <div
          className={`burger ${isMenuOpen ? 'burger--open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}
