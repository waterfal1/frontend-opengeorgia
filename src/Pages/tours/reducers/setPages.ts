import { createReducer } from '@reduxjs/toolkit';

import { setPages } from '../actions';
import { IDirection } from '../types/IDirection';

const initialState: IDirection[] = [];

export default createReducer(initialState, (builder) => {
  builder
    .addCase(setPages, (state, action) => action.payload);
});
