import "./CurrencyWidget.scss";
import React from 'react';
import { useExchangeRates } from "./FetchRates";
import BankIcon from '@assets/icons/bank.svg';

export const CurrencyWidget: React.FC = () => {
  const baseCurrency = 'RUB';
  const refreshInterval = 15 * 60 * 1000;
  const { rates, loading } = useExchangeRates(baseCurrency, refreshInterval);
  const currentDate = new Date().toLocaleDateString()
  return (
    <section className="currency">
      <h2 className="currency__title">Exchange rate in internet bank</h2>
      <h4 className="currency__subtitle">Currency</h4>
      {loading ? (
        <div id="loader" className="loader" style={{ display: 'flex' }}></div>
      ) : (
        <div id="currency-container" className="currency__container">
          <ul className="currency__list">
            {rates.map(({ code, rate }) => (
              <li key={code} className="currency__list-item">
                <h2 className="currency__name">{code}:</h2>
                <p>{rate !== 'N/A' ? (1 / (rate as number)).toFixed(2) : 'N/A'}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      <img className="currency__img" src={BankIcon} alt="Bank Icon" />
      <p className="currency__info">{`Update every 15 minutes, MSC ${currentDate}`}</p>
      <a className="currency__link">
        All courses
      </a>
    </section>
  );
};



