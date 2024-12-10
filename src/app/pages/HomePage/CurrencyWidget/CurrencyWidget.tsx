import { TAppDispatch, TRootState } from "@store/store";
import "./CurrencyWidget.scss";
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BankIcon from '@assets/icons/bank.svg'
import { TExchangeRate, fetchExchangeRates } from "@store/slices/currencySlice";

export const CurrencyWidget: React.FC = () => {
  const dispatch = useDispatch<TAppDispatch>();
  const { rates, loading } = useSelector((state: TRootState) => state.currency);

  const baseCurrency = 'RUB';
  const refreshInterval = 15 * 60 * 1000;

  useEffect(() => {
    dispatch(fetchExchangeRates(baseCurrency));
    const interval = setInterval(() => {
      dispatch(fetchExchangeRates(baseCurrency));
    }, refreshInterval);

    return () => clearInterval(interval);
  }, [dispatch, baseCurrency, refreshInterval]);

  const currentDate = new Date().toLocaleDateString();

  return (
    <section className="currency">
      <h2 className="currency__title">Exchange rate in internet bank</h2>
      <h4 className="currency__subtitle">Currency</h4>
      {loading ? (
        <div id="loader" className="loader" style={{ display: 'flex' }}></div>
      ) : (
        <div id="currency-container" className="currency__container">
          <ul className="currency__list">
            {rates.map(({ code, rate }: TExchangeRate) => (
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
