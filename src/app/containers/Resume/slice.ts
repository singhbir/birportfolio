import { createSlice } from '@reduxjs/toolkit';

// The initial state of the Resume container
export const initialState = {
  loading: false,
  skillsdata: [],
  error: null,
  resumedata: [],
  loadresumedata: false,
  errorresumedata: null,
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    loadSkillData(state) {
      state.loading = true;
      state.error = null;
      state.skillsdata = [];
    },
    successSkillData(state, action) {
      state.loading = false;
      state.error = null;
      state.skillsdata = action.payload;
    },
    failSkillData(state, action) {
      state.loading = false;
      state.error = action.payload;
      state.skillsdata = [];
    },
    loadResumeData(state) {
      state.loadresumedata = true;
      state.errorresumedata = null;
      state.resumedata = [];
    },
    successResumeData(state, action) {
      state.loadresumedata = false;
      state.errorresumedata = null;
      state.resumedata = action.payload;
    },
    failResumeData(state, action) {
      state.loadresumedata = false;
      state.errorresumedata = action.payload;
      state.resumedata = [];
    },
  },
});

export const { actions: resumeActions, reducer, name: sliceKey } = resumeSlice;
