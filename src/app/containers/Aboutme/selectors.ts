import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.aboutme || initialState;

export const selectAboutme = createSelector(
  [selectDomain],
  aboutmeState => aboutmeState,
);
