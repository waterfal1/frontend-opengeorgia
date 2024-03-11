import { createReducer } from '@reduxjs/toolkit';
import { selectedTransfer } from '../../transfer/actions';

import { selectedExcursion } from '../actions';
import { IExcursion } from '../types/IExcursion';

const initialState: IExcursion = {
  cost: '',
  full_text: '',
  images: [{ img: '' }],
  name: '',
  plan: [],
  text: '',
  directionName: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(selectedExcursion, (state, action) => action.payload)
    .addCase(selectedTransfer, () => initialState);
});
