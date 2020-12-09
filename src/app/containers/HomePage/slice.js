import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  famousquotes: [],
  loading: false,
  error: null,
};

const quotesSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    loadQuotes(state) {
      state.loading = true;
      state.error = null;
      state.famousquotes = [];
    },
    successQuotes(state, action) {
      state.famousquotes = action.payload;
      state.loading = false;
      state.error = null;
    },
    errorQuotes(state, action) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = quotesSlice;
