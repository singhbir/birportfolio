import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Blogs container
export const initialState: ContainerState = {};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: blogsActions, reducer, name: sliceKey } = blogsSlice;