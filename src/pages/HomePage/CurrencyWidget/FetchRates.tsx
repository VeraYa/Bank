import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = '3039bc93e4ce2d24ac86f496'
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

type TExchangeRate = {
    code: string;
    rate: number | string;
}

export const useExchangeRates = (baseCurrency: string, refreshInterval: number) => {
    const [rates, setRates] = useState<TExchangeRate[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchExchangeRates = async (currencies = ['USD', 'EUR', 'CNY', 'JPY', 'GBP', 'TRY']) => {
            try {
                const response = await axios.get(`${API_URL}${baseCurrency}`);
                const fetchedRates = response.data.conversion_rates;

                const updatedRates = currencies.map((currency) => ({
                    code: currency,
                    rate: fetchedRates[currency] || 'N/A',
                }));

                setRates(updatedRates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
                setRates([]);
            } finally {
                setLoading(false);
            }
        };

        fetchExchangeRates();
        const interval = setInterval(fetchExchangeRates, refreshInterval);

        return () => clearInterval(interval); 
    }, [baseCurrency, refreshInterval]);

    return { rates, loading };
};
