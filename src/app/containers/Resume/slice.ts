import { createSlice } from '@reduxjs/toolkit';

// The initial state of the Resume container
export const initialState = {
  loading: false,
  skillsdata: [],
  error: null,
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
  },
});

export const { actions: resumeActions, reducer, name: sliceKey } = resumeSlice;
