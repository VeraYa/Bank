import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = '3039bc93e4ce2d24ac86f496';
const API_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

export type TExchangeRate = {
  code: string;
  rate: number | string;
};

export type TCurrencyState = {
  rates: TExchangeRate[];
  loading: boolean;
  error: string | null;
}

const initialState: TCurrencyState = {
  rates: [],
  loading: false,
  error: null,
};

export const fetchExchangeRates = createAsyncThunk<
  TExchangeRate[],
  string, 
  { rejectValue: string } 
>(
  'currency/fetchExchangeRates',
  async (baseCurrency, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}${baseCurrency}`);
      const fetchedRates = response.data.conversion_rates;
      const currencies = ['USD', 'EUR', 'CNY', 'JPY', 'GBP', 'TRY'];

      return currencies.map((currency) => ({
        code: currency,
        rate: fetchedRates[currency] || 'N/A',
      }));
    } catch (error) {
      if (axios.isAxiosError(error) && error.message) {
        return rejectWithValue(error.message); 
      }
      return rejectWithValue('Unknown error occurred');
    }
  }
);

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExchangeRates.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchExchangeRates.fulfilled,
        (state, action: PayloadAction<TExchangeRate[]>) => {
          state.rates = action.payload;
          state.loading = false;
        }
      )
      .addCase(
        fetchExchangeRates.rejected,
        (state, action: PayloadAction<string | undefined>) => {
          state.loading = false;
          state.error = action.payload || 'Failed to fetch exchange rates';
        }
      );
  },
});

export default currencySlice.reducer;
