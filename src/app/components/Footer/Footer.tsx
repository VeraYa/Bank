import Logo from '@assets/icons/logo.svg';
import './Footer.scss';

const navLinks = [
  "About bank",
  "Ask a Question",
  "Quality of service",
  "Requisites",
  "Press center",
  "Bank career",
  "Investors",
  "Analytics",
  "Business and processes",
  "Compliance and business ethics",
];

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className='footer__logo' src={Logo} alt="Neoflex Logo" />
        <a href="tel:+74959842513" className="footer__phone">
          +7 (495) 984 25 13
        </a>
        <a href="mailto:info@neoflex.ru" className="footer__email">
          info@neoflex.ru
        </a>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            {navLinks.map((link, index) => (
              <li key={index} className="footer__nav-link">{link}</li>
            ))}
          </ul>
        </nav>
        <p className="footer__info">
          We use cookies to personalize our services and improve the user experience of our website. Cookies are small
          files containing information about previous visits to a website. If you do not want to use cookies, please
          change your browser settings
        </p>
      </div>
    </footer>
  );
};
