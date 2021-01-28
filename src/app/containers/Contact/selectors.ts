import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

const selectDomain = state => state.contact || initialState;

export const selectContact = createSelector(
  [selectDomain],
  contactState => contactState.successcontact,
);

export const selectLoadContact = createSelector(
  [selectDomain],
  contactState => contactState.loadcontact,
);

export const selectFailContact = createSelector(
  [selectDomain],
  contactState => contactState.failcontact,
);
