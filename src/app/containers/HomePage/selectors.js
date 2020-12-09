import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectDomain = state => state.homepage || initialState;

export const selectQuotes = createSelector(
  [selectDomain],
  mystate => mystate.famousquotes,
);

export const selectLoading = createSelector(
  [selectDomain],
  mystate => mystate.loading,
);

export const selectError = createSelector(
  [selectDomain],
  mystate => mystate.error,
);
