import './Footer.scss';
import logo from '../../assets/icons/logo.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <img className='footer__logo' src={logo} alt="Neoflex Logo" />
        <a href="tel:+74959842513" className="footer__phone">
          +7 (495) 984 25 13
        </a>
        <a href="mailto:info@neoflex.ru" className="footer__email">
          info@neoflex.ru
        </a>
        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-link">About bank</li>
            <li className="footer__nav-link">Ask a Question</li>
            <li className="footer__nav-link">Quality of service</li>
            <li className="footer__nav-link">Requisites</li>
            <li className="footer__nav-link">Press center</li>
            <li className="footer__nav-link">Bank career</li>
            <li className="footer__nav-link">Investors</li>
            <li className="footer__nav-link">Analytics</li>
            <li className="footer__nav-link">Business and processes</li>
            <li className="footer__nav-link">Compliance and business ethics</li>
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
