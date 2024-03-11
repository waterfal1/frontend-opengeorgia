import { createReducer } from '@reduxjs/toolkit';

import { selectPage } from '../actions';
import { IMainPagePictureData } from '../types';

const initialState: IMainPagePictureData = {
  image: '',
  alt: '',
  directionName: '',
  description: '',
  category: 0,
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(selectPage, (state, action) => action.payload);
});
