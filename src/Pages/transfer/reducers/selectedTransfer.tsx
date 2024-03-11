import { createReducer } from '@reduxjs/toolkit';
import { selectedExcursion } from '../../tours/actions';

import { selectedTransfer } from '../actions';
import { ITransfer } from '../types';

const initialState: ITransfer = {
  _id: '',
  id: 0,
  cost: '',
  placeName: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(selectedTransfer, (state, action) => action.payload)
    .addCase(selectedExcursion, (state, action) => initialState);
});
