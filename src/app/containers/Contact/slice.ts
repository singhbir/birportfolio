import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

// The initial state of the Contact container
export const initialState = {
  loadcontact: false,
  successcontact: [],
  failcontact: null,
};

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    loadContactDetails(state) {
      state.loadcontact = true;
      state.successcontact = [];
      state.failcontact = null;
    },
    successContactDetails(state, action) {
      state.loadcontact = false;
      state.successcontact = action.payload;
      state.failcontact = null;
    },
    failContactDetails(state, action) {
      state.loadcontact = false;
      state.successcontact = [];
      state.failcontact = action.payload;
    },
  },
});

export const {
  actions: contactActions,
  reducer,
  name: sliceKey,
} = contactSlice;
