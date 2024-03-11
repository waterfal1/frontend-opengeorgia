import { createReducer } from '@reduxjs/toolkit';
import { setUser } from '../actions';

import User from '../types/User';

const initialState: User = {
  _id: '',
  email: '',
  activated: false,
  activationLink: '',
  role: '',
};

export default createReducer(initialState, (builder) => {
  builder
    .addCase(setUser, (state, action) => action.payload);
});
