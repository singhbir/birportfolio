import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// The initial state of the Portfolio container
export const initialState = {
  loading: false,
  error: false,
  data: [],
};

const portfolioSlice = createSlice({
  name: 'portfolio',
  initialState,
  reducers: {
    loadprojectData(state) {
      state.loading = true;
      state.error = false;
      state.data = [];
    },
    successprojectData(state, action) {
      state.loading = false;
      state.error = false;
      state.data = action.payload;
    },
    errorprojectData(state, action) {
      state.loading = false;
      state.error = true;
      state.data = [];
    },
  },
});

export const {
  actions: portfolioActions,
  reducer,
  name: sliceKey,
} = portfolioSlice;
