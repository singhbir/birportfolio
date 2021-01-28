import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.blogs || initialState;

export const selectBlogs = createSelector(
  [selectDomain],
  blogsState => blogsState,
);
