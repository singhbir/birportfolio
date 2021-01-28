import { createSelector } from '@reduxjs/toolkit';

import { initialState } from './slice';

const selectDomain = state => state.resume || initialState;

export const selectSkillData = createSelector(
  [selectDomain],
  resumeState => resumeState.skillsdata,
);

export const selectLoading = createSelector(
  [selectDomain],
  resumeState => resumeState.loading,
);

export const selecterror = createSelector(
  [selectDomain],
  resumeState => resumeState.error,
);

export const selectResumeData = createSelector(
  [selectDomain],
  resumeState => resumeState.resumedata,
);

export const selectResumeLoading = createSelector(
  [selectDomain],
  resumeState => resumeState.loadresumedata,
);

export const selectResumeerror = createSelector(
  [selectDomain],
  resumeState => resumeState.errorresumedata,
);