import './Support.scss';
import MessageIcon from '../../../assets/icons/message.svg';
import MailIcon from '../../../assets/icons/email.svg';

export const Support = () => {
  return (
    <section className="support">
      <a href="#" className="support__link">
        Support
      </a>
      <h2 className="support__title">Subscribe Newsletter & get</h2>
      <h3 className="support__subtitle">Bank News</h3>
      <form action="" method="post" className="support__form">
        <label htmlFor="email" className='support__label'>
          <img className="support__icon" src={MailIcon} alt="Mail Icon" />
        </label>
        <input
          type="email"
          id="email"
          name="email"
          pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          className="support__input"
          placeholder="Your email"
        />

        <button type='submit' className="support__button">
          <img className="support__button-icon" src={MessageIcon} alt="Message Icon" />
          Subscribe
        </button>
      </form>
    </section>
  );
};