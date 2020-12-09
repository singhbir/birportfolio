import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Aboutme container
export const initialState: ContainerState = {};

const aboutmeSlice = createSlice({
  name: 'aboutme',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: aboutmeActions, reducer, name: sliceKey } = aboutmeSlice;