import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = '1847da4adfe34b4babc5ad34051f63bf'
const API_URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${API_KEY}`

type TNewsArticle = {
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

export type TNewsState = {
  news: TNewsArticle[];
  loading: boolean;
  error: string | null;
}

const initialState: TNewsState = {
  news: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk<TNewsArticle[], void, { rejectValue: string }>(
  "news/fetchNews",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}`);

      const articles = response.data.articles as TNewsArticle[];
      return articles.filter(
        (article) => article.urlToImage && !/<[^>]*>/.test(article.description || "")
      );
    } catch (error) {
      return rejectWithValue(`Failed to fetch news. ${error}`);
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action: PayloadAction<TNewsArticle[]>) => {
        state.loading = false;
        state.news = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default newsSlice.reducer;
