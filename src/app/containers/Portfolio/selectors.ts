import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectDomain = state => state.portfolio || initialState;

export const selectPortfolioLoading = createSelector(
  [selectDomain],
  portfolioState => portfolioState.loading,
);

export const selectPortfolioData = createSelector(
  [selectDomain],
  portfolioState => portfolioState.data,
);

export const selectPortfolioError = createSelector(
  [selectDomain],
  portfolioState => portfolioState.error,
);
